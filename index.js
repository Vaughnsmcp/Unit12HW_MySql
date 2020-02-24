const { prompt } = require("inquirer")
require("console.table")
const DB = require("./DB")
const title = require("asciiart-logo")
start();
function start() {
    const titleText = title({
        name: "EmployeeTracker"
    }).render();
    console.log(titleText)
}
async function loadPrompts() {
    const { prompt } = await prompt([


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
    const employees = await DB.findAllEmployees();
    console.log("\n");
    console.table(employees);
    loadPrompts();
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
