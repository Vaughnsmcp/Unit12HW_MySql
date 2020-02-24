
USE employee_db;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 1000000, 1),
    ('Salesperson', 2000000, 1),
    ('Lead Engineer', 3000000, 2),
    ('Software Engineer', 9000000000000, 2),
    ('Account Manager', 4000000, 3),
    ('Accountant', 35000000, 3),
    ('Legal Team Lead', 6, 4),
    ('Lawyer', 5, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Rick', 'Moranis', 1, NULL),
    ('Diamond', 'Dave', 2, 1),
    ('Peter', 'Sellers', 3, NULL),
    ('Nicolas', 'Cage', 4, 3),
    ('Tom', 'Selleck', 5, NULL),
    ('Alfred', 'Yankovic', 6, 5),
    ('Yoko', 'Ono', 7, NULL),
    ('Amy', 'Sedaris', 8, 7);
    