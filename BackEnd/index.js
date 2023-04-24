const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors') //npm install cors

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'sqluser',
    host:'localHost',
    password: 'password',
    database: 'pet_store',

});

app.post('/createStore', (req,res) =>{
    const aSID = req.body.aSID;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    db.query("INSERT INTO Store (SID,Phone_Number,Address) VALUES (?,?,?)",
    [aSID,phoneNumber,address],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Store Values Inserted")
        }
    })
})

//TODO: Add delete function for store relation
app.delete('/deleteStore/:id',(req,res) => {
    const aSid = req.params.id;
    db.query("DELETE FROM Store WHERE SID = ?",aSid, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send("store deleted")

        }
    })
}) 



app.post('/createWorksIn', (req,res) =>{
    const worksInSID = req.body.worksInSID;
    const worksInEID = req.body.worksInEID;
    db.query("INSERT INTO Works_In (SID, EID) VALUES (?,?)",[worksInSID,worksInEID],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Works In Values Inserted")
        }
    })
})

//TODO: add delete function for worksIn relation
app.delete('/deleteWorksIn/:sid/:eid',(req,res) => {
    const sid = req.params.sid;
    const eid = req.params.eid;
    db.query("DELETE FROM Works_In WHERE SID = ? AND EID = ?",[sid, eid], (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/createEmployee', (req,res) =>{
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Salary = req.body.Salary;
    const aEID = req.body.aEID;
    db.query("INSERT INTO Employee (EID, Salary, Lname, Fname) VALUES (?,?,?,?)",[aEID,Salary,Lname,Fname],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Employee Values Inserted")
        }
    })
})

//TODO: add update function for Employee Wage
app.put('/updateEmployeeWage',(req,res) => {
    const id = req.body.id;
    const salary = req.body.salary;
    db.query("UPDATE Employee SET salary = ? WHERE EID = ?", 
    [salary,id],(err,result) => {
        if(err) {

            console.log(err)
        } else {
            res.send(result)
        }
    })

})

//TODO: add delete function 
app.delete('/deleteEmployee/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Employee WHERE EID =?",id, (err,result)=> {
        if(err) {

            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 

app.post('/createAnimalCare', (req,res) =>{
    const careEID = req.body.careEID; 
    const specialty = req.body.specialty;
    db.query("INSERT INTO Animal_Care (EID, Specialty) VALUES (?,?)",[careEID,specialty],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Animal Care Values Inserted")
        }
    })
})

//TODO: add update function for animal Care relation Specialty
app.put('/updateSpecialty',(req,res) => {
    const id = req.body.id;
    const specialty = req.body.specialty;
    db.query("UPDATE Animal_Care SET Specialty = ? WHERE EID = ?", [specialty,id],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})

//TODO: add delete function 
app.delete('/deleteAnimalCare/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Animal_Care WHERE EID = ?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createCashierRetail', (req,res) =>{
    const retailEID = req.body.retailEID;
    const partTime = req.body.partTime;
    db.query("INSERT INTO Cashier_Retail (EID, Part_Time_Full_Time) VALUES (?,?)",[retailEID,partTime ? 1:0],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Cashier/Retail Values Inserted")
        }
    })
})


//TODO: add update function for Cashier/Retailrelation Part_Time_Full_Time
app.put('/updatePartTimeFullTime',(req,res) => {
    const id = req.body.id;
    const partTime = req.body.partTime;
    db.query("UPDATE  Cashier_Retail SET  Part_Time_Full_Time = ? WHERE EID = ?", [partTime ? 1:0,id],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})

//TODO: add delete function 
app.delete('/deleteCashierRetail/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Cashier_Retail WHERE EID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 

app.post('/createSoldIn', (req,res) =>{
    const numInStock = req.body.numInStock;
    const shelvingLocation = req.body.shelvingLocation;
    const soldInMID = req.body.soldInMID;
    const soldInSID = req.body.soldInSID;
    db.query("INSERT INTO Sold_In (MID, SID, In_Stock, Shelving_Location) VALUES (?,?,?,?)",[soldInMID,soldInSID,numInStock,shelvingLocation],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Sold In Values Inserted")
        }
    })
})

