/**
 * AK TECH - INTERACTIVE FREE ONLINE TOOLS
 * Image Resizer, Image Format Converter, Image to PDF, PDF to Image, Quick Advice Form
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. TOOL TABS SWITCHER
       ========================================================================== */
    const toolTabs = document.querySelectorAll(".tool-tab-btn");
    const toolPanels = document.querySelectorAll(".tool-card-panel");

    toolTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetId = tab.getAttribute("data-tool");
            
            toolTabs.forEach(t => t.classList.remove("active"));
            toolPanels.forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });


    /* ==========================================================================
       2. IMAGE RESIZER
       ========================================================================== */
    const resizerInput = document.getElementById("resizerInput");
    const resizerDrop = document.getElementById("resizerDropZone");
    const resizerControls = document.getElementById("resizerControls");
    const resizerPreview = document.getElementById("resizerPreview");
    const resizerWidth = document.getElementById("resizerWidth");
    const resizerHeight = document.getElementById("resizerHeight");
    const resizerAspect = document.getElementById("resizerAspect");
    const resizerOriginalSize = document.getElementById("resizerOriginalSize");
    const resizerBtn = document.getElementById("resizerDownloadBtn");

    let loadedResizerImg = null;
    let originalRatio = 1;

    const handleResizerFile = (file) => {
        if (!file || !file.type.startsWith("image/")) {
            alert("Molimo odaberite validnu sliku (PNG, JPG, WEBP).");
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                loadedResizerImg = img;
                originalRatio = img.width / img.height;
                resizerWidth.value = img.width;
                resizerHeight.value = img.height;
                resizerOriginalSize.textContent = `${img.width} × ${img.height} px (${(file.size / 1024).toFixed(1)} KB)`;
                resizerPreview.src = e.target.result;
                resizerControls.style.display = "block";
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    if (resizerInput && resizerDrop) {
        resizerInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) handleResizerFile(e.target.files[0]);
        });

        resizerDrop.addEventListener("dragover", (e) => {
            e.preventDefault();
            resizerDrop.classList.add("dragover");
        });
        resizerDrop.addEventListener("dragleave", () => resizerDrop.classList.remove("dragover"));
        resizerDrop.addEventListener("drop", (e) => {
            e.preventDefault();
            resizerDrop.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) handleResizerFile(e.dataTransfer.files[0]);
        });

        resizerWidth.addEventListener("input", () => {
            if (resizerAspect.checked && originalRatio > 0) {
                resizerHeight.value = Math.round(resizerWidth.value / originalRatio);
            }
        });

        resizerHeight.addEventListener("input", () => {
            if (resizerAspect.checked && originalRatio > 0) {
                resizerWidth.value = Math.round(resizerHeight.value * originalRatio);
            }
        });

        resizerBtn.addEventListener("click", () => {
            if (!loadedResizerImg) return;
            const w = parseInt(resizerWidth.value, 10);
            const h = parseInt(resizerHeight.value, 10);
            if (!w || !h || w <= 0 || h <= 0) {
                alert("Unesite ispravne dimenzije.");
                return;
            }

            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(loadedResizerImg, 0, 0, w, h);

            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `aktech-resized-${w}x${h}.png`;
                a.click();
                URL.revokeObjectURL(url);
            }, "image/png");
        });
    }


    /* ==========================================================================
       3. IMAGE FORMAT CONVERTER
       ========================================================================== */
    const converterInput = document.getElementById("converterInput");
    const converterDrop = document.getElementById("converterDropZone");
    const converterControls = document.getElementById("converterControls");
    const converterPreview = document.getElementById("converterPreview");
    const converterFormat = document.getElementById("converterFormat");
    const converterQuality = document.getElementById("converterQuality");
    const converterQualityVal = document.getElementById("converterQualityVal");
    const converterBtn = document.getElementById("converterDownloadBtn");

    let loadedConverterImg = null;
    let converterFileName = "converted-image";

    const handleConverterFile = (file) => {
        if (!file || !file.type.startsWith("image/")) {
            alert("Molimo odaberite validnu sliku.");
            return;
        }
        converterFileName = file.name.substring(0, file.name.lastIndexOf('.')) || "image";
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                loadedConverterImg = img;
                converterPreview.src = e.target.result;
                converterControls.style.display = "block";
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    if (converterInput && converterDrop) {
        converterInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) handleConverterFile(e.target.files[0]);
        });
        converterDrop.addEventListener("dragover", (e) => { e.preventDefault(); converterDrop.classList.add("dragover"); });
        converterDrop.addEventListener("dragleave", () => converterDrop.classList.remove("dragover"));
        converterDrop.addEventListener("drop", (e) => {
            e.preventDefault();
            converterDrop.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) handleConverterFile(e.dataTransfer.files[0]);
        });

        converterQuality.addEventListener("input", () => {
            converterQualityVal.textContent = `${Math.round(converterQuality.value * 100)}%`;
        });

        converterBtn.addEventListener("click", () => {
            if (!loadedConverterImg) return;
            const targetMime = converterFormat.value;
            const quality = parseFloat(converterQuality.value);

            const canvas = document.createElement("canvas");
            canvas.width = loadedConverterImg.width;
            canvas.height = loadedConverterImg.height;
            const ctx = canvas.getContext("2d");

            // Fill white background for JPEG in case of transparent PNG
            if (targetMime === "image/jpeg") {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(loadedConverterImg, 0, 0);

            canvas.toBlob((blob) => {
                let ext = "png";
                if (targetMime === "image/jpeg") ext = "jpg";
                if (targetMime === "image/webp") ext = "webp";

                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `aktech-${converterFileName}.${ext}`;
                a.click();
                URL.revokeObjectURL(url);
            }, targetMime, quality);
        });
    }


    /* ==========================================================================
       4. IMAGE TO PDF CONVERTER
       ========================================================================== */
    const imgPdfInput = document.getElementById("imgPdfInput");
    const imgPdfDrop = document.getElementById("imgPdfDropZone");
    const imgPdfList = document.getElementById("imgPdfList");
    const imgPdfControls = document.getElementById("imgPdfControls");
    const imgPdfBtn = document.getElementById("imgPdfBtn");

    let imgPdfFiles = [];

    const updateImgPdfUI = () => {
        imgPdfList.innerHTML = "";
        if (imgPdfFiles.length === 0) {
            imgPdfControls.style.display = "none";
            return;
        }
        imgPdfControls.style.display = "block";
        imgPdfFiles.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "pdf-item-preview";
            card.innerHTML = `
                <img src="${item.preview}" alt="Page ${index + 1}">
                <div class="pdf-item-meta">
                    <span>Stranica ${index + 1}: ${item.name}</span>
                    <button type="button" class="btn-remove" data-idx="${index}"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            imgPdfList.appendChild(card);
        });

        imgPdfList.querySelectorAll(".btn-remove").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-idx"), 10);
                imgPdfFiles.splice(idx, 1);
                updateImgPdfUI();
            });
        });
    };

    const handleImgPdfFiles = (files) => {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith("image/")) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    imgPdfFiles.push({
                        name: file.name,
                        img: img,
                        preview: e.target.result
                    });
                    updateImgPdfUI();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    };

    if (imgPdfInput && imgPdfDrop) {
        imgPdfInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) handleImgPdfFiles(e.target.files);
        });
        imgPdfDrop.addEventListener("dragover", (e) => { e.preventDefault(); imgPdfDrop.classList.add("dragover"); });
        imgPdfDrop.addEventListener("dragleave", () => imgPdfDrop.classList.remove("dragover"));
        imgPdfDrop.addEventListener("drop", (e) => {
            e.preventDefault();
            imgPdfDrop.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) handleImgPdfFiles(e.dataTransfer.files);
        });

        imgPdfBtn.addEventListener("click", () => {
            if (imgPdfFiles.length === 0) return;
            // Check if window.jspdf is available from CDN
            if (window.jspdf && window.jspdf.jsPDF) {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF();
                
                imgPdfFiles.forEach((item, index) => {
                    if (index > 0) pdf.addPage();
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    
                    const ratio = item.img.width / item.img.height;
                    let renderW = pageWidth - 20;
                    let renderH = renderW / ratio;
                    
                    if (renderH > pageHeight - 20) {
                        renderH = pageHeight - 20;
                        renderW = renderH * ratio;
                    }
                    
                    const posX = (pageWidth - renderW) / 2;
                    const posY = (pageHeight - renderH) / 2;
                    
                    pdf.addImage(item.preview, "JPEG", posX, posY, renderW, renderH);
                });
                
                pdf.save("aktech-converted-document.pdf");
            } else {
                alert("Greška pri učitavanju PDF biblioteke. Provjerite internet konekciju.");
            }
        });
    }


    /* ==========================================================================
       5. PDF TO IMAGE CONVERTER (PDF.js)
       ========================================================================== */
    const pdfImgInput = document.getElementById("pdfImgInput");
    const pdfImgDrop = document.getElementById("pdfImgDropZone");
    const pdfImgControls = document.getElementById("pdfImgControls");
    const pdfImgResults = document.getElementById("pdfImgResults");
    const pdfImgStatus = document.getElementById("pdfImgStatus");

    const handlePdfToImages = async (file) => {
        if (!file || file.type !== "application/pdf") {
            alert("Molimo odaberite validan PDF dokument.");
            return;
        }

        if (!window.pdfjsLib) {
            alert("PDF.js biblioteka nije učitana.");
            return;
        }

        pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

        pdfImgControls.style.display = "block";
        pdfImgResults.innerHTML = "";
        pdfImgStatus.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Učitavanje i renderovanje stranica...`;

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            pdfImgStatus.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> Uspješno prepoznato <strong>${pdf.numPages}</strong> stranica.`;

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });
                
                const canvas = document.createElement("canvas");
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext("2d");
                
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;

                const imgUrl = canvas.toDataURL("image/png");

                const resultCard = document.createElement("div");
                resultCard.className = "pdf-page-card glass-card";
                resultCard.innerHTML = `
                    <div class="pdf-page-header">Stranica ${pageNum} / ${pdf.numPages}</div>
                    <img src="${imgUrl}" alt="Stranica ${pageNum}">
                    <a href="${imgUrl}" download="aktech-page-${pageNum}.png" class="btn btn-secondary btn-sm">
                        <i class="fa-solid fa-download"></i> Preuzmi Stranicu ${pageNum} (PNG)
                    </a>
                `;
                pdfImgResults.appendChild(resultCard);
            }
        } catch (err) {
            console.error(err);
            pdfImgStatus.innerHTML = `<span class="color-red">Greška pri čitanju PDF fajla: ${err.message}</span>`;
        }
    };

    if (pdfImgInput && pdfImgDrop) {
        pdfImgInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) handlePdfToImages(e.target.files[0]);
        });
        pdfImgDrop.addEventListener("dragover", (e) => { e.preventDefault(); pdfImgDrop.classList.add("dragover"); });
        pdfImgDrop.addEventListener("dragleave", () => pdfImgDrop.classList.remove("dragover"));
        pdfImgDrop.addEventListener("drop", (e) => {
            e.preventDefault();
            pdfImgDrop.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) handlePdfToImages(e.dataTransfer.files[0]);
        });
    }


    /* ==========================================================================
       6. QUICK TECH ADVICE FORM (WhatsApp, Viber & Email)
       ========================================================================== */
    const adviceForm = document.getElementById("adviceForm");
    const adviceWaBtn = document.getElementById("adviceWaBtn");
    const adviceViberBtn = document.getElementById("adviceViberBtn");

    const getAdviceMessage = () => {
        const name = document.getElementById("adviceName") ? document.getElementById("adviceName").value.trim() : "";
        const device = document.getElementById("adviceDevice") ? document.getElementById("adviceDevice").value : "";
        const problem = document.getElementById("adviceMessage") ? document.getElementById("adviceMessage").value.trim() : "";
        
        let text = "Pozdrav Almir (AK Tech), potreban mi je tehnički savjet / procjena kvara:";
        if (name) text += `\nIme: ${name}`;
        if (device) text += `\nUređaj: ${device}`;
        if (problem) text += `\nOpis problema: ${problem}`;
        return text;
    };

    if (adviceWaBtn) {
        adviceWaBtn.addEventListener("click", () => {
            const msg = encodeURIComponent(getAdviceMessage());
            window.open(`https://wa.me/38761293073?text=${msg}`, "_blank");
        });
    }

    if (adviceViberBtn) {
        adviceViberBtn.addEventListener("click", () => {
            const msg = encodeURIComponent(getAdviceMessage());
            window.location.href = `viber://chat?number=%2B38761293073&draft=${msg}`;
        });
    }
});
