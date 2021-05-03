const Employee = require("./people-Descriptions");
var {Manager, email, gitHub, NA, Engineer, Intern} = aspects();
/* Format for Employee (name, role, ID, email, gitHub, school) */ 

function aspects() {
    Manager = "Manager";
    Engineer = "Engineer";
    Intern = "Intern";
    NA = "";
    gitHub = "gitHub.com/";
    email = "@vandy.com";
   return { Manager, email, gitHub, NA, Engineer, Intern };
}

function EmployeeDefinition (data){
//Managers
 let Manager1 = new Employee("Ricardo Vargas", Manager, 123, "ricardo"+email, gitHub+"rkvorgs", NA);
console.log(Manager1);
 //Engineers
 let Engineer1 = new Employee("Joseph Suvak", Engineer, 321, "Joseph"+email, gitHub+"josephsuvak", NA);
 let Engineer2 = new Employee("Danny Vongkunthong", Engineer, 786, "Danny"+email, gitHub+"dannyv", NA);
 let Engineer3 = new Employee("Walter Sicamone", Engineer, 987, "Walter"+email, gitHub+"SicamoneW", NA);
 let Engineer4 = new Employee("Durrelle Wilhite", Engineer, 456, "Durrelle"+email, gitHub+"Wilhte11", NA);

 //Intern
 let Intern1 = new Employee("Freddy Lucio", Intern, NA, "Freddy"+email, gitHub+"Freddy55", "Vanderbilt University");

 return {Manager1, Engineer1, Engineer2, Engineer3, Engineer4, Intern1}
}

module.exports = EmployeeDefinition();
