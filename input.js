
datalist.style.top = input.offsetTop + 50 + "px";

input.addEventListener("click", () => {
    input.value = "";
    if (won || gameover){

        datalist.classList.remove("active");
        datalist.style.display = "none!important";
    }else{
        datalist.classList.toggle("active");
    }
});
function clearstr(str) {
    str = str.toLowerCase();

    str = str.replace("á", "a").replace("â", "a").replace("ã","a");
    str = str.replace("é", "e").replace("ê", "e");
    str = str.replace("í", "i").replace("î", "i");
    str = str.replace("ó", "o").replace("ô", "o");
    str = str.replace("ú", "u").replace("û", "u");

    return str;
}
document.addEventListener("keydown",(a)=>{
    if(!datalist.classList.contains("active")){
        input.click();
        input.focus();
        input.autofocus = true
    }
    
})
input.addEventListener("keyup", (a) => {
    var filter, li, j, textvalue;
    filter = clearstr(input.value);
    li = document.querySelectorAll("li");
    j = 0;

    for (let i = 0; i < li.length; i++) {
        var liCount = li[i];
        textvalue = liCount.textContent || liCount.innerText;
        if (clearstr(textvalue).indexOf(filter) > -1) {
            li[i].style.display = "";
            if (a.key == "Enter" && j == 0) {
                input.value = li[i].innerText;
                j++;
                verify();
                input.click();
            }
        } else {
            li[i].style.display = "none";
        }
    }
});

dataelement.forEach((optionListSingle) => {
    optionListSingle.addEventListener("click", () => {
        var text = optionListSingle.innerText;
        input.value = text;
        datalist.classList.remove("active");
    });
});
