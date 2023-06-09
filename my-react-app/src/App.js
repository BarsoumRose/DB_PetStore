// npm start
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Axios from "axios"; //npm install axios

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

function App() {
  const [aSID, setSID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const addStore = () => {
    Axios.post("http://localhost:3001/createStore", {
      aSID: aSID,
      phoneNumber: phoneNumber,
      address: address,
    }).then(() => {
      console.log("addStore success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteStore = () => {
    Axios.delete(`http://localhost:3001/deleteStore/${aSID}`);
  };

  const [storeList, setstoreList] = useState([]);

  const listStores = () => {
    Axios.get("http://localhost:3001/listStores", {}).then((response) => {
      console.log(response);
      setstoreList(response.data);
    });
  };

  const [worksInSID, setWorksInSID] = useState("");
  const [worksInEID, setWorksInEID] = useState("");

  const addWorksIn = () => {
    Axios.post("http://localhost:3001/createWorksIn", {
      worksInSID: worksInSID,
      worksInEID: worksInEID,
    }).then(() => {
      console.log("addWorksIn success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteWorksIn = () => {
    Axios.delete(
      `http://localhost:3001/deleteWorksIn/${worksInSID}/${worksInEID}`
    );
  };

  const [worksInSID_select, setWorksInSID_select] = useState("");
  const [EmpListinStore, setEmpListInStore] = useState([]);

  const listEmpInStore = () => {
    Axios.post("http://localhost:3001/listEmpInStore", {
      worksInSID_select: worksInSID_select,
    }).then((response) => {
      console.log("listEmpInStore success");
      console.log(response);
      setEmpListInStore(response.data);
    });
  };

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Salary, setSalary] = useState(0);
  const [aEID, setEID] = useState("");

  //update stuff
  const [newSalary, setNewSalary] = useState(0);
  const [newSalaryEID, setNewSalaryEID] = useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:3001/createEmployee", {
      Fname: Fname,
      Lname: Lname,
      Salary: Salary,
      aEID: aEID,
    }).then(() => {
      console.log("addEmployee success");
    });
  };

  const updateEmployee = () => {
    Axios.put("http://localhost:3001/updateEmployeeWage", {
      id: newSalaryEID,
      salary: newSalary,
    }).then(() => {
      console.log("updateEmployee success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteEmployee = () => {
    Axios.delete(`http://localhost:3001/deleteEmployee/${aEID}`);
  };

  const [employeeList, setEmployeeList] = useState([]);

  const listEmployees = () => {
    Axios.get("http://localhost:3001/listEmployees", {}).then((response) => {
      console.log(response);
      setEmployeeList(response.data);
    });
  };

  const [careEID, setCareEID] = useState("");
  const [specialty, setSpecialty] = useState("");

  //update stuff
  const [newSpecialty, setNewSpecialty] = useState("");
  const [newSpecialtyEID, setNewSpecialtyEID] = useState("");

  const addAnimalCare = () => {
    Axios.post("http://localhost:3001/createAnimalCare", {
      careEID: careEID,
      specialty: specialty,
    }).then(() => {
      console.log("addAnimalCare success");
    });
  };

  const updateSpecialty = () => {
    Axios.put("http://localhost:3001/updateSpecialty", {
      id: newSpecialtyEID,
      specialty: newSpecialty,
    }).then(() => {
      console.log("updateSpecialty success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteAnimalCare = () => {
    Axios.delete(`http://localhost:3001/deleteAnimalCare/${careEID}`);
  };

  const [animalCareSpec_select, setAnimalCareSpec_select] = useState("");
  const [specialityList, setSpecialityList] = useState([]);

  const listEmpSpeciality = () => {
    Axios.post("http://localhost:3001/listEmpSpeciality", {
      animalCareSpec_select: animalCareSpec_select,
    }).then((response) => {
      console.log("listEmpSpeciality success");
      console.log(response);
      setSpecialityList(response.data);
    });
  };

  const [retailEID, setRetailEID] = useState("");
  const [partTime, setPartTime] = useState(false);
  //update stuff
  const [newPartTime, setNewPartTime] = useState(false);
  const [newPartTimeEID, setNewPartTimeEID] = useState("");

  const addCashierRetail = () => {
    Axios.post("http://localhost:3001/createCashierRetail", {
      retailEID: retailEID,
      partTime: partTime,
    }).then(() => {
      console.log("addCashierRetail success");
    });
  };

  const updatePartTime = () => {
    Axios.put("http://localhost:3001/updatePartTimeFullTime", {
      id: newPartTimeEID,
      partTime: newPartTime,
    }).then(() => {
      console.log("updatePartTime success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteCashierRetail = () => {
    Axios.delete(`http://localhost:3001/deleteCashierRetail/${retailEID}`);
  };

  const [part_timeList, setPart_timeList] = useState([]);

  const listPart_time = () => {
    Axios.get("http://localhost:3001/listPart_time", {}).then((response) => {
      console.log(response);
      setPart_timeList(response.data);
    });
  };

  const [full_timeList, setFull_timeList] = useState([]);

  const listFull_time = () => {
    Axios.get("http://localhost:3001/listFull_time", {}).then((response) => {
      console.log(response);
      setFull_timeList(response.data);
    });
  };

  const [numInStock, setNumInStock] = useState(0);
  const [shelvingLocation, setShelvingLocation] = useState("");
  const [soldInMID, setSoldInMID] = useState("");
  const [soldInSID, setSoldInSID] = useState("");

  //update stuff for shelving
  const [newShelvingLocation, setNewShelvingLocation] = useState("");
  const [newShelvingLocationMID, setNewShelvingLocationMID] = useState("");
  const [newShelvingLocationSID, setNewShelvingLocationSID] = useState("");
  // update stuff for in Stock
  const [newNumInStock, setNewNumInStock] = useState(0);
  const [newNumInStockMID, setNewNumInStockMID] = useState("");
  const [newNumInStockSID, setNewNumInStockSID] = useState("");

  const addSoldIn = () => {
    Axios.post("http://localhost:3001/createSoldIn", {
      numInStock: numInStock,
      shelvingLocation: shelvingLocation,
      soldInMID: soldInMID,
      soldInSID: soldInSID,
    }).then(() => {
      console.log("addSoldIn success");
    });
  };

  const updateShelvingLocation = () => {
    Axios.put("http://localhost:3001/updateShelvingLocation", {
      mid: newShelvingLocationMID,
      sid: newShelvingLocationSID,
      shelvingLocation: newShelvingLocation,
    }).then(() => {
      console.log("updateShelvingLocation success");
    });
  };

  const updateInStock = () => {
    Axios.put("http://localhost:3001/updateInStock", {
      mid: newNumInStockMID,
      sid: newNumInStockSID,
      inStock: newNumInStock,
    }).then(() => {
      console.log("updateInStock success");
    });
  };

  //TODO: Add delete Stuff
  const deleteSoldIn = () => {
    Axios.delete(
      `http://localhost:3001/deleteSoldIn/${soldInSID}/${soldInMID}`
    );
  };

  // list merch with given SID
  const [SID_merch_select, setSID_merch_select] = useState("");
  const [SID_merch_list, setSID_merch_list] = useState([]);

  const listSID_merch = () => {
    Axios.post("http://localhost:3001/listSID_merch", {
      SID_merch_select: SID_merch_select,
    }).then((response) => {
      console.log("listSID_merch success");
      console.log(response);
      setSID_merch_list(response.data);
    });
  };

  // list SID that sell given MID
  const [MID_store_select, setMID_store_select] = useState("");
  const [MID_store_list, setMID_store_list] = useState([]);

  const listMID_store = () => {
    Axios.post("http://localhost:3001/listMID_store", {
      MID_store_select: MID_store_select,
    }).then((response) => {
      console.log("listMID_store success");
      console.log(response);
      setMID_store_list(response.data);
    });
  };

  const [price, setPrice] = useState(0);
  const [aMID, setMID] = useState("");

  //update stuff for merchandise
  const [newPrice, setNewPrice] = useState(0);
  const [newPriceMID, setNewPriceMID] = useState("");

  const addMerchandise = () => {
    Axios.post("http://localhost:3001/createMerchandise", {
      price: price,
      aMID: aMID,
    }).then(() => {
      console.log("addMerchandise success");
    });
  };

  const updateMerchandisePrice = () => {
    Axios.put("http://localhost:3001/updateMerchandisePrice", {
      id: newPriceMID,
      price: newPrice,
    }).then(() => {
      console.log("updateMerchandisePrice success");
    });
  };

  //TODO: Add delete Stuff
  const deleteMerchandise = () => {
    Axios.delete(`http://localhost:3001/deleteMerchandise/${aMID}`);
  };

  const [merchList, setmerchList] = useState([]);

  const listMerch = () => {
    Axios.get("http://localhost:3001/listMerch", {}).then((response) => {
      console.log(response);
      console.log("listMerch Success");
      setmerchList(response.data);
    });
  };

  const [includesMID, setIncludesMID] = useState("");
  const [includesIID, setIncludesIID] = useState("");
  const [includesAID, setIncludesAID] = useState("");

  const addIncludes = () => {
    Axios.post("http://localhost:3001/createIncludes", {
      includesMID: includesMID,
      includesIID: includesIID,
      includesAID: includesAID,
    }).then(() => {
      console.log("addIncludes success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteIncludes = () => {
    Axios.delete(
      `http://localhost:3001/deleteIncludes/${includesMID}/${includesIID}/${includesAID}`
    );
  };

  const [includeList, setIncludeList] = useState([]);

  const listIncludes = () => {
    Axios.get("http://localhost:3001/listIncludes", {}).then((response) => {
      console.log(response);
      console.log("listIncludes Success");
      setIncludeList(response.data);
    });
  };

  const [hypoallergenic, setHypoallergenic] = useState(false);
  const [maxSize, setMaxSize] = useState(0);
  const [enclosureType, setEnclosureType] = useState("");
  const [animalFood, setAnimalFood] = useState("");
  const [species, setSpecies] = useState("");
  const [lifespan, setLifespan] = useState("");
  const [aAID, setAID] = useState("");
  const [careGuide, setCareGuide] = useState("");

  const addAnimal = () => {
    Axios.post("http://localhost:3001/createAnimal", {
      hypoallergenic: hypoallergenic,
      maxSize: maxSize,
      enclosureType: enclosureType,
      animalFood: animalFood,
      species: species,
      lifespan: lifespan,
      aAID: aAID,
      careGuide: careGuide,
    }).then(() => {
      console.log("addAnimal success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteAnimal = () => {
    Axios.delete(`http://localhost:3001/deleteAnimal/${aAID}`);
  };

  const [animalList, setAnimalList] = useState([]);

  const listAnimals = () => {
    Axios.get("http://localhost:3001/listAnimals", {}).then((response) => {
      console.log(response);
      console.log("listAnimals Success");
      setAnimalList(response.data);
    });
  };

  const [aIID, setIID] = useState("");
  const [brand, setBrand] = useState("");

  const addItem = () => {
    Axios.post("http://localhost:3001/createItem", {
      aIID: aIID,
      brand: brand,
    }).then(() => {
      console.log("addItem success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteItem = () => {
    Axios.delete(`http://localhost:3001/deleteItem/${aIID}`);
  };

  const [itemList, setItemList] = useState([]);

  const listItems = () => {
    Axios.get("http://localhost:3001/listItems", {}).then((response) => {
      console.log(response);
      console.log("listItems Success");
      setItemList(response.data);
    });
  };

  const [foodIID, setFoodIID] = useState("");
  const [foodBrand, setFoodBrand] = useState("");
  const [shelfLife, setShelfLife] = useState("");
  const [needsRefridge, setNeedsRefridge] = useState(false);
  const [isAlive, setIsAlive] = useState(false);

  const addFood = () => {
    Axios.post("http://localhost:3001/createFood", {
      foodIID: foodIID,
      foodBrand: foodBrand,
      shelfLife: shelfLife,
      needsRefridge: needsRefridge,
      isAlive: isAlive,
    }).then(() => {
      console.log("addFood success");
    });
  };

  //TODO: Add delete Stuff
  const deleteFood = () => {
    Axios.delete(`http://localhost:3001/deleteFood/${foodIID}`);
  };

  const [foodList, setFoodList] = useState([]);

  const listFood = () => {
    Axios.get("http://localhost:3001/listFood", {}).then((response) => {
      console.log(response);
      console.log("listFood Success");
      setFoodList(response.data);
    });
  };

  const [enclosureIID, setEnclosureIID] = useState("");
  const [enclosureBrand, setEnclosureBrand] = useState("");
  const [dimensions, setDimensions] = useState("");

  const addEnclosure = () => {
    Axios.post("http://localhost:3001/createEnclosure", {
      enclosureIID: enclosureIID,
      enclosureBrand: enclosureBrand,
      dimensions: dimensions,
    }).then(() => {
      console.log("AddEnclosure success");
    });
  };

  //TODO: Add delete Stuff
  const deleteEnclosure = () => {
    Axios.delete(`http://localhost:3001/deleteEnclosure/${enclosureIID}`);
  };

  const [enclosureList, setEnclosureList] = useState([]);

  const listEnclosure = () => {
    Axios.get("http://localhost:3001/listEnclosure", {}).then((response) => {
      console.log(response);
      console.log("listEnclosure Success");
      setEnclosureList(response.data);
    });
  };

  const [toysIID, setToysIID] = useState("");
  const [toysBrand, setToysBrand] = useState("");
  const [type, setType] = useState("");
  const [chokingHazard, setChokingHazard] = useState(false);

  const addToys = () => {
    Axios.post("http://localhost:3001/createToys", {
      toysIID: toysIID,
      toysBrand: toysBrand,
      type: type,
      chokingHazard: chokingHazard,
    }).then(() => {
      console.log("addToys success");
    });
  };

  //TODO: Add delete Stuff
  const deleteToy = () => {
    Axios.delete(`http://localhost:3001/deleteToy/${toysIID}`);
  };

  const [toyList, setToyList] = useState([]);

  const listToys = () => {
    Axios.get("http://localhost:3001/listToys", {}).then((response) => {
      console.log(response);
      console.log("listToys Success");
      setToyList(response.data);
    });
  };

  const [isForIID, setIsForIID] = useState("");
  const [isForAID, setIsForAID] = useState("");

  const addIsFor = () => {
    Axios.post("http://localhost:3001/createIsFor", {
      isForIID: isForIID,
      isForAID: isForAID,
    }).then(() => {
      console.log("addIsFor success");
    });
  };

  //TODO: Add delete Stuff
  const deleteIsFor = (iid, aid) => {
    Axios.delete(`http://localhost:3001/deleteIsFor/${isForIID}/${isForAID}`);
  };

  //List what items for given AID

  const [isFor_select, set_isFor_select] = useState("");
  const [isFor_list, set_isFor_list] = useState([]);

  const listIsFor = () => {
    Axios.post("http://localhost:3001/listIsFor", {
      isFor_select: isFor_select,
    }).then((response) => {
      console.log("listIsFor success");
      console.log(response);
      set_isFor_list(response.data);
    });
  };

  const [compatibleAID, setCompatibleAID] = useState("");

  const addCompatibleWith = () => {
    Axios.post("http://localhost:3001/createCompatibleWith", {
      compatibleAID: compatibleAID,
    }).then(() => {
      console.log("addCompatibleWith success");
    });
  };

  //TODO: Add delete Stuff
  const deleteCompatibleWith = () => {
    Axios.delete(`http://localhost:3001/deleteCompatibleWith/${compatibleAID}`);
  };

  const [qualifiedAID, setQualifiedAID] = useState("");
  const [AnimalCareID, setAnimalCareID] = useState("");

  const addIsQualified = () => {
    Axios.post("http://localhost:3001/createIsQualified", {
      qualifiedAID: qualifiedAID,
      AnimalCareID: AnimalCareID,
    }).then(() => {
      console.log("addIsQualified success");
    });
  };

  //TODO: Add Delete Stuff
  const deleteIsQualified = () => {
    Axios.delete(
      `http://localhost:3001/deleteIsQualified/${qualifiedAID}/${AnimalCareID}`
    );
  };

  //is who is qualified given AID
  const [isQualified_select, set_isQualified_select] = useState("");
  const [isQualified_list, set_isQualified_list] = useState([]);

  const listIsQualified = () => {
    Axios.post("http://localhost:3001/listIsQualified", {
      isQualified_select: isQualified_select,
    }).then((response) => {
      console.log("listIsQualified success");
      console.log(response);
      set_isQualified_list(response.data);
    });
  };

  /*const displayInfo = () => {
  console.log(SID + phoneNumber+address);
}*/ //a test to show that data is properly stored (it is :) )

  return (
    <div className="App">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Store</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField
              label="SID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setSID(event.target.value);
              }}
            />
            <br></br>
            <TextField
              label="Phone Number"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
            <br></br>
            <TextField
              label="Address"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <br></br>
            <Button variant="outlined" size="small" onClick={addStore}>
              Add Store
            </Button>

            <br></br>
            <br></br>
            <button onClick={deleteStore}> Delete </button>
            <input
              type="text"
              placeholder="SID..."
              onChange={(event) => {
                setSID(event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <Button variant="outlined" size="small" onClick={listStores}>
              List Stores
            </Button>

            {storeList.map((val, key) => {
              return (
                <div>
                  <p>SID: {val.SID}</p>
                  <p>Phone Number: {val.Phone_Number}</p>
                  <p>Address: {val.Address}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Works In</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField
              label="SID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setWorksInSID(event.target.value);
              }}
            />
            <br></br>

            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setWorksInEID(event.target.value);
              }}
            />
            <br></br>

            <Button variant="outlined" size="small" onClick={addWorksIn}>
              Add Works in Relation
            </Button>
            <br></br>
            <br></br>

            <button onClick={deleteWorksIn}> Delete </button>
            <input
              type="text"
              placeholder="SID..."
              onChange={(event) => {
                setWorksInSID(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="EID..."
              onChange={(event) => {
                setWorksInEID(event.target.value);
              }}
            />

            <br></br>
            <br></br>
            <TextField
              label="Store ID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setWorksInSID_select(event.target.value);
              }}
            />

            <br></br>
            <Button variant="outlined" size="small" onClick={listEmpInStore}>
              List Employees in Store
            </Button>

            {EmpListinStore.map((val, key) => {
              return (
                <div>
                  <p>SID: {val.SID}</p>
                  <p>EID: {val.EID}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Employee</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField
              label="First Name"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setFname(event.target.value);
              }}
            />
            <br></br>

            <TextField
              label="Last Name"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setLname(event.target.value);
              }}
            />
            <br></br>
            <TextField
              label="Salary"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setSalary(event.target.value);
              }}
            />
            <br></br>

            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setEID(event.target.value);
              }}
            />
            <br></br>
            <Button variant="outlined" size="small" onClick={addEmployee}>
              Add Employee
            </Button>
            <br></br>
            <br></br>

            <button onClick={updateEmployee}> Update Salary </button>
            <input
              type="text"
              placeholder="EID..."
              onChange={(event) => {
                setNewSalaryEID(event.target.value);
              }}
            />
            <input
              type="number"
              placeolder="2000..."
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
            />

            <br></br>
            <br></br>
            <button onClick={deleteEmployee}> Delete </button>
            <input
              type="text"
              placeholder="EID..."
              onChange={(event) => {
                setEID(event.target.value);
              }}
            />

            <br></br>
            <br></br>
            <Button variant="outlined" size="small" onClick={listEmployees}>
              List Employees
            </Button>

            {employeeList.map((val, key) => {
              return (
                <div>
                  <p>EID: {val.EID}</p>
                  <p>Salary: {val.Salary}</p>
                  <p>First Name: {val.Fname}</p>
                  <p>Last Name: {val.Lname}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Animal Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setCareEID(event.target.value);
              }}
            />
            <br></br>

            <TextField
              label="Speciality"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setSpecialty(event.target.value);
              }}
            />
            <br></br>

            <Button variant="outlined" size="small" onClick={addAnimalCare}>
              Add Animal Care
            </Button>
            <br></br>
            <br></br>

            <button onClick={deleteAnimalCare}> Delete </button>
            <input
              type="text"
              placeholder="EID..."
              onChange={(event) => {
                setCareEID(event.target.value);
              }}
            />
            <br></br>
            <br></br>

            <button onClick={updateSpecialty}> Update Specialty </button>
            <input
              type="text"
              placeholder="EID..."
              onChange={(event) => {
                setNewSpecialtyEID(event.target.value);
              }}
            />
            <input
              type="text"
              placeolder="Specialty"
              onChange={(event) => {
                setNewSpecialty(event.target.value);
              }}
            />

            <br></br>
            <br></br>

            <TextField
              label="Speciality"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setAnimalCareSpec_select(event.target.value);
              }}
            />
            <br></br>
            <Button variant="outlined" size="small" onClick={listEmpSpeciality}>
              List Employees in with Speciality
            </Button>

            {specialityList.map((val, key) => {
              return (
                <div>
                  <p>EID: {val.EID}</p>
                  <p>Speciality: {val.Specialty}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cashier Retail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setRetailEID(event.target.value);
              }}
            />
            <br></br>
            <label>Part Time?</label>
            <input
              type="checkbox"
              onChange={(event) => {
                setPartTime(event.target.checked);
              }}
            />
            <br></br>

            <Button variant="outlined" size="small" onClick={addCashierRetail}>
              Add Cashier/Retail Employee
            </Button>

            <br></br>
            <br></br>

            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setNewPartTimeEID(event.target.value);
              }}
            />
            <br></br>
            <label>Part Time?</label>
            <input
              type="checkbox"
              onChange={(event) => {
                setNewPartTime(event.target.value);
              }}
            />
            <br></br>

            <Button variant="outlined" size="small" onClick={updatePartTime}>
              Update Part Time/Full Time
            </Button>

            <br></br>
            <br></br>

            <TextField
              label="EID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setRetailEID(event.target.value);
              }}
            />
            <br></br>
            <Button
              variant="outlined"
              size="small"
              onClick={deleteCashierRetail}
            >
              Delete
            </Button>

            <br></br>
            <br></br>

            <Button variant="outlined" size="small" onClick={listPart_time}>
              List Part Time Employees
            </Button>

            {part_timeList.map((val, key) => {
              return (
                <div>
                  <p>EID: {val.EID}</p>
                </div>
              );
            })}

            <Button variant="outlined" size="small" onClick={listFull_time}>
              List Full Time Employees
            </Button>

            {full_timeList.map((val, key) => {
              return (
                <div>
                  <p>EID: {val.EID}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sold In</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="soldIn">
              <label># In Stock</label>
              <input
                type="number"
                onChange={(event) => {
                  setNumInStock(event.target.value);
                }}
              />
              <label>Shelving Location</label>
              <input
                type="text"
                onChange={(event) => {
                  setShelvingLocation(event.target.value);
                }}
              />
              <label>MID</label>
              <input
                type="text"
                onChange={(event) => {
                  setSoldInMID(event.target.value);
                }}
              />
              <label>SID</label>
              <input
                type="text"
                onChange={(event) => {
                  setSoldInSID(event.target.value);
                }}
              />
              <button onClick={addSoldIn}>Add Sold In Relation</button>

              <div>
                <button onClick={updateInStock}> Update In Stock Num </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setNewNumInStockMID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="SID..."
                  onChange={(event) => {
                    setNewNumInStockSID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="In Stock..."
                  onChange={(event) => {
                    setNewNumInStock(event.target.value);
                  }}
                />
              </div>

              <div>
                <button onClick={updateShelvingLocation}>
                  {" "}
                  Update Shelving Location{" "}
                </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setNewShelvingLocationMID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="SID..."
                  onChange={(event) => {
                    setNewShelvingLocationSID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Shelving..."
                  onChange={(event) => {
                    setNewShelvingLocation(event.target.value);
                  }}
                />
              </div>

              <div>
                <button onClick={deleteSoldIn}> Delete </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setSoldInMID(event.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="SID..."
                  onChange={(event) => {
                    setSoldInSID(event.target.value);
                  }}
                />
              </div>
            </div>

            <br></br>
            <br></br>

            <TextField
              label="SID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setSID_merch_select(event.target.value);
              }}
            />

            <br></br>
            <Button variant="outlined" size="small" onClick={listSID_merch}>
              List Merchandise in Store
            </Button>

            {SID_merch_list.map((val, key) => {
              return (
                <div>
                  <p>MID: {val.MID}</p>
                  <p>SID: {val.SID}</p>
                  <p>Quantity in Stock: {val.In_Stock}</p>
                  <p>Shelving Location: {val.Shelving_Location}</p>
                </div>
              );
            })}

            <br></br>
            <br></br>

            <TextField
              label="MID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                setMID_store_select(event.target.value);
              }}
            />

            <br></br>
            <Button variant="outlined" size="small" onClick={listMID_store}>
              List Stores with Merchandise
            </Button>

            {MID_store_list.map((val, key) => {
              return (
                <div>
                  <p>MID: {val.MID}</p>
                  <p>SID: {val.SID}</p>
                  <p>Quantity in Stock: {val.In_Stock}</p>
                  <p>Shelving Location: {val.Shelving_Location}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Merchandise</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="merchandise">
              <label>Price</label>
              <input
                type="number"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <label>MID</label>
              <input
                type="text"
                onChange={(event) => {
                  setMID(event.target.value);
                }}
              />
              <button onClick={addMerchandise}>Add Merchandise</button>

              <div>
                <button onClick={updateMerchandisePrice}> Update Price </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setNewPriceMID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeolder="2000..."
                  onChange={(event) => {
                    setNewPrice(event.target.value);
                  }}
                />
              </div>

              <div>
                <button onClick={deleteMerchandise}> Delete </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setMID(event.target.value);
                  }}
                />
              </div>
            </div>

            <br></br>

            <Button variant="outlined" size="small" onClick={listMerch}>
              List All Merchandise
            </Button>

            {merchList.map((val, key) => {
              return (
                <div>
                  <p>MID: {val.MID}</p>
                  <p>Price: {val.Price}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Includes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="includes">
              <label>MID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIncludesMID(event.target.value);
                }}
              />
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIncludesIID(event.target.value);
                }}
              />
              <label>AID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIncludesAID(event.target.value);
                }}
              />
              <button onClick={addIncludes}>Add Includes Relation</button>
              <div>
                <button onClick={deleteIncludes}> Delete </button>
                <input
                  type="text"
                  placeholder="MID..."
                  onChange={(event) => {
                    setIncludesMID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setIncludesIID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="AID..."
                  onChange={(event) => {
                    setIncludesAID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listIncludes}>
              List All Includes Relations
            </Button>

            {includeList.map((val, key) => {
              return (
                <div>
                  <p>MID: {val.MID}</p>
                  <p>IID: {val.IID}</p>
                  <p>AID: {val.AID}</p>
                  <br></br>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Animals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="animals">
              <label>Hypoallergenic</label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setHypoallergenic(event.target.checked);
                }}
              />
              <label>Max Size</label>
              <input
                type="number"
                onChange={(event) => {
                  setMaxSize(event.target.value);
                }}
              />
              <label>Enclosure Type</label>
              <input
                type="text"
                onChange={(event) => {
                  setEnclosureType(event.target.value);
                }}
              />
              <label>Food</label>
              <input
                type="text"
                onChange={(event) => {
                  setAnimalFood(event.target.value);
                }}
              />
              <label>Species</label>
              <input
                type="text"
                onChange={(event) => {
                  setSpecies(event.target.value);
                }}
              />
              <label>Lifespan</label>
              <input
                type="text"
                onChange={(event) => {
                  setLifespan(event.target.value);
                }}
              />
              <label>AID</label>
              <input
                type="text"
                onChange={(event) => {
                  setAID(event.target.value);
                }}
              />
              <label>Care Guide</label>
              <input
                type="text"
                onChange={(event) => {
                  setCareGuide(event.target.value);
                }}
              />
              <button onClick={addAnimal}>Add Animal</button>
              <div>
                <button onClick={deleteAnimal}> Delete </button>
                <input
                  type="text"
                  placeolder="AID..."
                  onChange={(event) => {
                    setAID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listAnimals}>
              List All Animals
            </Button>

            {animalList.map((val, key) => {
              return (
                <div>
                  <p>AID: {val.AID}</p>
                  <p>Hypoallergenic: {val.Hypoallergenic}</p>
                  <p>Max Size: {val.The_Max_Size}</p>
                  <p>Enclosure: {val.Enclosure_Type}</p>
                  <p>Food: {val.Food}</p>
                  <p>Species: {val.Species}</p>
                  <p>Lifespan: {val.Lifespan}</p>
                  <p>Care Guide: {val.Care_Guide}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Items</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="items">
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIID(event.target.value);
                }}
              />
              <label>Brand</label>
              <input
                type="text"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
              <button onClick={addItem}>Add Items</button>
              <div>
                <button onClick={deleteItem}> Delete </button>
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setIID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listItems}>
              List All Items
            </Button>

            {itemList.map((val, key) => {
              return (
                <div>
                  <p>IID: {val.IID}</p>
                  <p>Brand: {val.Brand}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Foods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="food">
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setFoodIID(event.target.value);
                }}
              />
              <label>Brand</label>
              <input
                type="text"
                onChange={(event) => {
                  setFoodBrand(event.target.value);
                }}
              />
              <label>Shelf Life</label>
              <input
                type="text"
                onChange={(event) => {
                  setShelfLife(event.target.value);
                }}
              />
              <label>Needs Refrigeration?</label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setNeedsRefridge(event.target.checked);
                }}
              />
              <label>is Alive?</label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setIsAlive(event.target.checked);
                }}
              />
              <button onClick={addFood}>Add Food</button>
              <div>
                <button onClick={deleteFood}> Delete </button>
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setFoodIID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listFood}>
              List All Food Items
            </Button>

            {foodList.map((val, key) => {
              return (
                <div>
                  <p>IID: {val.IID}</p>
                  <p>Brand: {val.Brand}</p>
                  <p>Shelf Life: {val.Shelf_Life}</p>
                  <p>Refrigeration (0 = no, 1 = yes): {val.Refrigeration}</p>
                  <p>Alive (0 = no, 1 = yes): {val.Alive}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Enclosure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Enclosure</h2>
            <div className="enclosure">
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setEnclosureIID(event.target.value);
                }}
              />
              <label>Brand</label>
              <input
                type="text"
                onChange={(event) => {
                  setEnclosureBrand(event.target.value);
                }}
              />
              <label>dimensions</label>
              <input
                type="text"
                onChange={(event) => {
                  setDimensions(event.target.value);
                }}
              />
              <button onClick={addEnclosure}>Add Enclosure</button>
              <div>
                <button onClick={deleteEnclosure}> Delete </button>
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setEnclosureIID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listEnclosure}>
              List All Enclosures
            </Button>

            {enclosureList.map((val, key) => {
              return (
                <div>
                  <p>IID: {val.IID}</p>
                  <p>Brand: {val.Brand}</p>
                  <p>Dimensions: {val.Dimensions}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Toys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="toys">
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setToysIID(event.target.value);
                }}
              />
              <label>Brand</label>
              <input
                type="text"
                onChange={(event) => {
                  setToysBrand(event.target.value);
                }}
              />
              <label>type</label>
              <input
                type="text"
                onChange={(event) => {
                  setType(event.target.value);
                }}
              />
              <label>is chocking Hazard?</label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setChokingHazard(event.target.checked);
                }}
              />
              <button onClick={addToys}>Add Toys</button>
              <div>
                <button onClick={deleteToy}> Delete </button>
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setToysIID(event.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="outlined" size="small" onClick={listToys}>
              List All Toys
            </Button>

            {toyList.map((val, key) => {
              return (
                <div>
                  <p>IID: {val.IID}</p>
                  <p>Brand: {val.Brand}</p>
                  <p>Type: {val.The_Type}</p>
                  <p>
                    Chocking Hazard (0 = no, 1 = yes): {val.Chocking_Hazard}
                  </p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is For</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Is For</h2>
            <div className="isFor">
              <label>IID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIsForIID(event.target.value);
                }}
              />
              <label>AID</label>
              <input
                type="text"
                onChange={(event) => {
                  setIsForAID(event.target.value);
                }}
              />
              <button onClick={addIsFor}>Add is For Relation</button>

              <div>
                <button onClick={deleteIsFor}> Delete </button>
                <input
                  type="text"
                  placeholder="IID..."
                  onChange={(event) => {
                    setIsForIID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="AID..."
                  onChange={(event) => {
                    setIsForAID(event.target.value);
                  }}
                />
              </div>
            </div>

            <br></br>
            <br></br>

            <TextField
              label="AID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                set_isFor_select(event.target.value);
              }}
            />

            <br></br>
            <Button variant="outlined" size="small" onClick={listIsFor}>
              List items for given AID
            </Button>

            {isFor_list.map((val, key) => {
              return (
                <div>
                  <p>IID: {val.IID}</p>
                  <p>AID: {val.AID}</p>
                  <br></br>
                </div>
              );
            })}

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Compatible With</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Compatible With</h2>
            <div className="compatibleWith">
              <label>AID</label>
              <input
                type="text"
                onChange={(event) => {
                  setCompatibleAID(event.target.value);
                }}
              />
              <button onClick={addCompatibleWith}>
                Add Compatible With Relation
              </button>

              <div>
                <button onClick={deleteCompatibleWith}> Delete </button>
                <input
                  type="text"
                  placeholder="AID..."
                  onChange={(event) => {
                    setCompatibleAID(event.target.value);
                  }}
                />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Qualified</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Is Qualified</h2>
            <div className="isQualified">
              <label>AID</label>
              <input
                type="text"
                onChange={(event) => {
                  setQualifiedAID(event.target.value);
                }}
              />
              <label>AnimalCareEID</label>
              <input
                type="text"
                onChange={(event) => {
                  setAnimalCareID(event.target.value);
                }}
              />
              <button onClick={addIsQualified}>
                Add is Qualified Relation
              </button>

              <div>
                <button onClick={deleteIsQualified}> Delete </button>
                <input
                  type="text"
                  placeholder="AID."
                  onChange={(event) => {
                    setQualifiedAID(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="EID."
                  onChange={(event) => {
                    setAnimalCareID(event.target.value);
                  }}
                />
              </div>
            </div>

            <br></br>
            <br></br>

            <TextField
              label="AID"
              id="textfield"
              defaultValue=""
              size="small"
              onChange={(event) => {
                set_isQualified_select(event.target.value);
              }}
            />

            <br></br>
            <Button variant="outlined" size="small" onClick={listIsQualified}>
              List employees qualified for given AID
            </Button>

            {isQualified_list.map((val, key) => {
              return (
                <div>
                  <p>AID: {val.AID}</p>
                  <p>EID: {val.AnimalCareID}</p>
                  <br></br>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default App;
