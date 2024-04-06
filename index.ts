#! /usr/bin/env node

console.log(chalk.magenta.bold("\n\tWellcome To The CodeWithFaiz - CLI-Calculator\n"))

import inquirer from "inquirer";
import chalk from "chalk";

let loop = true;

while (loop) {
  const Userinput = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter First Number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Second Number",
    },
    {
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multipilication", "Division"],
      message: "Select Your Operator:",
    },
  ]);
  const num1 = Userinput.num1;
  const num2 = Userinput.num2;
  const operator = Userinput.operator;
  

  if (num1 && num2) {
    if (operator === "Addition") {
      console.log(chalk.yellow.underline(`\nThe Answer Is ${num1} + ${num2} = ${num1 + num2}\n`));
    } else if (operator === "Subtraction") {
      console.log(chalk.yellow.underline(`\nThe Answer Is ${num1} - ${num2} = ${num1 - num2}\n`));
    } else if (operator === "Multipilication") {
      console.log(chalk.yellow.underline(`\nThe Answer Is ${num1} * ${num2} = ${num1 * num2}\n`));
    } else if (operator === "Division") {
      console.log(chalk.yellow.underline(`\nThe Answer Is ${num1} / ${num2} = ${num1 / num2}\n`));
    }
  } else {
    console.log(chalk.red("\nPlease enter a valid number!\n"));
  }

  const CalculateMore = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: "Do you want to more calculating?",
    default: false,
  });

  if (!CalculateMore.more) {
    loop = false;
    console.log(chalk.green("\nThank You For Using CLI Calculator!"));
  }
}