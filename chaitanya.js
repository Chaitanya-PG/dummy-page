var numbertocheck=window.prompt("Enter the number to be checked")
var finalnumber=0
var numbertocheckk=Number(numbertocheck)
var copynumber=numbertocheckk
var abc=0;
var cpynum=1;

while (Math.trunc(copynumber)!=0)
{
cpynum=Math.trunc(copynumber);
abc=cpynum%10;
copynumber=copynumber/10;
finalnumber=finalnumber*10+abc;
alert(cpynum);
}

alert(finalnumber);

if (finalnumber==numbertocheckk)
{
	alert("The number is a palindrome")
}

else
{
	alert("The number is not a palindrome")
}