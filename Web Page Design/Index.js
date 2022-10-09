var a = prompt ("Guess the Secret Number between 1 to 10");
var x = ("Stored Secret Number");
var y = Number(a);

x = 7;

if (y==x){
    document.write ("BINGO... You got it Right");
}
else if (y == (x+1)) {
    document.write ("Close Enough. Try Again");
}
else {
    document.write ("Sorry. Not close Enough");
}