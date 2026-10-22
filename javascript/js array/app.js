// var day = prompt( "enter your day of work","only string value",)
// if (day === "saturday" ||  day=== "sunday" ){
//     console.log("chuti karo")
// }
// else{
//     console.log("ana han")
// }

// var name = "abdulla'h "
// var fname = "afzal"
// console.log(name+  fname)

var age = +prompt("enter your age")
var distance = +prompt("enter your distance")
var peakhour = +prompt("enter your peakhour")

if (age >= 18 || age <= 60 && distance >= 5 || distance <= 25 && peakhour >= 2 || peakhour <= 6 )
    {

    console.log("your fare is:", 250)
}
elseif( age >= 18 || age <= 50 && distance >= 5 || distance <= 20 && peakhour >= 3 || peakhour <= 5)
{

console.log("your fare is:", 300)
}
elseif(age >= 18 || age <= 40 && distance >= 5 || distance <= 15 && peakhour >= 3|| peakhour <=4 )
{

console.log("your fare is:", 400)
}
// else
//     {
//     consloe.log("invalid informatin")
// }