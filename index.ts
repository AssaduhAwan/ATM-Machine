#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


 const sleep =()=>{
   return new  Promise((res)=>{
     setTimeout(res,2000)
   });
}

 async function wellcome () 
 { let ranbowTitle = chalkAnimation.rainbow(`let's start ATM MACHINE hello honey aur you real`);
   await sleep(); 
   ranbowTitle .replace(`with NODE.JS INQUIRER and CHALK`); 
   await sleep();
   ranbowTitle.replace(`let enjoy ATM MACHINE !!!`); 
   await sleep();
   ranbowTitle.stop()
 let  pulseTitle = chalkAnimation.pulse(`Developed by ASSAD AWAN fro TypeScript .`);
 await sleep();
 pulseTitle.stop()
 let neonTile = chalkAnimation.neon(`  

                 BANK AL HABIB  
    _____________________________________          
   |                                     |                         
   |     ___________________________     | 
   |    |  _                        |    |
   |    | A|M MACHINE        1.00.0 |    |      
   |    |___________________________|    |
   |     ____ ____ ____      ________    |
   |    |  7 |  8 |  9 |    | CANCEL |   |
   |    |____|____|____|    |________|   |
   |    |  4 |  5 |  6 |    | CLEAR  |   |
   |    |____|____|____|    |________|   |
   |    |  1 |  2 |  3 |    | ENTER  |   |
   |    |____|____|____|    |________|   |
   |    |  . |  0 |  = |    |        |   |
   |    |____|____|____|    |________|   |
   |                                     |
   |_____________________________________|
   `);  
 await sleep();  
 neonTile.stop();
 }
wellcome()

interface ansType{
  userID:string
  userPin:number
  accounttype:string
  transactiontype:string
  amount:number
}
 const answers:ansType = await  inquirer.prompt([
  {
   type:"input",
   name:"userID",
   message:`kindly yuor userID:`,
},  {
  type:"number",
  name:"userPin",
  message:`kindly yuor userPin:`,
},
{
  type:"list",
  name:"accounttype",
  choices:["Current","Saving"],
  message:(chalk.blue`select your account type :`),
  
},
{
  type:"list",
  name:"transactiontype",
  choices:["Fast Cash","Withdraw"],
  message:(chalk.gray`select your transaction :`),
   when(answers) {
    return answers.accounttype
  },
},
{
  type:"list",
  name:"amount",
  choices:[1000,2000,3000,4000,5000,10000,],
  message:(chalk.red`select your account`),
   when(answers) {
    return answers.transactiontype =="Fast Cash"
  },
},
{
  type:"number",
  name:"amount",
  message:(chalk.cyan`Enter your account`),
   when(answers) {
    return answers.transactiontype =="Withdraw"
  },
}
])
if(answers.userID && answers.userPin){
  const balance=Math.floor(Math.random()*1000000)
  console.log(balance)
  const Enteredamount=answers.amount;
  if(balance >= Enteredamount){
   const remining = balance - Enteredamount
   console.log(chalk.green(`your remaining balance is`,remining));
  }else{
    console.log(chalk.yellow("Insuficent balance"))
  }
}




