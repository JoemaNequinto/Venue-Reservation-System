DROP DATABASE IF EXISTS DATABABES;
CREATE DATABASE DATABABES;

USE DATABABES;

-- DROP TABLE IF EXISTS person;
CREATE TABLE IF NOT EXISTS person (
	PersonId     INT         NOT NULL AUTO_INCREMENT,
	FirstName    VARCHAR(20) NOT NULL,
	MiddleName   VARCHAR(20),
	LastName     VARCHAR(20) NOT NULL,
	Address      VARCHAR(50) NOT NULL,
	EmailAddress VARCHAR(70) NOT NULL,
	ContactNo    VARCHAR(15) NOT NULL,
	DateAdded    DATE        NOT NULL,
	AccountType  VARCHAR(5)  NOT NULL,
	Username     VARCHAR(25) NOT NULL,
	Password     VARCHAR(25) NOT NULL,
	PRIMARY KEY (PersonId)
);

INSERT INTO person (FirstName,MiddleName,LastName,Address,EmailAddress,ContactNo,DateAdded,AccountType,Username,Password) VALUES
('Drew'    , NULL, 'Thirty'     , ''                                 , ''                                                           , ''              , '1997-09-26', 'admin', 'panginoondthirty', '1234'),
('Lei'     , NULL, 'Lalima'     , ''                                 , ''                                                           , ''              , '1997-09-26', 'admin', 'Ilalima'         , 'Ilalima'),
('Rick'    , NULL, 'Dorgon'     , ''                                 , ''                                                           , ''              , '1997-09-26', 'admin', 'rdorgon'         , 'rdorgon'),
('Tony'    , NULL, 'Milliones'  , ''                                 , ''                                                           , ''              , '1997-09-26', 'admin', 'tmilliones'      , 'tmilliones'),
('Carter'  , 'I' , 'Dillon'     , 'P.O. Box 214, 8743 Lectus. Street', 'aliquet.lobortis.nisi@Cumsociisnatoque.com'                 , '01 65 12 70 18', '2017-05-24', 'user' , 'Gareth'          , '6454'),
('Kasimir' , 'T' , 'Oconnor'    , 'P.O. Box 718, 7509 Ante. Av.'     , 'libero.dui.nec@tristiqueaceleifend.com'                     , '02 10 72 31 23', '2016-03-21', 'user' , 'Donovan'         , '5666'),
('Tamara'  , 'N' , 'Chaney'     , '323 Erat. Street'                 , 'Nulla@loremlorem.co.uk'                                     , '03 29 68 73 65', '2016-08-26', 'user' , 'Gannon'          , '9069'),
('Quentin' , 'Q' , 'Fitzpatrick', '564-4040 Eget Ave'                , 'suscipit@vulputate.net'                                     , '02 97 96 62 04', '2016-12-28', 'user' , 'Hamilton'        , '1507'),
('George'  , 'K' , 'Jarvis'     , 'Ap #354-5230 Sed Av.'             , 'dolor.Nulla.semper@faucibusut.ca'                           , '02 30 84 69 12', '2016-03-26', 'user' , 'Acton'           , '8799'),
('Tatiana' , 'B' , 'David'      , 'Ap #334-8024 Ultrices St.'        , 'Etiam@estmollisnon.ca'                                      , '01 67 12 32 53', '2016-11-12', 'user' , 'Ivory'           , '2458'),
('Wade'    , 'A' , 'Hughes'     , 'Ap #629-7610 Mauris Rd.'          , 'fringilla.Donec.feugiat@cubiliaCurae.com'                   , '07 28 52 97 61', '2017-05-02', 'user' , 'Zenia'           , '8897'),
('Haley'   , 'Q' , 'Gray'       , 'P.O. Box 427, 7273 Aliquam Avenue', 'leo.Cras@quisturpis.net'                                    , '07 20 32 23 80', '2016-01-05', 'user' , 'Whilemina'       , '1165'),
('Emmanuel', 'F' , 'Witt'       , 'Ap #107-8383 Lectus. Road'        , 'eros.turpis@vulputate.ca'                                   , '04 36 57 26 77', '2017-06-14', 'user' , 'Macaulay'        , '3015'),
('Leo'     , 'I' , 'Coffey'     , 'Ap #379-8230 Erat. Road'          , 'facilisis.non@sodalesnisi.ca'                               , '03 47 87 41 63', '2017-02-15', 'user' , 'Lacota'          , '1544'),
('Carol'   , 'N' , 'Massey'     , 'P.O. Box 942, 6373 Diam Ave'      , 'Fusce.aliquam@etrutrumeu.ca'                                , '02 51 57 53 20', '2017-07-26', 'user' , 'Lacy'            , '1196'),
('Flynn'   , 'X' , 'Ramsey'     , 'Ap #431-1235 Dictum St.'          , 'Pellentesque.habitant.morbi@fringillaporttitorvulputate.org', '06 79 08 29 26', '2016-06-23', 'user' , 'Alana'           , '9394'),
('Melodie' , 'Z' , 'Wood'       , 'P.O. Box 713, 2215 Dictum Rd.'    , 'ipsum.Suspendisse.non@arcuvel.ca'                           , '05 50 24 66 07', '2016-12-31', 'user' , 'Amethyst'        , '8725'),
('Ryan'    , 'F' , 'Schwartz'   , 'P.O. Box 691, 9689 Ut, Rd.'       , 'non.justo.Proin@nibh.co.uk'                                 , '06 69 18 63 17', '2016-06-04', 'user' , 'Selma'           , '3981'),
('Channing', 'Y' , 'Gallegos'   , 'P.O. Box 733, 7251 Congue, Street', 'Proin@arcueuodio.org'                                       , '03 07 37 48 54', '2015-10-29', 'user' , 'Elizabeth'       , '3447'),
('Zephr'   , 'N' , 'Barton'     , '445-8884 Eget Street'             , 'imperdiet@nonhendrerit.ca'                                  , '02 08 80 95 52', '2016-01-21', 'user' , 'Inez'            , '5078'),
('Maxine'  , 'E' , 'Kemp'       , 'Ap #138-5255 Donec Road'          , 'penatibus.et.magnis@ornarefacilisiseget.ca'                 , '01 13 38 99 71', '2016-01-06', 'user' , 'Keaton'          , '9332'),
('John'    , 'H' , 'Case'       , '8786 Varius Av.'                  , 'purus@orciquislectus.co.uk'                                 , '06 18 68 87 62', '2017-01-11', 'user' , 'Alma'            , '1987'),
('Rebecca' , 'A' , 'Colon'      , '8789 Purus, Ave'                  , 'dolor.Quisque.tincidunt@eueratsemper.net'                   , '03 99 09 48 92', '2017-02-25', 'user' , 'Edward'          , '9362'),
('Armand'  , 'B' , 'Peterson'   , '500-3419 Enim. St.'               , 'justo@Nuncpulvinararcu.co.uk'                               , '01 17 57 66 06', '2016-10-07', 'user' , 'Pandora'         , '4283');

