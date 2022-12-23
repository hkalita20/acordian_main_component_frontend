let allkeys=document.querySelectorAll(".faq-btn").length;
let visible=document.querySelectorAll(".visible");
 let s=undefined;
for(let i=0;i<allkeys;i++){
    document.querySelectorAll(".faq-btn")[i].addEventListener("click",arrowrow=>{
        if(s==i){
            close();
            s=undefined;
        }
        else{
            close();
            document.querySelectorAll("button")[i].classList.toggle("rotate");
            visible[i].classList.remove("move");
            visible[i].style.maxHeight = "10em";
            visible[i].style.opacity = "1";
            document.querySelectorAll(".faq-btn")[i].style.fontWeight="700"
            s=i;
        }
    })
};

function close(){
    for(let i=0;i<allkeys;i++){
        document.querySelectorAll("button")[i].classList.remove("rotate");
        visible[i].style.maxHeight = "0";
        visible[i].style.opacity = "0";
        document.querySelectorAll(".faq-btn")[i].style.fontWeight="400";
        visible[i].classList.add("move");
    }
}