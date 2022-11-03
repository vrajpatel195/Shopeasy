const bar= document.getElementById('bar');
const close1= document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close1){
    close1.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

//cart
if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}
//making function
function ready() {
    var removecartbuttons = document.getElementsByClassName('close-cart')
    console.log(removecartbuttons);
    for(var i=0;i<removecartbuttons.length;i++){
        var button =removecartbuttons[i];
        button.addEventListener('click', removeCartItem);
    }
}

//remove items from cart
function removeCartItem(event){
    var buttonClicked =event.target;
    buttonClicked.parentElement.remove();
}