// HERO AUTO SLIDER
let slides=document.querySelectorAll('.slide');
let index=0;
setInterval(()=>{
slides[index].classList.remove('active');
index=(index+1)%slides.length;
slides[index].classList.add('active');
},3000);

// WhatsApp smart popup
setTimeout(()=>{
alert("Need help? Chat with Mukulika School on WhatsApp!");
},5000);

// Lightbox
document.addEventListener("click",e=>{
if(e.target.classList.contains("lightbox")){
window.open(e.target.src,"_blank");
}
});

// Language Toggle (Demo)
function toggleLang(){
document.querySelectorAll('.lang').forEach(el=>{
el.innerText="বাংলা ভার্সন টেক্সট (Edit later)";
});
}