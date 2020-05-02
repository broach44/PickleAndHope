create table Pickle (
	Id int not null Identity(1,1) Primary Key,
	[Type] varchar(100) not null,
	NumberInStock int not null,
	Price decimal not null,
	Size varchar(20) not null,
)