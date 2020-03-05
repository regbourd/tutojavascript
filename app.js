var ps = document.querySelectorAll('p');
for (i = 0; i < ps.length; i++) {
    (function(p) {
        window.setInterval(function() {
            p.classList.toggle('red');
        }, 1000)
    })(ps[i])
}