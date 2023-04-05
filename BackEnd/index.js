const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors') //npm install cors

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: '',//input correct one 
    host:'localHost',
    password: '',//input correct one 
    database: 'pet_store',

});

app.post('/createStore', (req,res) =>{
    const aSID = req.body.aSID;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    db.query("INSERT INTO Store (SID,Phone_Number,Address) VALUES (?,?,?)",[aSID,phoneNumber,address],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Store Values Inserted")
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

app.post('/createCashierRetail', (req,res) =>{
    const retailEID = req.body.retailEID;
    const partTime = req.body.partTime;
    db.query("INSERT INTO Cashier_Retail (EID, Part_Time_Full_Time) VALUES (?,?)",[retailEID,partTime],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Cashier/Retail Values Inserted")
        }
    })
})

app.post('/createSoldIn', (req,res) =>{
    const numInStock = req.body.numInStock;
    const shelvingLocation = req.body.shelvinglocation;
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
    [aAID,hypoallergenic,maxSize,enclosureType,animalFood,species,lifespan,careGuide],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Animal Values Inserted")
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

app.post('/createFood', (req,res) =>{
    const foodIID = req.body.foodIID;
    const foodBrand = req.body.foodBrand;
    const shelfLife = req.body.shelfLife;
    const needsRefridge = req.body.needsRefridge;
    const isAlive = req.body.isAlive;
    db.query("INSERT INTO Food (IID, Brand, Shelf_Life, Refrigeration, Alive) VALUES (?,?,?,?,?)",[foodIID,foodBrand,shelfLife,needsRefridge,isAlive],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Food Values Inserted")
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

app.post('/createToys', (req,res) =>{
    const toysIID = req.body.toysIID;
    const toysBrand = req.body.toysBrand;
    const type = req.body.type;
    const chokingHazard = req.body.chokingHazard;
    db.query("INSERT INTO Toys (IID, Brand, The_Type, Choking_Hazard) VALUES (?,?,?,?)",[toysIID,toysBrand,type,chokingHazard],(err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Toys Values Inserted")
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

app.listen(3001,() => {
    console.log("yay, your server is running on port 3001");
} )