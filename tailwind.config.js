/* Tailwind é usado em um componente só: o cartão "O que acontece depois", em contato.html.
   O preflight (reset do Tailwind) fica desligado para não mexer no resto do site, que é CSS puro. */
module.exports = {
  content: ['./contato.html'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: { ink: '#071E1C', gold: '#C9A227', muted: '#3E4B48' },
      fontFamily: { serif: ['"Playfair Display"', 'Georgia', 'serif'] }
    }
  }
};
