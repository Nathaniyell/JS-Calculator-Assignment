let btn = document.querySelectorAll("button");
let topDiv = document.querySelector(".top");
let btmDiv = document.querySelector(".bottom");

for (i = 0; i < btn.length; i++){
btn[i].addEventListener('click', function(){
    if(this.innerText === "C"){
        btmDiv.innerText = "";
        topDiv.innerText = "";
    }else if (this.innerText === "DEL"){
        btmDiv.innerText = btmDiv.innerText.slice(0, -1)
    }
    else if (this.innerText === "="){
        try {
            topDiv.innerText = btmDiv.innerText
            btmDiv.innerText = eval(btmDiv.innerText)
        } catch (error) {
            topDiv.innerText = "Error!"
        }
    }else {
        btmDiv.innerText += this.innerHTML
    }
})
}