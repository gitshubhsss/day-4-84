let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this.innerText);
   this.style.color="pink";
   console.log(this.style.color);
})