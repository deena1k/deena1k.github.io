var full_slides = document.getElementsByClassName("slideshow");

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



//hover functions
