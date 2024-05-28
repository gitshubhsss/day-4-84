let p = document.createElement("p");
p.innerText = "Hey dude am red";
p.style.color = "red";

let body = document.querySelector("body");

body.appendChild(p);

let h3 = document.createElement("h3");
h3.innerText = "Im blue H3 !";

h3.style.color = "blue";
body.append(h3);

let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";
body.appendChild(div);
let h1 = document.createElement("h1");
h1.innerText = "Im in a div";
div.appendChild(h1);

let p2=document.createElement("p");
p2.innerText="Mee too !";
div.appendChild(p2)