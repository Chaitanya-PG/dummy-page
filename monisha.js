var number=window.prompt("Enter the number to be checked")
var num=Number(number)
var flag=0;
var i;

for (i=2; i<num; i++)
{
	if(num%i==0)
	{
		alert("Yay")
		flag=1;
		break;
		
	}
}

if (flag==1)
	{
		alert("The number is a composite number")
	}
else
	{
		alert("The number is a prime number")
	}
