/**
 * AK TECH - LINKS & SOCIAL SHARING PORTAL ENGINE
 * Upravljanje kopiranjem linkova i generisanjem QR kodova za svaki profil.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Copy Link to Clipboard
    const copyButtons = document.querySelectorAll(".btn-copy-link");
    copyButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const url = btn.getAttribute("data-url");
            if (!url) return;

            const copySuccess = () => {
                const span = btn.querySelector("span");
                const icon = btn.querySelector("i");
                const currentLang = localStorage.getItem("ak_tech_preferred_lang") || "bs";
                const copiedText = (window.translations && window.translations[currentLang] && window.translations[currentLang].btn_link_copied) 
                    ? window.translations[currentLang].btn_link_copied 
                    : "Kopirano!";
                
                const originalText = span ? span.innerText : "";
                const originalIconCls = icon ? icon.className : "fa-solid fa-copy";
                
                btn.classList.add("copied");
                if (span) span.innerText = copiedText;
                if (icon) icon.className = "fa-solid fa-check";

                setTimeout(() => {
                    btn.classList.remove("copied");
                    if (span) span.innerText = originalText;
                    if (icon) icon.className = originalIconCls;
                }, 2200);
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(url).then(copySuccess).catch(() => fallbackCopy(url, copySuccess));
            } else {
                fallbackCopy(url, copySuccess);
            }
        });
    });

    function fallbackCopy(text, callback) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            if (callback) callback();
        } catch (err) {
            console.error("Copy failed", err);
        }
        document.body.removeChild(textArea);
    }

    // 2. Show / Hide QR Code Drawer
    const qrButtons = document.querySelectorAll(".btn-qr-link");
    qrButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const card = btn.closest(".link-row-card");
            if (!card) return;

            const drawer = card.querySelector(".qr-drawer");
            if (!drawer) return;

            const url = btn.getAttribute("data-url");
            const title = btn.getAttribute("data-title") || "AK Tech Link";
            const qrCanvasContainer = drawer.querySelector(".qr-canvas-box");
            const span = btn.querySelector("span");
            const icon = btn.querySelector("i");
            const isOpen = drawer.classList.contains("open");

            const currentLang = localStorage.getItem("ak_tech_preferred_lang") || "bs";
            const showText = (window.translations && window.translations[currentLang] && window.translations[currentLang].btn_show_qr) || "Prikaži QR";
            const hideText = (window.translations && window.translations[currentLang] && window.translations[currentLang].btn_hide_qr) || "Sakrij QR";

            if (isOpen) {
                // Close
                drawer.classList.remove("open");
                btn.classList.remove("active");
                if (span) span.innerText = showText;
                if (icon) icon.className = "fa-solid fa-qrcode";
            } else {
                // Close any other open QR drawer for clean accordion layout
                document.querySelectorAll(".qr-drawer.open").forEach(otherDrawer => {
                    otherDrawer.classList.remove("open");
                    const otherBtn = otherDrawer.closest(".link-row-card")?.querySelector(".btn-qr-link");
                    if (otherBtn) {
                        otherBtn.classList.remove("active");
                        const otherSpan = otherBtn.querySelector("span");
                        const otherIcon = otherBtn.querySelector("i");
                        if (otherSpan) otherSpan.innerText = showText;
                        if (otherIcon) otherIcon.className = "fa-solid fa-qrcode";
                    }
                });

                // Generate QR if not generated yet
                if (qrCanvasContainer && qrCanvasContainer.children.length === 0) {
                    if (typeof QRCode !== "undefined") {
                        new QRCode(qrCanvasContainer, {
                            text: url,
                            width: 170,
                            height: 170,
                            colorDark: "#030712",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.M
                        });
                    } else {
                        // Fallback SVG / Image
                        const qrImg = document.createElement("img");
                        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(url)}`;
                        qrImg.alt = `QR Code: ${title}`;
                        qrImg.className = "qr-code-img";
                        qrCanvasContainer.appendChild(qrImg);
                    }
                }

                drawer.classList.add("open");
                btn.classList.add("active");
                if (span) span.innerText = hideText;
                if (icon) icon.className = "fa-solid fa-xmark";

                // Smooth scroll into view on mobile if needed
                setTimeout(() => {
                    const rect = drawer.getBoundingClientRect();
                    if (rect.bottom > window.innerHeight) {
                        window.scrollBy({ top: rect.bottom - window.innerHeight + 30, behavior: "smooth" });
                    }
                }, 200);
            }
        });
    });

});
