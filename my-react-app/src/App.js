import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Axios from 'axios' //npm install axios

function App() {
  
const [aSID, setSID] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");

const addStore = () => {
  Axios.post('http://localhost:3001/createStore',{
    aSID:aSID,
    phoneNumber:phoneNumber,
    address:address
  }).then(()=> {
    console.log("addStore success");
  })
}

const [worksInSID, setWorksInSID] = useState("");
const [worksInEID, setWorksInEID] = useState("");

const addWorksIn = () => {
  Axios.post('http://localhost:3001/createWorksIn',{
    worksInSID:worksInSID,
    worksInEID:worksInEID
  }).then(()=> {
    console.log("addWorksIn success");
  })
}

const [Fname, setFname] = useState("");
const [Lname, setLname] = useState("");
const [Salary, setSalary] = useState(0);
const [aEID, setEID] = useState("");

const addEmployee = () => {
  Axios.post('http://localhost:3001/createEmployee',{
    Fname:Fname,
    Lname:Lname,
    Salary:Salary,
    aEID: aEID
  }).then(()=> {
    console.log("addEmployee success");
  })
}

const [careEID, setCareEID] = useState("");
const [specialty, setSpecialty] = useState("");

const addAnimalCare = () => {
  Axios.post('http://localhost:3001/createAnimalCare',{
    careEID: careEID,
    specialty:specialty
  }).then(()=> {
    console.log("addAnimalCare success");
  })
}

const [retailEID, setRetailEID] = useState("");
const [partTime, setPartTime] = useState(false);

const addCashierRetail = () => {
  Axios.post('http://localhost:3001/createCashierRetail',{
    retailEID:retailEID,
    partTime:partTime
  }).then(()=> {
    console.log("addCashierRetail success");
  })
}

const [numInStock, setNumInStock] = useState(0);
const [shelvingLocation, setShelvingLocation] = useState("");
const [soldInMID, setSoldInMID] = useState("");
const [soldInSID, setSoldInSID] = useState("");

const addSoldIn = () => {
  Axios.post('http://localhost:3001/createSoldIn',{
    numInStock:numInStock,
    shelvingLocation:shelvingLocation,
    soldInMID:soldInMID,
    soldInSID:soldInSID
  }).then(()=> {
    console.log("addSoldIn success");
  })
}

const [price, setPrice] = useState(0);
const [aMID, setMID] = useState("");

const addMerchandise = () => {
  Axios.post('http://localhost:3001/createMerchandise',{
    price:price,
    aMID:aMID
  }).then(()=> {
    console.log("addMerchandise success");
  })
}

const [includesMID, setIncludesMID] = useState("");
const [includesIID, setIncludesIID] = useState("");
const [includesAID, setIncludesAID] = useState("");

const addIncludes = () => {
  Axios.post('http://localhost:3001/createIncludes',{
    includesMID:includesMID,
    includesIID:includesIID,
    includesAID:includesAID
  }).then(()=> {
    console.log("addIncludes success");
  })
}

const [hypoallergenic, setHypoallergenic] = useState(false);
const [maxSize, setMaxSize] = useState(0);
const [enclosureType, setEnclosureType] = useState("");
const [animalFood, setAnimalFood] = useState("");
const [species, setSpecies] = useState("");
const [lifespan, setLifespan] = useState("");
const [aAID, setAID] = useState("");
const [careGuide, setCareGuide] = useState("");

const addAnimal = () => {
  Axios.post('http://localhost:3001/createAnimal',{
    hypoallergenic:hypoallergenic,
    maxSize:maxSize,
    enclosureType:enclosureType,
    animalFood:animalFood,
    species:species,
    lifespan:lifespan,
    aAID:aAID,
    careGuide:careGuide
  }).then(()=> {
    console.log("addAnimal success");
  })
}

const [aIID, setIID] = useState("");
const [brand, setBrand] = useState("");

const addItem = () => {
  Axios.post('http://localhost:3001/createItem',{
    aIID:aIID,
    brand:brand
  }).then(()=> {
    console.log("addItem success");
  })
}

const [foodIID, setFoodIID] = useState("");
const [foodBrand, setFoodBrand] = useState("");
const [shelfLife, setShelfLife] = useState("");
const [needsRefridge, setNeedsRefridge] = useState(false);
const [isAlive, setIsAlive] = useState(false);

const addFood = () => {
  Axios.post('http://localhost:3001/createFood',{
    foodIID:foodIID,
    foodBrand:foodBrand,
    shelfLife:shelfLife,
    needsRefridge:needsRefridge,
    isAlive:isAlive
  }).then(()=> {
    console.log("addFood success");
  })
}

const [enclosureIID, setEnclosureIID] = useState("");
const [enclosureBrand, setEnclosureBrand] = useState("");
const [dimensions, setDimensions] = useState("");

const addEnclosure = () => {
  Axios.post('http://localhost:3001/createEnclosure',{
    enclosureIID:enclosureIID,
    enclosureBrand:enclosureBrand,
    dimensions:dimensions
  }).then(()=> {
    console.log("AddEnclosure success");
  })
}

const [toysIID, setToysIID] = useState("");
const [toysBrand, setToysBrand] = useState("");
const [type, setType] = useState("");
const [chokingHazard, setChokingHazard] = useState(false);

const addToys = () => {
  Axios.post('http://localhost:3001/createToys',{
    toysIID:toysIID,
    toysBrand:toysBrand,
    type:type,
    chokingHazard:chokingHazard
  }).then(()=> {
    console.log("addToys success");
  })
}

const [isForIID, setIsForIID] = useState("");
const [isForAID, setIsForAID] = useState("");

const addIsFor = () => {
  Axios.post('http://localhost:3001/createIsFor',{
    isForIID:isForIID,
    isForAID:isForAID
  }).then(()=> {
    console.log("addIsFor success");
  })
}

const [compatibleAID, setCompatibleAID] = useState("");

const addCompatibleWith = () => {
  Axios.post('http://localhost:3001/createCompatibleWith',{
    compatibleAID:compatibleAID
  }).then(()=> {
    console.log("addCompatibleWith success");
  })
}

const [qualifiedAID, setQualifiedAID] = useState("");
const [AnimalCareID, setAnimalCareID] = useState("");

const addIsQualified = () => {
  Axios.post('http://localhost:3001/createIsQualified',{
    qualifiedAID:qualifiedAID,
    AnimalCareID:AnimalCareID
  }).then(()=> {
    console.log("addIsQualified success");
  })
}

/*const displayInfo = () => {
  console.log(SID + phoneNumber+address);
}*/ //a test to show that data is properly stored (it is :) )


return (
    <div className="App">
      
      <h2>Store</h2>
      <div className="store">
        <label>SID</label>
        <input type="text"
        onChange={(event) => {
          setSID(event.target.value);
        }}/>
        <label>Phone Number</label>
        <input type="text"
        onChange={(event) => {
          setPhoneNumber(event.target.value);
        }}
        />
        <label>Address</label>
        <input type="text"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        />
        <button onClick={addStore}>Add Store</button>
      </div>
      
      
      <h2>Works In</h2>
      <div className="worksIn">
        <label>SID</label>
        <input type="text"
        onChange={(event) => {
          setWorksInSID(event.target.value);
        }}
        />
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setWorksInEID(event.target.value);
        }}
        />
        <button onClick={addWorksIn}>Add Works In Relation</button>
      </div>
      
      
      <h2>Employee</h2>
      <div className="employee">
        <label>Fname</label>
        <input type="text"
        onChange={(event) => {
          setFname(event.target.value);
        }}
        />
        <label>Lname</label>
        <input type="text"
        onChange={(event) => {
          setLname(event.target.value);
        }}
        />
        <label>Salary</label>
        <input type="number"
        onChange={(event) => {
          setSalary(event.target.value);
        }}
        />
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setEID(event.target.value);
        }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      
      <h2>Animal Care</h2>
      <div className="animalCare">
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setCareEID(event.target.value);
        }}
        />
        <label>Specialty</label>
        <input type="text"
        onChange={(event) => {
          setSpecialty(event.target.value);
        }}
        />
        <button onClick={addAnimalCare}>Add Animal Care</button>
      </div>

      
      <h2>Cashier/Retail</h2>
      <div className="cashierRetail">
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setRetailEID(event.target.value);
        }}
        />
        <label>Part Time?</label>
        <input type="checkbox"
        onChange={(event) => {
          setPartTime(event.target.value);
        }}
        />
        <button onClick={addCashierRetail}>Add Cashier/Retail Employee</button>
      </div>

      <h2>Sold In</h2>
      <div className="soldIn">
        <label># In Stock</label>
        <input type="number"
        onChange={(event) => {
          setNumInStock(event.target.value);
        }}
        />
        <label>Shelving Location</label>
        <input type="text"
        onChange={(event) => {
          setShelvingLocation(event.target.value);
        }}
        />
        <label>MID</label>
        <input type="text"
        onChange={(event) => {
          setSoldInMID(event.target.value);
        }}
        />
        <label>SID</label>
        <input type="text"
        onChange={(event) => {
          setSoldInSID(event.target.value);
        }}
        />
        <button onClick={addSoldIn}>Add Sold In Relation</button>
      </div>

      <h2>Merchandise</h2>
      <div className="merchandise">
        <label>Price</label>
        <input type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
        />
        <label>MID</label>
        <input type="text"
        onChange={(event) => {
          setMID(event.target.value);
        }}
        />
        <button onClick={addMerchandise}>Add Merchandise</button>
      </div>

      <h2>Includes</h2>
      <div className="includes">
        <label>MID</label>
        <input type="text"
        onChange={(event) => {
          setIncludesMID(event.target.value);
        }}
        />
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setIncludesIID(event.target.value);
        }}
        />
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setIncludesAID(event.target.value);
        }}
        />
        <button onClick={addIncludes}>Add Includes Relation</button>
      </div>

      <h2>Animals</h2>
      <div className="animals">
        <label>Hypoallergenic</label>
        <input type="checkbox"
        onChange={(event) => {
          setHypoallergenic(event.target.value);
        }}
        />
        <label>Max Size</label>
        <input type="number"
        onChange={(event) => {
          setMaxSize(event.target.value);
        }}
        />
        <label>Enclosure Type</label>
        <input type="text"
        onChange={(event) => {
          setEnclosureType(event.target.value);
        }}
        />
        <label>Food</label>
        <input type="text"
        onChange={(event) => {
          setAnimalFood(event.target.value);
        }}
        />
        <label>Species</label>
        <input type="text"
        onChange={(event) => {
          setSpecies(event.target.value);
        }}
        />
        <label>Lifespan</label>
        <input type="text"
        onChange={(event) => {
          setLifespan(event.target.value);
        }}
        />
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setAID(event.target.value);
        }}
        />
        <label>Care Guide</label>
        <input type="text"
        onChange={(event) => {
          setCareGuide(event.target.value);
        }}
        />
        <button onClick={addAnimal}>Add Animal</button>
      </div>

      <h2>Items</h2>
      <div className="items">
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setIID(event.target.value);
        }}
        />
        <label>Brand</label>
        <input type="text"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
        />
        <button onClick={addItem}>Add Items</button>
      </div>

      <h2>Food</h2>
      <div className="food">
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setFoodIID(event.target.value);
        }}
        />
        <label>Brand</label>
        <input type="text"
        onChange={(event) => {
          setFoodBrand(event.target.value);
        }}
        />
        <label>Shelf Life</label>
        <input type="text"
        onChange={(event) => {
          setShelfLife(event.target.value);
        }}
        />
        <label>Needs Refrigeration?</label>
        <input type="checkbox"
        onChange={(event) => {
          setNeedsRefridge(event.target.value);
        }}
        />
        <label>is Alive?</label>
        <input type="checkbox"
        onChange={(event) => {
          setIsAlive(event.target.value);
        }}
        />
        <button onClick={addFood}>Add Food</button>
      </div>
   
      <h2>Enclosure</h2>
      <div className="enclosure">
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setEnclosureIID(event.target.value);
        }}
        />
        <label>Brand</label>
        <input type="text"
        onChange={(event) => {
          setEnclosureBrand(event.target.value);
        }}
        />
        <label>dimensions</label>
        <input type="text"
        onChange={(event) => {
          setDimensions(event.target.value);
        }}
        />
        <button onClick={addEnclosure}>Add Enclosure</button>
      </div>

      <h2>Toys</h2>
      <div className="toys">
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setToysIID(event.target.value);
        }}
        />
        <label>Brand</label>
        <input type="text"
        onChange={(event) => {
          setToysBrand(event.target.value);
        }}
        />
        <label>type</label>
        <input type="text"
        onChange={(event) => {
          setType(event.target.value);
        }}
        />
        <label>is chocking Hazard?</label>
        <input type="checkbox"
        onChange={(event) => {
          setChokingHazard(event.target.value);
        }}
        />
        <button onClick={addToys}>Add Toys</button>
      </div>

      <h2>Is For</h2>
      <div className="isFor">
        <label>IID</label>
        <input type="text"
        onChange={(event) => {
          setIsForIID(event.target.value);
        }}
        />
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setIsForAID(event.target.value);
        }}
        />
        <button onClick={addIsFor}>Add is For Relation</button>
      </div>
      
      <h2>Compatible With</h2>
      <div className="compatibleWith">
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setCompatibleAID(event.target.value);
        }}
        />
        <button onClick={addCompatibleWith}>Add Compatible With Relation</button>
      </div>

      <h2>Is Qualified</h2>
      <div className="isQualified">
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setQualifiedAID(event.target.value);
        }}
        />
        <label>AnimalCareEID</label>
        <input type="text"
        onChange={(event) => {
          setAnimalCareID(event.target.value);
        }}
        />
        <button onClick={addIsQualified}>Add is Qualified Relation</button>
      </div>

    </div>
  );
}

export default App;
