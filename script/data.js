/**
 * AK TECH - CENTRAL DATA REPOSITORY
 * Svi proizvodi, resursi, alati i projekti se nalaze u ovom fajlu.
 */

window.AK_CONFIG = {
    phone: "+387 61 293 073",
    phoneDisplay: "+387 61 293 073",
    whatsappLink: "https://wa.me/38761293073",
    viberLink: "viber://chat?number=%2B38761293073",
    email: "support@aktech.work",
    web3formsKey: "26caf51b-c0da-4bcd-9dbe-8a686cf65a40",
    github: "https://github.com/KadricAl",
    instagram: "https://www.instagram.com/ak.tech.verse?exln=N3piMXA0NmQ5NzFv&utm_source=qr",
    olxShop: "https://olx.ba/profil/AKTech",
    gumroadShop: "https://aktechcraft.gumroad.com/",
    facebook: "https://www.facebook.com/share/1A7irGQCFo/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@aktechvers?si=SF_6i_wLMFAemTBW",
    threads: "https://www.threads.com/@ak.tech.verse?igshid=NTc4MTIwNjQ2YQ=="
};

window.AK_DATA = {
    // 1. Featured Products (Vlastiti softver)
    featuredProducts: [
        {
            id: "feat-1",
            title: "TODO Pro - Desktop Productivity Suite",
            category: "Produktivnost & Organizacija",
            badge: "Novo / Preporučeno",
            price: "0+ / Gumroad",
            image: "images/dev_bg.png",
            description_bs: "Sveobuhvatna Windows desktop aplikacija za ličnu i radnu efikasnost: pametni zadaci sa prioritetima (Tasks), brze bilješke (Notes), praćenje navika (Smart Habits) i integrisani Focus tajmer.",
            description_en: "All-in-one desktop productivity powerhouse: advanced Task Manager, instant Notes, Smart Habit streaks tracker, and distraction-free Focus Pomodoro timer.",
            whatsappText: "Pozdrav Almir, zanima me TODO Pro desktop aplikacija",
            directUrl: "https://aktechcraft.gumroad.com/l/todopro"
        },
        {
            id: "feat-2",
            title: "VaultGuard Password & Security Manager",
            category: "Sigurnost & Privatnost",
            badge: "Popularno",
            price: "0+ / Gumroad",
            image: "images/software_bg.png",
            description_bs: "Lokalna, enkriptovana aplikacija za sigurno čuvanje lozinki, licenci i API ključeva bez slanja na tuđe cloud servere.",
            description_en: "Local zero-knowledge encrypted vault for passwords, software keys, and secure credentials without external cloud telemetry.",
            whatsappText: "Zanima me VaultGuard aplikacija",
            directUrl: "https://aktechcraft.gumroad.com/l/VaultGuard"
        },
        {
            id: "feat-3",
            title: "Desktop QR Generator Utility",
            category: "Desktop Utility",
            badge: "Korisno",
            price: "0+ (Besplatno / Donacija)",
            image: "images/dev_bg.png",
            description_bs: "Brzi generator Wi-Fi kartica, vCard kontakata, linkova i teksta u QR kodove visoke rezolucije za štampu.",
            description_en: "Instant utility for generating Wi-Fi cards, vCards, URLs, and text into crisp high-res QR codes ready for print.",
            whatsappText: "Zanima me QR Generator alat",
            directUrl: "https://aktechcraft.gumroad.com/l/qrgen"
        }
    ],

    // 2. Gumroad Products (Tačno 3 proizvoda sa 0+ cijenom)
    gumroadProducts: [
        {
            id: "gum-1",
            title: "QR Code Generator Pro",
            badge: "Utility",
            price: "0+",
            image: "images/dev_bg.png",
            gumroadUrl: "https://aktechcraft.gumroad.com/l/qrgen",
            description_bs: "Prilagođeni QR kod generator sa izvozom u vektorski SVG i visoku PNG rezoluciju.",
            description_en: "Custom QR code creation utility with vector SVG and high-resolution PNG exports."
        },
        {
            id: "gum-2",
            title: "VaultGuard Security Manager",
            badge: "Security",
            price: "0+",
            image: "images/software_bg.png",
            gumroadUrl: "https://aktechcraft.gumroad.com/l/VaultGuard",
            description_bs: "Enkriptovani lokalni sef za čuvanje osjetljivih podataka i sistemskih pristupnih šifri.",
            description_en: "Encrypted offline vault for securing critical credentials, backup keys, and license assets."
        },
        {
            id: "gum-3",
            title: "Windows Shutdown & Sleep Timer",
            badge: "Automation",
            price: "0+",
            image: "images/repair_bg.png",
            gumroadUrl: "https://aktechcraft.gumroad.com/l/shutdowntimer",
            description_bs: "Automatizacija napajanja i inteligentno gašenje računara po tajmeru ili završetku procesa.",
            description_en: "Intelligent system power timer for scheduled power-offs and sleep modes."
        }
    ],

    // 3. OLX Top 4 Artikala (Tačno 4 unijeta linka)
    olxProducts: [
        {
            id: "olx-1",
            title: "Laptop Lenovo E31 (Intel, 8GB RAM, 240GB SSD, Win 11)",
            category: "Laptopi / Posao & Škola",
            condition: "Testirano / Klasa A",
            price: "260 KM",
            image: "images/olx_lenovo_e31.png",
            olxUrl: "https://olx.ba/artikal/78637255",
            whatsappText: "Pozdrav Almir, zanima me Laptop Lenovo E31 (260 KM) sa OLX-a: https://olx.ba/artikal/78637255"
        },
        {
            id: "olx-2",
            title: "Dell PC Set OptiPlex 7020 + Monitor 27\" (16GB RAM, SSD)",
            category: "PC Računari & Setovi",
            condition: "Komplet sa monitorom 27\"",
            price: "380 KM",
            image: "images/olx_dell_optiplex.png",
            olxUrl: "https://olx.ba/artikal/79072033",
            whatsappText: "Pozdrav Almir, zanima me Dell OptiPlex 7020 set sa 27\" monitorom (380 KM) sa OLX-a: https://olx.ba/artikal/79072033"
        },
        {
            id: "olx-3",
            title: "Xiaomi Redmi Note 11 Pro (8GB / 128GB, 108MP, 120Hz)",
            category: "Pametni Telefoni",
            condition: "Kao novo / 5000 mAh",
            price: "180 KM",
            image: "images/olx_redmi_note11.png",
            olxUrl: "https://olx.ba/artikal/78645082",
            whatsappText: "Pozdrav Almir, zanima me Xiaomi Redmi Note 11 Pro (180 KM) sa OLX-a: https://olx.ba/artikal/78645082"
        },
        {
            id: "olx-4",
            title: "Samsung Galaxy Tab A7 Lite (8.0\" Ekran, 3GB RAM, 32GB)",
            category: "Tableti & Android Uređaji",
            condition: "Testirano / Bijela Boja",
            price: "180 KM",
            image: "images/olx_samsung_tab.png",
            olxUrl: "https://olx.ba/artikal/73679649",
            whatsappText: "Pozdrav Almir, zanima me Samsung Galaxy Tab A7 Lite (180 KM) sa OLX-a: https://olx.ba/artikal/73679649"
        }
    ],

    // 4. Grupni Proizvodi (Umjesto Best Buy: Laptopi, PC, Tableti, Telefoni)
    groupProducts: [
        {
            id: "grp-1",
            title: "Laptopi",
            badge: "Klasa A & Provjereno",
            startPrice: "250 KM",
            image: "images/group_laptops.jpg",
            desc_bs: "Biznis, radni i studentski laptopi (Lenovo ThinkPad, Dell Latitude, HP EliteBook). Očišćeni, nova termalna pasta i instaliran svjež sistem.",
            desc_en: "Business, workstation, and student laptops (ThinkPad, Latitude, EliteBook). Fully cleaned with fresh thermal paste and clean OS.",
            olxUrl: "https://olx.ba/profil/AKTech",
            whatsappText: "Pozdrav, zanima me ponuda laptopa od 250 KM."
        },
        {
            id: "grp-2",
            title: "PC Računari",
            badge: "Gaming & Office",
            startPrice: "200 KM",
            image: "images/group_desktops.jpg",
            desc_bs: "Složene konfiguracije za kancelariju, školu, programiranje i gaming. Mogućnost sklapanja konfiguracija po želji kupca.",
            desc_en: "Custom desktop computers for office, productivity, and gaming. Custom part sourcing and assembly available.",
            olxUrl: "https://olx.ba/profil/AKTech",
            whatsappText: "Pozdrav, zanima me ponuda PC računara od 200 KM."
        },
        {
            id: "grp-3",
            title: "Tableti",
            badge: "Multimedija & Djeca",
            startPrice: "150 KM",
            image: "images/group_tablets.jpg",
            desc_bs: "Tableti za YouTube, čitanje, školske zadatke i prezentacije. Provjereno zdravlje baterije i originalni punjači.",
            desc_en: "Tablets for streaming, reading, e-learning, and everyday browsing. Verified battery health and chargers included.",
            olxUrl: "https://olx.ba/profil/AKTech",
            whatsappText: "Pozdrav, zanima me ponuda tableta od 150 KM."
        },
        {
            id: "grp-4",
            title: "Telefoni",
            badge: "Android & Smart",
            startPrice: "100 KM",
            image: "images/group_phones.jpg",
            desc_bs: "Povoljni pametni telefoni za posao, navigaciju ili kao pouzdan rezervni uređaj. Otključani na sve mreže.",
            desc_en: "Affordable smartphones for work, secondary lines, or navigation. Factory unlocked for all carriers.",
            olxUrl: "https://olx.ba/profil/AKTech",
            whatsappText: "Pozdrav, zanima me ponuda telefona od 100 KM."
        }
    ],

    // 5. Downloads (9 Dokumenata / PDF-a + 5 Aplikacija / ZIP)
    downloads: [
        // A. Dokumenti & PDF Vodiči
        {
            id: "dl-doc-1",
            category: "doc",
            title: "Windows 11: Ključne Prečice & Savjeti za Produktivnost",
            type: "PDF Priručnik",
            fileSize: "825 KB",
            version: "2026 Izdanje",
            filePath: "downloads/windows-11-tips-shortcuts-aktech.pdf",
            description_bs: "Oficijelni AK Tech priručnik: najvažnije tastaturne prečice za multitasking, Snap layouts, historiju međuspremnika i 6 provjerenih savjeta za ubrzanje Windows 11.",
            description_en: "Official AK Tech cheat sheet: essential keyboard shortcuts for multitasking, Snap layouts, clipboard history, and 6 proven Windows 11 tuning secrets."
        },
        {
            id: "dl-doc-2",
            category: "doc",
            title: "Vodič za pravilno održavanje i čišćenje računara",
            type: "PDF Dokument",
            fileSize: "670 KB",
            version: "2026 Izdanje",
            filePath: "downloads/vodic-odrzavanje-racunara-aktech.pdf",
            description_bs: "Oficijelni AK Tech servisni priručnik na 2 strane: zamjena termalne paste, čišćenje ventilatora, očuvanje baterije i 6 zlatnih servisnih pravila.",
            description_en: "Official AK Tech 2-page hardware maintenance handbook: thermal paste replacement, fan cleaning, battery preservation, and 6 essential rules."
        },
        {
            id: "dl-doc-3",
            category: "doc",
            title: "Baterija Laptopa: Vodič za Dug Vijek",
            type: "PDF Priručnik",
            fileSize: "682 KB",
            version: "2026 Izdanje",
            filePath: "downloads/vodic-baterija-laptopa-aktech.pdf",
            description_bs: "Kratki AK Tech vodič na 2 stranice: pravilo punjenja 20–80%, zaštita od pregrijavanja, 80% limit po brendovima, Windows dijagnostika baterije i 6 zlatnih pravila.",
            description_en: "Concise 2-page AK Tech battery care handbook: 20–80% charging sweet spot, thermal protection, OEM 80% charge limits, Windows battery report, and 6 longevity rules."
        },
        {
            id: "dl-doc-4",
            category: "doc",
            title: "Sigurnost na Windows-u: Zaštita Sistema & Prevencija Prijetnji",
            type: "PDF Dokument",
            fileSize: "830 KB",
            version: "2026 Izdanje",
            filePath: "downloads/sigurnost-i-zastita-podataka.pdf",
            description_bs: "Oficijelni vodič za zaštitu Windowsa: Core Isolation, Defender Tamper Protection, BitLocker, Passkeys, Sysinternals i 6 zlatnih pravila digitalne higijene.",
            description_en: "Official Windows security guide: Core Isolation, Defender Tamper Protection, BitLocker, Passkeys, Sysinternals, and 6 essential digital hygiene rules."
        },
        {
            id: "dl-doc-5",
            category: "doc",
            title: "Google Chrome: Napredni Savjeti, Prečice & Optimizacija",
            type: "PDF Vodič",
            fileSize: "812 KB",
            version: "2026 Izdanje",
            filePath: "downloads/chrome-tips-tricks-aktech.pdf",
            description_bs: "Oficijelni AK Tech priručnik na 2 stranice: najvažnije tastaturne prečice, ušteda RAM memorije (Memory Saver), upravljanje grupama tabova, ubrzanje preuzimanja i 6 zlatnih pravila sigurnosti.",
            description_en: "Official AK Tech 2-page Chrome power-user guide: essential shortcuts, Memory Saver tuning, tab groups, parallel download acceleration, and 6 security hygiene rules."
        },
        {
            id: "dl-doc-6",
            category: "doc",
            title: "Excel: Ključne Prečice & Funkcije",
            type: "PDF Priručnik",
            fileSize: "793 KB",
            version: "2026 Izdanje",
            filePath: "downloads/excel-tips-tricks-aktech.pdf",
            description_bs: "Praktični AK Tech vodič na 2 stranice: najkorištenije tastaturne prečice, SUM/IF/XLOOKUP/SUMIF formule, Pivot tabele za 30 sekundi i 6 zlatnih pravila za Excel.",
            description_en: "Practical 2-page AK Tech Excel guide: must-know shortcuts, SUM/IF/XLOOKUP/SUMIF formulas, 30-second Pivot Tables, error codes, and 6 spreadsheet best practices."
        },
        {
            id: "dl-doc-7",
            category: "doc",
            title: "Baterija & Punjač Mobitela: Vodič",
            type: "PDF Vodič",
            fileSize: "667 KB",
            version: "2026 Izdanje",
            filePath: "downloads/baterija-punjac-mobitela-aktech.pdf",
            description_bs: "AK Tech priručnik na 2 stranice za iPhone i Android: zona punjenja 20–80%, zaštita od pregrijavanja, USB-C PD/PPS/GaN punjači, čišćenje porta i mitovi vs. istina.",
            description_en: "2-page AK Tech mobile battery care handbook (iOS & Android): 20–80% charging rule, heat protection, USB-C PD/GaN chargers, port cleaning, and charging myths."
        },
        {
            id: "dl-doc-8",
            category: "doc",
            title: "Linux: Terminal Prečice & Trikovi",
            type: "PDF Priručnik",
            fileSize: "1.12 MB",
            version: "2026 Izdanje",
            filePath: "downloads/linux-tips-tricks-aktech.pdf",
            description_bs: "Oficijelni AK Tech vodič na 2 stranice: Bash/Zsh prečice, pretraga s grep/find, disk i RAM dijagnostika, systemd servisi, chmod, ~/.bashrc aliasi i sigurnost.",
            description_en: "Official 2-page AK Tech Linux guide: Bash/Zsh shortcuts, grep/find search, disk and RAM diagnostics, systemd services, chmod permissions, and ~/.bashrc aliases."
        },
        {
            id: "dl-doc-9",
            category: "doc",
            title: "ChatGPT: Promptovi za Svaki Dan",
            type: "PDF Cheat Sheet",
            fileSize: "658 KB",
            version: "2026 Izdanje",
            filePath: "downloads/chatgpt-promptovi-aktech.pdf",
            description_bs: "Kompaktni vodič na 1 stranici: formula savršenog prompta, 8 gotovih AI kodova za emailove, Excel, sažetke, učenje i debug koda, uz 3 pravila sigurnosti.",
            description_en: "Compact 1-page ChatGPT cheat sheet: the 4-pillar prompt formula, 8 copy-paste daily prompts for emails, Excel, summaries, study plans, and debugging."
        },

        // B. Aplikacije & ZIP Arhive
        {
            id: "dl-app-1",
            category: "app",
            title: "AK Tech Windows Quick Tweaker Utility",
            type: "Aplikacija (ZIP)",
            fileSize: "1.5 MB",
            version: "v1.4",
            filePath: "downloads/aktech-windows-tweaker.zip",
            description_bs: "Skripta za gašenje suvišnih pozadinskih servisa, telemetrije i privremenih keš datoteka jednim klikom.",
            description_en: "One-click batch tool to stop bloat services, disable background telemetry, and wipe junk cache."
        },
        {
            id: "dl-app-2",
            category: "app",
            title: "Mini Hardware Sensor Monitor",
            type: "Aplikacija (ZIP)",
            fileSize: "2.8 MB",
            version: "v1.0",
            filePath: "downloads/hardware-monitor-mini.zip",
            description_bs: "Kompaktni desktop widget za očitavanje temperature CPU/GPU jezgri i brzine ventilatora.",
            description_en: "Lightweight floating telemetry widget showing real-time CPU/GPU thermal data and fan speeds."
        },
        {
            id: "dl-app-3",
            category: "app",
            title: "One-Click System Cache & Temp Cleaner",
            type: "Aplikacija (ZIP)",
            fileSize: "850 KB",
            version: "v2.1",
            filePath: "downloads/batch-cache-cleaner.zip",
            description_bs: "Čisti Prefetch, Windows Temp, update ostatke i oslobađa gigabajte prostora na C: disku.",
            description_en: "Safely cleans Windows Temp directories, Prefetch, and stale update caches to free storage."
        },
        {
            id: "dl-app-4",
            category: "app",
            title: "Desktop QR Code Generator Utility",
            type: "Aplikacija (ZIP)",
            fileSize: "4.2 MB",
            version: "v1.0",
            filePath: "downloads/qr-code-generator-desktop.zip",
            description_bs: "Offline program za trenutno generisanje Wi-Fi i vCard QR kodova bez interneta.",
            description_en: "Standalone offline desktop generator for Wi-Fi configurations and high-resolution vCard QR codes."
        },
        {
            id: "dl-app-5",
            category: "app",
            title: "AK Tech Mini Hardware & PC Health Check",
            type: "Portable Aplikacija (ZIP)",
            fileSize: "18.4 MB",
            version: "v1.0 Portable",
            filePath: "downloads/aktech-mini-pc-check.zip",
            description_bs: "Samostalni prenosivi Windows alat za hardversku inspekciju: provjera CPU, RAM i diskova, automatska ocjena zdravlja računara (0-100) i korisnički vodič.",
            description_en: "Standalone portable Windows diagnostic tool: CPU, RAM, and disk checks, automated PC Health Score (0-100), and included interactive user guide."
        }
    ],

    // 6. Top Open-Source Apps (Dodati Krita i Blender, izbačeni Notepad i VLC)
    openSourceApps: [
        {
            name: "7-Zip",
            category: "Arhiviranje & Kompresija",
            desc_bs: "Najbrži i najpouzdaniji besplatni program za raspakivanje RAR, ZIP i 7z arhiva bez reklama.",
            desc_en: "High compression ratio archiver with support for 7z, ZIP, RAR, TAR and more with zero bloat.",
            url: "https://www.7-zip.org/",
            icon: "fa-solid fa-file-zipper"
        },
        {
            name: "Blender",
            category: "3D Modelovanje & Render",
            desc_bs: "Vrhunski profesionalni softver otvorenog koda za 3D modelovanje, animaciju, simulacije i video montažu.",
            desc_en: "World-class open source 3D creation suite supporting modeling, rigging, animation, and rendering.",
            url: "https://www.blender.org/",
            icon: "fa-solid fa-cube"
        },
        {
            name: "Krita",
            category: "Digitalno Slikanje & Ilustracija",
            desc_bs: "Profesionalan besplatan program za digitalne umjetnike, ilustratore, stripove i teksturiranje materijala.",
            desc_en: "Professional open source painting and raster graphics program built for concept artists and illustrators.",
            url: "https://krita.org/",
            icon: "fa-solid fa-paint-brush"
        },
        {
            name: "OBS Studio",
            category: "Snimanje & Streaming",
            desc_bs: "Zlatni standard za snimanje ekrana, gaming streamova i podcasta u kristalnoj rezoluciji.",
            desc_en: "The industry standard open source software for video recording and live streaming.",
            url: "https://obsproject.com/",
            icon: "fa-solid fa-video"
        },
        {
            name: "LibreOffice",
            category: "Office Paket",
            desc_bs: "Odlična besplatna alternativa za MS Word, Excel i PowerPoint s punom podrškom za sve formate.",
            desc_en: "Powerful open source office suite offering full compatibility with Word, Excel, and PowerPoint files.",
            url: "https://www.libreoffice.org/",
            icon: "fa-solid fa-file-lines"
        },
        {
            name: "BleachBit",
            category: "Čišćenje & Privatnost",
            desc_bs: "Otvorena alternativa CCleaneru koja temeljito briše cache, historiju i oslobađa gigabajte prostora.",
            desc_en: "Open source system cleaner and privacy manager that cleans cache and wipes junk files.",
            url: "https://www.bleachbit.org/",
            icon: "fa-solid fa-broom"
        }
    ],

    // 7. AI Alati: Grupa 1 - Free & Open AI Modeli koje treba isprobati (8 manjih kartica)
    aiModelsToTry: [
        {
            name: "DeepSeek (V3 / R1)",
            badge: "Top Reasoning",
            desc_bs: "Izuzetno moćan open-weights model koji parira vodećim zatvorenim modelima u matematici i kodiranju.",
            desc_en: "State-of-the-art open weights reasoning model rivaling proprietary giants in math and code.",
            url: "https://chat.deepseek.com/"
        },
        {
            name: "Kimi AI (Moonshot)",
            badge: "Veliki Kontekst",
            desc_bs: "Specijalizovan za analizu ogromnih PDF dokumenata, knjiga i dugih programerskih repozitorija.",
            desc_en: "Exceptional long-context conversational AI designed for analyzing massive documents and codebases.",
            url: "https://kimi.moonshot.cn/"
        },
        {
            name: "Qwen 2.5 (Alibaba)",
            badge: "Multi-Language & Code",
            desc_bs: "Jedan od najsposobnijih otvorenih modela sa impresivnim znanjem programskih jezika i logike.",
            desc_en: "Alibaba's benchmark-crushing open model family with elite performance in coding and reasoning.",
            url: "https://chat.qwenlm.ai/"
        },
        {
            name: "GLM (Zhipu AI)",
            badge: "Bilingual AI",
            desc_bs: "Napredna serija modela sa moćnim višemodalnim razumijevanjem teksta i logičkih operacija.",
            desc_en: "Pioneering bilingual open-foundation model delivering robust logical analysis and translation.",
            url: "https://chatglm.cn/"
        },
        {
            name: "Meta Llama 3.3",
            badge: "Open Ecosystem",
            desc_bs: "Stub modernog open-source AI pokreta, dostupan za pokretanje lokalno i u oblaku.",
            desc_en: "The industry benchmark for open models, empowering local and enterprise deployments worldwide.",
            url: "https://www.meta.ai/"
        },
        {
            name: "NVIDIA NIM & Build",
            badge: "Ultra-Fast Inference",
            desc_bs: "Besplatna platforma za testiranje najbržih optimizovanih modela na NVIDIA serverskoj infrastrukturi.",
            desc_en: "Explore and prototype enterprise-grade optimized AI microservices directly in the browser.",
            url: "https://build.nvidia.com/"
        },
        {
            name: "Xiaomi MiLM (HyperOS AI)",
            badge: "Mobile & Edge AI",
            desc_bs: "Xiaomi-jev istraživački model optimizovan za rad na potrošačkim uređajima i pametnim sistemima.",
            desc_en: "Xiaomi's lightweight language model optimized for smart home and edge device workflows.",
            url: "https://github.com/Xiaomi/MiLM"
        },
        {
            name: "Mistral Le Chat",
            badge: "European Open AI",
            desc_bs: "Brz, precizan i evropski orijentisan AI asistent baziran na Mistral Large i NeMo modelima.",
            desc_en: "Fast, privacy-conscious European AI assistant built on cutting-edge open weights architectures.",
            url: "https://chat.mistral.ai/"
        }
    ],

    // 7. AI Alati: Grupa 2 - Open Source AI Kodiranje, Agenti & Alati
    aiCodingAgents: [
        {
            name: "Goose (Block)",
            badge: "Autonomous AI Agent",
            desc_bs: "Otvoreni inženjerski AI agent kompanije Block koji automatizuje developerske zadatke, piše kod i pokreće alate kroz CLI i MCP protokol.",
            desc_en: "Open-source, extensible developer agent by Block that automates complex software workflows, writes code, and connects to tools via MCP.",
            url: "https://github.com/block/goose"
        },
        {
            name: "Ollama",
            badge: "Local AI Runtime",
            desc_bs: "Vodeći open-source alat za pokretanje DeepSeek, Llama, Qwen i drugih LLM modela lokalno na vlastitom računaru uz punu privatnost.",
            desc_en: "Leading open-source runtime to download, serve, and run large language models locally on your machine with zero cloud dependencies.",
            url: "https://ollama.com/"
        },
        {
            name: "Cline (Autonomous Coding)",
            badge: "VS Code Extension",
            desc_bs: "Autonomni AI agent u VS Code-u koji kreira fajlove, izvršava komande u terminalu i popravlja bugove.",
            desc_en: "Autonomous coding agent in VS Code capable of editing files, running tests, and executing CLI workflows.",
            url: "https://github.com/cline/cline"
        },
        {
            name: "OpenWork / OpenHands",
            badge: "AI Software Engineer",
            desc_bs: "Platforma za agente otvorenog koda koji rješavaju inženjerske zadatke, pregledaju PR-ove i pišu dokumentaciju.",
            desc_en: "Open platform for autonomous AI software engineers executing full end-to-end development tasks.",
            url: "https://github.com/All-Hands-AI/OpenHands"
        },
        {
            name: "OpenCode",
            badge: "Open Coding Suite",
            desc_bs: "Otvoreni ekosistem za generisanje, analizu i sigurno testiranje softverskog koda.",
            desc_en: "Open source toolset for automated code generation, linting, and semantic inspection.",
            url: "https://github.com/topics/opencode"
        },
        {
            name: "Aider / Continue",
            badge: "Pair Programming",
            desc_bs: "Open-source asistenti za programiranje u vašem terminalu i editoru uz rad sa lokalnim Git repozitorijima.",
            desc_en: "Command-line and in-IDE AI pair programming assistants built for real Git repository workflows.",
            url: "https://aider.chat/"
        }
    ],

    // 7. AI Alati: Grupa 3 - AI Infrastruktura & Hubovi (Ukupno 3 kartice)
    aiInfraHubs: [
        {
            name: "OpenRouter",
            badge: "Unified AI Gateway",
            desc_bs: "Jedinstven API za pristup svim vodećim AI modelima po najnižim cijenama i bez pretplate.",
            desc_en: "A single unified interface and API to access hundreds of models with flexible pay-per-token pricing.",
            url: "https://openrouter.ai/"
        },
        {
            name: "Hugging Face",
            badge: "The AI Hub",
            desc_bs: "Glavno svjetsko čvorište za hiljade otvorenih modela, dataseta i interaktivnih demo prostora.",
            desc_en: "The global home of machine learning collaboration with open weights, datasets, and Spaces demos.",
            url: "https://huggingface.co/"
        },
        {
            name: "LM Studio",
            badge: "Desktop LLM GUI",
            desc_bs: "Grafička desktop aplikacija za preuzimanje i pokretanje bilo kojeg GGUF modela potpuno offline.",
            desc_en: "Discover, download, and run local LLMs offline on your computer with a clean visual UI.",
            url: "https://lmstudio.ai/"
        }
    ],

    // 8. Top 3 Projects (Stvarni projekti sa GitHub profila @KadricAl)
    projects: [
        {
            id: "proj-1",
            title: "Django & React Device Management Platform",
            tech: ["Django REST", "React", "Python", "Tailwind CSS"],
            github: "https://github.com/KadricAl/Django-React-DeviceApp",
            demo: "https://github.com/KadricAl/Django-React-DeviceApp",
            image: "images/dev_bg.png",
            desc_bs: "Full-stack sistem sa Django REST API backendom i modularnim React frontendom za evidenciju, nadzor i servisno upravljanje tehničkim uređajima.",
            desc_en: "Full-stack hardware and device tracking suite featuring a robust Django REST API backend and a reactive modern React.js frontend interface."
        },
        {
            id: "proj-2",
            title: "POS Device Monitoring & Service System",
            tech: ["Python", "Django", "PostgreSQL / SQLite", "Tailwind CSS"],
            github: "https://github.com/KadricAl/Django-Full-V1",
            demo: "https://github.com/KadricAl/Django-Full-V1",
            image: "images/software_bg.png",
            desc_bs: "Full-stack Django platforma za nadzor POS terminala, radne naloge i upravljanje ulogama servisnih tehničara i klijenata na terenu.",
            desc_en: "Full-stack Django application for monitoring POS terminal fleets, tracking field installations, and managing technician service tickets."
        },
        {
            id: "proj-3",
            title: "React Daily Habit & Productivity Tracker",
            tech: ["React.js", "JavaScript", "HTML5 / CSS3", "Local Storage"],
            github: "https://github.com/KadricAl/React-DailyTracker-App",
            demo: "https://github.com/KadricAl/React-DailyTracker-App",
            image: "images/hero_bg.png",
            desc_bs: "Interaktivna web aplikacija u Reactu za praćenje dnevnih navika, zadataka i lične produktivnosti uz vizuelnu analitiku i statistiku progresa.",
            desc_en: "Interactive React productivity application for tracking daily habits, task completion streaks, and personal progress analytics."
        }
    ]
};
