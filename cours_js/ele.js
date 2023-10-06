var names = "John de ripper";
console.log(names);
var x = 1;
var xString = parseInt(x);
var favorite = 2;
switch(favorite)
{
    case 1:
        console.log("Cela est merveuille!!!!");
        break;
    case 2:
        console.log("Cela est necessaire!!");
        break;
    default:
        console.log("Serieux?!");
        break;
}

function Add( number1 , number2)
{
    return number1 + number2;
}

console.log("Element: 5 + 9 = "+Add(5,9));
MyArray = ["Pomme",0.5,"Simalen"];
var dog = {name:"Choupette",color:"white",age:4};

for(var property  in dog)
{

    console.log(dog[property]);
}

var dog1 = new Object();
dog1.name = "Mamounette";
dog1.color = "Black";
dog1.age = 48;
var number = 4;
dog1.aboie = function(number){
    while(number > 0)
    {
        console.log(number.toString() + " Wouaf");
        number -- ;
    }
};
dog1.aboie(number);
function Dog(name,color ,age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function () { 
        console.log("Waoouf");
     }
     this.info = function()
     {
        console.log("Name: "+this.name+"\nColor: "+this.color+"\nAge: "+this.age);
     }
}

// class Dog
// {
//     constructor(name,color,age)
//     {
//         this.name = name;
//         this.color = color;
//         this.age = age;
//     }
//     aboie()
//     {
//         console.log("Wouaf");
//     }
//     info()
//     {
//         console.log("Name: "+this.name+"\nColor: "+this.color+"\nAge: "+this.age);
//     }
// }

console.log("--------Dog-----------");
var  Dog2 = new Dog("Medor","Black",8);
// Dog2.info();
var petitCaniche = new Dog("Choupette","White",4);
petitCaniche.aboie();
// console.log(petitCaniche);
petitCaniche.info();