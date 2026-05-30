// ════ 捲動淡入 ════
const obs = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('in'), (i%4)*110);
      obs.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ════ Hero 低語的夢核抖動 ════
const gn = document.querySelector('.glitch-name');
if(gn){
  const words = ['今晚','三十年前','明天','已經太遲'];
  let gi = 0;
  setInterval(()=>{
    if(Math.random() > .7){
      gi = (gi+1) % words.length;
      gn.style.opacity = '0';
      setTimeout(()=>{ gn.textContent = words[gi]; gn.style.opacity = '1'; }, 250);
    }
  }, 3800);
}

// ════ 標示當前分頁 ════
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav.bar .links a').forEach(a=>{
  if(a.getAttribute('href') === here) a.classList.add('active');
});
