document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR SHADOW ON SCROLL
    ====================================================== */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            header.style.boxShadow = "0 8px 30px rgba(49, 32, 17, 0.08)";
        } else {
            header.style.boxShadow = "none";
        }

    });


    /* =====================================================
       SEARCH BUTTON
    ====================================================== */

    const searchButton = document.querySelector(".nav-search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            alert("Search feature will be added in the next version.");

        });

    }


    /* =====================================================
       CLOSE MOBILE NAVBAR AFTER CLICK
    ====================================================== */

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });

});