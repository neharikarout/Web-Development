// Conditionals : If Statements

// let soup = "chicken noodle soup";
// let customerBanned = false;
// let reply;

// if(customerBanned)
// {
//     reply = " No soup for you!!";
// }

// else{
// if(soup)
// {
//     reply = `Here is your order ${soup}`; // template literal
// }
// else{
//     reply = `Sorry, We are out of ${soup}`;
// }
// }
// console.log(reply);


// let testScore = 89;
// let grade;
// let collegeStudent = true;


// if(testScore>=90)
// {
//     grade = 'A';
// }
// else if(testScore >=80)
// {
//     grade = 'B';
// }
// else if(testScore >= 70)
// {
//     grade = 'C';
// }
// else if(testScore >= 60)
// {
//     grade = 'D';
// }
// else{
//     if(collegeStudent)
//     {
//     grade = "UnSatisfactory";
//     }
//     else{
//         grade = "Fail";
//     }
// }
// console.log(grade);


// Rock Paper Scissors

let player = "rock";
let computer = "paper";

if(player === computer)
{
    console.log(" Tie game");
}
else if(player === "paper")
{
    if(computer === "scissors")
    {
        console.log("computer wins");
    }
    else{
        console.log("player wins");
    }
}
else if(player === "rock")
{
    if(computer === "paper")
    {
        console.log("computer wins");
    }
    else{
        console.log("player wins");
    }
}
else{
    if(computer === "rock")
    {
        console.log("computer wins");
    }
    else{
        console.log("player wins");
    }

}
