DROP DATABASE IF EXISTS DATABABES;
CREATE DATABASE DATABABES;

USE DATABABES;

-- DROP TABLE IF EXISTS 'admin';
CREATE TABLE IF NOT EXISTS 'admins' (
	'AdminId' INT NOT NULL AUTO_INCREMENT,
	'Name' VARCHAR(25) NOT NULL,
	'AccountType' VARCHAR(5) NOT NULL,
	'Username' VARCHAR(25) NOT NULL,
	'Password' VARCHAR(25) NOT NULL,
	PRIMARY KEY ('AdminId')
);

INSERT INTO 'admins' ('Name', 'AccountType', 'Username', 'Password') VALUES
('Drew Thirty'   , 'admin', 'panginoondthirty', '1234'),
('Lei Lalima'    , 'admin', 'Ilalima'         , 'Ilalima'),
('Rick Dorgon'   , 'admin', 'rdorgon'         , 'rdorgon'),
('Tony Milliones', 'admin', 'tmilliones'      , 'tmilliones');

-- DROP TABLE IF EXISTS 'user';
CREATE TABLE IF NOT EXISTS 'users' (
	'UserId' INT NOT NULL AUTO_INCREMENT,
	'Name' VARCHAR(25) NOT NULL,
	'Address' VARCHAR(50) NOT NULL,
	'EmailAddress' VARCHAR(70) NOT NULL,
	'ContactNo' VARCHAR(15) NOT NULL,
	'DateAdded' DATE() NOT NULL,
	'Username' VARCHAR(25) NOT NULL,
	'Password' VARCHAR(25) NOT NULL,
	PRIMARY KEY ('UserId')
);

INSERT INTO 'users' ('Name', 'Address', 'EmailAddress', 'ContactNo', 'DateAdded', 'Username', 'Password') VALUES
('Carter I. Dillon'      , 'P.O. Box 214, 8743 Lectus. Street', 'aliquet.lobortis.nisi@Cumsociisnatoque.com'                 , '01 65 12 70 18', '', 'Gareth'   , '6454'),
('Kasimir T. Oconnor'    , 'P.O. Box 718, 7509 Ante. Av.'     , 'libero.dui.nec@tristiqueaceleifend.com'                     , '02 10 72 31 23', '', 'Donovan'  , '5666'),
('Tamara N. Chaney'      , '323 Erat. Street'                 , 'Nulla@loremlorem.co.uk'                                     , '03 29 68 73 65', '', 'Gannon'   , '9069'),
('Quentin Q. Fitzpatrick', '564-4040 Eget Ave'                , 'suscipit@vulputate.net'                                     , '02 97 96 62 04', '', 'Hamilton' , '1507'),
('George K. Jarvis'      , 'Ap #354-5230 Sed Av.'             , 'dolor.Nulla.semper@faucibusut.ca'                           , '02 30 84 69 12', '', 'Acton'    , '8799'),
('Tatiana B. David'      , 'Ap #334-8024 Ultrices St.'        , 'Etiam@estmollisnon.ca'                                      , '01 67 12 32 53', '', 'Ivory'    , '2458'),
('Wade A. Hughes'        , 'Ap #629-7610 Mauris Rd.'          , 'fringilla.Donec.feugiat@cubiliaCurae.com'                   , '07 28 52 97 61', '', 'Zenia'    , '8897'),
('Haley Q. Gray'         , 'P.O. Box 427, 7273 Aliquam Avenue', 'leo.Cras@quisturpis.net'                                    , '07 20 32 23 80', '', 'Whilemina', '1165'),
('Emmanuel F. Witt'      , 'Ap #107-8383 Lectus. Road'        , 'eros.turpis@vulputate.ca'                                   , '04 36 57 26 77', '', 'Macaulay' , '3015'),
('Leo I. Coffey'         , 'Ap #379-8230 Erat. Road'          , 'facilisis.non@sodalesnisi.ca'                               , '03 47 87 41 63', '', 'Lacota'   , '1544'),
('Carol N. Massey'       , 'P.O. Box 942, 6373 Diam Ave'      , 'Fusce.aliquam@etrutrumeu.ca'                                , '02 51 57 53 20', '', 'Lacy'     , '1196'),
('Flynn X. Ramsey'       , 'Ap #431-1235 Dictum St.'          , 'Pellentesque.habitant.morbi@fringillaporttitorvulputate.org', '06 79 08 29 26', '', 'Alana'    , '9394'),
('Melodie Z. Wood'       , 'P.O. Box 713, 2215 Dictum Rd.'    , 'ipsum.Suspendisse.non@arcuvel.ca'                           , '05 50 24 66 07', '', 'Amethyst' , '8725'),
('Ryan F. Schwartz'      , 'P.O. Box 691, 9689 Ut, Rd.'       , 'non.justo.Proin@nibh.co.uk'                                 , '06 69 18 63 17', '', 'Selma'    , '3981'),
('Channing Y. Gallegos'  , 'P.O. Box 733, 7251 Congue, Street', 'Proin@arcueuodio.org'                                       , '03 07 37 48 54', '', 'Elizabeth', '3447'),
('Zephr N. Barton'       , '445-8884 Eget Street'             , 'imperdiet@nonhendrerit.ca'                                  , '02 08 80 95 52', '', 'Inez'     , '5078'),
('Maxine E. Kemp'        , 'Ap #138-5255 Donec Road'          , 'penatibus.et.magnis@ornarefacilisiseget.ca'                 , '01 13 38 99 71', '', 'Keaton'   , '9332'),
('John H. Case'          , '8786 Varius Av.'                  , 'purus@orciquislectus.co.uk'                                 , '06 18 68 87 62', '', 'Alma'     , '1987'),
('Rebecca A. Colon'      , '8789 Purus, Ave'                  , 'dolor.Quisque.tincidunt@eueratsemper.net'                   , '03 99 09 48 92', '', 'Edward'   , '9362'),
('Armand B. Peterson'    , '500-3419 Enim. St.'               , 'justo@Nuncpulvinararcu.co.uk'                               , '01 17 57 66 06', '', 'Pandora'  , '4283');

