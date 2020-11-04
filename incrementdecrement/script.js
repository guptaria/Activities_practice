var incrementEl=document.querySelector("#increment");
var decrementEl=document.querySelector("#decrement");
var countEl=document.querySelector("#count");
var time=localStorage.getItem("time");

function setcount()
{

    countEl.textContent=time;
    localStorage.setItem("time",time);

}

incrementEl.addEventListener("click",function(){
    time++;
    setcount();
    
});

decrementEl.addEventListener("click",function(){
        if(time>0){
            time--;
            setcount();
        }
        
});
