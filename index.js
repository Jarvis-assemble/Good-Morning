
var ct=1;
function Roll() {

    if(ct<16)
    {ct=ct+1;}
    else
    { ct=1;}

var temp = "gif" +ct + ".gif"; 

var tempSource = "images/" + temp; //images/dice1.png - images/dice6.png

var image = document.querySelector(".show");

image.setAttribute("src", tempSource);

}
