const hamburger=document.querySelector(' #nav .navcontainer .navbar .navlist .hamburger');
const mobile_menu=document.querySelector('#nav .navcontainer .navbar .navlist ul');
const header=document.getElementById('#nav')

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
let scroll_pos=window.scrollY;
if(scroll_pos>250){
  header.style.backgroundColor="#29323c";
}
else{
    header.style.backggroundColor="transparent"
}
});