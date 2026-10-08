(()=>{const d=document,h=d.documentElement;h.classList.add('js');
const b=d.querySelector('.menu-toggle'),n=d.getElementById('nav');
if(b&&n){const c=()=>{b.setAttribute('aria-expanded','false');n.classList.remove('is-open')};
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',o);n.classList.toggle('is-open',o)});
n.addEventListener('click',e=>{if(e.target.closest('a'))c()});d.addEventListener('keydown',e=>{if(e.key==='Escape')c()});d.addEventListener('click',e=>{if(!e.target.closest('header'))c()})}
const p=d.querySelector('.progress'),f=()=>{const t=h.scrollHeight-innerHeight;p.style.transform=`scaleX(${t>0?Math.min(1,scrollY/t):0})`};
addEventListener('scroll',()=>requestAnimationFrame(f),{passive:true});f();
if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.08});
d.querySelectorAll('.rv').forEach(x=>o.observe(x));
const ls=[...d.querySelectorAll('.jump-nav a')];if(ls.length){const s=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(l=>l.classList.toggle('is-active',l.hash==='#'+e.target.id))}),{rootMargin:'-20% 0px -65% 0px'});
ls.forEach(l=>{const t=d.getElementById(l.hash.slice(1));t&&s.observe(t)})}}
else d.querySelectorAll('.rv').forEach(x=>x.classList.add('in'))})();
