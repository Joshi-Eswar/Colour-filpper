const c=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


but= document.querySelector(".buttton");
t=document.querySelector(".texxt");

but.addEventListener("click",function(){
    chcolour="#";
    for(let i=0;i<6;i++){
        chcolour+=c[getrandom()];
    }
    

    document.body.style.backgroundColor=chcolour;
    // document.body.colour.style.backgroundColor=chcolour;
    
    t.textContent=chcolour;

});
function getrandom(){
    return Math.floor(Math.random()*c.length)
}
