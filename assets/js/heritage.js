document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".heritage-category-card, " +
        ".heritage-site-card, " +
        ".state-item, " +
        ".fact-box, " +
        ".discovery-content"
    );


    revealElements.forEach(function (element) {

        element.classList.add("heritage-reveal");

    });


    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {


                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }

            }
        );

    });



    /* =====================================================
       MOBILE NAVBAR CLOSE
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );


    const navbarCollapse =
        document.getElementById(
            "mainNavbar"
        );


    mobileLinks.forEach(function (link) {


        link.addEventListener(
            "click",
            function () {


                if (
                    window.innerWidth < 992 &&
                    navbarCollapse.classList.contains(
                        "show"
                    )
                ) {


                    const collapse =
                        bootstrap.Collapse.getInstance(
                            navbarCollapse
                        );


                    if (collapse) {

                        collapse.hide();

                    }

                }

            }
        );

    });



    /* =====================================================
       STATE HOVER EFFECT
    ===================================================== */

    const stateItems =
        document.querySelectorAll(
            ".state-item"
        );


    stateItems.forEach(function (item) {


        item.addEventListener(
            "mouseenter",
            function () {

                this.style.transition =
                    "all 0.35s ease";

            }
        );

    });

});