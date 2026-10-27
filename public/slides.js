const track=document.querySelector('#main');
const panels=[...track.querySelectorAll(':scope > .slide')];
const dots=[...document.querySelectorAll('[data-slide]')];
let current=0, locked=false, accumulated=0, resetTimer;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function go(index){index=Math.max(0,Math.min(panels.length-1,index));track.scrollTo({top:panels[index].offsetTop,behavior:reduced.matches?'instant':'smooth'});}
function update(){const middle=track.scrollTop+track.clientHeight/2;let closest=0;panels.forEach((p,i)=>{if(p.offsetTop<=middle)closest=i});current=closest;dots.forEach((d,i)=>d.setAttribute('aria-current',i===current?'true':'false'));document.querySelector('#slide-number').textContent=String(current+1).padStart(2,'0');}
track.addEventListener('scroll',update,{passive:true});
dots.forEach(d=>d.addEventListener('click',()=>go(Number(d.dataset.slide))));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target&&track.contains(target)){e.preventDefault();const panel=target.closest('.slide');go(panels.indexOf(panel));}}));
track.addEventListener('wheel',e=>{if(!window.matchMedia('(min-width:1001px) and (min-height:621px)').matches||e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
 const panel=panels[current];if(panel.scrollHeight>track.clientHeight+12)return;
 e.preventDefault();if(locked)return;accumulated+=e.deltaY*(e.deltaMode===1?16:1);clearTimeout(resetTimer);resetTimer=setTimeout(()=>accumulated=0,150);if(Math.abs(accumulated)<35)return;const next=current+(accumulated>0?1:-1);accumulated=0;if(next<0||next>=panels.length)return;locked=true;go(next);setTimeout(()=>locked=false,800);
},{passive:false});
document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select,button,a')||e.ctrlKey||e.altKey||e.metaKey)return;const actions={ArrowDown:current+1,PageDown:current+1,ArrowUp:current-1,PageUp:current-1,Home:0,End:panels.length-1};if(e.key===' ')actions[' ']=current+(e.shiftKey?-1:1);if(e.key in actions){e.preventDefault();go(actions[e.key]);}});
window.addEventListener('resize',update);update();
