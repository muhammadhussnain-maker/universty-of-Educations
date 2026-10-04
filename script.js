const $=s=>document.querySelector(s);document.addEventListener('DOMContentLoaded',()=>{const y=$('#year');if(y)y.textContent=new Date().getFullYear();const imgs=['https://ue.edu.pk/icp2022/assets/img/ue/1.png','https://ue.edu.pk/icp2022/assets/img/ue/2.jpg','https://ue.edu.pk/icp2022/assets/img/ue/3.png'];const titles=['Faisalabad Campus','Campus Moment','University of Education'];const desc=['Real campus photography.','A real University of Education campus moment.','Real photography presented with a cinematic interface.'];const sceneImg=$('#sceneImg');document.querySelectorAll('.scene-buttons button').forEach((b,i)=>b.addEventListener('click',()=>{document.querySelectorAll('.scene-buttons button').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(sceneImg){sceneImg.src=imgs[i];sceneImg.alt=titles[i];$('#sceneNo').textContent=`PHOTO 0${i+1} / 03`;const t=document.getElementById('sceneTitle');if(t)t.textContent=titles[i];const d=document.getElementById('sceneDesc');if(d)d.textContent=desc[i]}}));document.querySelectorAll('.number-grid b[data-n]').forEach(el=>{const n=+el.dataset.n;let v=0;const step=Math.max(1,Math.ceil(n/30));const tick=()=>{v=Math.min(n,v+step);el.textContent=v;if(v<n)requestAnimationFrame(tick)};const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){tick();io.disconnect()}},{threshold:.4});io.observe(el)});});function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.style.cssText='position:fixed;bottom:24px;right:24px;z-index:99;background:#07111d;color:#fff;padding:15px 18px;border-radius:12px;box-shadow:0 15px 40px rgba(0,0,0,.3);font-size:13px';setTimeout(()=>t.style.display='none',2600)}window.toast=toast;
(function(){const host=document.getElementById('realPhotoCollection');if(!host)return;const base='https://ue.edu.pk/icp2022/assets/img/ue/';const candidates=[];for(let n=1;n<=20;n++){for(const ext of ['png','jpg','jpeg','webp'])candidates.push(`${n}.${ext}`)}const seen=new Set();candidates.forEach(file=>{const im=new Image();im.onload=()=>{if(seen.has(file))return;seen.add(file);const a=document.createElement('a');a.className='real-wall-card';a.href=base+file;a.target='_blank';a.rel='noopener';const pic=document.createElement('img');pic.src=base+file;pic.alt='University of Education Faisalabad Campus photograph';pic.loading='lazy';a.appendChild(pic);host.appendChild(a)};im.src=base+file});})();


function startOfficialApplication(){
  const campus=document.getElementById('applyCampus')?.value||'Faisalabad Campus';
  const level=document.getElementById('applyLevel')?.value||'BS / B.Ed';
  const field=document.getElementById('applyField')?.value||'Education';
  sessionStorage.setItem('ue_apply_selection', JSON.stringify({campus,level,field}));
  window.open('http://ums.ue.edu.pk/','_blank','noopener');
  toast('Your selection is ready. The official UE UMS portal opened in a new tab.');
}

const deptSearch=document.getElementById('deptSearch');
if(deptSearch){
  deptSearch.addEventListener('input',()=>{
    const q=deptSearch.value.trim().toLowerCase(); let visible=0;
    document.querySelectorAll('.connected-dept').forEach(card=>{
      const ok=card.dataset.name.includes(q); card.style.display=ok?'block':'none'; if(ok) visible++;
    });
    const count=document.getElementById('deptCount'); if(count) count.textContent=visible+' department'+(visible===1?'':'s');
  });
}
