
const inquirer = require("inquirer");
require("console.table");
const title = require("asciiart-logo");
const util = require("util");
start();
function start() {
    const titleText = title({
        name: "EmployeeTracker"
    }).render();
    console.log(titleText)
}
const mysql = require("mysql");
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
    const { choice } = await inquirer.prompt([
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
                    name: "View All Roles",
                    value: "VIEW_ALL_ROLES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_ALL_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "quit",
                    value: "exit"
                }

            ]
        }
    ])
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return await viewEmployees();
        case "VIEW_ALL_ROLES":
            return await viewRoles();
        case "VIEW_EMPLOYEES_BY_MANAGER":
            return await viewEmployeesByManager();
        case "VIEW_ALL_DEPARTMENTS":
            return await viewDepartments();
        case "ADD_DEPARTMENT":
            return await addDepartment();
        case "exit":
            connection.end();
            break;
        default:
    }
}
async function viewEmployees() {
    try {
        const employees = await connection.query("SELECT * FROM employee");
        console.log("\n");
        console.table(employees);
        loadPrompts();
    } catch (err) {
        console.log(err);
    }
}
async function viewRoles() {
    try {
        const roles = await connection.query("SELECT * FROM role");
        console.table(roles);
        console.log("\n");
        loadPrompts();
    } catch (err) {
        console.log(err);


    }

}
async function viewDepartments() {
    try {
        const departments = await connection.query("SELECT * FROM department");
        console.table(departments);
        console.log("\n");
        loadPrompts();
    } catch (err) {
        console.log(err);
    }
}
async function addDepartment() {

    try {
        
        const answer = await inquirer.prompt([{
            type: "input",
            name: "department",
            message: "What's the name of your department, human?"
        }])
        await connection.query("INSERT INTO department SET ?", {
            name: answer.department
        })
        await viewDepartments()
    }
    catch (err) {
        console.log(err);
    }
}