//TODO: add update function for SoldIn relation In_Stock
app.put('/updateInStock',(req,res) => {
    const mid = req.body.mid;
    const sid = req.body.sid;
    const inStock = req.body.inStock;
    db.query("UPDATE Sold_In SET  In_Stock = ? WHERE MID = ? AND SID = ?", [inStock,mid,sid],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})
//TODO: add update function for SoldIn relation Shelving_Location
app.put('/updateShelvingLocation',(req,res) => {
    const mid = req.body.mid;
    const sid = req.body.sid;
    const shelvingLocation = req.body.shelvingLocation;
    db.query("UPDATE Sold_In SET  Shelving_Location = ? WHERE MID = ? AND SID = ?", [shelvingLocation,mid,sid],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})
//TODO: add delete function 
app.delete('/deleteSoldIn/:sid/:mid',(req,res) => {
    const mid = req.params.mid;
    const sid = req.params.sid;
    db.query("DELETE FROM Sold_In WHERE MID = ? AND SID = ?",[mid, sid], (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/createMerchandise', (req,res) =>{
    const price = req.body.price;
    const aMID = req.body.aMID;
    db.query("INSERT INTO Merchandise (MID, Price) VALUES (?,?)",[aMID,price],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Merchandise Values Inserted")
        }
    })
})

//TODO: add update function for Merchandise price
app.put('/updateMerchandisePrice',(req,res) => {
    const id = req.body.id;
    const price = req.body.price;
    db.query("UPDATE Merchandise SET  Price = ? WHERE MID = ?", [price,id],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})
//TODO: add delete function for 
app.delete('/deleteMerchandise/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Merchandise WHERE MID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createIncludes', (req,res) =>{
    const includesMID = req.body.includesMID;
    const includesIID = req.body.includesIID;
    const includesAID = req.body.includesAID;
    db.query("INSERT INTO Includes (MID, IID, AID) VALUES (?,?,?)",[includesMID,includesIID,includesAID],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Includes Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteIncludes/:mid/:iid/:aid',(req,res) => {
    const mid = req.params.mid;
    const iid = req.params.iid;
    const aid = req.params.aid;
    db.query("DELETE FROM Includes WHERE MID = ? AND IID = ? AND AID = ?",[mid, iid,aid], (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/createAnimal', (req,res) =>{
    const hypoallergenic = req.body.hypoallergenic;
    const maxSize = req.body.maxSize;
    const enclosureType = req.body.enclosureType;
    const species = req.body.species;
    const animalFood = req.body.animalFood;
    const lifespan = req.body.lifespan;
    const aAID = req.body.aAID;
    const careGuide = req.body.careGuide
    db.query("INSERT INTO Animals (AID, Hypoallergenic, The_Max_Size, Enclosure_Type,Food, Species, Lifespan, Care_Guide) VALUES (?,?,?,?,?,?,?,?)", 
    [aAID,hypoallergenic ? 1:0,maxSize,enclosureType,animalFood,species,lifespan,careGuide],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Animal Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteAnimal/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Animals WHERE AID = ?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createItem', (req,res) =>{
    const aIID = req.body.aIID;
    const brand = req.body.brand;
    db.query("INSERT INTO Item (IID, Brand) VALUES (?,?)", [aIID,brand],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Item Values Inserted")
        }
    })
})


//TODO: add delete function 
app.delete('/deleteItem/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Item WHERE IID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createFood', (req,res) =>{
    const foodIID = req.body.foodIID;
    const foodBrand = req.body.foodBrand;
    const shelfLife = req.body.shelfLife;
    const needsRefridge = req.body.needsRefridge;
    const isAlive = req.body.isAlive;
    db.query("INSERT INTO Food (IID, Brand, Shelf_Life, Refrigeration, Alive) VALUES (?,?,?,?,?)",[foodIID,foodBrand,shelfLife,needsRefridge ? 1:0,isAlive ? 1:0],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Food Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteFood/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Food WHERE IID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createEnclosure', (req,res) =>{
    const enclosureIID = req.body.enclosureIID;
    const enclosureBrand = req.body.enclosureBrand
    const dimensions = req.body.dimensions;
    db.query("INSERT INTO Enclosure (IID, Brand, Dimensions) VALUES (?,?,?)",[enclosureIID,enclosureBrand,dimensions],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Enclosure Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteEnclosure/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Enclosure WHERE IID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 

app.post('/createToys', (req,res) =>{
    const toysIID = req.body.toysIID;
    const toysBrand = req.body.toysBrand;
    const type = req.body.type;
    const chokingHazard = req.body.chokingHazard;
    db.query("INSERT INTO Toys (IID, Brand, The_Type, Choking_Hazard) VALUES (?,?,?,?)",[toysIID,toysBrand,type,chokingHazard ? 1:0 ],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Toys Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteToy/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Toys WHERE IID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 

app.post('/createIsFor', (req,res) =>{
    const isForIID = req.body.isForIID;
    const isForAID = req.body.isForAID;
    db.query("INSERT INTO Is_For (IID,AID) VALUES (?,?)",[isForIID,isForAID],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Is For Values Inserted")
        }
    })
})


//TODO: add delete function 
app.delete('/deleteIsFor/:iid/:aid',(req,res) => {
    const iid = req.params.iid;
    const aid = req.params.aid;
    db.query("DELETE FROM Is_For WHERE IID = ? AND AID = ?",[iid, aid], (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send("delete is for sucess")
        }
    })
})

app.post('/createCompatibleWith', (req,res) =>{
    const compatibleAID = req.body.compatibleAID;
    db.query("INSERT INTO Compatible_With (AID) VALUES (?)",[compatibleAID],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Compatible With Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteCompatibleWith/:id',(req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM Compatible_With WHERE AID =?",id, (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}) 


app.post('/createIsQualified', (req,res) =>{
    const qualifiedAID = req.body.qualifiedAID;
    const AnimalCareID = req.body.AnimalCareID;
    db.query("INSERT INTO Is_Qualified (AID, AnimalCareID) VALUES (?,?)",[qualifiedAID,AnimalCareID],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Is Qualified Values Inserted")
        }
    })
})

//TODO: add delete function 
app.delete('/deleteIsQualified/:aid/:eid',(req,res) => {
    const aid = req.params.aid;
    const eid = req.params.eid;
    db.query("DELETE FROM Is_Qualified WHERE AID = ? AND AnimalCareID = ?",[aid, eid], (err,result)=> {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001,() => {
    console.log("yay, your server is running on port 3001");
} )