const Inquirer = require("inquirer");
const FileSystem = require("fs");
const Jest = require("jest");
const htmlCreation = require("./develop/util/htmlCreation");

/* Create index.html code function generator*/
function writeToFile(fileName, data) {
    // Prompt the user
    Inquirer
        .prompt([
            {
                type: 'input',
                name: 'Employee',
                message: 'What do you want to name the file?'
            },
        ])
        .then(function (data) {
            console.log(data.Employee);
            const filename =
                data.Employee
                    .toLowerCase()
                    .split(' ')
                    .join('') + '.html';

            FileSystem.writeFile(filename, htmlCreation(data), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log('The HTML File Has Been Written. Please open it on the next line.');
            });
        });
}

function init() {
    writeToFile();
}

init();


