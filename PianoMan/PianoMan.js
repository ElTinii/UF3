// Alumnos: Alejandro Vázquez Carrión y Alberto Morcillo Montejo
'use strict';

const keyMap = {
	'KeyA': '65',
	'KeyS': '83',
	'KeyD': '68',
	'KeyF': '70',
	'KeyG': '71',
	'KeyH': '72',
	'KeyJ': '74',
	'KeyR': '82',
	'KeyT': '84',
	'KeyY': '89',
	'KeyU': '85',
	'KeyI': '73',
	'KeyO': '79',
	'KeyP': '80',
	'Digit1': '49',
	'Digit2': '50',
	'Digit3': '51',
	'Digit4': '52',
	'Digit5': '53',
	'Digit6': '54',
	'Digit7': '55',
	'Digit8': '56',
	'Digit9': '57',
	'Digit0': '48',
  };
  

  const keyElements = [
	{ element: document.getElementById('k65'), key: 'KeyA', soundFile: './sounds/c1.mp3' },
	{ element: document.getElementById('k83'), key: 'KeyS', soundFile: './sounds/d1.mp3' },
	{ element: document.getElementById('k68'), key: 'KeyD', soundFile: './sounds/e1.mp3' },
	{ element: document.getElementById('k70'), key: 'KeyF', soundFile: './sounds/f1.mp3' },
	{ element: document.getElementById('k71'), key: 'KeyG', soundFile: './sounds/g1.mp3' },
	{ element: document.getElementById('k72'), key: 'KeyH', soundFile: './sounds/a1.mp3' },
	{ element: document.getElementById('k74'), key: 'KeyJ', soundFile: './sounds/b1.mp3' },
	{ element: document.getElementById('k82'), key: 'KeyR', soundFile: './sounds/c2.mp3' },
	{ element: document.getElementById('k84'), key: 'KeyT', soundFile: './sounds/d2.mp3' },
	{ element: document.getElementById('k89'), key: 'KeyY', soundFile: './sounds/e2.mp3' },
	{ element: document.getElementById('k85'), key: 'KeyU', soundFile: './sounds/f2.mp3' },
	{ element: document.getElementById('k73'), key: 'KeyI', soundFile: './sounds/g2.mp3' },
	{ element: document.getElementById('k79'), key: 'KeyO', soundFile: './sounds/a2.mp3' },
	{ element: document.getElementById('k80'), key: 'KeyP', soundFile: './sounds/b2.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit1', soundFile: './sounds/c1s.mp3' },
	{ element: document.getElementById('k50'), key: 'Digit2', soundFile: './sounds/d1s.mp3' },
	{ element: document.getElementById('k51'), key: 'Digit3', soundFile: './sounds/f1s.mp3' },
	{ element: document.getElementById('k52'), key: 'Digit4', soundFile: './sounds/g1s.mp3' },
	{ element: document.getElementById('k53'), key: 'Digit5', soundFile: './sounds/a1s.mp3' },
	{ element: document.getElementById('k54'), key: 'Digit6', soundFile: './sounds/c2s.mp3' },
	{ element: document.getElementById('k55'), key: 'Digit7', soundFile: './sounds/d2s.mp3' },
	{ element: document.getElementById('k56'), key: 'Digit8', soundFile: './sounds/f2s.mp3' },
	{ element: document.getElementById('k57'), key: 'Digit9', soundFile: './sounds/g2s.mp3' },
	{ element: document.getElementById('k48'), key: 'Digit0', soundFile: './sounds/a2s.mp3' },
  ];

  function init() {
	TouchEmulator();
  

  
	function playSound(sound) {
	  sound.pause();
	  sound.currentTime = 0;
	  sound.play();
	}
  
	// allKeys.forEach(key => {
	//   key.addEventListener('mousedown', () => {
	// 	key.classList.add('activa');
	//   });
  
	//   key.addEventListener('touchstart', (event) => {
	// 	event.preventDefault(); // Sirve para evitar que se haga scroll al tocar la pantalla
	// 	key.classList.add('activa');
	//   });
	// });
  
	keyElements.forEach(function(key) {
	  if (key.element) {
		window.addEventListener('keydown', function(event) {
		  if (event.code === key.key) {
			let audio = new Audio(key.soundFile);
			playSound(audio);
			key.element.classList.add('activa');
		  }
		});
  
		window.addEventListener('keyup', function(event) {
		  if (event.code === key.key) {
			key.element.classList.remove('activa');
		  }
		});
  
		key.element.addEventListener('touchstart', function(event) {
		  event.preventDefault();
		  for (let i = 0; i < event.changedTouches.length; i++) {
			let audio = new Audio(key.soundFile);
			playSound(audio);
			key.element.classList.add('activa');
		  }
		});
  
		key.element.addEventListener('touchend', function(event) {
		  event.preventDefault();
		  for (let i = 0; i < event.changedTouches.length; i++) {
			key.element.classList.remove('activa');
		  }
		});
	  }
	});
  }
  init();