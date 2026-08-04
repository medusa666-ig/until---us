
// CHANGE THESE DATES
const start = new Date('2026-08-04T00:00:00');
const target = new Date('2026-08-23T18:00:00');

const notes=[
"One day closer. 🤍",
"Someone can't wait to hug you.",
"Distance is temporary.",
"Take care of yourself today.",
"You've got this.",
"Every sunrise is one less to wait."
];

document.getElementById('noteBtn').onclick=()=>{
 const day=Math.floor((Date.now()/86400000));
 document.getElementById('note').textContent=notes[day%notes.length];
};

function tick(){
 const now=new Date();
 let diff=target-now;
 if(diff<0){document.body.innerHTML='<main class="card"><h1>🤍 Finally.</h1><p>Go hug each other.</p></main>';return;}
 const d=Math.floor(diff/86400000); diff%=86400000;
 const h=Math.floor(diff/3600000); diff%=3600000;
 const m=Math.floor(diff/60000); diff%=60000;
 const s=Math.floor(diff/1000);
 days.textContent=d;hours.textContent=h;minutes.textContent=m;seconds.textContent=s;

 const total=target-start;
 const passed=now-start;
 let p=Math.max(0,Math.min(100,passed/total*100));
 bar.style.width=p+'%';
 percent.textContent=p.toFixed(1)+'% of waiting is already over';
}
setInterval(tick,1000);tick();