-- DROP TABLE IF EXISTS 'admin';
CREATE TABLE IF NOT EXISTS admin (
	AdminId  INT NOT NULL AUTO_INCREMENT,
	PersonId INT NOT NULL,
	PRIMARY KEY (AdminId),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

-- DROP TABLE IF EXISTS 'user';
CREATE TABLE IF NOT EXISTS user (
	UserId   INT NOT NULL AUTO_INCREMENT,
	PersonId INT NOT NULL,
	PRIMARY KEY (UserId),
	FOREIGN KEY (PersonId) REFERENCES person(PersonId)
);

-- DROP TABLE IF EXISTS 'events';
CREATE TABLE IF NOT EXISTS event (
	EventId        INT          NOT NULL AUTO_INCREMENT,
	EventName      VARCHAR(100)  NOT NULL,
	EventDetails   VARCHAR(100) NOT NULL,
	EventDate      DATE         NOT NULL,
	EventStartTime VARCHAR(10)  NOT NULL,
	EventEndTime   VARCHAR(10)  NOT NULL,
	PRIMARY KEY (EventId)
);

ALTER TABLE event AUTO_INCREMENT = 100;

INSERT INTO event (EventName,EventDetails,EventDate,EventStartTime,EventEndTime) VALUES 
('Advanced Building Skills Conference'                  , 'nec luctus felis purus ac tellus.'                                          , '2017-03-09', '6am' , '9am'),
('Pharmaceutical Market Access Seminar'                 , 'commodo tincidunt nibh. Phasellus nulla. Integer'                           , '2017-01-11', '11am', '5pm'),
('Operators’ Conference'                                , 'Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac', '2017-01-06', '7am' , '5pm'),
('World ADC Training'                                   , 'diam. Duis mi enim, condimentum eget,'                                      , '2015-11-18', '12pm', '5pm'),
('The structure of clinical trials seminar'             , 'ut aliquam'                                                                 , '2017-05-31', '9am' , '4pm'),
('FILTECH 2016'                                         , 'ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in'           , '2016-04-12', '6am' , '1pm'),
('Concert for a Cause'                                  , 'venenatis lacus. Etiam bibendum'                                            , '2016-08-27', '11am', '10pm'),
('GC Convention'                                        , 'Nam interdum'                                                               , '2015-12-24', '8am' , '7pm'),
('Pharma Expo'                                          , 'ridiculus mus. Aenean eget magna. Suspendisse tristique neque'              , '2017-04-11', '4pm' , '10pm'),
('Job Expo'                                             , 'nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer'           , '2017-06-17', '11am', '9pm'),
('CONNECT 2016'                                         , 'at'                                                                         , '2016-11-16', '12pm', '2pm'),
('Hum3 Concert'                                         , 'ornare sagittis felis. Donec'                                               , '2016-10-20', '12pm', '2pm'),
('The 10th National Scientist Forum'                    , 'Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla'     , '2016-01-24', '12pm', '2pm'),
('A Day with the President'                             , 'Sed id risus'                                                               , '2017-06-22', '11am', '10pm'),
('Miss Bulalacao'                                       , 'magnis dis parturient montes, nascetur'                                     , '2017-02-13', '4pm' , '10pm'),
('Ed Sheeran Live in UPLB!'                             , 'cursus purus. Nullam scelerisque neque sed sem egestas blandit.'            , '2017-04-10', '10am', '1pm'),
('Daniel Padilla Live in UPLB!'                         , 'bibendum. Donec felis'                                                      , '2017-03-21', '5pm' , '7pm'),
('7th International Workshop on Advances in Nanoscience', 'adipiscing, enim mi tempor lorem,'                                          , '2016-11-10', '2pm' , '9pm'),
('The Symposium'                                        , 'quis arcu vel quam dignissim pharetra. Nam ac nulla.'                       , '2016-01-10', '11am', '7pm'),
('A Seminar on Big Data Analysis'                       , 'eu, euismod ac, fermentum vel, mauris. Integer sem'                         , '2016-05-28', '2pm' , '10pm'),
('TED TALK 1'                                           , 'habitant morbi tristique senectus et netus'                                 , '2016-12-03', '2pm' , '4pm'),
('TED TALK 2'                                           , 'lorem, luctus ut, pellentesque eget, dictum placerat,'                      , '2016-12-03', '4pm' , '6pm'),
('Cytokines Lecture Series 2016'                        , 'felis ullamcorper viverra. Maecenas iaculis aliquet'                        , '2016-12-09', '8am' , '11am'),
('Cytokines Lecture Series 2016'                        , 'augue, eu tempor erat'                                                      , '2016-12-09', '1pm' , '4pm'),
('IEEE Conference on Cognitive Infocommunications'      , 'nisl sem, consequat nec, mollis vitae,'                                     , '2016-04-14', '10am', '5pm'),
('Green Urbanism'                                       , 'et arcu'                                                                    , '2017-05-23', '8am' , '2pm'),
('Syensaya Exhibit'                                     , 'magna. Sed eu eros.'                                                        , '2016-05-04', '6am' , '2pm'),
('Organic Agriculture Seminar'                          , 'lacus. Mauris'                                                              , '2016-03-11', '11am', '10pm'),
('Streetdance concert'                                  , 'eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis'            , '2017-09-30', '12pm', '6pm'),
('Star in Carillion Quarter Finals'                     , 'et magnis dis parturient'                                                   , '2016-11-09', '7am' , '3pm'),
('PalaCASan 2016: Finals'                               , 'mattis. Cras eget nisi dictum augue'                                        , '2016-11-29', '8am' , '5pm');

-- DROP TABLE IF EXISTS 'locations';
CREATE TABLE IF NOT EXISTS location (
	LocationId INT NOT NULL AUTO_INCREMENT,
	LocationName VARCHAR(50) NOT NULL,
	Capacity INT NOT NULL,
	LocationDetails VARCHAR(100) NOT NULL,
	PRIMARY KEY (LocationId)
);

ALTER TABLE location AUTO_INCREMENT = 1000;

INSERT INTO location (LocationName,Capacity,LocationDetails) VALUES
('DevCom LH'             , 218 , 'dapibus gravida. Aliquam tincidunt, nunc'),
('CEM FH'                , 129 , 'dictum placerat, augue. Sed molestie.'),
('CHE LH'                , 103 , 'suscipit, est ac facilisis facilisis,'),
('Physci LHA'            , 334 , 'leo, in lobortis tellus justo sit'),
('Physci LHB'            , 410 , 'diam. Proin dolor. Nulla semper tellus id nunc'),
('Physci LHC'            , 155 , 'risus. Nunc ac sem ut dolor dapibus gravida. Aliquam'),
('ICS LH3'               , 297 , 'dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis'),
('ICS LH4'               , 157 , 'Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna'),
('ICS MH'                , 470 , 'malesuada vel, convallis in, cursus'),
('IBS LH'                , 141 , 'orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras'),
('CPS LH'                , 423 , 'Nullam vitae diam. Proin dolor. Nulla semper tellus'),
('CPC Audi'              , 413 , 'justo. Proin non massa non ante bibendum ullamcorper. Duis'),
('EE Audi'               , 388 , 'ut dolor dapibus gravida. Aliquam'),
('CEAT LH'               , 246 , 'quis urna. Nunc quis arcu'),
('ASCLH'                 , 398 , 'Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus'),
('ASLH'                  , 317 , 'consectetuer adipiscing elit. Etiam laoreet, libero et tristique'),
('CAS MPH1'              , 200 , 'Integer id magna et ipsum cursus vestibulum. Mauris'),
('CAS MPH2'              , 200 , 'eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.'),
('DL Umali Hall'         , 465 , 'ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam'),
('SEARCA'                , 412 , 'lorem eu metus. In lorem. Donec elementum, lorem'),
('MCBLH'                 , 376 , 'sed sem egestas blandit. Nam nulla magna, malesuada vel,'),
('SU Ballroom Hall'      , 180 , 'Ut tincidunt vehicula risus. Nulla eget metus'),
('Senior’s Social Garden', 500 , 'sem, vitae aliquam eros turpis non enim.'),
('Baker Hall.'           , 1000, 'risus quis diam luctus lobortis. Class aptent taciti sociosqu ad'),
('Grand Stand'           , 1000, 'eu eros. Nam consequat dolor vitae dolor. Donec fringilla.'),
('FT LH'                 , 492 , 'rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac'),
('Agro LH'               , 200 , 'erat eget ipsum. Suspendisse sagittis. Nullam vitae'),
('MPLH'                  , 300 , 'convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit'),
('SU Bldg'               , 100 , 'ante dictum cursus. Nunc mauris'),
('Physci Parking Lot'    , 500 , 'eu, eleifend nec, malesuada ut, sem.'),
('NCAS Audi'             , 300 , 'eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed');