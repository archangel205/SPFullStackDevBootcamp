function validateForm(){
    let empName = document.forms["frmCollectWeights"]["empName"];
    let empWeight = document.forms["frmCollectWeights"]["empWeight"];
    document.getElementById("nameMessage").innerHTML="";
    document.getElementById("weightMessage").innerHTML="";
    let badName = /^([^0-9]*)$/;
    if(empName.value == ""){
        document.getElementById("nameMessage").innerHTML="Name cannot be empty!";
        empName.focus();
        return false;
    }
    if(!empName.value.match(badName)){
        document.getElementById("nameMessage").innerHTML="Name cannot be numbvers!";
        empName.focus();
        return false;
    }
//
    if(empWeight.value == ""){
        document.getElementById("weightMessage").innerHTML="Weight cannot be empty!";
        empWeight.focus();
        return false;
    }
    if(isNaN(empWeight.value)){
        document.getElementById("weightMessage").innerHTML="Weight must be a number";
        empWeight.focus();
        return false;
    }
    return true;

}
//
let inputTags = document.getElementsByTagName("input");
for(let i = 0; i < inputTags.length; i++){
    inputTags[i].addEventListener("focus", function(){
        this.style.backgroundColor = "lightyellow";
    }, false);
    inputTags[i].addEventListener("blur", function(){
        this.style.backgroundColor = "";
    }, false);
};
//		
let pTags = document.getElementsByTagName("p");
for(let i = 0; i < pTags.length; i++){
    pTags[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "lightyellow";
    }, false);
    pTags[i].addEventListener("mouseout", function(){
        this.style.backgroundColor = "";
    }, false);
};		