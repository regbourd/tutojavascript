(function() {

    /**lorsqu'on scroll 
     * si le menu sort de l'écran
     * alors il devient fixe */

    var scrollY = function() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var elements = document.querySelectorAll('[data-sticky]')

    for (var i = 0; i < elements.length; i++) {
        (function(element) {
            var rect = element.getBoundingClientRect()
            var offset = parseInt(element.getAttribute('data-offset'), 10) || 0
            var top = rect.top + scrollY()
            var widthMenu = rect.width
            var fakeRect = document.createElement("div")
            fakeRect.style.height = rect.height + "px"
            fakeRect.style.width = rect.width + "px"
            var logo = document.querySelector(".topbar")

            var onScroll = function() {
                var hasClassFixed = element.classList.contains('fixed')
                if (scrollY() > top - offset && !hasClassFixed) {
                    element.classList.add('fixed')
                    element.style.top = offset + "px"
                    element.style.width = widthMenu + "px"
                    element.parentNode.insertBefore(fakeRect, element)
                } else if (scrollY() < top && hasClassFixed) {
                    element.classList.remove('fixed')
                    element.parentNode.removeChild(fakeRect)
                }
            }

            var onResize = function() {
                element.style.width = "auto"
                element.classList.remove("fixed")
                fakeRect.style.display = "none"
                rect = element.getBoundingClientRect()
                top = rect.top + scrollY()
                fakeRect.style.height = rect.height + "px"
                fakeRect.style.width = rect.width + "px"
                fakeRect.style.display = "block"
                onScroll()
            }

            // listeners
            window.addEventListener('scroll', onScroll)
            window.addEventListener('resize', onResize)

        })(elements[i])
    }
})()