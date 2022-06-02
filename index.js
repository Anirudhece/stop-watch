let pause= document.getElementById('pause');
let resume= document.getElementById('resume');
let reset= document.getElementById('reset');

let hrs= document.getElementById('hrs');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

let stime=0;
let mtime=0;
let htime=0;

function tik(){
    stime++ ;
    if(stime==60){
        mtime++;
        stime=0;
    }
    if(mtime==60){
        htime++;
        mtime=0;
    }
    hrs.innerHTML=htime;
    min.innerHTML=mtime;
    sec.innerHTML=stime; 
}

let inter;
function set_inter(){
    inter=setInterval(tik,1000); 
}
set_inter();

reset.addEventListener('click',(fn)=>{
    stime=0;
    mtime=0;
    htime=0;
})

resume.disabled=true ;

pause.addEventListener('click',(fn)=>{
    clearInterval(inter);
    pause.disabled=true;
    resume.disabled=false;
})

resume.addEventListener('click',(fn)=>{
    set_inter();
    resume.disabled=true;
    pause.disabled=false;
})
