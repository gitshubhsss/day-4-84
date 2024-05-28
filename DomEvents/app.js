let btn = document.querySelector("button");
let box = document.querySelector(".box");
let h1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//     let randCol=genColor();
//     h1.innerText=randCol;
//     box.style.backgroundColor=randCol;
// });

// function genColor(){
//     let r = Math.floor(Math.random() * 255) ;
//     let g = Math.floor(Math.random() * 255) ;
//     let b = Math.floor(Math.random() * 255);

//     let color =`rgb(${r},${g},${b})`;
//     return color;
// }


btn.addEventListener("click",()=>{
    let r = Math.floor(Math.random() * 255) ;
    let g = Math.floor(Math.random() * 255) ;
    let b = Math.floor(Math.random() * 255);

    h1.innerText=`rgb(${r},${g},${b})`;
    box.style.backgroundColor=`rgb(${r},${g},${b})`;
    console.log(this);
})