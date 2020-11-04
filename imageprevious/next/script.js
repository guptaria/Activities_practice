var carouselboxEl=document.querySelector(".carouselbox");
var previousEl=document.querySelector(".previous");
var nextEl=document.querySelector(".next");
carouselboxEl.style.backgroundImage="url('/Users/priyagarg/Desktop/projects/self_study/imageprevious/next/light.jpg')";
carouselboxEl.style.height="300px";
var i=0;
var currentimage;

var images =[
    "imageprevious/next/light.jpg",
    "/Users/priyagarg/Desktop/projects/self_study/imageprevious/next/number2.jpg",
    "/Users/priyagarg/Desktop/projects/self_study/imageprevious/next/number3.jpg"
];

carouselboxEl.addEventListener("click")

 function navigate(direction){
     i=i+direction;
     if(i<0)
     i=images.length-1;
     else if(i>images.length-1) {
         i=0;
     }
     currentimage=images[i];
     carouselboxEl.style.backgroundImage="url('" +currentimage + "')";
    //  carouselboxEl.style.height="100px";
    //  carouselboxEl.style.width="100px";
     


}

previousEl.addEventListener("click",function(event){
    event.stopPropagation();
    navigate(-1);
});

nextEl.addEventListener("click",function(event){
    event.stopPropagation();
    navigate(1);
});
