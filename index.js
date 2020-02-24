
const inquirer = require("inquirer");
require("console.table");
//const DB = require("employeeTrackerDB");
const title = require("asciiart-logo");
const util = require("util");
start();
function start() {
    const titleText = title({
        name: "EmployeeTracker"
    }).render();
    console.log(titleText)
}
const mysql = require ("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("I am connected")
    connection.query = util.promisify(connection.query);
    loadPrompts();
});

async function loadPrompts() {
    inquirer.prompt([


        {
            type: "list",
            name: "choice",
            message: "What would you like to do, human?",
            choices: [
                {
                    name: "view all carbon based life forms",
                    value: "VIEW_EMPLOYEES",

                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },


            ]




        }
    ])
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "VIEW_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();
        case "VIEW_EMPLOYEES_BY_":
            return viewEmployeesBy();

        case "exit":
            Connection.end();
            break;

            
            default:
      return quit();
  }
  async function viewEmployees() {
      try {        
      
        const employees = await findAllEmployees();
        console.log("\n");
        console.table(employees);
        loadPrompts();
          
      }catch (err) {
          console.log(err);
      

          
      
    

      } 
    }}
  