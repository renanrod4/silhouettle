let input = document.querySelector("input[type='text']");
let datalist = document.querySelector("ul")
let dataelement = document.querySelectorAll("li")
datalist.style.top = input.offsetTop+50+"px";



input.addEventListener("click",()=>{
    input.value ='';
    datalist.classList.toggle("active");

})
input.addEventListener("keyup",(a)=>{
    var filter, li, j, textvalue;
    filter = input.value.toLowerCase();
    li = document.querySelectorAll("li");
    j = 0;



    for (let i = 0; i < li.length; i++) {
        var liCount = li[i];
        textvalue = liCount.textContent||liCount.innerText;
        if(textvalue.toLowerCase().indexOf(filter)> -1){
            li[i].style.display = '';
            if (a.key =="Enter"&&j==0){
                input.value = li[i].innerText;
                j++;
                verify();
                input.click();
            }
        }else{
            li[i].style.display = 'none';
        }

    }
    
})


dataelement.forEach((optionListSingle) => {
    optionListSingle.addEventListener("click",()=>{
        var text = optionListSingle.innerText
        input.value = text;
        datalist.classList.remove("active");
    })
    
});

