(()=>{const K="__wm",F=5e3,R=3e5,r=a=>a[Math.random()*a.length|0],s=()=>{const w=document.createElement("div");
w.textContent="@vestionz";
Object.assign(w.style,{
position:"fixed",
top:Math.random()*80+10+"%",
left:r(["-200px","100%"]),
fontSize:"28px",
fontWeight:600,
opacity:.07,
color:"#fff",
pointerEvents:"none",
zIndex:9999,
transform:`rotate(${r([-25,-15,0,15,25])}deg)`,
whiteSpace:"nowrap"
});
document.body.append(w);
let p=-200,d=w.style.left==="100%"?-1:1;
setInterval(()=>{p+=2*d;w.style.left=p+"px";p>innerWidth+200||p<-400&&w.remove()},30)
};
setTimeout(()=>{(!localStorage[K]||Date.now()-localStorage[K]>R)&&(localStorage[K]=Date.now(),s())},F)})();
