let palettes = document.querySelectorAll(".colorPalette")
let btn = document.querySelector(".btn")
let hexcode = document.querySelector(".hexcode")

function getColor(){
    let hex = "1234567890abcdef";
    let num = 6;
    let color="";

    for(let i = 0; i<num; i++){
        let randomNum = Math.floor(Math.random() * hex.length)
        color += hex.substring(randomNum, randomNum+1);
    }

    return `#${color}`;
}

window.addEventListener("load", addColor)

btn.addEventListener("click",()=>{

    palettes.forEach(palette=>{
        let newcolor = getColor();
        palette.style.backgroundColor = newcolor;
    })
})

function addColor(){
    palettes.forEach(palette=>{
        let newcolor = getColor()
        palette.style.backgroundColor = newcolor;
        palette.innerHTML = `<p>${newcolor}</p>`
    })
}