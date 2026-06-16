/* ==========================================================================
   AK TECH - INTERACTIVE JAVASCRIPT BEHAVIOR
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Elements
    const mainHeader = document.querySelector(".main-header");
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");
    const serviceDropdown = document.getElementById("formService");
    const langButtons = document.querySelectorAll(".lang-btn");

    /* ----------------------------------------------------------------------
       0. Multilingual Translation Switcher (EN & BS)
       ---------------------------------------------------------------------- */
    const setLanguage = (lang) => {
        // Toggle active styling states on buttons
        langButtons.forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        // Loop and inject mapped string values
        const translatableElements = document.querySelectorAll("[data-i18n]");
        translatableElements.forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations && translations[lang] && translations[lang][key] !== undefined) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Store user preference & HTML element attribute
        localStorage.setItem("ak_tech_preferred_lang", lang);
        document.documentElement.lang = lang;
    };

    // Attach click listeners to language switch toggles
    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });

    // Initialize preferred language from local memory (default: English)
    const storedLang = localStorage.getItem("ak_tech_preferred_lang") || "en";
    setLanguage(storedLang);

    /* ----------------------------------------------------------------------
       1. Header Shrink & Glass Effect on Scroll
       ---------------------------------------------------------------------- */
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
    };
    
    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll(); // Initialize state on page load


    /* ----------------------------------------------------------------------
       2. Hamburger Menu Toggle (Mobile Views)
       ---------------------------------------------------------------------- */
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            mobileToggle.classList.toggle("open");
            
            // Prevent body scroll when menu is active on mobile
            document.body.style.overflow = isOpen ? "hidden" : "initial";
        });

        // Close mobile menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                mobileToggle.classList.remove("open");
                document.body.style.overflow = "initial";
            });
        });
    }


    /* ----------------------------------------------------------------------
       3. Dynamic Navigation Active Indicator on Scroll
       ---------------------------------------------------------------------- */
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
        root: null,             // absolute viewport
        rootMargin: "-40% 0px -40% 0px", // focus area in center of viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* ----------------------------------------------------------------------
       4. Service Selection Dropdown Pre-fill Helper
       ---------------------------------------------------------------------- */
    // Expose function globally so inline HTML elements can invoke it
    window.setServiceInquiry = (serviceKey) => {
        if (!serviceDropdown) return;
        
        switch (serviceKey) {
            case 'Repair':
                serviceDropdown.value = "repair";
                break;
            case 'Sales':
                serviceDropdown.value = "sales";
                break;
            case 'Software':
                serviceDropdown.value = "software";
                break;
            case 'AppDev':
                serviceDropdown.value = "appdev";
                break;
            default:
                serviceDropdown.value = "general";
        }
    };


    /* ----------------------------------------------------------------------
       5. Asynchronous Web3Forms Submission (AJAX Fetch)
       ---------------------------------------------------------------------- */
    if (contactForm && formResponse) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault(); // Stop default full-page browser refresh redirect
            
            // Set loading styling state
            formResponse.innerHTML = '<span style="color: var(--color-cyan);"><i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching secure request...</span>';
            formResponse.className = "form-response-msg";
            
            // Create payload JSON
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);
            const payload = JSON.stringify(formObject);
            
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: payload
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    // Success styling state
                    formResponse.innerHTML = `<i class="fa-solid fa-circle-check"></i> Inquiry sent successfully! We'll contact you shortly.`;
                    formResponse.className = "form-response-msg success";
                    contactForm.reset(); // Reset fields on success
                } else {
                    // Fail state from API response
                    formResponse.innerHTML = `<i class="fa-solid fa-circle-exmark"></i> Submission failed: ${result.message || 'Server error.'}`;
                    formResponse.className = "form-response-msg error";
                }
            } catch (error) {
                // Network / General Fail state
                console.error("Web3Forms submission error:", error);
                formResponse.innerHTML = '<i class="fa-solid fa-circle-exmark"></i> Connectivity error. Check internet connection and try again.';
                formResponse.className = "form-response-msg error";
            }
        });
    }

});
