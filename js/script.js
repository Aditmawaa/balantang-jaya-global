const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}
}),{threshold:.08});
document.querySelectorAll(".fleet-card,.gallery-grid figure,.card,.hse-card,.project-layout").forEach(x=>{
  x.classList.add("reveal");obs.observe(x);
});
