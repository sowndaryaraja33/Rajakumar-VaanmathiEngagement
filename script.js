(function(){
  function reveal(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.15});
    els.forEach(function(e){io.observe(e)});
  }
  reveal();
  // Countdown (event starts 9:30 AM India Standard Time, UTC+05:30)
  var target=new Date('2026-12-14T09:30:00+05:30').getTime();
  var ids=['d','h','m','s'].map(function(i){return document.getElementById(i)});
  function p(n){return n<10?'0'+n:''+n}
  function tick(){
    var diff=target-Date.now();
    if(diff<=0){document.getElementById('cd').hidden=true;document.getElementById('cdmsg').hidden=false;return false;}
    var t=Math.floor(diff/1000);
    ids[0].textContent=p(Math.floor(t/86400));
    ids[1].textContent=p(Math.floor(t%86400/3600));
    ids[2].textContent=p(Math.floor(t%3600/60));
    ids[3].textContent=p(t%60);
    return true;
  }
  if(tick()){var iv=setInterval(function(){if(!tick())clearInterval(iv)},1000);}
  // Sharing
  var url=location.href.split('#')[0];
  var text='You’re warmly invited to celebrate the engagement of Rajakumar & Vaanmathi on December 14, 2026. We would love to have your presence and blessings! 💜';
  document.getElementById('wa').href='https://wa.me/?text='+encodeURIComponent(text+' '+url);
  document.getElementById('share').addEventListener('click',function(){
    if(navigator.share){navigator.share({title:'Rajakumar & Vaanmathi – Engagement',text:text,url:url}).catch(function(){});}
    else{window.open(document.getElementById('wa').href,'_blank','noopener');}
  });
})();