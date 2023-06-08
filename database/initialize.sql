-- use microsoft sql server


USE master
GO

CREATE DATABASE BANHANG

GO

USE BANHANG

GO


CREATE TABLE DISCs (
    ID INT IDENTITY(0,1) NOT NULL PRIMARY KEY,
    DiscName CHAR(100) not NULL UNIQUE,
    Quantity int not NULL,
    DiscState int not NULL,
    RentingPrice int not NULL,
    ReplacementPrice int not NULL
)

-- DiscName: 0-coming soon, 1-đang kinh doanh, 2-ngừng kinh doanh

GO


INSERT into DISCs VALUES 
('hmm',23,1,5,40),
('rjhg',9,2,5,40),
('rweo',0,0,5,40)

GO


select *
from DISCs