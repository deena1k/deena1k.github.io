var linkedln = document.getElementById("link");
var game = document.getElementById("button");


linkedln.addEventListener("click",redirect);
game.addEventListener("click",redirect2);

game.addEventListener("mouseover",hovered);
game.addEventListener("mouseout",no_hovered);


function hovered()
{
    game.setAttribute("style","background-color:rgb(38, 159, 235)");
}
function no_hovered()
{
    game.setAttribute("style","background-color:rgb(255, 255, 255)");
}

function redirect()
{
    window.open("https://www.linkedin.com/in/adeena-khan/");
}
function redirect2()
{
    window.open("https://simmer.io/@johnpayne/justdie");
}
