import inquirer from "inquirer"
import chalk from "chalk";
import figlet from "figlet";
console.log(figlet.textSync("Currency Converter"));
let conversion= {
    "PKR":{
        "USD":0.0035,
        "GBP":0.0028,  
        "AED":0.013,
        "PKR":1
    },
    "USD":{
        "GBP":0.80,
        "PKR":286.68,
        "AED":3.67,
        "USD":1
    },
    "GBP":{
        "PKR":356.94,
        "USD":1.25,
        "AED":4.57,
        "GBP":1
    },
    "AED":{
        "PKR":77.76,
        "USD":0.27,
        "GBP":0.22,
        "AED":1
    }

}
let answers:{
    from:"PKR"|"GBP"|"USD"|"AED",
    to:"PKR"|"GBP"|"USD"|"AED",
    amount:number
} = await inquirer.prompt([{

    name: "from",
    type: "list",
    choices:["PKR","GBP","USD","AED"],
    message: "Select Your Currency"},
    {
        name: "to",  
        type: "list",
        choices:["PKR","GBP","USD","AED"],
        message: "Secect Your Conversion Currency:"},
    {
            name: "amount",
            type: "number",
            message: "Select Your Amount"},
]);
let {from,to,amount}=answers;
if(from && to && amount){
   let result= conversion [from][to]*amount
    console.log(chalk.blue.bold.italic("The conversion from",from,"to",to,"is",result));
}
else{
    console.log(chalk.red.bold.italic.underline("Enter Valid Input!"));
}