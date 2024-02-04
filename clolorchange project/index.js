const btn=document.getElementById('button');
const btn2=document.getElementsByTagName("button")
const rendomcolor=()=>{
    let color='#';
    let letters='0123456789ABCDEF';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeColor(){
   document.body.style.backgroundColor=rendomcolor();
   document.button.style.color=rendomcolor();
}
btn.addEventListener('click',changeColor);
function md(){
   
}