document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".about-story, .about-vision, .culture-card, .journey-step, .about-mission, .about-team, .about-final-cta"
    );

    revealElements.forEach(function (element) {
        element.classList.add("about-reveal");
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


    /* =========================================
       ACTIVE NAVBAR
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage &&
            linkPage !== "#" &&
            linkPage === currentPage
        ) {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {

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

        });

    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =========================================
       MOBILE NAVBAR CLOSE
    ========================================= */

    const navLinksMobile =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );

    const navbarCollapse =
        document.getElementById("mainNavbar");


    navLinksMobile.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });

});