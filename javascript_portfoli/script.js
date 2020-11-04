// // console.log(window);
// // console.log("this is js");
// console.log(document.body.children);
// console.log( document.body.childNodes);
// console.log(document.body.children[1]);
// // document.body.children[1].style.fontSize = "50px";
// document.body.children[0].children[0].style.color="green";
// document.body.children[0].lastElementChild.style.color="red";
var h1El = document.createElement("h1");
var h2El=document.createElement("h2");
var language=document.createElement("div");
var listEl=document.createElement("ol");
var li1El = document.createElement("li");
var li2El = document.createElement("li");
var li3El = document.createElement("li");
var imgEl= document.createElement("IMG");
var githubEl=document.createElement("div");
var linkEl=document.createElement("a");




h1El.setAttribute("style" , "color:blue ; text-Align:center;textdecoration:underline");
// h2El.setAttribute("style", "color:red; background:pink;");
// tagdiv.setAttribute("style", "color:red; background:pink; text-Align:center");
imgEl.setAttribute("src","butterfly.jpg");
imgEl.setAttribute("alt","butterfly image");
imgEl.setAttribute("style","width:300px;")
imgEl.addEventListener("click",function(event){
    alert("you clicked the picture!")
})
linkEl.setAttribute("href"," https://guptaria.github.io/Portfolio/");



h1El.textContent=("Portfolio");
h2El.textContent="My name is Priya Garg";
language.textContent="Languages i know:";
li1El.textContent="HTML";
li2El.textContent="CSS";
li3El.textContent="JavaScript";
githubEl.textContent="My GitHub Page link:";
linkEl.textContent="https://guptaria.github.io/Portfolio";




document.body.appendChild(h1El);
document.body.appendChild(h2El);
document.body.appendChild(language);
language.appendChild(listEl);
listEl.appendChild(li1El);
listEl.appendChild(li2El);
listEl.appendChild(li3El);
document.body.appendChild(imgEl);
document.body.appendChild(githubEl);
document.body.appendChild(linkEl);

