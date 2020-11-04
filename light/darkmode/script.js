var containerEl=document.querySelector(".container");
var themeswitcherEl=document.querySelector("#themeswitcher");
var mode="dark";

themeswitcherEl.addEventListener("click",function(){
    if(mode==="dark"){
    mode="light";
    containerEl.setAttribute("class" ,"light"); 
}
else{
    mode="dark";
    containerEl.setAttribute("class","dark")
}
})