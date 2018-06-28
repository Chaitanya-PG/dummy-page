/*
//VARIBLES

var aboutbooboo="Booboo is a very good boy";
alert (aboutbooboo);

var boobooage=2;
alert (boobooage);

var isheagirl=false;
alert (isheagirl);

var hiswifename=null;
alert (hiswifename);


//OBJECTS

var detailsaboutbooboo = {

"boobooweight" : 18,
"booboocolor"  : "white",
"booboosize"   : "large",
"boobooheight" : 93,
}

var showingbooboodetails=(detailsaboutbooboo.booboocolor+" "+detailsaboutbooboo.boobooheight+" "+detailsaboutbooboo.booboosize);
alert (showingbooboodetails);

var addingbooboodetails=(detailsaboutbooboo.boobooweight+detailsaboutbooboo.boobooheight)
alert  (addingbooboodetails)


//ARRAYS

var booboocharacteristics= ["intelligent", "naughty", "sensitive", "kool", "smart", "cute"]
var booboocharacteristicsdetails= booboocharacteristics[0] + booboocharacteristics[1] + booboocharacteristics[3]
alert (booboocharacteristicsdetails);

var booboocharacteristicslength= booboocharacteristics.length
alert (booboocharacteristicslength)


//ARRAY OF OBJECTS

var babies = [ {

"name" : "Hrithvik",
"fathername" : "Kamal",
"mothername" : "Chaitanya",
"age" : 2

}, {


"name" : "Aiswarya",
"fathername" : "Pillai",
"mothername" : "Geetha",
"age" : 22
}]

var firstbaby= (babies[0].name+ babies[1].name)
alert (firstbaby) 

*/

//TYPES OF OPERATORS

//ARITHMETIC OPERATORS
//Add, sub, mul, div, modulus(remainder) with BODMAS theorem

var a=10;
var b=5;
var c=a+b;
alert (c)

b+=a; //this indicates b=b+a
b=b+a;
alert (b)

//COMPARISON
//(==,===,!=)--Used for numbers and strings both
//(>,<,>=,<=)--Used for numbers
//This operator only compares the variables and gives us the boolean result as if the synttax is TRUE or FALSE
 
var d="10";
alert (a==b);
alert (a!=b);
alert (a>b);
alert (a===d);
alert (a==d);

//TYPE
//This tells us the type of syntax we have used

var e="Hrithvik";
var f=true;
alert (typeof(a));
alert (typeof(d));
alert (typeof(e));
alert (typeof(f));

var g= {

"name" : "Hrithvik",
"fathername" : "Kamal",
"mothername" : "Chaitanya",
"age" : 2
}

var h= ["intelligent", "naughty", "sensitive", "kool", "smart", "cute"]

alert (typeof(g));
alert (typeof(h));//The result comes out to be an object in place of array

//To find if any syntax is an array use the below syntax

alert (Array.isArray(h));
