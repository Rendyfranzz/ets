
function mySubmit(e){
    alert("The form was submitted")
}
window.addEventListener("scroll",function(){
    let reveal = document.querySelectorAll(".reveal")
    let reveal2= document.querySelectorAll(".reveal2")

    for(i=0;i<reveal.length;i++){
        let revealTop = reveal[i].getBoundingClientRect().top
        if(revealTop < 350){
            reveal[i].classList.add("nyala")
        }else reveal[i].classList.remove("nyala")
    }

    for(i=0;i<reveal2.length;i++){

        let revealTop2 = reveal2[i].getBoundingClientRect().top

        if(revealTop2 < 350){
            reveal2[i].classList.add("nyala")
        }else reveal2[i].classList.remove("nyala")
    }

})
