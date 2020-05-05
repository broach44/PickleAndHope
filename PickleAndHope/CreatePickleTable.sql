create table Pickle (
	Id int not null Identity(1,1) Primary Key,
	[Type] varchar(100) not null,
	NumberInStock int not null,
	Price decimal not null,
	Size varchar(20) not null,
)

insert into Pickle (type,NumberInStock,Price,Size)
values 
	('gross',30,2,'Small'),
	('Bread and Butter',30,0.25,'Small'),
	('Spicy',30,4,'Small'),
	('Moonshine',30,6,'Small'),
	('Fried',30,2,'Small')

select * from pickle