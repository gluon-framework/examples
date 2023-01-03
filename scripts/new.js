// @ts-check
import inquirer from "inquirer";
import fs from "node:fs/promises";

const apps = await fs.readdir("apps");

const { name, description } = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter the name of the new app:",
    validate: async (name) => {
      if (apps.includes(name)) {
        return "An app with that name already exists.";
      }

      if (!/^[a-z0-9-]+$/.test(name)) {
        return "App names must be lowercase, and may only contain letters, numbers, and dashes.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for the new app:",
  },
]);

await fs.mkdir(`apps/${name}`);
await fs.cp("apps/gluworld", `apps/${name}`, { recursive: true });

const pkg = JSON.parse(await fs.readFile(`apps/${name}/package.json`, "utf8"));

pkg.name = `@gluon-framework/${name}`;
pkg.description = description;

await fs.writeFile(`apps/${name}/package.json`, JSON.stringify(pkg, null, 2));

const readme = await fs.readFile("README.md", "utf8");

await fs.writeFile(
  "README.md",
  readme.replace(
    /## Examples\n\n([\s\S]+?)\n## Usage/g,
    `## Examples\n\n- [${name}](/apps/${name}): ${description}\n$1\n## Usage`
  )
);
