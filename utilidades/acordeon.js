export default function acordeon(wrapperId, pergunta, resposta) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) return;

  const item = document.createElement('div');
  item.className = 'acordeon';
  item.innerHTML = `
    <p class="acordeon-pergunta">
      <span>${pergunta}</span>
      <button class="acordeon-button">+</button>
    </p>
    <p class="acordeon-resposta">
      <span>${resposta}</span>
    </p>
  `;

  const botao = item.querySelector('.acordeon-button');
  botao.addEventListener('click', () => {
    const aberto = item.classList.toggle('ativo');
    botao.textContent = aberto ? '−' : '+';
  });

  wrapper.appendChild(item);
}