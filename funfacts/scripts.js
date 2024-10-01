// Lade die Daten aus data.js
const randomIndex = Math.floor(Math.random() * data.length);
const selectedData = data[randomIndex];

// Extrahiere den Prozentwert, Text und Farbe aus den Daten
const randomPercentage = parseInt(selectedData.percentage); // Entfernt das '%' Zeichen und wandelt in Zahl um
const invisiblePercentage = 100 - randomPercentage; // Unsichtbarer Anteil der Fläche
const randomColor = selectedData.color;
const colorDescription = selectedData.text;

// Setze die Hintergrundfarbe basierend auf den ausgewählten Daten
const animatedDiv = document.getElementById('animatedDiv');
animatedDiv.style.backgroundColor = randomColor;

// Funktion zum Hochzählen der Prozentzahl
function animateCounter(finalValue, duration) {
  const percentageText = document.getElementById('percentageText');
  let currentValue = 0;
  const increment = finalValue / (duration / 50);
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      currentValue = finalValue;
      clearInterval(interval);
    }
    percentageText.textContent = Math.floor(currentValue) + '%';
  }, 50);
}

// Starte die Animation
window.onload = function() {
  // Setze die Position des Balkens basierend auf dem unsichtbaren Prozentsatz
  animatedDiv.style.left = `-${invisiblePercentage}vw`; // Verschiebt die Fläche um den unsichtbaren Prozentsatz

  // Starte die Zählanimation für den sichtbaren Prozentsatz
  animateCounter(randomPercentage, 1000); // Die Zahl wird hochgezählt

  // Setze die Breite der Farbbeschreibung basierend auf dem sichtbaren oder unsichtbaren Prozentsatz
  const descriptionElement = document.getElementById('colorDescription');
  descriptionElement.textContent = colorDescription;

  // Verstecke die Beschreibung initial (über CSS wird die Transparenz gesteuert)
  descriptionElement.style.opacity = 0;

  if (randomPercentage >= 50) {
    descriptionElement.style.width = `calc(${randomPercentage}% - 100px)`; // Dynamische Breite anpassen für Sichtbarkeit
    animatedDiv.style.alignItems = 'flex-end'; // Bei >= 50% rechtsbündig ausrichten
  } else {
    descriptionElement.style.width = `calc(${invisiblePercentage}% - 100px)`; // Dynamische Breite anpassen, wenn Text rechts steht
    animatedDiv.style.alignItems = 'flex-start'; // Bei < 50% linkslastig ausrichten
  }

  // Wenn der sichtbare Prozentsatz unter 50% liegt
  if (randomPercentage < 50) {
    const percentageText = document.getElementById('percentageText');

    [percentageText, descriptionElement].forEach(element => {
      element.style.color = randomColor; // Textfarbe gleich Hintergrundfarbe
      element.style.position = 'relative';
      element.style.left = `100vw`; // Text rechts neben der Fläche
      element.style.textAlign = 'left'; // Links ausgerichtet
    });
  }

  // Warte, bis die Verschiebungs- und Zählanimation abgeschlossen sind (2 Sekunden)
  setTimeout(() => {
    // Füge die Einblendanimation hinzu (über eine Sekunde)
    descriptionElement.style.transition = 'opacity 1s';
    descriptionElement.style.opacity = 1; // Einblenden des Textes
  }, 1000); // 2 Sekunden Verzögerung (nach der Hauptanimation)
};