// npm start
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h2>Store</h2>
      <div className="store">
        <label>SID</label>
        <input type="text"/>
        <label>Phone Number</label>
        <input type="text"/>
        <label>Address</label>
        <input type="text"/>
      </div>
      
      
      <h2>Works In</h2>
      <div className="worksIn">
        <label>SID</label>
        <input type="text"/>
        <label>EID</label>
        <input type="text"/>
      </div>
      
      
      <h2>Employee</h2>
      <div className="employee">
        <label>Fname</label>
        <input type="text"/>
        <label>Lname</label>
        <input type="text"/>
        <label>Salary</label>
        <input type="number"/>
        <label>EID</label>
        <input type="text"/>
      </div>

      
      <h2>Animal Care</h2>
      <div className="animalCare">
        <label>Fname</label>
        <input type="text"/>
        <label>Lname</label>
        <input type="text"/>
        <label>Salary</label>
        <input type="number"/>
        <label>EID</label>
        <input type="text"/>
        <label>Specialty</label>
        <input type="text"/>
      </div>

      
      <h2>Cashier/Retail</h2>
      <div className="cashierRetail">
        <label>Fname</label>
        <input type="text"/>
        <label>Lname</label>
        <input type="text"/>
        <label>Salary</label>
        <input type="number"/>
        <label>EID</label>
        <input type="text"/>
        <label>Part Time?</label>
        <input type="checkbox"/>
      </div>

      <h2>Sold In</h2>
      <div className="soldIn">
        <label># In Stock</label>
        <input type="number"/>
        <label>Shelving Location</label>
        <input type="text"/>
        <label>MID</label>
        <input type="text"/>
        <label>SID</label>
        <input type="text"/>
      </div>

      <h2>Merchandise</h2>
      <div className="merchandise">
        <label>Price</label>
        <input type="number"/>
        <label>MID</label>
        <input type="text"/>
      </div>

      <h2>Includes</h2>
      <div className="includes">
        <label>MID</label>
        <input type="text"/>
        <label>IID</label>
        <input type="text"/>
        <label>AID</label>
        <input type="text"/>
      </div>

      <h2>Animals</h2>
      <div className="animals">
        <label>Hypoallergenic</label>
        <input type="checkbox"/>
        <label>Max Size</label>
        <input type="number"/>
        <label>Enclosure Type</label>
        <input type="text"/>
        <label>Food</label>
        <input type="text"/>
        <label>Species</label>
        <input type="text"/>
        <label>Lifespan</label>
        <input type="text"/>
        <label>AID</label>
        <input type="text"/>
        <label>Care Guide</label>
        <input type="text"/>
      </div>

      <h2>Items</h2>
      <div className="items">
        <label>IID</label>
        <input type="text"/>
        <label>Brand</label>
        <input type="text"/>
      </div>

      <h2>Food</h2>
      <div className="food">
        <label>IID</label>
        <input type="text"/>
        <label>Brand</label>
        <input type="text"/>
        <label>Shelf Life</label>
        <input type="text"/>
        <label>Needs Refrigeration?</label>
        <input type="checkbox"/>
        <label>is Alive?</label>
        <input type="checkbox"/>
      </div>
   
      <h2>Enclosure</h2>
      <div className="enclosure">
        <label>IID</label>
        <input type="text"/>
        <label>Brand</label>
        <input type="text"/>
        <label>dimensions</label>
        <input type="text"/>
      </div>

      <h2>Toys</h2>
      <div className="toys">
        <label>IID</label>
        <input type="text"/>
        <label>Brand</label>
        <input type="text"/>
        <label>type</label>
        <input type="text"/>
        <label>is chocking Hazard?</label>
        <input type="checkbox"/>
      </div>

      <h2>is For</h2>
      <div className="isFor">
        <label>IID</label>
        <input type="text"/>
        <label>AID</label>
        <input type="text"/>
      </div>
      
      <h2>compatible With</h2>
      <div className="compatibleWith">
        <label>AID</label>
        <input type="text"/>
      </div>

      <h2>Is Qualified</h2>
      <div className="isQualified">
        <label>AID</label>
        <input type="text"/>
        <label>AnimalCareID</label>
        <input type="text"/>
      </div>

    </div>
  );
}

export default App;
