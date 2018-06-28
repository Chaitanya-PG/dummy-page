var input=prompt("Please enter the number")
var number=Number(input)
var num=number
var i

for(i=1; i<num; i++)
{
	number=i*number
}

alert("The result is"+" "+number)