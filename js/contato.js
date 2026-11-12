/* Formulário de proposta.
   A validação é a do próprio navegador (required, type, minlength, pattern).
   Este arquivo só troca o balão padrão por uma mensagem nossa embaixo de cada campo,
   conta os caracteres do texto, formata o telefone e monta o resumo sem recarregar a página. */
(function () {
  var form = document.getElementById('form');
  if (!form) return;
  var ok = document.getElementById('ok');
  var resumo = document.getElementById('resumo');
  var campos = [].slice.call(form.querySelectorAll('input, select, textarea'));

  var textos = {
    nome:   { valueMissing: 'Escreva o seu nome.', tooShort: 'O nome precisa ter pelo menos 3 letras.' },
    email:  { valueMissing: 'Escreva o seu e-mail.', typeMismatch: 'Este e-mail parece incompleto. Exemplo: voce@empresa.com.br' },
    whats:  { valueMissing: 'Escreva o seu WhatsApp com DDD.', patternMismatch: 'Use o formato (61) 90000-0000, com o DDD.' },
    tipo:   { valueMissing: 'Escolha o que você precisa.' },
    msg:    { valueMissing: 'Conte um pouco sobre o seu negócio.', tooShort: 'Escreva pelo menos 20 caracteres, para a gente entender o pedido.' },
    aceite: { valueMissing: 'Marque esta opção para a gente poder responder.' }
  };

  function mensagem(c) {
    var t = textos[c.id] || {}, v = c.validity;
    if (v.valid) return '';
    if (v.valueMissing) return t.valueMissing;
    if (v.typeMismatch) return t.typeMismatch;
    if (v.patternMismatch) return t.patternMismatch;
    if (v.tooShort) return t.tooShort;
    return c.validationMessage;
  }

  function mostrar(c) {
    var p = document.getElementById(c.id + '-erro');
    if (!p) return;
    var m = mensagem(c);
    p.textContent = m;
    if (m) c.setAttribute('aria-invalid', 'true'); else c.removeAttribute('aria-invalid');
  }

  campos.forEach(function (c) {
    /* o navegador dispara "invalid" em cada campo que barrou o envio */
    c.addEventListener('invalid', function (e) {
      e.preventDefault();               /* esconde o balão padrão */
      mostrar(c);
      var primeiro = form.querySelector(':invalid');
      if (primeiro === c) c.focus();     /* leva o foco para o primeiro campo com erro */
    });
    /* depois do primeiro erro, a mensagem se corrige enquanto a pessoa digita */
    c.addEventListener('input', function () { if (c.hasAttribute('aria-invalid')) mostrar(c); });
    c.addEventListener('change', function () { if (c.hasAttribute('aria-invalid')) mostrar(c); });
    c.addEventListener('blur', function () { if (c.value && c.type !== 'checkbox') mostrar(c); });
  });

  /* contador do texto */
  var msg = document.getElementById('msg'), conta = document.getElementById('msg-conta');
  msg.addEventListener('input', function () {
    conta.textContent = msg.value.length + ' de ' + msg.maxLength + ' caracteres';
    conta.classList.toggle('perto', msg.value.length > msg.maxLength - 50);
  });

  /* telefone no formato (61) 90000-0000 enquanto digita */
  var whats = document.getElementById('whats');
  whats.addEventListener('input', function () {
    var d = whats.value.replace(/\D/g, '').slice(0, 11), s = d;
    if (d.length > 2) s = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length > 6) s = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length - 4) + '-' + d.slice(-4);
    whats.value = s;
  });

  /* envio: só chega aqui se o navegador aprovou todos os campos */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var itens = [
      ['Nome', form.nome.value.trim()],
      ['Empresa', form.empresa.value.trim()],
      ['E-mail', form.email.value.trim()],
      ['WhatsApp', form.whats.value],
      ['Precisa de', form.tipo.value],
      ['Sobre o negócio', form.msg.value.trim()]
    ].filter(function (i) { return i[1]; });

    resumo.textContent = '';
    itens.forEach(function (i) {
      var div = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = i[0];
      dd.textContent = i[1];
      div.appendChild(dt); div.appendChild(dd); resumo.appendChild(div);
    });

    var corpo = itens.map(function (i) { return i[0] + ': ' + i[1]; }).join('\n');
    document.getElementById('mail').href = 'mailto:contato@consultoriaarb.com.br?subject=' +
      encodeURIComponent('Pedido de proposta: ' + form.tipo.value) + '&body=' + encodeURIComponent(corpo);

    form.hidden = true;
    ok.hidden = false;
    ok.focus();
  });

  document.getElementById('voltar').addEventListener('click', function () {
    ok.hidden = true;
    form.hidden = false;
    form.nome.focus();
  });
})();
