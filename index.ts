import inquirer from "inquirer";

class player {
    name: string;
    fuel: number = 100;
    constructor(name:string) {
        this.name = name;
    }

    fuelDecrease() {
        let fuel = this.fuel - 20
        this.fuel = fuel
    }

    fuelIncrease() {
        this.fuel = 100
    }
}

class opponent {
    name: string;
    fuel: number = 100;
    constructor(name:string) {
        this.name = name;
    }        

    fuelDecrease() {
        let fuel = this.fuel - 20
        this.fuel = fuel
    }
}

let players = await inquirer.prompt([
    {
       name: "name",
       type: "input",
       message: "Please enter your name:"
    },
]);

let opponents = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent:",
        choices: ["Zombies", "Skeleton", "Ghosts"]
    }
]);

let p1 = new player(players.name)

let o1 = new opponent(opponents.select)

do {

    // zombies


    if (opponents.select === "Zombies") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do now!",
                choices: ["Attack", "Medipack", "Run for your life"]
            }
        ]);

        if (ask.option === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Try another time");
                    process.exit()
                }
            }

            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Hurray!!! You did it. You Won.");
                    process.exit()
            }
        }

        if (ask.option === "Medipack") {
            p1.fuelIncrease()
            console.log(`your fuel is increased to ${p1.fuel}`);
        }

        if (ask.option === "Run for your life") {
            console.log("You loose, Try another time");
            process.exit()
            }
        }
    }

    // skeleton

    if (opponents.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do now!",
                choices: ["Attack", "Medipack", "Run for your life"]
            }
        ]);

        if (ask.option === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Try another time");
                    process.exit()
                }
            }

            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Hurray!!! You did it. You Won.");
                    process.exit()
            }
        }

        if (ask.option === "Medipack") {
            p1.fuelIncrease()
            console.log(`your fuel is increased to ${p1.fuel}`);
        }

        if (ask.option === "Run for your life") {
            console.log("You loose, Try another time");
            process.exit()
            }
        }
    }

    // ghosts

    if (opponents.select === "Ghosts") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do now!",
                choices: ["Attack", "Medipack", "Run for your life"]
            }
        ]);

        if (ask.option === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Try another time");
                    process.exit()
                }
            }

            if (num <= 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Hurray!!! You did it. You Won.");
                    process.exit()
            }
        }

        if (ask.option === "Medipack") {
            p1.fuelIncrease()
            console.log(`your fuel is increased to ${p1.fuel}`);
        }

        if (ask.option === "Run for your life") {
            console.log("You loose, Try another time");
            process.exit()
            }
        }
    }
}

while(true)