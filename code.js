var linkedln = document.getElementById("link");
var full_slides = document.getElementsByClassName("slideshow");
var selection = document.getElementsByClassName("project-select");

function slide_progress(slide)
{
    if (slide>=full_slides.length)
        {
            slide=0;
        }
    if(slide == 0)
    {
        full_slides[full_slides.length-1].setAttribute("style","visibility:hidden");
    }
    else
    {
        full_slides[slide-1].setAttribute("style","visibility:hidden");
    }
    current_slide1 = full_slides[slide];
    current_slide1.setAttribute("style","visibility:visible");
    interval = setTimeout(slide_progress,5000,slide+1);
}








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

selection.addEventListener("mouseover",expand)
selection.addEventListener("mouseout",discard)


//hover functions
function expand()
{
    selection.setAttribute("style","visibility:visible")
}

function discard()
{
    selection.setAttribute("style","visibility:hidden")    
}

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
