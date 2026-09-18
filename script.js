//1. Összeadás
function calculateSum() {
  // Kiolvassuk az input mezők értékeit
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  // Ellenőrizzük, hogy mindkét mezőbe írtak-e számot
  if (val1 === '' || val2 === '') {
    document.getElementById('sumResult').innerText = 'Kérlek, adj meg mindkét számot!';
    return;
  }

  // Számmá alakítjuk a bekért szöveget és összeadjuk őket
  let sum = Number(val1) + Number(val2);

  // Kiírjuk az eredményt az oldalra
  document.getElementById('sumResult').innerText = sum;
}

// 2. Páros vagy páratlan
function checkEvenOdd() {
  // Kiolvassuk a beírt értéket
  let val = document.getElementById('evenOddInput').value;

  // Ellenőrizzük, hogy nem maradt-e üresen
  if (val === '') {
    document.getElementById('evenOddResult').innerText = 'Kérlek, adj meg egy számot!';
    return;
  }

  // Számmá alakítjuk
  let num = Number(val);

  // Megvizsgáljuk az osztási maradékot
  if (num % 2 === 0) {
    document.getElementById('evenOddResult').innerText = 'Páros';
  } else {
    document.getElementById('evenOddResult').innerText = 'Páratlan';
  }
}

// 3. Számláló
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById('counter').innerText = count;
}

// 4. Adat bekérése
function askName() {
  let name = prompt('Mi a neved?');
  if (name) {
    // Csak akkor írja ki, ha nem hagyta üresen
    document.getElementById('name').innerText = 'Üdvözöllek a portfóliómban, ' + name + '!';
  }
}

// 5. Visszaszámláló
let isTimerRunning = false;
function startCountdown() {
  if (isTimerRunning) return;
  isTimerRunning = true;

  let timeLeft = 10;
  document.getElementById('countdown').innerText = timeLeft;

  let timer = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerText = 'Idő lejárt!';
      isTimerRunning = false;
    } else {
      document.getElementById('countdown').innerText = timeLeft;
    }
  }, 1000);
}

// 6. Tömb és lista
let hobbies = ['Szoftverfejlesztés', 'Néptánc', 'Borkészítés', 'Forma-1 (McLaren rajongó)'];
let hobbyListElement = document.getElementById('hobbyList');
if (hobbyListElement) {
  hobbies.forEach(function (hobby) {
    hobbyListElement.innerHTML += '<li>' + hobby + '</li>';
  });
}

// 7. Tömb elemeinek szorzása (Képernyőn)
function multiplyArrayOnScreen() {
  let arrStr = document.getElementById('arrayInput').value;
  let multStr = document.getElementById('multiplierInput').value;

  if (arrStr === '' || multStr === '') {
    document.getElementById('arrayResult').innerText =
      'Kérlek, adj meg egy számsort és egy szorzót!';
    return;
  }
  let numbers = arrStr.split(',').map((item) => Number(item.trim()));
  let multiplier = Number(multStr);

  if (numbers.includes(NaN)) {
    document.getElementById('arrayResult').innerText =
      'Hiba! Csak számokat írj be, vesszővel elválasztva.';
    return;
  }

  let result = numbers.map((num) => num * multiplier);

  document.getElementById('arrayResult').innerText = '[ ' + result.join(', ') + ' ]';
}

// 8. Objektum tulajdonságok megjelenítése
let person = {
  név: 'Balog Edit',
  város: 'Marosvásárhely',
  egyetem: 'UMFST',
  szak: 'Informatika',
};
let personInfoElement = document.getElementById('personInfo');
if (personInfoElement) {
  for (let key in person) {
    let capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    personInfoElement.innerHTML +=
      '<li><strong>' + capitalizedKey + ':</strong> ' + person[key] + '</li>';
  }
}

let isDarkBg = false;
function changeBg() {
  if (!isDarkBg) {
    document.body.style.backgroundColor = '#B2DFDB';
    isDarkBg = true;
  } else {
    document.body.style.backgroundColor = '#F0F9F9';
    isDarkBg = false;
  }
}

// 10. Időzítő üdvözlő üzenet
window.onload = function () {
  // Az 5 másodperces üdvözlést csak ezen a konkrét oldalon dobja fel,
  // hogy ne legyen idegesítő, ha a látogató a többi oldalon navigál.
  if (window.location.pathname.includes('js-gyakorlatok.html')) {
    setTimeout(function () {
      alert('Üdvözöllek a JavaScript gyakorlatok oldalon!');
    }, 5000);
  }
};
