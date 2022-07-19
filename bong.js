let imgobj=null;
imgobj=document.getElementById("myImage");
function init(){
    imgobj=document.getElementById("myImage");
    imgobj.style.position='relative';
    imgobj.style.left='0px';
}
function moveright(){
    imgobj.style.left=parseInt(imgobj.style.left) +10 +'px';
}
window.onload= init;