import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const h1MouseOver = document.querySelector("h1")
h1MouseOver.addEventListener("mouseover",()=>{
    h1MouseOver.style.color ="blue"
})

const h1MouseOut = document.querySelector("h1")
h1MouseOut.addEventListener("mouseout",()=>{
    h1MouseOut.style.color ="black"
})

const h1Click = document.querySelector("h1")
const header1= document.querySelector("header")
h1Click.addEventListener("click",()=>{
    header1.style.backgroundColor="yellow"
})

const banner= document.querySelector(".intro img")
banner.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor="orange"
})

const paraS = document.querySelectorAll("p")
    for(let i=0;i<paraS.length;i++){
    window.addEventListener("keydown",()=>{
        paraS[i].style.backgroundColor="aquamarine"
   
    setTimeout(()=>{
        paraS[i].style.backgroundColor=""
    },3000)
}
)}

const footerText = document.querySelector("footer");
footerText.addEventListener("wheel", function () {
    footerText.style.height="150px";
    footerText.style.display="flex";
    footerText.style.justifyContent="center"
    footerText.style.alignItems="center"
  });
  
// window.addEventListener("load",()=>{
//     alert("Sayfa yenilendi")
// })


const imputBus = document.createElement("input");
imputBus.className = "input-button"
imputBus.textContent = "Yazı yaz!"
imputBus.setAttribute("value", "Hangi Ülke?");
document.querySelector(".intro").append(imputBus); 
const imputEvent= document.querySelector(".input-button")
imputEvent.addEventListener("focus", function(){
    imputBus.style.backgroundColor = "beige";
});

window.addEventListener("resize", size=> {

  if (window.innerWidth < 800) {
    document.querySelector("body").style.backgroundColor = "pink";
  } else if (window.innerWidth > 800) {
    document.querySelector("body").style.backgroundColor = "white";
  }
})

// window.addEventListener("scroll",() => {
//     alert("Aşağı gidemezsin!");
//     });

imputBus.addEventListener("select", () => {
    alert("Beni seçtin Pikachu!")
})

