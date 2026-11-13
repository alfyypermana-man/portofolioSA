const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('[data-qr]').forEach(el=>{
  const url=el.dataset.qr,img=document.createElement('img');img.alt='QR Code';
  img.src='https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=12&data='+encodeURIComponent(url);el.appendChild(img);
});
