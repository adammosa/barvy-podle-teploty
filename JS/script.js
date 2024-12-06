const buttons = document.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const audioPlayer = document.getElementById('audioPlayer');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    const text = button.getAttribute('data-text');
    const sound = button.getAttribute('data-sound');

    // Nastavení pozadí s plynulou změnou
    document.body.style.backgroundColor = color;

    // Zobrazení textu s animací opacity
    phrase.style.opacity = 0; // Skryj text
    setTimeout(() => {
      phrase.textContent = text; // Změň text
      phrase.style.opacity = 1; // Zobraz text
    }, 500);

    // Přehrání zvuku
    audioPlayer.src = sound;
    audioPlayer.play();
  });
});