-- DROP TABLE IF EXISTS 'events';
CREATE TABLE IF NOT EXISTS 'events' (
	'EventId' INT NOT NULL AUTO_INCREMENT,
	'EventName' VARCHAR(50) NOT NULL,
	'EventDetails' VARCHAR(100) NOT NULL,
	'EventDate' DATE() NOT NULL,
	'EventStartTime' VARCHAR(10) NOT NULL,
	'EventEndTime' VARCHAR(10) NOT NULL,
	PRIMARY KEY ('EventId')
);

ALTER TABLE 'events' AUTO_INCREMENT = 100;

INSERT INTO 'events' ('EventName','EventDetails','EventDate','EventStartTime','EventEndTime') VALUES 
('Advanced Building Skills Conference'                  , 'nec luctus felis purus ac tellus.'                                          , '', '6am' , '9am'),
('Pharmaceutical Market Access Seminar'                 , 'commodo tincidunt nibh. Phasellus nulla. Integer'                           , '', '11am', '5pm'),
('Operators’ Conference'                                , 'Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac', '', '7am' , '5pm'),
('World ADC Training'                                   , 'diam. Duis mi enim, condimentum eget,'                                      , '', '12pm', '5pm'),
('The structure of clinical trials seminar'             , 'ut aliquam'                                                                 , '', '9am' , '4pm'),
('FILTECH 2016'                                         , 'ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in'           , '', '6am' , '1pm'),
('Concert for a Cause'                                  , 'venenatis lacus. Etiam bibendum'                                            , '', '11am', '10pm'),
('GC Convention'                                        , 'Nam interdum'                                                               , '', '8am' , '7pm'),
('Pharma Expo'                                          , 'ridiculus mus. Aenean eget magna. Suspendisse tristique neque'              , '', '4pm' , '10pm'),
('Job Expo'                                             , 'nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer'           , '', '11am', '9pm'),
('CONNECT 2016'                                         , 'at'                                                                         , '', '12pm', '2pm'),
('Hum3 Concert'                                         , 'ornare sagittis felis. Donec'                                               , '', '12pm', '2pm'),
('The 10th National Scientist Forum'                    , 'Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla'     , '', '12pm', '2pm'),
('A Day with the President'                             , 'Sed id risus'                                                               , '', '11am', '10pm'),
('Miss Bulalacao'                                       , 'magnis dis parturient montes, nascetur'                                     , '', '4pm' , '10pm'),
('Ed Sheeran Live in UPLB!'                             , 'cursus purus. Nullam scelerisque neque sed sem egestas blandit.'            , '', '10am', '1pm'),
('Daniel Padilla Live in UPLB!'                         , 'bibendum. Donec felis'                                                      , '', '5pm' , '7pm'),
('7th International Workshop on Advances in Nanoscience', 'adipiscing, enim mi tempor lorem,'                                          , '', '2pm' , '9pm'),
('The Symposium'                                        , 'quis arcu vel quam dignissim pharetra. Nam ac nulla.'                       , '', '11am', '7pm'),
('A Seminar on Big Data Analysis'                       , 'eu, euismod ac, fermentum vel, mauris. Integer sem'                         , '', '2pm' , '10pm'),
('TED TALK 1'                                           , 'habitant morbi tristique senectus et netus'                                 , '', '2pm' , '4pm'),
('TED TALK 2'                                           , 'lorem, luctus ut, pellentesque eget, dictum placerat,'                      , '', '4pm' , '6pm'),
('Cytokines Lecture Series 2016'                        , 'felis ullamcorper viverra. Maecenas iaculis aliquet'                        , '', '8am' , '11am'),
('Cytokines Lecture Series 2016'                        , 'augue, eu tempor erat'                                                      , '', '1pm' , '4pm'),
('IEEE Conference on Cognitive Infocommunications'      , 'nisl sem, consequat nec, mollis vitae,'                                     , '', '10am', '5pm'),
('Green Urbanism'                                       , 'et arcu'                                                                    , '', '8am' , '2pm'),
('Syensaya Exhibit'                                     , 'magna. Sed eu eros.'                                                        , '', '6am' , '2pm'),
('Organic Agriculture Seminar'                          , 'lacus. Mauris'                                                              , '', '11am', '10pm'),
('Streetdance concert'                                  , 'eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis'            , '', '12pm', '6pm'),
('Star in Carillion Quarter Finals'                     , 'et magnis dis parturient'                                                   , '', '7am' , '3pm'),
('PalaCASan 2016: Finals'                               , 'mattis. Cras eget nisi dictum augue'                                        , '', '8am' , '5pm');

-- DROP TABLE IF EXISTS 'locations';
CREATE TABLE IF NOT EXISTS 'locations' (
	'LocationId' INT NOT NULL AUTO_INCREMENT,
	'LocationName' VARCHAR(50) NOT NULL,
	'Capacity' INT NOT NULL,
	'LocationDetails' VARCHAR(100) NOT NULL,
	PRIMARY KEY ('LocationId')
);

ALTER TABLE 'locations' AUTO_INCREMENT = 1000;

INSERT INTO 'locations' ('LocationName','Capacity','LocationDetails') VALUES
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