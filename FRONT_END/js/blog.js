document.getElementById("continue2").addEventListener("click",function(){
    localStorage.clear();
    let changeimg=$('#image2').attr("src");
    localStorage.setItem("changed",changeimg);
    
})
document.getElementById("continue1").addEventListener("click",function(){
    localStorage.clear();
    let changeimg=$('#image1').attr("src");
    localStorage.setItem("changed",changeimg);
    
})
document.getElementById("continue3").addEventListener("click",function(){
    localStorage.clear();
    let changeimg=$('#image3').attr("src");
    localStorage.setItem("changed",changeimg);
    
})
document.getElementById("continue4").addEventListener("click",function(){
    localStorage.clear();
    let changeimg=$('#image4').attr("src");
    localStorage.setItem("changed",changeimg);
    
})
document.getElementById("continue5").addEventListener("click",function(){
    localStorage.clear();
    let changeimg=$('#image5').attr("src");
    localStorage.setItem("changed",changeimg);
    
})