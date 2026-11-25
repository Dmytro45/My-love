const confessions = [
  'Киця моя, ці два місяці з тобою стали для мене маленькою казкою. ♡',
  'Ти моє сонечко навіть у найпохмуріший день.',
  'Мені подобається твоя усмішка. Хочу бачити її якомога частіше, зайченятко.',
  'Найбільше на світі хочу обійняти тебе дуже дуже дуже міцно і не відпускати ніколи.',
  'Ти найпрекрасніша, лапочко. Навіть коли сама не помічаєш і думаєш по іншому.',
  'Дякую, що ти є. За кожну розмову, кожен жарт і кожну ніжність.',
  'Моє кроленятко, з тобою навіть звичайні моменти стають особливими.',
  'Я хочу й далі створювати з тобою спогади — маленькі, великі й дуже щасливі.',
  'Якби можна було обрати ще раз, я б знову обрав тебе, моя люба.',
  'І це лише наші перші два місяці. Попереду ще стільки тепла. Люблю тебе, киця! ♡'
];

const button = document.getElementById('nextButton');
const messages = document.getElementById('messages');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
const tinyNote = document.getElementById('tinyNote');

let current = 0;

button.addEventListener('click', () => {
  if (current >= confessions.length) return;

  const paragraph = document.createElement('p');
  paragraph.className = 'message';
  paragraph.textContent = confessions[current];
  messages.replaceChildren(paragraph);

  current += 1;
  counter.textContent = `${current} / ${confessions.length}`;
  progress.style.width = `${(current / confessions.length) * 100}%`;

  if (current < confessions.length) {
    button.innerHTML = `Наступна кнопочка <span>♡</span>`;
    tinyNote.textContent = current === 9 ? 'І останнє, найніжніше зізнання...' : 'Ще одне маленьке зізнання для тебе 💗';
  } else {
    button.textContent = 'Усі зізнання відкрито ♡';
    button.disabled = true;
    tinyNote.textContent = 'Міцно-міцно обіймаю тебе, моє сонечко!';
    createHearts();
  }
});

function createHearts() {
  const heart = document.createElement('div');
  heart.textContent = '♡  ♥  ♡';
  heart.style.cssText = 'margin-top:14px;color:#df8ca6;font-size:1.5rem;letter-spacing:.5rem;animation:appear .6s ease both;';
  messages.appendChild(heart);
}
