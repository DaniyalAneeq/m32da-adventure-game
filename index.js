#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 20;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 20;
        this.health = health;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "\nEnter Your Name Here: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a Name!!!";
        }
    }
]);
let enemy = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "\nSelect the Enemy, You want to face:",
        choices: ["Monster", "Criminal", "Zombie"]
    }
]);
let play1 = new Player(player.name);
let opp = new Enemy(enemy.select);
do {
    if (enemy.select === "Monster") {
        let ask = await inquirer.prompt([
            {
                name: "enmy",
                type: "list",
                message: "\nWhat's your task: ",
                choices: ["Attack", "Get Energy Booster", "Give up"]
            }
        ]);
        if (ask.enmy === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                play1.healthDecrease();
                console.log(`\n${play1.name} fuel is: ${play1.health}\n`);
                console.log(`\n${opp.name} fuel is: ${opp.health}\n`);
                if (play1.health <= 0) {
                    console.log("]\nOH! You loss, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`\n${play1.name} health is: ${play1.health}\n`);
                console.log(`\n${opp.name} health is: ${opp.health}\n`);
                if (opp.health <= 0) {
                    console.log("\n \t\tCongratulation! You Win..........\t\t");
                    process.exit();
                }
            }
        }
        if (ask.enmy === "Get Energy Booster") {
            play1.healthIncrease();
            console.log(`\nYour health is 100 Now`);
        }
        if (ask.enmy === "Give up") {
            console.log("\nYou give up. Try Next Time");
            process.exit();
        }
    }
    if (enemy.select === "Criminal") {
        let ask = await inquirer.prompt([
            {
                name: "enmy",
                type: "list",
                message: "\nWhat's your task: ",
                choices: ["Attack", "Get Energy Booster", "Give up"]
            }
        ]);
        if (ask.enmy === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                play1.healthDecrease();
                console.log(`\n${play1.name} health is: ${play1.health}\n`);
                console.log(`\n${opp.name} health is: ${opp.health}\n`);
                if (play1.health <= 0) {
                    console.log("\nOH! You loss, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`\n${play1.name} fuel is: ${play1.health}\n`);
                console.log(`\n${opp.name} fuel is: ${opp.health}\n`);
                if (opp.health <= 0) {
                    console.log("\n \t\tCongratulation! You Win..........\t\t");
                    process.exit();
                }
            }
        }
        if (ask.enmy === "Get Energy Booster") {
            play1.healthIncrease();
            console.log(`\nYour health is 100 Now`);
        }
        if (ask.enmy === "Give up") {
            console.log("\nYou give up. Try Next Time");
            process.exit();
        }
    }
    if (enemy.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "enmy",
                type: "list",
                message: "\nWhat's your task: ",
                choices: ["Attack", "Get Energy Booster", "Give up"]
            }
        ]);
        if (ask.enmy === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                play1.healthDecrease();
                console.log(`\n${play1.name} health is: ${play1.health}\n`);
                console.log(`\n${opp.name} health is: ${opp.health}\n`);
                if (play1.health <= 0) {
                    console.log("OH! You loss, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`\n${play1.name} fuel is: ${play1.health}\n`);
                console.log(`\n${opp.name} fuel is: ${opp.health}\n`);
                if (opp.health <= 0) {
                    console.log("\n \t\tCongratulation! You Win..........\t\t");
                    process.exit();
                }
            }
        }
        if (ask.enmy === "Get Energy Booster") {
            play1.healthIncrease();
            console.log(`\nYour health is 100 Now`);
        }
        if (ask.enmy === "Give up") {
            console.log("\nYou give up. Try Next Time");
            process.exit();
        }
    }
} while (true);
