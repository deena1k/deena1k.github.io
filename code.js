var linkedln = document.getElementById("link");
var full_slides = document.getElementsByClassName("slideshow");

function slide_timing()
{
    for (let i=0; i<=full_slides.length-1;i++)
        {
            current_slide1 = full_slides[i];
            console.log("Right before attributes "+i)
            current_slide1.setAttribute("style","visibility:visible");
            setInterval(slide_progress,5000,current_slide1);
            console.log("Timer up");
            if (i <= full_slides.length-1)
            {
                i=-1;
                continue;
            }
            console.log(i)
        }

}

function slide_progress(slide)
{
    slide.setAttribute("style","visibility:hidden")
    console.log("We changed it to hidden!");
}

slide_timing()







var game = document.getElementById("button");
var hover1 = document.getElementById("hover1_pop");
var hover1_replace =document.getElementById("ice_key");
var hover2 = document.getElementById("hover2_pop");
var hover2_replace =document.getElementById("ghost_rise");




linkedln.addEventListener("click",redirect);
game.addEventListener("click",redirect2);

game.addEventListener("mouseover",hovered);
game.addEventListener("mouseout",no_hovered);

hover1_replace.addEventListener("mouseover",hover_for_pic1);
hover1.addEventListener("mouseout",no_hover_for_pic1);

hover2.hover1.addEventListener("mouseout",no_hover_for_pic2);
hover2_replace.addEventListener("mouseover",hover_for_pic2);

//hover functions
function hovered()
{
    game.setAttribute("style","background-color:rgb(38, 159, 235)");
}
function no_hovered()
{
    game.setAttribute("style","background-color:rgb(255, 255, 255)");
}

function hover_for_pic1()
{
    hover1.setAttribute("style","visibility:visible");
    hover1_replace.setAttribute("style","visibility:hidden");
}

function no_hover_for_pic1()
{
    hover1.setAttribute("style","visibility:hidden");
    hover1_replace.setAttribute("style","visibility:visible");

}

function hover_for_pic2()
{
    hover2.setAttribute("style","visibility:visible");
    hover2_replace.setAttribute("style","visibility:hidden");
}

function no_hover_for_pic2()
{
    hover2.setAttribute("style","visibility:hidden");
    hover2_replace.setAttribute("style","visibility:visible");

}

function redirect()
{
    window.open("https://www.linkedin.com/in/adeena-khan/");
}
function redirect2()
{
    window.open("https://simmer.io/@johnpayne/justdie");
}
