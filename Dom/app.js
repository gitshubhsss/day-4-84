// let body=document.querySelector("body");
// let newPara=document.createElement("p");
// newPara.innerText="this is new para";

// body.appendChild(newPara)

// let box=document.querySelector(".box");
// box.appendChild(newPara)

// let btn=document.createElement("button");
// btn.innerText="click me ";
// body.appendChild(btn)



// newPara.append(" i need to change");
// newPara.append(btn)

// let h5=document.createElement("h5");
// h5.innerText="This is h5";
// newPara.appendChild(h5);

let newBtn=document.createElement("button");
newBtn.innerText="This is new Btn";

let p=document.querySelector("p");
p.insertAdjacentElement("beforeend",newBtn);

p.removeChild(newBtn)
p.remove()












let images=document.getElementsByClassName("oldImg");

for(let i=0;i<images.length;i++){
    images[i].src="assets/spiderman_img.png";
}

let links=document.querySelectorAll("div a");

for(i=0;i<links.length;i++){
    console.dir(links[i].innerHTML);
}

let img=document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id","changeimg");
img.setAttribute("src","https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/16/970162-ezgif.com-gif-maker-2021-04-16t221828.169.jpg")


let a=document.querySelectorAll("ul  a");

// for(let i=0;i<a.length;i++){
//     // a[i].setAttribute("class","newColor");
//     a[i].style.color="green"
// }

for(const links of a){
    links.style.color="red";
}
let h1=document.querySelector("h1");
h1.innerText="Ms dhoni"

h1.classList.add("green")

let ul=document.querySelector("ul");

ul.children[1].previousElementSibling.style.color="red";



