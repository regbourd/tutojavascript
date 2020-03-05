var spoilers = document.querySelectorAll('.spoiler')

// button.addEventListener('click', function() {
//     this.nextElementSibling.classList.add('visible')
//     this.parentNode.removeChild(this)
// })

var createSpoiler = function(spoiler) {

    /* création d'un bouton */
    var buttonSpoiler = document.createElement('button')
    buttonSpoiler.textContent = "Dévoiler le spoiler"

    /* Création de la span */
    var spanSpoiler = document.createElement('span')
    spanSpoiler.innerHTML = spoiler.innerHTML
    spanSpoiler.className = 'spoiler-content'

    /*ajout au DOM */
    spoiler.innerHTML = ""
    spoiler.appendChild(buttonSpoiler)
    spoiler.appendChild(spanSpoiler)

    /* ajout d'un événement */
    buttonSpoiler.addEventListener('click', function() {
        buttonSpoiler.parentNode.removeChild(buttonSpoiler)
        spanSpoiler.classList.add('visible')
    })

}

for (var i = 0; i < spoilers.length; i++) {
    createSpoiler(spoilers[i])
}