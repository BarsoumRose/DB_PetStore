import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  
  const [SID, setSID, phoneNumber, setPhoneNumber, address, setAddress] = useState("", "", ""); //store
  const [worksInSID, setworksInSID, worksInEID, setworksInEID]= useState("", "");//works in
  const [Fname, setFname, Lname, setLname, Salary, setSalary, EID, setEID] = useState("", "", 0 , ""); //employee
  const [careFname, setcareFname, careLname, setcareLname, careSalary, setCareSalary, careEID, setcareEID, specialty, setSpecialty] = useState("", "", 0 , "", ""); // animal care
  const [retailFname, setRetailFname, retailLname, setRetailLname, retailSalary, setRetailSalary, retailEID, setRetailEID, partTime, setPartTime] = useState("", "", 0 , "",false);//cashier/Retail
  const [numInStock, setNumInStock, shelvingLocation, setShelvingLocation, soldInMID, setSoldInMID, soldInSID, setSoldInSID] = useState( 0 , "", "", "");//sold in
  const [price, setPrice, MID, setMID] = useState(0, "");//merchandise
  const [includesMID, setIncludesMID, includesIID, setIncludesIID, includesAID, setIncludesAID] = useState("", "", "");//includes
  const [hypoallergenic, setHypoallergenic, maxSize, setMaxSize, enclosureType, setEnclosureType, animalFood, setAnimalFood, species, setSpecies,lifespan,setLifespan,AID,setAID,careGuide,setCareGuide] = useState(false, 0 , "", "", "","","","");//animals
  const [IID, setIID, brand, setBrand] = useState("", "");//items
  const [foodIID, setFoodIID, foodBrand, setFoodBrand, shelfLife, setShelfLife, needsRefridge, setNeedsRefridge,isAlive,setIsAlive] = useState("", "", "", false, false);//food
  const [enclosureIID, setEnclosureIID, enclosureBrand, setEnclosureBrand, dimensions, setDimensions] = useState("", "", "");//enclosure
  const [toysIID, setToysIID, toysBrand, setToysBrand, type, setType, chokingHazard, setChokingHazard] = useState("", "", "", false);//toys
  const [isForIID, setIsForIID, isForAID, setIsForAID] = useState("", "");//isfor
  const [compatibleAID, setCompatibleAID] = useState("");//compatible with
  const [qualifiedAID, setQualifiedAID, AnimalCareID, setAnimalCareID] = useState("", "");//is qualified



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
        <button>Add Store</button>
      </div>
      
      
      <h2>Works In</h2>
      <div className="worksIn">
        <label>SID</label>
        <input type="text"
        onChange={(event) => {
          setworksInSID(event.target.value);
        }}
        />
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setworksInEID(event.target.value);
        }}
        />
        <button>Add Works In Relation</button>
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
        <button>Add Employee</button>
      </div>

      
      <h2>Animal Care</h2>
      <div className="animalCare">
        <label>Fname</label>
        <input type="text"
        onChange={(event) => {
          setcareFname(event.target.value);
        }}
        />
        <label>Lname</label>
        <input type="text"
        onChange={(event) => {
          setcareLname(event.target.value);
        }}
        />
        <label>Salary</label>
        <input type="number"
        onChange={(event) => {
          setCareSalary(event.target.value);
        }}
        />
        <label>EID</label>
        <input type="text"
        onChange={(event) => {
          setcareEID(event.target.value);
        }}
        />
        <label>Specialty</label>
        <input type="text"
        onChange={(event) => {
          setSpecialty(event.target.value);
        }}
        />
        <button>Add Animal Care</button>
      </div>

      
      <h2>Cashier/Retail</h2>
      <div className="cashierRetail">
        <label>Fname</label>
        <input type="text"
        onChange={(event) => {
          setRetailFname(event.target.value);
        }}
        />
        <label>Lname</label>
        <input type="text"
        onChange={(event) => {
          setRetailLname(event.target.value);
        }}
        />
        <label>Salary</label>
        <input type="number"
        onChange={(event) => {
          setRetailSalary(event.target.value);
        }}
        />
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
        <button>Add Cashier/Retail Employee</button>
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
        <button>Add Sold In Relation</button>
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
        <button>Add Merchandise</button>
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
          setIncludesIID(event.target.value);
        }}
        />
        <button>Add Includes Relation</button>
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
        <button>Add Animal</button>
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
        <button>Add Items</button>
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
        <button>Add Food</button>
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
        <button>Add Enclosure</button>
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
        <button>Add Toys</button>
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
        <button>Add is For Relation</button>
      </div>
      
      <h2>Compatible With</h2>
      <div className="compatibleWith">
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setCompatibleAID(event.target.value);
        }}
        />
        <button>Add Compatible With Relation</button>
      </div>

      <h2>Is Qualified</h2>
      <div className="isQualified">
        <label>AID</label>
        <input type="text"
        onChange={(event) => {
          setQualifiedAID(event.target.value);
        }}
        />
        <label>AnimalCareID</label>
        <input type="text"
        onChange={(event) => {
          setAnimalCareID(event.target.value);
        }}
        />
        <button>Add is Qualified Relation</button>
      </div>

    </div>
  );
}

export default App;
