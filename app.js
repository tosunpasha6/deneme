var foto = document.getElementById("foto") 
var buton1= document.getElementById("buton1")
var buton2= document.getElementById("buton2")
var x = 0

buton1.addEventListener("click", function(){
if(x<1){
    ++x
    console.log(x)
}

if(x==1){
    foto.src= "pexels-vlad-alexandru-popa-1402787.jpg"
}

})

buton2.addEventListener("click", function(){
    if(x == 1){
        --x

        console.log(x)
    }
    if(x==0){
        foto.src= "pexels-jay-pizzle-3802510.jpg"
    }
  
    
    
    })




