const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll('.service-card,.vision-grid article,.cap-item,.hse-grid>div,.gallery-tile,.project-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
