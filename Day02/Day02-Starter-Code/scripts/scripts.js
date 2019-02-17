let inputTags = document.getElementsByTagName("input");
for(let i = 0; i < inputTags.length; i++){
    inputTags[i].addEventListener("focus", function(){
        this.style.backgroundColor = "lightyellow";
    }, false);
    inputTags[i].addEventListener("blur", function(){
        this.style.backgroundColor = "";
    }, false);
};		
let pTags = document.getElementsByTagName("p");
for(let i = 0; i < pTags.length; i++){
    pTags[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "lightyellow";
    }, false);
    pTags[i].addEventListener("mouseout", function(){
        this.style.backgroundColor = "";
    }, false);
};		