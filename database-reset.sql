USE api;

-- Drop the tables if they exist
DROP TABLE IF EXISTS Blog;
DROP TABLE IF EXISTS Person;

-- Recreate the Person table
CREATE TABLE IF NOT EXISTS Person(
    pID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(256) NOT NULL,
    LastName VARCHAR(256)
);

-- Recreate the Blog table with the foreign key constraint
CREATE TABLE IF NOT EXISTS Blog(
    pID INT,
    blog JSON,
    FOREIGN KEY (pID) REFERENCES Person(pID)
);
