use soumya;
create table emp(eid int not null auto_increment, ename varchar(15) not null, salary int not null, primary key(eid))mytabeid;
show tables;
describe emp;
alter table emp add desn  varchar(20) not null;
insert into emp(ename, salary,desn) values('kiran',10000,'manager');
insert into emp(ename, salary,desn) values('nitya',13000,'salesmanager');
insert into emp(ename, salary,desn) values('somya',14000,'pr');
insert into emp(ename, salary,desn) values('karthika',15000,'accountant');
insert into emp(ename, salary,desn) values('kritika',20000,'executive');
select * from emp;
update emp set salary=7500 where eid=2;

create view vw_emp as select * from emp;
select * from vw_emp;
create view vw_emp1 as select * from emp(salary>10000);