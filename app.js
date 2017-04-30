

//JavaScript objects, arrays, for in loop. Stores five different Employee objects in an array.
//Trying out two ways to execute as below
/*
var EmployeeA =['Ankita',21,30000,'Bangalore','KA',560100];
var EmployeeB =['Rahul',22,31000,'Bangalore','KA',560102];
var EmployeeC =['Ria',23,33000,'Bangalore','KA',560103];
var EmployeeD =['Rohit',25,35000,'Bangalore','KA',560104];
var EmployeeE =['Jiya',26,40000,'Bangalore','KA',560105];

for(var epmdetails in (EmployeeA,EmployeeB,EmployeeC,EmployeeD,EmployeeE))
{
    console.log(EmployeeA[epmdetails]);
    console.log(EmployeeB[epmdetails]);
    console.log(EmployeeC[epmdetails]);
    console.log(EmployeeD[epmdetails]);
    console.log(EmployeeE[epmdetails]);
}*/

var employees = [
                    { "Name" : "John",  // First element
                      "Age"  : 23,
                      "Salary": 20000,
                      "City" : "Bangalore", 
                      "State": "KA" ,
                      "Pincode": 560100},
                    { "Name" : "Rohit",  // second element
                      "Age"  : 24,
                      "Salary": 21000,
                      "City" : "Bangalore", 
                      "State": "KA" ,
                      "Pincode": 560101},
                    { "Name" : "Ankita",  // third element
                      "Age"  : 25,
                      "Salary": 21000,
                      "City" : "Bangalore", 
                      "State": "KA" ,
                      "Pincode": 560102},
                    { "Name" : "Diya",  // fourth element
                      "Age"  : 23,
                      "Salary": 20000,
                      "City" : "Bangalore", 
                      "State": "KA" ,
                      "Pincode": 560102},
                    { "Name" : "Ashok",  // fift element
                      "Age"  : 23,
                      "Salary": 20000,
                      "City" : "Bangalore", 
                      "State": "KA" ,
                      "Pincode": 560107},
                ] ;// End  array.                                  


for(var epmdetails in employees)
{
    console.log(employees[epmdetails]);
}
