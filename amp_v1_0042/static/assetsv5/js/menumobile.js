const click = document.querySelector("#ampscript");
const click2 = document.querySelector("#ampscript2");
const click3 = document.querySelector("#ampscript3");


click.addEventListener('click',()=>{
    
    if( document.querySelector(".MenuMobileItem-sub").style.display==="none"){
        document.querySelector(".MenuMobileItem-sub").style.display = "flex";
       
    }else{
        document.querySelector(".MenuMobileItem-sub").style.display = "none"
    }

})
click2.addEventListener('click',()=>{
    
    if( document.querySelector(".MenuMobileItem-sub2").style.display==="none"){
        document.querySelector(".MenuMobileItem-sub2").style.display = "flex";
       
    }else{
        document.querySelector(".MenuMobileItem-sub2").style.display = "none"
    }

})
click3.addEventListener('click',()=>{
    
    if( document.querySelector(".MenuMobileItem-sub3").style.display==="none"){
        document.querySelector(".MenuMobileItem-sub3").style.display = "flex";
       
    }else{
        document.querySelector(".MenuMobileItem-sub3").style.display = "none"
    }

})




