const projectimg=document.querySelectorAll(".project")
const video=document.querySelector(".video")
const watchhov=document.querySelector(".Watch-hov")

projectimg.forEach(function(item){
    item.addEventListener("mouseenter",function(){
        gsap.to(item.childNodes[3],{
            opacity:1,
            scale:1,
            duration:0.7
        })
        gsap.to(item.childNodes[7],{
            opacity:0,
            scale:0,
            duration:0.7
        })
        gsap.to(item.childNodes[5],{
            opacity:1,
            scale:1,
            duration:0.7
        })
    })
    item.addEventListener("mouseleave",function(){
        gsap.to( item.childNodes[3],{
            opacity:0,
            scale:0,
            duration:0.7
        })
        gsap.to(item.childNodes[7],{
            opacity:1,
            scale:1,
            duration:0.7
        })
        gsap.to(item.childNodes[5],{
            opacity:0,
            scale:0,
            duration:0.7
        })
    })
    // item.addEventListener("mousemove",function(dets){
    //     gsap.to(item.childNodes[3],{
    //         x:dets.x-item.getBoundingClientRect().x,
    //         y:dets.y-item.getBoundingClientRect().y
    //     })
    // })
})

video.addEventListener("mousemove",function(dets){
    watchhov.style.display="flex"
    gsap.to(watchhov,{
        x:dets.x,
        y:dets.y,
        left:"-250px",
        top:"-35px"
    })
})
video.addEventListener("mouseleave",function(){
    watchhov.style.display="none"
})


const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
