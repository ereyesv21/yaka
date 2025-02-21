let nextBtn = document.querySelector('.derecha')
let prevBtn = document.querySelector('.izquierda')

let slider = document.querySelector('.deslizador')
let sliderList = slider.querySelector('.deslizador .lista')
let thumbnail = document.querySelector('.deslizador .miniatura')
let thumbnailItems = thumbnail.querySelectorAll('.elemento')

/* thumbnail.appendChild(thumbnailItems[0]) */



// Function for next button 
nextBtn.onclick = function() {
    moveSlider('derecha')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('izquierda')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.elemento')
    let thumbnailItems = document.querySelectorAll('.miniatura .elemento')
    
    if(direction === 'derecha'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('derecha')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('izquierda')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'derecha'){
            slider.classList.remove('derecha')
        } else {
            slider.classList.remove('izquierda')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}


let puntos = document.querySelectorAll('.punto');

function actualizarIndicador() {
    let indiceActivo = Array.from(thumbnailItems).indexOf(thumbnail.querySelector('.elemento:first-child'));
    puntos.forEach((punto, index) => {
        punto.classList.toggle('activo', index === indiceActivo);
    });
}

// Llama a la función para inicializar el indicador
actualizarIndicador();

// Modifica la función moveSlider para actualizar el indicador después de mover el slider
function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.elemento');
    let thumbnailItems = document.querySelectorAll('.miniatura .elemento');
    
    if(direction === 'derecha'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('derecha');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('izquierda');
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'derecha'){
            slider.classList.remove('derecha');
        } else {
            slider.classList.remove('izquierda');
        }
        actualizarIndicador(); // Actualiza el indicador después de la animación
    }, {once: true});
}



