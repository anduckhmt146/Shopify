CREATE DATABASE LTW;

USE LTW;

CREATE TABLE COLLECTION(
	ID INT auto_increment primary KEY,
    NAME VARCHAR(30),
    DESCRIPTION TEXT
);


CREATE TABLE CATEGORIES(
	ID INT auto_increment primary KEY,
    NAME VARCHAR(30),
    GENDER BOOL
);

CREATE TABLE RESOURCE(
	ID VARCHAR(30) primary key,
    NAME VARCHAR(100),
    CONTENT TEXT
);

CREATE TABLE PRODUCT(
	CODE VARCHAR(15) PRIMARY KEY,
    NAME VARCHAR(100),
    COLOR VARCHAR(20),
    SIZE VARCHAR(10),
    MATERIAL VARCHAR(20),
	DESCRIPTION TEXT,
    QUANITY INT,
    SALEOFF FLOAT,
    PRICE INT,
    IMG1 TEXT,
    IMG2 TEXT,
    IMG3 TEXT, 
    IMG4 TEXT,
    CATEGORY_ID INT,
    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORIES(ID),
    CHECK(QUANITY>=0),
    CHECK(PRICE>=0)
);

CREATE TABLE CUSTOMER(
	CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Phone_Number VARCHAR(10),
    PASSWORD VARCHAR(20),
    NAME VARCHAR(20),
    BIRTHDAY DATE,
    AVATAR VARCHAR(255),
    ROLE VARCHAR(15)
);

CREATE TABLE ORDERS(
	OrderID VARCHAR(20) PRIMARY KEY,
    CustomerID INT,
    TOTAL_PRODUCT INT,
    TOTAL_COST FLOAT,
    PAY_METHOD VARCHAR(30),
    NOTE TEXT,
    RECEIVE_PHONE VARCHAR(10),
    RECEIVE_ADDRESS TEXT,
    CHECK (TOTAL_PRODUCT>0),
    CHECK (TOTAL_COST>0),
	FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);




CREATE TABLE IN_COLLECTION(
	ProductCode VARCHAR(15) PRIMARY KEY,
    CollectID INT NOT NULL,
    FOREIGN KEY (ProductCode) REFERENCES PRODUCT(CODE),
    FOREIGN KEY (CollectID) REFERENCES COLLECTION(ID)
);

CREATE TABLE INCLUDE(
	ProductID VARCHAR(15),
    OrderID VARCHAR(20),
    primary key (ProductID, OrderID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(CODE),
	FOREIGN KEY (OrderID) REFERENCES ORDERS(OrderID)
);

CREATE TABLE ADD_TO_CART(
	ProductID VARCHAR(15),
    CustomerID INT,
    primary key (ProductID, CustomerID),
	FOREIGN KEY (ProductID) REFERENCES PRODUCT(CODE),
	FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);

CREATE TABLE COMMENTS(
	CommentID INT auto_increment PRIMARY KEY,
	ProductID VARCHAR(15),
    CustomerID INT,
    RATING INT,
    DATE_TIME TIMESTAMP,
    IMG TEXT,
    VIDEO TEXT,
    CMT TEXT,
    PARENT_ID INT, 
    FOREIGN KEY (PARENT_ID) REFERENCES COMMENTS(CommentID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(CODE),
	FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);

-- DROP DATABASE LTW
