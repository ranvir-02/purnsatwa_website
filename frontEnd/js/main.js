// ================================
// PURNASATWA MAIN JS
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================================
    // Smooth Scroll for Internal Links
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ===========================================
    // Hero Buttons
    // ===========================================

    const exploreBtn = document.querySelector(".btn1");
    const membershipBtn = document.querySelector(".btn2");

    if (exploreBtn) {

        exploreBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const products = document.querySelector("#products");

            if (products) {
                products.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }

    if (membershipBtn) {

        membershipBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const plans = document.querySelector("#plans");

            if (plans) {
                plans.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // ===========================================
    // CTA Button
    // ===========================================

    const ctaBtn = document.querySelector(".cta a");

    if (ctaBtn) {

        ctaBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const products = document.querySelector("#products");

            if (products) {
                products.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // ===========================================
    // Wishlist (Heart Button)
    // ===========================================

    const wishButtons = document.querySelectorAll(".wish");

    wishButtons.forEach(button => {

        button.addEventListener("click", function () {

            const icon = this.querySelector("i");

            if (icon.classList.contains("fa-regular")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                icon.style.color = "red";

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                icon.style.color = "";

            }

        });

    });


    // ===========================================
    // Add To Cart
    // ===========================================

    const cartButtons = document.querySelectorAll(".info button");

    let cartCount = 0;

    cartButtons.forEach(button => {

        button.addEventListener("click", function () {

            cartCount++;

            this.innerText = "Added ✓";

            this.style.background = "#D4A017";

            this.style.color = "#111";

            setTimeout(() => {

                this.innerText = "Add to Cart";
                this.style.background = "";
                this.style.color = "";

            }, 1500);

            console.log("Items in Cart:", cartCount);

        });

    });


    // ===========================================
    // Plan Buttons
    // ===========================================

    const planButtons = document.querySelectorAll(".plan button");

    planButtons.forEach(button => {

        button.addEventListener("click", function () {

            const planName = this.closest(".plan").querySelector("h3").innerText;

            alert("You selected the " + planName + ".");

        });

    });


    // ===========================================
    // Scroll Animation
    // ===========================================

    const animatedItems = document.querySelectorAll(
        ".feature, .card, .best-card, .plan"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });


    animatedItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.8s ease";

        observer.observe(item);

    });


    // ===========================================
    // Scroll Down Icon
    // ===========================================

    const scrollBtn = document.querySelector(".scroll");

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            const features = document.querySelector(".features");

            if (features) {

                features.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // ===========================================
    // Hero Fade on Scroll
    // ===========================================

    window.addEventListener("scroll", () => {

        const heroContent = document.querySelector(".hero-content");

        const scrollY = window.scrollY;

        if (heroContent) {

            heroContent.style.opacity = 1 - scrollY / 600;
            heroContent.style.transform =
                `translateY(${scrollY * 0.2}px)`;

        }

    });


    // ===========================================
    // Active Plan Highlight
    // ===========================================

    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {

        plan.addEventListener("click", () => {

            plans.forEach(p => p.classList.remove("active"));

            plan.classList.add("active");

        });

    });


    // ===========================================
    // Console Message
    // ===========================================

    console.log("PURNASATWA Website Loaded Successfully.");

});
