/* ==========================================================================
   AK TECH - CENTRAL APPLICATION LOGIC & PORTAL ENGINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Global Elements
    const mainHeader = document.querySelector(".main-header");
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const langButtons = document.querySelectorAll(".lang-btn");

    /* ----------------------------------------------------------------------
       1. Multilingual Translation Engine (EN & BS)
       ---------------------------------------------------------------------- */
    const setLanguage = (lang) => {
        langButtons.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
        
        const translatableElements = document.querySelectorAll("[data-i18n]");
        translatableElements.forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (window.translations && window.translations[lang] && window.translations[lang][key] !== undefined) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = window.translations[lang][key];
                } else {
                    element.innerHTML = window.translations[lang][key];
                }
            }
        });
        
        localStorage.setItem("ak_tech_preferred_lang", lang);
        document.documentElement.lang = lang;

        renderDynamicContent(lang);
    };

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    const storedLang = localStorage.getItem("ak_tech_preferred_lang") || "bs";
    setLanguage(storedLang);

    /* ----------------------------------------------------------------------
       2. Header Glass Effect & Scroll Behavior
       ---------------------------------------------------------------------- */
    const handleHeaderScroll = () => {
        if (mainHeader) {
            mainHeader.classList.toggle("scrolled", window.scrollY > 40);
        }
    };
    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();

    /* ----------------------------------------------------------------------
       3. Mobile Navigation & Dropdown Accordion
       ---------------------------------------------------------------------- */
    if (mobileToggle && navMenu) {
        const closeMobileNav = () => {
            navMenu.classList.remove("open");
            mobileToggle.classList.remove("open");
            document.body.style.overflow = "initial";
        };

        const toggleMobileNav = () => {
            const isOpen = navMenu.classList.toggle("open");
            mobileToggle.classList.toggle("open");
            document.body.style.overflow = isOpen ? "hidden" : "initial";
        };

        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMobileNav();
        });

        // Close mobile nav when clicking any navigable link (including dropdown sublinks)
        const allNavLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle-link), .nav-dropdown-link");
        allNavLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 1024) {
                    closeMobileNav();
                }
            });
        });

        // Accordion behavior on mobile for dropdown headers
        const dropdownToggles = document.querySelectorAll(".dropdown-toggle-link");
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    const parent = toggle.closest(".nav-item-dropdown");
                    if (parent) {
                        const isCurrentlyOpen = parent.classList.contains("mobile-open");
                        // Close any other open dropdowns for a clean accordion experience
                        document.querySelectorAll(".nav-item-dropdown.mobile-open").forEach(other => {
                            if (other !== parent) {
                                other.classList.remove("mobile-open");
                            }
                        });
                        parent.classList.toggle("mobile-open", !isCurrentlyOpen);
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024 && navMenu.classList.contains("open")) {
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    closeMobileNav();
                }
            }
        });

        // Close on ESC key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("open")) {
                closeMobileNav();
            }
        });

        // Viewport resize cleanup
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                if (navMenu.classList.contains("open")) {
                    closeMobileNav();
                }
                document.querySelectorAll(".nav-item-dropdown.mobile-open").forEach(item => {
                    item.classList.remove("mobile-open");
                });
            }
        });

        // Desktop Hover Intent & Delay for Dropdowns (Prevents premature closing)
        const dropdownItems = document.querySelectorAll(".nav-item-dropdown");
        dropdownItems.forEach(item => {
            let timer = null;
            item.addEventListener("mouseenter", () => {
                if (window.innerWidth > 1024) {
                    clearTimeout(timer);
                    item.classList.add("hover-active");
                }
            });
            item.addEventListener("mouseleave", () => {
                if (window.innerWidth > 1024) {
                    timer = setTimeout(() => {
                        item.classList.remove("hover-active");
                    }, 180);
                }
            });
        });
    }

    /* ----------------------------------------------------------------------
       4. Active Page Link Indicator
       ---------------------------------------------------------------------- */
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });

    /* ----------------------------------------------------------------------
       5. Dynamic Data Rendering Engine (Powered by AK_DATA & AK_CONFIG)
       ---------------------------------------------------------------------- */
    function renderDynamicContent(lang) {
        if (!window.AK_DATA) return;
        const isBs = lang === "bs";
        const cfg = window.AK_CONFIG || {
            whatsappLink: "https://wa.me/38761293073",
            olxShop: "https://olx.ba/profil/AKTech",
            gumroadShop: "https://aktechcraft.gumroad.com/"
        };

        // A. OLX Products (4 items)
        const olxContainer = document.getElementById("olxProductsGrid");
        if (olxContainer && window.AK_DATA.olxProducts) {
            olxContainer.innerHTML = window.AK_DATA.olxProducts.slice(0, 4).map(item => `
                <div class="portal-card" style="padding: 22px; display: flex; flex-direction: column; height: 100%;">
                    <a href="${item.olxUrl}" target="_blank" class="portal-card-media-link" title="Pogledaj na OLX.ba">
                        <img src="${item.image}" alt="${item.title}" style="width:100%; height:150px; object-fit:cover; display:block;">
                    </a>
                    <div class="card-top-badge badge-cyan"><i class="fa-solid fa-shield-halved"></i> ${item.condition}</div>
                    <h3 class="portal-card-title" style="font-size: 1.15rem; min-height: 2.8rem; margin-bottom: 8px;">
                        <a href="${item.olxUrl}" target="_blank" class="portal-card-title-link">${item.title}</a>
                    </h3>
                    <p class="portal-card-desc" style="flex-grow: 1; margin-bottom: 16px;">
                        <i class="fa-solid fa-layer-group color-cyan"></i> Kategorija: <strong>${item.category}</strong>
                    </p>
                    <div class="olx-card-footer">
                        <div class="olx-price-row">
                            <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Cijena na OLX</span>
                            <span class="card-price-tag color-cyan" style="font-size: 1.15rem; font-weight: 800;">${item.price}</span>
                        </div>
                        <div class="olx-actions-grid">
                            <a href="${item.olxUrl}" target="_blank" class="btn btn-primary btn-glow btn-sm card-action-btn" title="Pogledaj artikal na OLX.ba">
                                <img src="images/icons/olx.svg" alt="OLX" class="btn-brand-icon"> ${isBs ? "Otvori na OLX" : "View on OLX"}
                            </a>
                            <a href="https://wa.me/38761293073?text=${encodeURIComponent(item.whatsappText)}" target="_blank" class="btn btn-secondary btn-sm card-action-btn" title="Pošalji upit za artikal">
                                <i class="fa-brands fa-whatsapp color-green"></i> ${isBs ? "Pitaj" : "Ask"}
                            </a>
                        </div>
                    </div>
                </div>
            `).join("");
        }

        // B. Gumroad Products (3 items)
        const gumroadContainer = document.getElementById("gumroadProductsGrid");
        if (gumroadContainer && window.AK_DATA.gumroadProducts) {
            gumroadContainer.innerHTML = window.AK_DATA.gumroadProducts.slice(0, 3).map(item => `
                <div class="portal-card" style="padding: 24px; display: flex; flex-direction: column; height: 100%;">
                    <div class="card-top-badge badge-purple"><i class="fa-solid fa-download"></i> ${item.badge}</div>
                    <h3 class="portal-card-title" style="min-height: 2.2rem;">${item.title}</h3>
                    <p class="portal-card-desc" style="flex-grow: 1;">${isBs ? item.description_bs : item.description_en}</p>
                    <div class="card-footer-action" style="margin-top: auto; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between;">
                        <span class="card-price-tag" style="color: var(--color-cyan); font-weight: 800; font-size: 1.15rem;">
                            ${item.price} <small style="color:var(--text-muted); font-size: 0.8rem; font-weight: 500;">/ ${isBs ? "fer cijena (0+)" : "pay what you want"}</small>
                        </span>
                        <a href="${item.gumroadUrl}" class="gumroad-card-btn" target="_blank">
                            <i class="fa-solid fa-bolt"></i> ${isBs ? "Preuzmi (0+)" : "Instant Get (0+)"}
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // C. Featured Products
        const featuredContainer = document.getElementById("featuredProductsGrid");
        if (featuredContainer && window.AK_DATA.featuredProducts) {
            featuredContainer.innerHTML = window.AK_DATA.featuredProducts.map(item => `
                <div class="portal-card" style="padding: 24px; display: flex; flex-direction: column; height: 100%;">
                    <div class="card-top-badge badge-green"><i class="fa-solid fa-star"></i> ${item.badge}</div>
                    <h3 class="portal-card-title">${item.title}</h3>
                    <p class="portal-card-desc" style="flex-grow: 1;">${isBs ? item.description_bs : item.description_en}</p>
                    <div class="olx-card-footer">
                        <div class="olx-price-row">
                            <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Dostupnost</span>
                            <span class="card-price-tag" style="font-size: 1rem;">${item.price}</span>
                        </div>
                        <div class="olx-actions-grid">
                            ${item.directUrl ? `
                                <a href="${item.directUrl}" target="_blank" class="btn btn-primary btn-glow btn-sm card-action-btn">
                                    <i class="fa-solid fa-download"></i> ${isBs ? "Preuzmi" : "Get App"}
                                </a>
                            ` : ''}
                            <a href="https://wa.me/38761293073?text=${encodeURIComponent(item.whatsappText)}" target="_blank" class="btn btn-secondary btn-sm card-action-btn" title="Pošalji upit">
                                <i class="fa-brands fa-whatsapp color-green"></i> ${isBs ? "Upit" : "Inquire"}
                            </a>
                        </div>
                    </div>
                </div>
            `).join("");
        }

        // D. Group Products (Laptopi od 250, PC od 200, Tableti od 150, Telefoni od 100)
        const groupContainer = document.getElementById("groupProductsGrid");
        if (groupContainer && window.AK_DATA.groupProducts) {
            groupContainer.innerHTML = window.AK_DATA.groupProducts.map(item => `
                <div class="portal-card group-product-card">
                    <a href="https://olx.ba/profil/AKTech" target="_blank" class="group-card-media" title="Pogledaj ponudu na OLX.ba">
                        <img src="${item.image}" alt="${item.title}">
                    </a>
                    <div class="card-top-badge badge-yellow"><i class="fa-solid fa-award"></i> ${item.badge}</div>
                    <h3 class="portal-card-title">
                        <a href="https://olx.ba/profil/AKTech" target="_blank" class="portal-card-title-link">${item.title}</a>
                    </h3>
                    <p class="portal-card-desc">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div class="group-card-footer">
                        <div class="group-price-row">
                            <span class="price-label">${isBs ? "Početna cijena" : "Starting price"}</span>
                            <span class="card-price-tag color-cyan" style="font-size: 1.25rem; font-weight: 800;">
                                <small style="color:var(--text-muted); font-size: 0.8rem; font-weight: 500;">${isBs ? "već od" : "from"}</small> ${item.startPrice}
                            </span>
                        </div>
                        <div class="group-actions-grid">
                            <a href="https://olx.ba/profil/AKTech" target="_blank" class="btn btn-secondary btn-sm card-action-btn" title="Pogledaj OLX Ponudu">
                                <img src="images/icons/olx.svg" alt="OLX" class="btn-brand-icon"> OLX Shop
                            </a>
                            <a href="https://wa.me/38761293073?text=${encodeURIComponent(item.whatsappText)}" target="_blank" class="btn btn-primary btn-sm btn-green card-action-btn" title="Pošalji upit za uređaje">
                                <i class="fa-brands fa-whatsapp"></i> ${isBs ? "Pitaj" : "Ask"}
                            </a>
                        </div>
                    </div>
                </div>
            `).join("");
        }

        // E. Downloads - Filterable on downloads.html, Preview on resources.html / index.html
        const downloadsContainer = document.getElementById("downloadsGrid");
        if (downloadsContainer && window.AK_DATA.downloads) {
            const isFullDownloadsPage = document.getElementById("downloadsFilterTabs") !== null;
            const itemsToRender = isFullDownloadsPage ? window.AK_DATA.downloads : window.AK_DATA.downloads.slice(0, 4);

            renderDownloadsCards(itemsToRender, downloadsContainer, isBs);
        }

        // F. Open-Source Apps (With Krita & Blender, without Notepad & VLC)
        const openSourceContainer = document.getElementById("openSourceGrid");
        if (openSourceContainer && window.AK_DATA.openSourceApps) {
            openSourceContainer.innerHTML = window.AK_DATA.openSourceApps.map(item => `
                <div class="portal-card">
                    <div class="card-top-badge badge-purple"><i class="${item.icon}"></i> ${item.category}</div>
                    <h3 class="portal-card-title">${item.name}</h3>
                    <p class="portal-card-desc">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div class="card-footer-action">
                        <span class="card-price-tag" style="font-size:0.85rem; color:var(--color-green);"><i class="fa-solid fa-lock-open"></i> Free & Open Source</span>
                        <a href="${item.url}" target="_blank" class="btn btn-secondary btn-sm">
                            <i class="fa-solid fa-external-link"></i> ${isBs ? "Službena stranica" : "Official Site"}
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // G1. AI Models to Try (8 small cards)
        const aiModelsContainer = document.getElementById("aiModelsGrid");
        if (aiModelsContainer && window.AK_DATA.aiModelsToTry) {
            aiModelsContainer.innerHTML = window.AK_DATA.aiModelsToTry.map(item => `
                <div class="portal-card" style="padding: 22px;">
                    <div class="card-top-badge badge-green" style="margin-bottom: 10px; font-size: 0.7rem;"><i class="fa-solid fa-wand-magic-sparkles"></i> ${item.badge}</div>
                    <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; color: var(--text-main);">${item.name}</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px; flex-grow: 1;">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div style="margin-top: auto;">
                        <a href="${item.url}" target="_blank" class="btn btn-secondary btn-sm" style="width: 100%; text-align: center; justify-content: center;">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${isBs ? "Isprobaj Besplatno" : "Try Free"}
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // G2. Open-Source AI Coding & Agents (4 cards)
        const aiCodingContainer = document.getElementById("aiCodingGrid");
        if (aiCodingContainer && window.AK_DATA.aiCodingAgents) {
            aiCodingContainer.innerHTML = window.AK_DATA.aiCodingAgents.map(item => `
                <div class="portal-card">
                    <div class="card-top-badge badge-cyan"><i class="fa-solid fa-code"></i> ${item.badge}</div>
                    <h3 class="portal-card-title">${item.name}</h3>
                    <p class="portal-card-desc">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div class="card-footer-action">
                        <a href="${item.url}" target="_blank" class="btn btn-primary btn-sm btn-glow btn-cyan" style="width:100%; text-align:center; justify-content:center;">
                            <i class="fa-brands fa-github"></i> ${isBs ? "GitHub & Dokumentacija" : "GitHub & Docs"}
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // G3. AI Infrastructure & Hubs (4 cards)
        const aiInfraContainer = document.getElementById("aiInfraGrid");
        if (aiInfraContainer && window.AK_DATA.aiInfraHubs) {
            aiInfraContainer.innerHTML = window.AK_DATA.aiInfraHubs.map(item => `
                <div class="portal-card">
                    <div class="card-top-badge badge-purple"><i class="fa-solid fa-server"></i> ${item.badge}</div>
                    <h3 class="portal-card-title">${item.name}</h3>
                    <p class="portal-card-desc">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div class="card-footer-action">
                        <a href="${item.url}" target="_blank" class="btn btn-secondary btn-sm" style="width:100%; text-align:center; justify-content:center;">
                            <i class="fa-solid fa-globe"></i> ${isBs ? "Otvori Platformu" : "Open Hub"}
                        </a>
                    </div>
                </div>
            `).join("");
        }

        // H. Projects (Top 3)
        const projectsContainer = document.getElementById("projectsGrid");
        if (projectsContainer && window.AK_DATA.projects) {
            projectsContainer.innerHTML = window.AK_DATA.projects.map(item => `
                <div class="portal-card">
                    <div class="card-top-badge badge-cyan"><i class="fa-solid fa-code-branch"></i> GitHub Repo</div>
                    <h3 class="portal-card-title">${item.title}</h3>
                    <div class="tech-pill-list">
                        ${item.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
                    </div>
                    <p class="portal-card-desc">${isBs ? item.desc_bs : item.desc_en}</p>
                    <div class="card-footer-action">
                        <a href="${item.github}" target="_blank" class="btn btn-primary btn-glow btn-sm" style="width: 100%; justify-content: center;">
                            <i class="fa-brands fa-github"></i> ${isBs ? "Pogledaj Kod na GitHubu" : "View Code on GitHub"} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
                        </a>
                    </div>
                </div>
            `).join("");
        }
    }

    // Helper: Render Downloads Cards
    function renderDownloadsCards(list, container, isBs) {
        container.innerHTML = list.map(item => `
            <div class="portal-card" data-category="${item.category}">
                <div class="card-top-badge ${item.category === 'doc' ? 'badge-cyan' : 'badge-green'}">
                    <i class="${item.category === 'doc' ? 'fa-solid fa-file-pdf' : 'fa-solid fa-file-zipper'}"></i> ${item.type}
                </div>
                <h3 class="portal-card-title">${item.title}</h3>
                <p class="portal-card-desc">${isBs ? item.description_bs : item.description_en}</p>
                <div class="card-footer-action">
                    <span class="card-price-tag" style="font-size:0.85rem; color:var(--text-muted);">${item.fileSize} · ${item.version}</span>
                    <a href="${item.filePath}" download class="btn btn-primary btn-sm btn-glow ${item.category === 'doc' ? 'btn-cyan' : 'btn-green'}">
                        <i class="fa-solid fa-download"></i> ${isBs ? "Preuzmi" : "Download"}
                    </a>
                </div>
            </div>
        `).join("");
    }

    // Setup interactive category filter on downloads.html
    const filterTabs = document.querySelectorAll(".filter-btn");
    filterTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            filterTabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const cat = btn.getAttribute("data-filter");
            const cards = document.querySelectorAll("#downloadsGrid .portal-card");
            cards.forEach(card => {
                if (cat === "all" || card.getAttribute("data-category") === cat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Auto-select service in Contact form from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get("service");
    const serviceDropdown = document.getElementById("formService");
    if (serviceParam && serviceDropdown) {
        serviceDropdown.value = serviceParam.toLowerCase();
    }

    // Web3Forms AJAX Handler
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");
    if (contactForm && formResponse) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formResponse.className = "form-response-msg loading";
            formResponse.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${document.documentElement.lang === "bs" ? "Slanje upita u toku..." : "Submitting request..."}`;
            formResponse.style.display = "block";

            const formData = new FormData(contactForm);
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                const json = await response.json();
                if (response.status === 200 && json.success) {
                    formResponse.className = "form-response-msg success";
                    formResponse.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${document.documentElement.lang === "bs" ? "Vaša poruka je uspješno poslana! Javit ćemo se uskoro." : "Your message has been sent successfully! We will get in touch soon."}`;
                    contactForm.reset();
                } else {
                    formResponse.className = "form-response-msg error";
                    formResponse.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${json.message || "Greška pri slanju. Molimo pokušajte ponovo."}`;
                }
            })
            .catch(() => {
                formResponse.className = "form-response-msg error";
                formResponse.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Greška sa internet konekcijom. Pokušajte putem WhatsAppa ili Vibera.`;
            });
        });
    }
});
