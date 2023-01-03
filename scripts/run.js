// @ts-check
import inquirer from "inquirer";
import fs from "node:fs/promises";

const { example } = await inquirer.prompt([
  {
    type: "list",
    name: "example",
    message: "Select an example to run:",
    choices: await fs.readdir("apps"),
  },
]);

await import(`../apps/${example}/index.js`);
