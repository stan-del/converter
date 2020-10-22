let input=document.querySelector('#input');
var ItemList=document.querySelector('.collection');
input.addEventListener('input', onInput);
function onInput(e){
let no= e.target.value;

document.querySelector('#kg').textContent=no/1000;
document.querySelector('#He').textContent=no/100;
document.querySelector('#De').textContent=no/10;

document.querySelector('#Dec').textContent=no*10;
document.querySelector('#cm').textContent=no*100;
document.querySelector('#mm').textContent=no*1000;

if(no===''){
    ItemList.style.opacity='0'
}
else{
    ItemList.style.opacity='1'
}


}

