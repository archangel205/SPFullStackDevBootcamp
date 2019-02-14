let pTags = document.getElementsByTagName("p");
for(let i = 0; i < pTags.length; i++){
    pTags[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "lightyellow";
    }, false);
    pTags[i].addEventListener("mouseout", function(){
        this.style.backgroundColor = "";
    }, false);
};		