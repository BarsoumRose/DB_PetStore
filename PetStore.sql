CREATE TABLE Store (
    SID VARCHAR(50) PRIMARY KEY,
    Phone_Number VARCHAR(15),
    Address VARCHAR(100)
);

CREATE TABLE Employee (
    EID VARCHAR(50) PRIMARY KEY,
    Salary DECIMAL(10,2),
    Lname VARCHAR(50),
    Fname VARCHAR(50)
);

CREATE TABLE Animal_Care (
    EID VARCHAR(50) PRIMARY KEY REFERENCES Employee(EID),
    Specialty VARCHAR(50)
);

CREATE TABLE Cashier_Retail (
    EID VARCHAR(50) PRIMARY KEY REFERENCES Employee(EID),
    Part_Time_Full_Time VARCHAR(50)
);

CREATE TABLE Works_In (
    SID VARCHAR(50) REFERENCES Store(SID),
    EID VARCHAR(50) REFERENCES Employee(EID),
    PRIMARY KEY (SID, EID)
);

CREATE TABLE Merchandise (
    MID VARCHAR(50) PRIMARY KEY,
    Price DECIMAL(10,2)
);

CREATE TABLE Food (
    IID VARCHAR(50) PRIMARY KEY REFERENCES Item(IID),
    Brand VARCHAR(50),
    Shelf_Life VARCHAR(50),
    Refrigeration BOOLEAN,
    Alive BOOLEAN
);

CREATE TABLE Enclosure (
    IID VARCHAR(50) PRIMARY KEY REFERENCES Item(IID),
    Brand VARCHAR(50),
    Dimensions VARCHAR(50)
);

CREATE TABLE Toys (
    IID VARCHAR(50) PRIMARY KEY REFERENCES Item(IID),
    Brand VARCHAR(50),
    The_Type VARCHAR(50),
    Choking_Hazard BOOLEAN
);

CREATE TABLE Animals (
    AID VARCHAR(50) PRIMARY KEY,
    Hypoallergenic BOOLEAN,
    The_Max_Size DECIMAL(10,2),
    Enclosure_Type VARCHAR(50),
    Food VARCHAR(50),
    Species VARCHAR(50),
    Lifespan VARCHAR(2),
    Care_Guide VARCHAR(500)
);

CREATE TABLE Includes (
    MID VARCHAR(50) REFERENCES Merchandise(MID),
    IID VARCHAR(50) REFERENCES Item(IID),
    AID VARCHAR(50) REFERENCES Animals(AID),
    PRIMARY KEY (MID, IID, AID)
);

CREATE TABLE Sold_In (
    MID VARCHAR(50) REFERENCES Merchandise(MID),
    SID VARCHAR(50) REFERENCES Store(SID),
    In_Stock BOOLEAN,
    Shelving_Location VARCHAR(15),
    PRIMARY KEY (MID, SID)
);

CREATE TABLE Item (
	IID VARCHAR(50),
    Brand VARCHAR(50),
    PRIMARY KEY (IID)
);

CREATE TABLE Is_For (
    IID VARCHAR(50) REFERENCES Item(IID),
    AID VARCHAR(50) REFERENCES Animals(AID),
    PRIMARY KEY (IID, AID)
);

CREATE TABLE Compatible_With (
    AID VARCHAR(50) REFERENCES Animals(AID),
    PRIMARY KEY (AID)
);

CREATE TABLE Is_Qualified (
    AID VARCHAR(50) REFERENCES Animals(AID),
    AnimalCareID VARCHAR(50) REFERENCES Animal_Care(EID),
    PRIMARY KEY (AID, AnimalCareID)
);