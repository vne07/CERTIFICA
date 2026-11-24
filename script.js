/* ====== CONFIGURE AQUI ====== */
var CONFIG = {
  promo: true,              // faixa de oferta no topo (true mostra, false esconde)
  links: {                   // um link de compra para cada curso
    cpa:   "https://pay.hotmart.com/I108519043K",
    cpror: "https://pay.hotmart.com/O108519150E",
    cproi: "https://pay.hotmart.com/B108519277U",
  },
  link: "https://pay.hotmart.com/M108536602J",         // link geral (usado só no botão do combo)
  whatsapp: "https://wa.me/5519999116914", // WhatsApp de contato: (19) 99911-6914
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
  {nome:"Sali EMP", curso:"aprovada pela Certifica", texto:"Sou fã de vocês. Meus parabéns pela didática, por tudo e compartilhar conosco esse conhecimento."},
  {nome:"anônimo", curso:"aprovado pela Certifica", texto:"Comprei os mapas mentais esse mês, minha prova é na próxima semana. Foram ótimos para sintetizar o conteúdo e revisar, e tbm os simulados agregaram bastante nos meus estudos. Já indiquei pra muita gente!!"},
  {nome:"anônimo", curso:"aprovado pela Certifica", texto:"Os mapas mentais foram um achado nessa minha reta final da minha preparação para a prova. Me ajudou demais a repassar todos os conceitos e consegui passar na prova, Muito obrigada Mesmo!"},
  {nome:"anônimo", curso:"aprovado pela Certifica", texto:"Deixei para estudar em cima da hora e os mapas estão sendo um verdadeiro salva-vidas. O plano de revisão de 7 dias também é essencial pra organizar os últimos estudos."},
];
(function(){
  var t=document.getElementById('carTrack');
  if(!t)return;
  FEEDBACKS.forEach(function(f){
    var d=document.createElement('div');d.className='fb';d.setAttribute('role','group');
    if(f.img){d.classList.add('img');var i=document.createElement('img');i.src=f.img;i.alt=f.alt||'Depoimento de aluno';i.loading='lazy';d.appendChild(i)}
    else{var p=document.createElement('p');p.textContent='“'+f.texto+'”';var ft=document.createElement('footer'),av=document.createElement('b'),tx=document.createElement('span');av.textContent=f.nome.trim().split(/\s+/).filter(function(w,k,a){return k==0||k==a.length-1}).map(function(w){return w[0]}).join('').toUpperCase();av.setAttribute('aria-hidden','true');tx.textContent=f.nome+(f.curso?' · '+f.curso:'');ft.appendChild(av);ft.appendChild(tx);d.appendChild(p);d.appendChild(ft)}
    t.appendChild(d)
  });
  /* Computador: loop contínuo, pausa ao passar o mouse.
     Celular (tela de até 860 px) ou "reduzir movimento" ativado no aparelho: carrossel de deslizar, um depoimento por vez, para ler com calma. */
  var car=t.parentNode,n=t.children.length;
  var calm=matchMedia('(max-width:860px),(prefers-reduced-motion:reduce)');
  var hint=document.createElement('p');hint.className='car-hint';hint.textContent='Deslize para o lado para ler os próximos \u2192';car.appendChild(hint);
  function go(){if(!car.classList.contains('loop'))return;var w=t.children[n].offsetLeft-t.children[0].offsetLeft;t.style.setProperty('--shift','-'+w+'px');t.style.setProperty('--dur',(w/45)+'s')}
  function apply(){
    var loop=car.classList.contains('loop');
    if(calm.matches){
      if(loop){[].slice.call(t.querySelectorAll('.clone')).forEach(function(c){c.remove()});car.classList.remove('loop');t.scrollLeft=0}
      t.setAttribute('tabindex','0')
    }else{
      if(!loop){for(var k=0;k<n;k++){var c=t.children[k].cloneNode(true);c.className+=' clone';c.setAttribute('aria-hidden','true');t.appendChild(c)}car.classList.add('loop');t.removeAttribute('tabindex')}
      go()
    }
  }
  apply();window.addEventListener('resize',go);
  if(calm.addEventListener)calm.addEventListener('change',apply);else if(calm.addListener)calm.addListener(apply);
})();
if(!CONFIG.promo){var pr=document.querySelector('.promo');if(pr)pr.remove()}
document.getElementById('y').textContent=new Date().getFullYear();
function set(s,f){document.querySelectorAll(s).forEach(f)}
set('.buy',function(a){if(!a.closest('.bar')&&!a.dataset.curso)a.href=CONFIG.link});
set('[data-curso]',function(a){a.href=CONFIG.links[a.dataset.curso]||CONFIG.link});
set('.wpp',function(a){a.href=CONFIG.whatsapp});
set('.area',function(a){a.href=CONFIG.area});
set('[data-garantia]',function(e){e.textContent=CONFIG.garantia});
set('[data-gnum]',function(e){e.textContent=CONFIG.garantiaNum});

(function(){var d=document.documentElement;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;d.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in')},800)}})},{threshold:.12});
document.querySelectorAll('.head,.lvl,.card,.combo,.pil,.step,.note,.since,.motto,.stats,details,.bonus').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)})})();
