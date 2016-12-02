DROP USER "project127"@"localhost";

CREATE USER "project127"@"localhost" identified by "password";

GRANT ALL PRIVILEGES ON JobFinder.* to "project127"@"localhost";

DROP DATABASE IF EXISTS `JobFinder`;

CREATE DATABASE IF NOT EXISTS `JobFinder`;

USE `JobFinder`;

CREATE TABLE IF NOT EXISTS `activityLog`(

	`activitytime` timestamp default now(),
	`activity` text
);

CREATE TABLE IF NOT EXISTS `USER`(
	`Userid` int(5) AUTO_INCREMENT,
	`Username` varchar(25),
	`Password` varchar(41),
	`Name` varchar(40),
	
	UNIQUE (Username),
	constraint USER_Userid_pk primary key(Userid)
);


CREATE TABLE IF NOT EXISTS `JOBSEEKER`(
	`Userid` int(5),
	`Age` int(2),
	
	FOREIGN KEY(Userid) REFERENCES USER(Userid)
);

CREATE TABLE IF NOT EXISTS `COMPANY`(
	`Companyid` int(5) AUTO_INCREMENT,
	`Companyname` varchar(41),
	`Details` varchar(25),
	
	PRIMARY KEY(Companyid)
);

CREATE TABLE IF NOT EXISTS `COMPANYREP`(
	`Userid` int(5),
	`Privilege` varchar(100),
	`Companyid` int(5) default NULL,
	`Companyname` varchar(41),
	
	FOREIGN KEY(Userid) REFERENCES USER(Userid) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(Companyid) REFERENCES COMPANY(Companyid) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS `JOB`(
	
	`Jobid` int(5) AUTO_INCREMENT,
	`Industry` varchar(50),
	`Jobtitle` varchar(50),
	`Agerequirement` int(2),
	`JLevel` varchar(25),
	`Salary` varchar(50),
	`Dateposted` datetime default current_timestamp on update current_timestamp,
	`Enddate` datetime,
	`Status` varchar(10),
	`Userid` int(5),
	
	PRIMARY KEY(Jobid),
	FOREIGN KEY(Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE

);


CREATE TABLE IF NOT EXISTS `USERCONTACTNUMBER`(

	`Userid` int(5),
	`ContactNumber` varchar(16),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `USEREMAILADDRESS`(

	`Userid` int(5),
	`Emailaddress` varchar(31),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `APPLIES`(

	`Userid` int(5),
	`Jobid` int(5),
	`Dateapplied` varchar(16),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE,
	FOREIGN KEY(Jobid) REFERENCES JOB(Jobid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `JOBSEEKERSKILLSET`(

	`Userid` int(5),
	`Skillset` varchar(16),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `JOBSEEKERADDRESS`(

	`Userid` int(5),
	`Address` varchar(100),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `COMPANYADDRESS`(

	`Companyid` int(5),
	`Address` varchar(100),
	
	FOREIGN KEY (Companyid) REFERENCES COMPANY(Companyid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `JSEDUCATIONALATTAINMENT`(

	`Userid` int(5),
	`EducationalAttainment` varchar(50),
	
	FOREIGN KEY (Userid) REFERENCES USER(Userid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `JOBSKILLSETREQ`(

	`Jobid` int(5),
	`Skillsetreq` varchar(50),
	
	FOREIGN KEY (Jobid) REFERENCES JOB(Jobid) ON DELETE SET NULL ON UPDATE CASCADE
);


DELIMITER %%
----CREATE USER(JOBSEEKER/COMPANY REP)------
	CREATE PROCEDURE jsInsertLog(in uname varchar(25), in pword varchar(41), in jsName varchar(40), in jsAge int(2))
		BEGIN
			INSERT INTO USER(Username, Password, Name) VALUES(uname, password(pword), jsName);
			
			INSERT INTO JOBSEEKER(Userid, Age) VALUES((select Userid from USER where Username = uname), jsAge);
			
			
			INSERT INTO activityLog(activity) VALUES(concat("Inserted new Job Seeker ",uname));
		END;
		
%% 
	
	CREATE PROCEDURE jsAddAddress(in Usid int(5), in jsAddress varchar(100))
		BEGIN
			INSERT INTO JOBSEEKERADDRESS(Userid, Address) VALUES(Usid, jsAddress);
		END;
%%
	
	CREATE PROCEDURE jsAddEmail(in Usid int(5), in jsEmailAd varchar(31))
		BEGIN
		
			INSERT INTO USEREMAILADDRESS(Userid, Emailaddress) VALUES(Usid, jsEmailAd);
		
		END;

%%
	CREATE PROCEDURE jsAddCNumber(in Usid int(5), in jsContactnumber varchar(16))
		BEGIN
		
			INSERT INTO USERCONTACTNUMBER(Userid, ContactNumber) VALUES(Usid, jsContactnumber);
			
		END;

%%
	CREATE PROCEDURE jsAddSkillSet(in Usid int(5),  in jsSkillset varchar(16))
		BEGIN
		
			INSERT INTO JOBSEEKERSKILLSET(Userid, Skillset) VALUES(Usid, jsSkillset);
	
		END;
		
%%
	CREATE PROCEDURE jsAddEduc(in Usid int(5), in jsEducAtt varchar(50))
		BEGIN
		INSERT INTO JSEDUCATIONALATTAINMENT(Userid, EducationalAttainment) VALUES(Usid, jsEducAtt);
		END;

%%
---DELETE JOBSEEKER----
	CREATE PROCEDURE jsDeleteLog(in Usid int(5))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat("Deleted User ",(select Username from USER where Userid = Usid)));
			
			DELETE FROM USERCONTACTNUMBER where Userid = Usid;
			DELETE FROM USEREMAILADDRESS where Userid = Usid;
			DELETE FROM JOBSEEKER where Userid = Usid;
			DELETE FROM JOBSEEKERSKILLSET where Userid = Usid;
			DELETE FROM JOBSEEKERADDRESS where Userid = Usid;
			DELETE FROM JSEDUCATIONALATTAINMENT where Userid = Usid;
			DELETE FROM USER where Userid = Usid;
		END;
		
%%
----UPDATE JOBSEEKER--------
	CREATE PROCEDURE jsUpdateLog(in Usid int(5), in uname varchar(25), in pword varchar(41), in jsName varchar(40), in jsAge int(2), in jsContactnumber varchar(16), in jsEmailAdd varchar(31), in jsSkillset varchar(16), in jsAddress varchar(100), in jsEducAtt varchar(50))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat(concat(concat(concat(concat(concat("Updated User ", (Select Username from USER where USER.Userid = Usid))," - password from "), (select Password from USER where USER.Userid = Usid)), " to "), password(pword)), concat("\n Contact number ->", concat(jsContactNumber, concat("\n Email Address -> ", concat(jsEmailAdd, concat("\n Age -> ", concat(jsAge, concat("\n Address -> ", concat(jsAddress,"\n"))))))))));
			
			UPDATE USER SET Password = password(pword), Name = jsName where Userid = Usid;
			UPDATE USERCONTACTNUMBER SET ContactNumber = jsContactNumber where Userid = Usid;
			UPDATE USEREMAILADDRESS SET Emailaddress = jsEmailAdd where Userid = Usid;
			UPDATE JOBSEEKER SET Age = jsAge where Userid = Usid;
			UPDATE JOBSEEKERSKILLSET SET Skillset = jsSkillset where Userid = Usid;
			UPDATE JOBSEEKERADDRESS SET Address = jsAddress where Userid = Usid;
			UPDATE JSEDUCATIONALATTAINMENT SET EducationalAttainment = jsEducAtt where Userid = Usid;
		END;
%%
-----------------------------------------------------------
-----------------------------------------------------------
------------COMPANY REP-------------
	CREATE PROCEDURE cInsertLog(in uname varchar(25), in pword varchar(41), in cName varchar(40), in cPrivilege varchar(100), in cCompanyname varchar(41))
		BEGIN
			INSERT INTO USER(Username, Password, Name) VALUES(uname, password(pword), cName);
			INSERT INTO COMPANYREP(Userid, Privilege, Companyid, Companyname) VALUES((select Userid from USER where Username = uname), cPrivilege, (select Companyid from COMPANY where Companyname = cCompanyname), cCompanyname);
			INSERT INTO activityLog(activity) VALUES(concat("Inserted new Company Representative ",uname));
		END;
%%

	CREATE PROCEDURE cAddEmail(in Usid int(5), in jsEmailAd varchar(31))
		BEGIN
		
			INSERT INTO USEREMAILADDRESS(Userid, Emailaddress) VALUES(Usid, jsEmailAd);
		
		END;

%%

	CREATE PROCEDURE cAddCNumber(in Usid int(5), in jsContactnumber varchar(16))
		BEGIN
		
			INSERT INTO USERCONTACTNUMBER(Userid, ContactNumber) VALUES(Usid, jsContactnumber);
			
		END;

%%
----DELETE COMPANY REP -----
	CREATE PROCEDURE cDeleteLog(in Usid int(5))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat("Deleted User ",(select Username from USER where Userid = Usid)));
			DELETE FROM USER where Userid = Usid;
			DELETE FROM USERCONTACTNUMBER where Userid = Usid;
			DELETE FROM USEREMAILADDRESS where Userid = Usid;
			DELETE FROM COMPANYREP where Userid =Usid;
			
		END;
		
%%
-----UPDATE COMPANY REP-------
	CREATE PROCEDURE cUpdateLog(in Usid int(5), in uname varchar(25), in pword varchar(41), in jsName varchar(40), in cPrivilege varchar(100), in cCompanyname varchar(41), in cContactnumber varchar(16), in cEmailAdd varchar(31))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat(concat(concat(concat(concat(concat("Updated User ", (Select Username from USER where USER.Userid = Usid))," - password from "), (select Password from USER where USER.Userid = Usid)), " to "), password(pword)), concat("\n", "HELLO")));
			
			
			UPDATE USER SET Password = password(pword) where Userid = Usid;
			UPDATE USERCONTACTNUMBER SET ContactNumber = jsContactNumber where Userid = Usid;
			UPDATE USEREMAILADDRESS SET ContactNumber = jsContactNumber where Userid = Usid;
			UPDATE COMPANYREP SET Privilege = cPrivilege, Companyid = (select Companyid from COMPANY where Companyname = cCompanyname), Companyname = cCompanyname;
		END;
	
		
%% ---JOB ACTIVITY LOG---

	CREATE PROCEDURE jobInsertLog(in ind varchar(50), in jTitle varchar(50), in areq int(2), in lev varchar(20), in sal varchar(50), in edate datetime, in status varchar(10), in jobSkillReq varchar(16))
		BEGIN
			INSERT INTO JOB(Industry, Jobtitle, Agerequirement, JLevel, Salary, Enddate, Status) VALUES(ind, jTitle, areq, lev, sal, edate, status);
			INSERT INTO JOBSKILLSETREQ(Jobid, Skillsetreq) VALUES((Select Jobid from JOB where Industry = ind and Jobtitle = jTitle), jobSkillReq);
			INSERT INTO activityLog(activity) VALUES(concat("Inserted new Job Titled ",jobTitle));
		END;
		
%%
	
	CREATE PROCEDURE jobDeleteLog(in job_id int(5), in jTitle varchar(50))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat(concat("Deleted Job ***",jobTitle), "***"));
			DELETE FROM JOB where Jobtitle = jTitle and Jobid = job_id;
		END;
		
%%

	CREATE PROCEDURE jobUpdateLog(in job_id int(5), in ind varchar(50), in jTitle varchar(50), in areq int(2), in lev varchar(20), in sal varchar(50), in edate datetime, in status varchar(10), in jobSkillReq varchar(16))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat(concat(concat("Updated ***", (select Jobtitle from JOB where JOB.Jobid = job_id)), "*** Job requirements - Updated Job title: "), jTitle));
			UPDATE JOB SET Industry = ind, Jobtitle = jTitle, Agerequirement = areq, JOB.JLevel = lev, Salary = sal, Enddate = edate, Status = status where JOB.Jobid = job_id;
			UPDATE JOBSKILLSETREQ SET Skillsetreq = jobSkillReq;
		END;
		
%%----COMPANY LOG-----
	CREATE PROCEDURE companyInsertLog(in cname varchar(41), in dtails varchar(25))
		BEGIN
			INSERT INTO COMPANY(Companyname, Details) VALUES(cname, dtails);
			INSERT INTO activityLog(activity) VALUES(concat("Inserted new Company ",cname));
		END;
		
%%
	CREATE PROCEDURE compAddAddress(in cid int(5), in compAddress varchar(100))
		BEGIN
			INSERT INTO COMPANYADDRESS(Companyid, Address) VALUES(cid, compAddress);
		END;
%%


	CREATE PROCEDURE companyDeleteLog(in cid int(5))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat("Deleted Company ",(select Companyname from COMPANYREP where Companyid = cid)));
			DELETE FROM COMPANY where Companyid = cid;
		END;
		
%%

	CREATE PROCEDURE companyUpdateLog(in cid int(5), in cname varchar(41), in dtails varchar(25), in compAddress varchar(100))
		BEGIN
			INSERT INTO activityLog(activity) VALUES(concat(concat(concat(concat(concat(concat(concat(concat(concat("Updated ***", (select Companyname from COMPANY where Companyid = cid)), "*** - Company name: "), (select Companyname from COMPANY where Companyid = cid)), " to "), cname), " || Details: "),(select Details from COMPANY where Companyid = cid)), " to " ), dtails));
			UPDATE COMPANY SET Companyname = cname, Details = dtails where Companyid = cid;
			UPDATE COMPANYADDRESS SET Address = compAddress;
		END;

%%
--------Print Procedure---------
--------Print JOBSEEKER---------
	CREATE PROCEDURE jsPrint(in jsId int(5))
		BEGIN
			SELECT A.Userid, A.Username, A.Password, A.Name, B.ContactNumber, C.Emailaddress, JSA.Address, JSSS.Skillset, JSEA.EducationalAttainment From USER AS A JOIN USERCONTACTNUMBER AS B JOIN USEREMAILADDRESS AS C JOIN JOBSEEKERADDRESS AS JSA JOIN JOBSEEKERSKILLSET AS JSSS JOIN JSEDUCATIONALATTAINMENT AS JSEA ON (A.Userid = jsId) and A.Userid = B.Userid and (A.Userid = C.Userid) and A.Userid = JSA.Userid and A.Userid = JSSS.Userid and A.Userid = JSEA.Userid;
		END;	
%%
	CREATE PROCEDURE jsPrintAll()
		BEGIN
			SELECT A.Userid, A.Username, A.Password, A.Name, B.ContactNumber, C.Emailaddress, JSA.Address, JSSS.Skillset, JSEA.EducationalAttainment From USER AS A JOIN USERCONTACTNUMBER AS B JOIN USEREMAILADDRESS AS C JOIN JOBSEEKERADDRESS AS JSA JOIN JOBSEEKERSKILLSET AS JSSS JOIN JSEDUCATIONALATTAINMENT AS JSEA ON (A.Userid = B.Userid) and (A.Userid = C.Userid) and (A.Userid = JSA.Userid) and (A.Userid = JSSS.Userid) and (A.Userid = JSEA.Userid);
		END;
		
%%
------COMPANY REP-------
	CREATE PROCEDURE compRepPrint(in cid int(5))
		BEGIN
			SELECT A.Userid, A.Username, A.Password, A.Name, B.ContactNumber, C.Emailaddress, CREP.Privilege, CREP.Companyid, CREP.Companyname From USER AS A JOIN USERCONTACTNUMBER AS B JOIN USEREMAILADDRESS AS C JOIN COMPANYREP AS CREP ON (A.Userid = cid) and A.Userid = B.Userid and (A.Userid = C.Userid) and A.Userid = CREP.Userid;
		END;
		
%%
	CREATE PROCEDURE compRepPrintAll()
		BEGIN
			SELECT A.Userid, A.Username, A.Password, A.Name, B.ContactNumber, C.Emailaddress, CREP.Privilege, CREP.Companyid, CREP.Companyname From USER AS A JOIN USERCONTACTNUMBER AS B JOIN USEREMAILADDRESS AS C JOIN COMPANYREP AS CREP ON A.Userid = B.Userid and (A.Userid = C.Userid) and A.Userid = CREP.Userid;
		END;
		
%%
------COMPANY----------
	CREATE PROCEDURE cPrint(in compId int(5))
		BEGIN
			SELECT A.Companyid, A.Companyname, A.Details, B.Address FROM COMPANY AS A JOIN COMPANYADDRESS AS B ON (A.Companyid = compId) and A.Companyid = B.Companyid;
		
		END;
%%		
	CREATE PROCEDURE cPrintAll()
		BEGIN
			SELECT A.Companyid, A.Companyname, A.Details, B.Address FROM COMPANY AS A JOIN COMPANYADDRESS AS B ON A.Companyid = B.Companyid;

		END;
%%

DELIMITER ;
