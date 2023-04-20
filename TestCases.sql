-- Store
INSERT INTO Store (SID, Phone_number, Address)
VALUES ('01', '1112223333', '100 WPI');

INSERT INTO Store (SID, Phone_number, Address)
VALUES ('02', '2223334444', '100 WPI');

INSERT INTO Store (SID, Phone_number, Address)
VALUES ('03', '3334445555', '12 Pleasant St ');

SELECT * FROM Store;

DELETE FROM Store WHERE SID = '01';

UPDATE Store 
SET Address = '200 WPI'
WHERE SID = '02';


-- Employee
INSERT INTO Employee (EID, Salary, Lname, Fname)
VALUES ('01', '30000', 'Smith', 'John');

INSERT INTO Employee (EID, Salary, Lname, Fname)
VALUES ('02', '80000', 'Oconnor', 'Stephanie');

INSERT INTO Employee (EID, Salary, Lname, Fname)
VALUES ('03', '80000', 'Mclean', 'Jared');

INSERT INTO Employee (EID, Salary, Lname, Fname)
VALUES ('04', '80000', 'Gray', 'Marissa');

SELECT Lname, Fname FROM Employee
WHERE Salary = '80000';

DELETE FROM Employee WHERE EID  = '01'; 

UPDATE Employee
SET Salary = '95000'
WHERE EID = '02';


-- Animal_Care
INSERT INTO Animal_Care (EID, Specialty)
VALUES ('02', 'Birds, Fish');

INSERT INTO Animal_Care (EID, Specialty)
VALUES ('03', 'Reptiles');

INSERT INTO Animal_Care (EID, Specialty)
VALUES ('04', 'Reptiles');

SELECT EID FROM Animal_Care
WHERE Specialty = 'Reptiles';

DELETE FROM Animal_Care WHERE EID = '03';

UPDATE Animal_Care
SET Specialty = 'Reptiles, Dogs'
WHERE EID = '04';


-- Cashier Retail
INSERT INTO Cashier_Retail (EID, Part_Time_Full_Time)
VALUES ('02', 'Part Time');

INSERT INTO Cashier_Retail (EID, Part_Time_Full_Time)
VALUES ('03', 'Part Time');

INSERT INTO Cashier_Retail (EID, Part_Time_Full_Time)
VALUES ('04', 'Full Time');

SELECT EID FROM Cashier_Retail
WHERE Part_Time_Full_Time = 'Part Time';

DELETE FROM Cashier_Retail WHERE EID = '03';

UPDATE Cashier_Retail
SET Part_Time_Full_Time = 'Full Time'
WHERE EID = '02';


-- Works_In
INSERT INTO Works_In (SID, EID)
VALUES ('02', '02');

INSERT INTO Works_In (SID, EID)
VALUES ('02', '03');

INSERT INTO Works_In (SID, EID)
VALUES ('03', '04');

SELECT EID FROM Works_In
WHERE SID = '02';

DELETE FROM Works_In WHERE SID = '03'; 
-- CANT DELETE AN EMPLOYEE 

-- CHECK CONSTRAINTS
UPDATE Works_In
SET SID = '03'
WHERE EID = '02';










