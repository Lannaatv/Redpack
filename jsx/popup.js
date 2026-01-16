var popup = document.querySelector(".popup");
    var dismiss = document.querySelector(".pop__dismiss");
    var donate = document.querySelector(".pop__dismiss");
    
    setTimeout(function(){
        popup.classList.add("popup--show")
    },3000)
    
    dismiss.addEventListener("click",function(){
        console.log("kil dismiss");
        popup.classList.remove("popup--show");
        popup.classList.add("popup--close");
    })
    donate.addEventListener("click",function(){
        console.log("kil donate");
        popup.classList.remove("popup--show");
        popup.classList.add("popup--close");
        
    })