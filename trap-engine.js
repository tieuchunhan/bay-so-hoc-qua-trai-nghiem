/* Generic simulation engine. It never collects form values or sends trap data externally. */
(function(){'use strict';
  function qs(s){return document.querySelector(s)}
  function complete(){
    var root=qs('[data-trap]'); if(!root)return;
    var code=root.getAttribute('data-trap');
    try{var k='bayso.local.completed';var d=JSON.parse(localStorage.getItem(k)||'{}');d[code]=Date.now();localStorage.setItem(k,JSON.stringify(d));}catch(e){}
    var reveal=qs('#reveal'); if(reveal)reveal.hidden=false;
    var actions=qs('#actions'); if(actions)actions.hidden=true;
    var note=qs('#done-note'); if(note)note.hidden=false;
    var b=qs('#primary-action'); if(b)b.disabled=true;
  }
  window.BaySo={complete:complete};
  document.addEventListener('DOMContentLoaded',function(){
    var root=qs('[data-trap]'); if(!root)return;
    var b=qs('#primary-action'); if(b)b.addEventListener('click',complete);
    document.querySelectorAll('[data-safe-action]').forEach(function(x){x.addEventListener('click',complete);});
  });
}());
