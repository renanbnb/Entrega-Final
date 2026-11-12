/* Comportamentos das páginas index.html, grupo.html e contato.html.
   Cada bloco confere se o elemento existe, porque nem toda página tem todos. */
(function () {
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var calm = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* 1. Cabeçalho: ganha fundo ao rolar. Menu do celular: abre, fecha e fecha no Esc. */
  var hd = $('#hd'), mb = $('.mb'), menu = $('#menu');
  function sc() { hd.classList.toggle('on', scrollY > 24); }
  sc();
  addEventListener('scroll', sc, { passive: true });
  function tg(open) {
    menu.classList.toggle('open', open);
    mb.setAttribute('aria-expanded', open);
    mb.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (open) hd.classList.add('on'); else sc();
  }
  mb.addEventListener('click', function () { tg(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') tg(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) { tg(false); mb.focus(); }
  });

  /* 2. Abertura do início: os quatro exemplos se alternam e podem ser escolhidos nas abas. */
  var hpic = $('#hpic');
  if (hpic) {
    var himg = $$('#hpic img'), url = $('#url'), tabs = $$('.tabs button'), tabw = $('.tabs');
    var show = function (k) {
      himg.forEach(function (im, i) { im.classList.toggle('on', i === k); });
      tabs.forEach(function (t, i) { t.classList.toggle('on', i === k); t.setAttribute('aria-selected', i === k); });
      url.textContent = himg[k].dataset.url;
      hpic.dataset.zoom = himg[k].dataset.full;
      hpic.dataset.alt = himg[k].alt;
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.querySelector('i').addEventListener('animationend', function () { show((i + 1) % tabs.length); });
    });
    if (calm) tabw.classList.add('still');
  }

  /* 3. "O que fazemos": abre um item, fecha os outros e troca o exemplo ao lado. */
  var wf = $$('.wf');
  if (wf.length) {
    var wimg = $$('#wpic img'), wurl = $('#wurl'), wpic = $('#wpic');
    var pick = function (i) {
      wf.forEach(function (w, k) {
        var on = k === i;
        w.classList.toggle('on', on);
        w.firstElementChild.setAttribute('aria-expanded', on);
      });
      wimg.forEach(function (im, k) { im.classList.toggle('on', k === i); });
      wurl.textContent = wf[i].dataset.url;
      wpic.dataset.zoom = wimg[i].dataset.full;
      wpic.dataset.alt = wimg[i].alt;
    };
    wf.forEach(function (w, i) { w.firstElementChild.addEventListener('click', function () { pick(i); }); });
  }

  /* 4. Método: quatro etapas em abas, com as setas do teclado. */
  var st = $$('.step');
  if (st.length) {
    var pn = $$('.panel'), steps = $('#steps');
    var go = function (i) {
      st.forEach(function (b, k) {
        b.classList.toggle('on', k === i);
        b.classList.toggle('done', k < i);
        b.setAttribute('aria-selected', k === i);
        b.tabIndex = k === i ? 0 : -1;
      });
      pn.forEach(function (p, k) { p.classList.toggle('on', k === i); });
      steps.style.setProperty('--k', i / (st.length - 1));
    };
    st.forEach(function (b, i) {
      b.tabIndex = i ? -1 : 0;
      b.addEventListener('click', function () { go(i); });
      b.addEventListener('keydown', function (e) {
        var m = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? i + 1
              : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? i - 1 : -1;
        if (m >= 0 && m < st.length) { e.preventDefault(); go(m); st[m].focus(); }
      });
    });
  }

  /* 5. Conversa de manutenção: as mensagens entram quando a seção aparece na tela. */
  var chat = $('#chat');
  if (chat) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: .45 });
      io.observe(chat);
    } else chat.classList.add('in');
  }

  /* 6. Grupo ARB: troca a tela da plataforma conforme a aba. */
  var pt = $$('.ptab');
  if (pt.length) {
    var pi = $$('#ppic img'), pp = $('#ppic');
    pt.forEach(function (b, i) {
      b.addEventListener('click', function () {
        pt.forEach(function (x, k) { x.classList.toggle('on', k === i); x.setAttribute('aria-selected', k === i); });
        pi.forEach(function (im, k) { im.classList.toggle('on', k === i); });
        pp.dataset.zoom = pi[i].dataset.full;
        pp.dataset.alt = pi[i].alt;
      });
    });
  }

  /* 7. Ampliar um exemplo: abre a imagem grande numa janela e fecha no botão, no Esc ou clicando fora. */
  var dg = $('#zoom');
  if (dg && dg.showModal) {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-zoom]');
      if (b) {
        var im = dg.querySelector('img');
        im.src = b.dataset.zoom;
        im.alt = b.dataset.alt || '';
        dg.showModal();
        return;
      }
      if (e.target === dg || e.target.closest('#zoom button')) dg.close();
    });
  }
})();
