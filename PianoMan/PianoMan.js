// Alumnos: Alejandro Vázquez Carrión y Alberto Morcillo Montejo
'use strict';

/*
Objeto que contiene el código de la tecla y el código de la tecla modificada.
Ejemplo: KeyA = 65 significa que la tecla A del teclado fisico corresponde al código 65
*/
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
    'KeyK': '75', 
    'KeyL': '76', 
    'Semicolon': '241', 
    'KeyQ': '81', 
    'KeyW': '87', 
    'KeyE': '69', 
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

/*
Array de objetos que contiene los elementos de tecla, la tecla asociada y el archivo de sonido
*/
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
{ element: document.getElementById('k72'), key: 'KeyH', soundFile: './sounds/a1.mp3' },
{ element: document.getElementById('k74'), key: 'KeyJ', soundFile: './sounds/b1.mp3' },
{ element: document.getElementById('k82'), key: 'KeyR', soundFile: './sounds/c2.mp3' },
{ element: document.getElementById('k84'), key: 'KeyT', soundFile: './sounds/d2.mp3' },
{ element: document.getElementById('k89'), key: 'KeyY', soundFile: './sounds/e2.mp3' },
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
{ element: document.getElementById('k75'), key: 'KeyK', soundFile: './sounds/c1s.mp3' }, 
{ element: document.getElementById('k76'), key: 'KeyL', soundFile: './sounds/c2.mp3' }, 
{ element: document.getElementById('k241'), key: 'Semicolon', soundFile: './sounds/c2s.mp3' }, 
{ element: document.getElementById('k81'), key: 'KeyQ', soundFile: './sounds/b1.mp3' }, 
{ element: document.getElementById('k87'), key: 'KeyW', soundFile: './sounds/b2.mp3' }, 
{ element: document.getElementById('k69'), key: 'KeyE', soundFile: './sounds/c1.mp3' }, 
];

function init() {
    TouchEmulator();

    function playSound(sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
    }

/*
	Se ejecuta cuando se libera el botón del ratón.
	Elimina la clase 'activa' de todos los elementos de tecla
*/
    // $(document).on('mouseup', function(event) {
    //     $.each(keyElements, function(index, key) {
    //         if (key.element) {
    //             $(key.element).removeClass('activa');
    //         }
    //     });
    // });
/*
	Itera sobre cada elemento en keyElements.
	El del keydown maneja el evento cuando se presiona una telca.
	Si coincide con la tecla que hemos asociado al elemento de la iteración
	se crea un nuevo objeto Audio.
*/
    $.each(keyElements, function(index, key) {
        if (key.element) {
            $(window).on("keydown", function (event) {
                if (event.code === key.key || 
                    (event.code === "KeyK" && key.key === "KeyR") ||
                    (event.code === "KeyL" && key.key === "KeyT") ||
                    (event.code === "Semicolon" && key.key === "KeyY") ||
                    (event.code === "KeyQ" && key.key === "KeyG") ||
                    (event.code === "KeyW" && key.key === "KeyH") ||
                    (event.code === "KeyE" && key.key === "KeyJ")) {
                    let audio = new Audio(key.soundFile);
                    playSound(audio);
                    $(key.element).addClass("activa");
                }
            });
// Lo mismo que con el keydown pero para el keyup
            $(window).on('keyup', function(event) {
                if (event.code === key.key || 
                    (event.code === 'KeyK' && key.key === 'KeyR') || 
                    (event.code === 'KeyL' && key.key === 'KeyT') || 
                    (event.code === 'Semicolon' && key.key === 'KeyY') || 
                    (event.code === 'KeyQ' && key.key === 'KeyG') || 
                    (event.code === 'KeyW' && key.key === 'KeyH') || 
                    (event.code === 'KeyE' && key.key === 'KeyJ')) {
                    $(key.element).removeClass('activa');
                }
            });
/**
 * Se ejecuta cuando se presiona el botón del ratón. Crea un nuevo objeto audio con el archivo
 * de sonido asociado. Reproduce el sonido y añade la clase 'activa' al elemento de la iteración.
 */
            // $(key.element).on('mousedown', function(event) {
            //     event.preventDefault();
            //     let audio = new Audio(key.soundFile);
            //     playSound(audio);
            //     $(key.element).addClass('activa');
            // });

			$(document).on('touchstart', function(event) {
				event.preventDefault();
				for (let i = 0; i < event.changedTouches.length; i++) {
					let touch = event.changedTouches[i];
					let elementTouched = touch.target;
					let key = keyElements.find(k => k.element === elementTouched);
					if (key) {
						// Si el sonido ya está reproduciéndose, lo detiene
						if (key.audio && !key.audio.paused) {
							key.audio.pause();
							key.audio.currentTime = 0;
						}
						// Comienza a reproducir el nuevo sonido
						key.audio = new Audio(key.soundFile);
						playSound(key.audio);
						$(key.element).addClass('activa');
					}
				}
			});
			
			$(document).on('touchend', function(event) {
				event.preventDefault();
				for (let i = 0; i < event.changedTouches.length; i++) {
					let touch = event.changedTouches[i];
					let elementTouched = touch.target;
					let key = keyElements.find(k => k.element === elementTouched);
					if (key) {
						$(key.element).removeClass('activa');
					}
				}
			});
		}
	});
}
init();