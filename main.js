//Cliccando sullo schermo, non ci saranno più foto di gatti, ma di cani, che cambiano ogni 5 secondi

var fotoGattini = ['images/gatto_1.jpg', 'images/gatto_2.jpg', 'images/gatto_3.jpg'];
var fotoCani = ['images/cane_1.jpg', 'images/cane_2.jpg', 'images/cane_3.jpg'];

var backgroundContainer = document.getElementById('background');
var counterImages = 0;
var mode = 'gattini';

interval = window.setInterval(changeBackground, 5000);

//Cliccando cambio la variabile mode da gattini a un altro valore
backgroundContainer.addEventListener("click", function() {
    if (mode == 'gattini') {
        mode = 'cani';
    }
    else {
        mode = 'gattini';
    }

    window.clearInterval(interval);

    changeBackground();

    interval = window.setInterval(changeBackground, 5000);
});

function changeBackground()
{
    if (mode == 'gattini') {
        var length = fotoGattini.length - 1;
        var imageArray = fotoGattini;
    }
    else {
        var length = fotoCani.length - 1;
        var imageArray = fotoCani;
    }

    if (counterImages > length) {
        counterImages = 0;
    }

    backgroundContainer.style.background = 'url(' + imageArray[counterImages] + ')';

    counterImages++;
}
