let lang=document.querySelector('html').lang;

let opt;
if(lang==='ko'){
  opt=document.querySelector('option[value="0316_main.html"]');
}else if(lang==='en'){
  opt=document.querySelector('option[value="0316_en.html"]');
}else if(lang==='ja'){
  opt=document.querySelector('option[value="0316_ja.html"]');
}
opt.selected=true;
document.getElementById('form').select.onchange=function(){
  location.href=document.getElementById('form').select.value;
}
