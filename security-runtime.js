/* BẪY SỐ v1.1 — safety runtime. Simulation-only. No sensitive data collection. */
(function(){'use strict';
  var script=document.currentScript;
  var base=script&&script.getAttribute('data-base')||'';
  var url=(base?base.replace(/\/$/,'')+'/':'')+'security/emergency.json';
  function lock(){document.documentElement.classList.add('emergency-active');document.querySelectorAll('a,button,input,textarea,select').forEach(function(el){el.setAttribute('disabled','disabled');el.setAttribute('aria-disabled','true');});}
  function show(msg){if(document.getElementById('security-emergency'))return;var box=document.createElement('div');box.id='security-emergency';box.className='security-emergency';var inner=document.createElement('div');inner.className='security-emergency-card';var h=document.createElement('h1');h.textContent='⚠️ HỆ THỐNG TẠM THỜI BẢO TRÌ';var p=document.createElement('p');p.textContent=msg||'Nền tảng đang được kiểm tra an toàn thông tin. Vui lòng quay lại sau.';inner.append(h,p);box.append(inner);document.body.append(box);lock();}
  fetch(url,{cache:'no-store',credentials:'omit'}).then(function(r){if(!r.ok)throw new Error('emergency config unavailable');return r.json();}).then(function(c){if(c&&c.enabled===true)show(c.message);}).catch(function(){/* Availability failure does not expose sensitive data; external monitoring remains authoritative. */});
}());
