/* ====== CONFIGURE AQUI ====== */
var CONFIG = {
  link: "#SEU-LINK",         // link de compra
  whatsapp: "#SEU-WHATSAPP", // ex.: https://wa.me/55...
  area: "#",                 // área do aluno
  garantia: "7 dias",
  garantiaNum: "7"
};
/* ============================ */
/* ====== FEEDBACKS DOS ALUNOS (carrossel) ======
   Adicione quantos quiser, um por linha. Dois formatos:
   1) Texto:  {nome:"Maria S.", curso:"aprovada no CPA", texto:"Seu depoimento aqui"},
   2) Print/imagem:  {img:"feedback1.jpg", alt:"Print de feedback de aluno"},
   Os 6 abaixo são ILUSTRATIVOS: troque pelos reais (com autorização dos alunos). */
var FEEDBACKS = [
  {nome:"Fernanda Massih", curso:"aprovada pela Certifica", texto:"Vocês possuem uma didática incrível, extremamente atenciosa e materiais completos e super aderentes ao conteúdo da prova."},
  {nome:"Mirian Florentino Nunes", curso:"aprovada pela Certifica", texto:"Vocês tem métodos e didáticas incríveis. Aprendi tanto a teoria como as questões de cálculo sobre providência com vocês de uma forma leve e assertiva"},
  {nome:"Levi Garcia", curso:"aprovado pela Certifica", texto:"Sou grato pelo conteúdo durante meu preparo para a certificação CEA. Vocês são especialistas em identificar e superar as dificuldades dos alunos em cada assunto. Método diferente dos outros que já experimentei em escolas de certificação, foi o único que realmente funcionou."},
  {nome:"Vitória de Paula", curso:"aprovada pela Certifica", texto:"Vocês sem dúvidas são os melhores mentores do mercado financeiro. Oferece conteúdos extremamente didáticos, personalizados as nossas necessidades e dificuldades. Comunicação clara e assertiva. Recomendo 100%."},
  {nome:"Alex Rezende", curso:"aprovado pela Certifica", texto:"Conquistei minha certificação ANBIMA CPA20 em dezembro de 2022, após perder meu pai para um câncer. E sou eternamente grato a vocês pelo apoio incondicional. A didática de ensino é fantástica, e consegue passar de forma clara e simples, qualquer conteúdo mais dificil que seja."},
  {nome:"Lilian Araujo", curso:"aprovada pela Certifica", texto:"Passei na CPRO-R."},
  {nome:"Sali EMP", curso:"aprovada pela Certifica", texto:"Sou fã de vocês. Meus parabéns pela didática, por tudo e compartilhar conosco esse conhecimento."}
];
(function(){
  var t=document.getElementById('carTrack'),cnt=document.getElementById('carCount');
  if(!t)return;
  FEEDBACKS.forEach(function(f){
    var d=document.createElement('div');d.className='fb';d.setAttribute('role','group');
    if(f.img){d.classList.add('img');var i=document.createElement('img');i.src=f.img;i.alt=f.alt||'Depoimento de aluno';i.loading='lazy';d.appendChild(i)}
    else{var p=document.createElement('p');p.textContent='“'+f.texto+'”';var ft=document.createElement('footer'),av=document.createElement('b'),tx=document.createElement('span');av.textContent=f.nome.trim().split(/\s+/).filter(function(w,k,a){return k==0||k==a.length-1}).map(function(w){return w[0]}).join('').toUpperCase();av.setAttribute('aria-hidden','true');tx.textContent=f.nome+(f.curso?' · '+f.curso:'');ft.appendChild(av);ft.appendChild(tx);d.appendChild(p);d.appendChild(ft)}
    t.appendChild(d)
  });
  function step(){var c=t.firstElementChild;return c?c.getBoundingClientRect().width+(parseFloat(getComputedStyle(t).columnGap)||16):300}
  function upd(){var i=Math.min(FEEDBACKS.length,Math.round(t.scrollLeft/step())+1);cnt.textContent=i+' / '+FEEDBACKS.length}
  document.getElementById('carPrev').onclick=function(){if(t.scrollLeft<=4){t.scrollTo({left:t.scrollWidth})}else{t.scrollBy({left:-step()})}};
  document.getElementById('carNext').onclick=function(){if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4){t.scrollTo({left:0})}else{t.scrollBy({left:step()})}};
  t.addEventListener('scroll',upd,{passive:true});upd();
})();
document.getElementById('y').textContent=new Date().getFullYear();
function set(s,f){document.querySelectorAll(s).forEach(f)}
set('.buy',function(a){if(!a.closest('.bar'))a.href=CONFIG.link});
set('[data-buy]',function(a){a.href=CONFIG.link});
set('.wpp',function(a){a.href=CONFIG.whatsapp});
set('.area',function(a){a.href=CONFIG.area});
set('[data-garantia]',function(e){e.textContent=CONFIG.garantia});
set('[data-gnum]',function(e){e.textContent=CONFIG.garantiaNum});

(function(){var d=document.documentElement;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;d.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in')},800)}})},{threshold:.12});
document.querySelectorAll('.head,.lvl,.card,.combo,.pil,.step,.note,.since,.motto,.stats,.fb,details,.bonus').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)})})();
