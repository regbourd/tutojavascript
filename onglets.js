(function() {
    var onglets = document.querySelectorAll('.tabs a')

    for (var i = 0; i < onglets.length; i++) {
        onglets[i].addEventListener('click', function(e) {
            var div = this.parentNode.parentNode.parentNode
            var li = this.parentNode;

            if (li.classList.contains('active')) {
                return false
            }

            div.querySelector('.tabs .active').classList.remove('active')
            li.classList.add('active')

            div.querySelector('.tab-content.active').classList.remove('active')

            div.querySelector(this.getAttribute('href')).classList.add('active')

        })
    }



    /**
     * avec récupération du hash (exemple : #accueil) de href dans l'url
     */
})()