DROP DATABASE IF EXISTS DATABABES;
CREATE DATABASE DATABABES;

USE DATABABES;

DROP TABLE IF EXISTS person;
CREATE TABLE person (
	PersonId INT NOT NULL AUTO_INCREMENT,
	FirstName VARCHAR(20) NOT NULL,
	MiddleName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20) NOT NULL,
	EmailAddress VARCHAR(70) NOT NULL,
	Username VARCHAR(25) NOT NULL,
	Password VARCHAR(25) NOT NULL,
	Status BOOLEAN NOT NULL,
	PRIMARY KEY (PersonId)
);

LOAD DATA LOCAL INFILE 'csv/person.csv'
INTO TABLE person
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS person_contactno;
CREATE TABLE person_contactno (
	PersonId INT NOT NULL,
	ContactNo VARCHAR(11) NOT NULL,
	PRIMARY KEY (PersonId, ContactNo),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

LOAD DATA LOCAL INFILE 'csv/person_contactno.csv'
INTO TABLE person_contactno
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS person_affiliation;
CREATE TABLE person_affiliation (
	PersonId INT NOT NULL,
	AffiliationName VARCHAR(100) NOT NULL,
	PRIMARY KEY (PersonId, AffiliationName),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

LOAD DATA LOCAL INFILE 'csv/person_affiliation.csv'
INTO TABLE person_affiliation
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS admin;
CREATE TABLE admin (
	AdminId INT NOT NULL AUTO_INCREMENT,
	PersonId INT NOT NULL,
	PRIMARY KEY (AdminId),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

LOAD DATA LOCAL INFILE 'csv/admin.csv'
INTO TABLE admin
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS admin_manages_person;
CREATE TABLE admin_manages_person (
	PersonId INT NOT NULL,
	AdminId INT NOT NULL,
	PRIMARY KEY (PersonId, AdminId),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId),
	FOREIGN KEY (AdminId) REFERENCES admin(AdminId)
);

LOAD DATA LOCAL INFILE 'csv/admin_manages_person.csv'
INTO TABLE admin_manages_person
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
	UserId INT NOT NULL AUTO_INCREMENT,
	PersonId INT NOT NULL,
	PRIMARY KEY (UserId),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

LOAD DATA LOCAL INFILE 'csv/user.csv'
INTO TABLE user
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS venue;
CREATE TABLE venue (
	VenueId INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(50) NOT NULL,
	Capacity INT NOT NULL,
	Details VARCHAR(100) NOT NULL,
	Status VARCHAR(20) NOT NULL,
	Longitude DOUBLE NOT NULL,
	Latitude DOUBLE NOT NULL,
	PRIMARY KEY (VenueId)
);

ALTER TABLE venue AUTO_INCREMENT = 1000;

LOAD DATA LOCAL INFILE 'csv/venue.csv'
INTO TABLE venue
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS event;
CREATE TABLE event (
	EventId INT NOT NULL AUTO_INCREMENT,
	EventName VARCHAR(100) NOT NULL,
	EventDetails VARCHAR(100) NOT NULL,
	EventDate DATE NOT NULL,
	EventStartTime VARCHAR(10) NOT NULL,
	EventEndTime VARCHAR(10) NOT NULL,
	VenueId INT NOT NULL,
	PRIMARY KEY (EventId),
	FOREIGN KEY (VenueId) REFERENCES venue(VenueId)
);

ALTER TABLE event AUTO_INCREMENT = 100;

LOAD DATA LOCAL INFILE 'csv/event.csv'
INTO TABLE event
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS user_manages_event;
CREATE TABLE user_manages_event (
	UserId INT NOT NULL,
	EventId INT NOT NULL,
	PRIMARY KEY (UserId, EventId),
	FOREIGN KEY (UserId) REFERENCES user(UserId),
	FOREIGN KEY (EventId) REFERENCES event(EventId)
);

LOAD DATA LOCAL INFILE 'csv/user_manages_event.csv'
INTO TABLE user_manages_event
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS admin_manages_event;
CREATE TABLE admin_manages_event (
	EventId INT NOT NULL,
	AdminId INT NOT NULL,
	DateEvaluated DATE NOT NULL,
	ApprovalStatus VARCHAR(20) NOT NULL,
	PRIMARY KEY (EventId, AdminId),
	FOREIGN KEY (EventId) REFERENCES event(EventId),
	FOREIGN KEY (AdminId) REFERENCES admin(AdminId)
);

LOAD DATA LOCAL INFILE 'csv/admin_manages_event.csv'
INTO TABLE admin_manages_event
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS admin_manages_venue;
CREATE TABLE admin_manages_venue (
	AdminId INT NOT NULL,
	VenueId INT NOT NULL,
	PRIMARY KEY (AdminId, VenueId),
	FOREIGN KEY (AdminId) REFERENCES admin(AdminId),
	FOREIGN KEY (VenueId) REFERENCES venue(VenueId)
);

LOAD DATA LOCAL INFILE 'csv/admin_manages_venue.csv'
INTO TABLE admin_manages_venue
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;