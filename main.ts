#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let operations = await inquirer.prompt({
    name: "todolist",
    message: "Select What You Want To Do",
    type: "list",
    choices: ["Add Task", "View List", "Remove Task"],
  });
  if (operations.todolist === "Add Task") {
    let addTask = await inquirer.prompt([
      {
        name: "todo",
        message: "What Would You Like To Add In Your Todos?",
        type: "input",
      },
      {
        name: "addMore",
        type: "confirm",
        message: "Would You Like To Add More In Your Todos?",
        default: "true",
      },
    ]);
    if (addTask.todo === "") {
      console.log("Please Enter Value!");
    } else {
      todos.push(addTask.todo);
      condition = addTask.addMore;
      console.log(todos);
    }
  } else if (operations.todolist === "View List") {
    console.log(todos.join("\n"));
  } else if (operations.todolist === "Remove Task") {
    let deleting = todos.pop();
    console.log(deleting);
  }
}
