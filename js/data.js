const projectsData = [
    {
        id: "ecopanel",
        title: "EcoPanel Simulator",
        category: "code",
        categoryLabel: "Web",
        image: "images/ecop.svg", 
        year: "2026",
        role: "Full Stack Dev",
        shortDesc: "Simulasi dashboard energi interaktif realtime.",
        type: "iframe",
        iframeUrl: "ecopanel/home.html", 
        fullDesc: `
            <p><strong>EcoPanel</strong> adalah simulasi dashboard manajemen energi yang dirancang untuk memvisualisasikan data konsumsi daya secara real-time. Proyek ini mendemonstrasikan kemampuan manipulasi DOM dan logika JavaScript yang kompleks.</p>
            <p>Dalam simulasi ini, Anda dapat melihat grafik yang bergerak dinamis, status perangkat (aktif/non-aktif), dan perhitungan efisiensi energi yang berubah seiring waktu. Ini adalah representasi frontend dari sistem IoT yang sebenarnya.</p>
            <p><em>Catatan: Ini hanya simulasi.</em></p>
        `
    },
    {
        id: 1,
        title: "IoT Smart Lamp",
        category: "code",
        categoryLabel: "IoT / Code",
        image: "images/smartiot.svg",
        year: "2025",
        role: "IoT Engineer",
        shortDesc: "Kontrol lampu otomatis via WiFi dengan ESP8266.",
        type: "image",
        fullDesc: `
            <p>Proyek ini bertujuan untuk menciptakan sistem pencahayaan rumah yang cerdas dan efisien energi. Menggunakan mikrokontroler ESP8266 (NodeMCU), sistem ini terhubung ke jaringan WiFi lokal dan dapat dikontrol melalui aplikasi "Ruang Belajar" di smartphone.</p>
            <p>Fitur utama meliputi penjadwalan otomatis, kontrol intensitas cahaya (dimming), dan mode hemat energi. Seluruh kode ditulis dalam C++ menggunakan Arduino IDE.</p>
        `
    },
    {
        id: 2,
        title: "E-Commerce UI",
        category: "design",
        categoryLabel: "UI/UX Design",
        image: "images/ecom.svg",
        year: "2025",
        role: "UI Designer",
        shortDesc: "Konsep UI aplikasi belanja modern minimalis.",
        type: "image",
        fullDesc: `
            <p>Eksplorasi desain antarmuka untuk aplikasi marketplace fashion modern. Fokus utama desain ini adalah clean layout dan kemudahan navigasi pengguna (User Experience).</p>
            <p>Menggunakan palet warna gelap yang elegan. Dibuat sepenuhnya menggunakan Figma, mencakup flow Login, Home, Product Detail, hingga Checkout.</p>
        `
    },
    {
        id: 3,
        title: "HUT Euforia Web",
        category: "code",
        categoryLabel: "Web Dev",
        image: "images/webevent.svg",
        year: "2025",
        role: "Frontend Dev",
        shortDesc: "Platform informasi event sekolah interaktif.",
        type: "image",
        fullDesc: `
            <p>Website landing page yang dibuat khusus untuk memeriahkan ulang tahun sekolah. Website ini berfungsi sebagai pusat informasi jadwal acara, galeri foto, dan pendaftaran lomba.</p>
            <p>Dibangun menggunakan HTML5, CSS3, dan Vanilla JavaScript untuk memastikan performa yang sangat ringan dan aksesibilitas tinggi di berbagai perangkat siswa.</p>
        `
    },
    {
        id: 4,
        title: "Giat UKBI Profile",
        category: "video",
        categoryLabel: "Video Editing",
        image: "images/ukbi.svg",
        year: "2025",
        role: "Video Editor",
        shortDesc: "Dokumentasi sinematik kegiatan sekolah.",
        type: "image",
        fullDesc: `
            <p>Video profil dokumenter untuk kegiatan Uji Kemahiran Berbahasa Indonesia (UKBI) di sekolah. Video ini bertujuan untuk mendokumentasikan antusiasme siswa dan suasana kegiatan.</p>
            <p>Diedit menggunakan Adobe Premiere Pro, memanfaatkan teknik color grading sinematik dan transisi yang dinamis untuk menjaga atensi penonton.</p>
        `
    },
    {
        id: 5,
        title: "Event Poster",
        category: "design",
        categoryLabel: "Graphic Design",
        image: "images/event.svg",
        year: "2025",
        role: "Designer",
        shortDesc: "Desain visual publikasi kegiatan.",
        type: "image",
        fullDesc: `
            <p>Serangkaian poster digital untuk kebutuhan publikasi media sosial Instagram sekolah. Desain mengutamakan hierarki informasi yang jelas dengan tipografi bold.</p>
            <p>Dibuat menggunakan kombinasi Canva dan Adobe Photoshop untuk menghasilkan visual yang menarik namun tetap informatif.</p>
        `
    }
];