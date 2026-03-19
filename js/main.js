const projectsData = [
    {
        id: "ecopanel",
        title: "EcoPanel Simulator",
        category: "code",
        categoryLabel: "Web",
        image: "images/ecop.svg", 
        year: "2026",
        role: "Full Stack Dev",
        shortDesc: "Real-time interactive IoT dashboard simulation.",
        type: "iframe",
        iframeUrl: "ecopanel/home.html", 
        fullDesc: `
            <p><strong>EcoPanel</strong> is an energy management dashboard simulation designed to visualize real-time power consumption data. This project demonstrates the capabilities of DOM manipulation and complex JavaScript logic.</p>
            <p>In this simulation, you can see dynamically moving graphs, device states (active/inactive), and energy efficiency calculations changing over time. This is a front-end representation of a real IoT system.</p>
        `
    },
    {
        id: "1",
        title: "Ruang Belajar App",
        category: "code",
        categoryLabel: "IoT / Code",
        image: "images/smartiot.svg",
        year: "2025",
        role: "IoT Engineer",
        shortDesc: "Learning partner application integrated with the IoT ESP 8266 system",
        type: "image",
        fullDesc: `
            <p>This project aims to create a smart and energy-efficient home lighting system. Using an ESP8266 microcontroller (NodeMCU), the system connects to a local WiFi network and can be controlled through the "Ruang Belajar" app on a smartphone.</p>
            <p>The main feature is that it allows you to turn the lights on and off and schedule them just by holding your hand, and several supporting features such as notes, a pomodoro study timer, and a study streak to help maximize your study progress.</p>
        `
    },
    {
        id: "2",
        title: "E-Commerce UI",
        category: "design",
        categoryLabel: "UI/UX Design",
        image: "images/ecom.svg",
        year: "2025",
        role: "UI Designer",
        shortDesc: "Modern minimalist shopping app UI concept.",
        type: "image",
        fullDesc: `
            <p>An exploration of interface design for a modern fashion marketplace app. The design focuses primarily on a clean layout and ease of user navigation (User Experience).</p>
            <p>Using an elegant dark color palette, it's built entirely in Figma, spanning the Login, Home, Product Details, and Checkout flows.</p>
        `
    },
    {
        id: "3",
        title: "HUT Euforia Web",
        category: "code",
        categoryLabel: "Web Dev",
        image: "images/webevent.svg",
        year: "2025",
        role: "Full Stack Dev",
        shortDesc: "Interactive school event information platform.",
        type: "image",
        fullDesc: `
            <p>A landing page website created specifically to celebrate a school anniversary. It serves as a central hub for event schedules, photo galleries, and competition registration.</p>
            <p>Built using HTML5, CSS3, and Vanilla JavaScript to ensure ultra-light performance and high accessibility across a wide range of student devices.</p>
        `
    },
    {
        id: "4",
        title: "Giat UKBI Documentation",
        category: "video",
        categoryLabel: "Video Editing",
        image: "images/ukbi.svg",
        year: "2025",
        role: "Video Editor",
        shortDesc: "Documentation of UKBI activities at SMAN 1 Padamara",
        type: "image",
        youtubeUrl: "https://youtu.be/FzwSDfarAUk?si=-aTxmmYKQMDnDlgH",
        fullDesc: `
            <p>A documentary profile video for the Indonesian Language Proficiency Test (UKBI) at the school. This video aims to document student enthusiasm and the atmosphere of the event.</p>
            <p>Edited using Adobe Premiere Pro, utilizing cinematic color grading techniques and dynamic transitions to keep the audience's attention.</p>
        `
    },
    {
        id: "5",
        title: "Event Poster",
        category: "design",
        categoryLabel: "Graphic Design",
        image: "images/event.svg",
        year: "2025",
        role: "Designer",
        shortDesc: "Visual design of activity publications.",
        type: "image",
        fullDesc: `
            <p>A series of digital posters for the school's Instagram social media publication needs. The design prioritizes a clear information hierarchy with bold typography.</p>
            <p>Created using a combination of Canva and Adobe Photoshop to produce engaging yet informative visuals.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {

    const gridContainer = document.getElementById('projectGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const detailModal = document.getElementById('detailModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const modalMediaContainer = document.getElementById('modal-media-container');

    function renderProjects(filter = 'all') {
        if (!gridContainer) return;
        gridContainer.innerHTML = ''; 

        projectsData.forEach(project => {
            if (filter === 'all' || project.category === filter) {
                const card = document.createElement('div');
                card.className = 'project-card';
                
                card.addEventListener('click', () => {
                    document.getElementById('m-cat').textContent = project.categoryLabel;
                    document.getElementById('m-title').textContent = project.title;
                    document.getElementById('m-year').textContent = project.year;
                    document.getElementById('m-role').textContent = project.role;
                    
                    let descHtml = project.fullDesc;
                    modalMediaContainer.innerHTML = `<img src="${project.image}" id="m-img" class="modal-img" onerror="this.src='https://placehold.co/600x400/111/444?text=Preview'">`;

                    if (project.type === 'iframe') {
                        descHtml += `
                            <button class="simulation-btn" onclick="window.location.href='${project.iframeUrl}'">
                                <i class="ph-bold ph-monitor"></i> Open Full Simulation
                            </button>
                        `;
                    }

                    if (project.youtubeUrl) {
                        descHtml += `
                            <button class="simulation-btn" style="background-color: #ef4444; margin-top: 15px;" onclick="window.open('${project.youtubeUrl}', '_blank')">
                                <i class="ph-bold ph-youtube-logo"></i> Watch on YouTube
                            </button>
                        `;
                    }

                    document.getElementById('m-desc').innerHTML = descHtml;

                    detailModal.style.display = 'flex';
                    requestAnimationFrame(() => detailModal.classList.add('open'));
                    document.body.style.overflow = 'hidden'; 
                });

                card.innerHTML = `
                    <div class="thumb-box">
                        <img src="${project.image}" class="thumb-img" onerror="this.src='https://placehold.co/600x400/111/444?text=Project'">
                        <span class="overlay-cat">${project.categoryLabel}</span>
                    </div>
                    <div class="info-box">
                        <h3 class="p-title">${project.title}</h3>
                        <p class="p-desc">${project.shortDesc}</p>
                        <div class="view-btn">View Details <i class="ph-bold ph-arrow-right"></i></div>
                    </div>
                `;
                gridContainer.appendChild(card);
            }
        });
    }

    renderProjects('all');

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.dataset.filter);
            });
        });
    }

    function closeDetailModal() {
        if (!detailModal) return;
        detailModal.classList.remove('open');
        setTimeout(() => {
            detailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (modalMediaContainer) modalMediaContainer.innerHTML = ''; 
        }, 300);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeDetailModal);
    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target === detailModal) closeDetailModal();
        });
    }

    const socialLinks = document.querySelectorAll('.social-group a');
    const redirectModal = document.getElementById('confirmRedirectModal');
    
    if (redirectModal) {
        const closeRedirectModalBtn = document.getElementById('closeRedirectModalBtn');
        const redirectButton = document.getElementById('redirectButton');
        const redirectText = document.getElementById('redirectText');
        const redirectUsername = document.getElementById('redirectUsername');

        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                const platform = link.getAttribute('data-platform');
                const username = link.getAttribute('data-username'); 
                const url = link.getAttribute('href');

                redirectText.textContent = `Open ${platform}?`;
                redirectUsername.textContent = username;
                redirectButton.setAttribute('href', url);

                redirectModal.style.display = 'flex';
                requestAnimationFrame(() => redirectModal.classList.add('open'));
                document.body.style.overflow = 'hidden';
            });
        });

        function closeRedirectModal() {
            redirectModal.classList.remove('open');
            setTimeout(() => {
                redirectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        if (closeRedirectModalBtn) closeRedirectModalBtn.addEventListener('click', closeRedirectModal);
        redirectModal.addEventListener('click', (e) => {
            if (e.target === redirectModal) closeRedirectModal();
        });
        if (redirectButton) redirectButton.addEventListener('click', () => setTimeout(closeRedirectModal, 100));
    }

    const certListModal = document.getElementById('certListModal');
    const openCertListBtn = document.getElementById('openCertListBtn'); 
    
    if (openCertListBtn && certListModal) {
        const closeCertListBtn = document.getElementById('closeCertListBtn');

        openCertListBtn.addEventListener('click', () => {
            certListModal.style.display = 'flex';
            requestAnimationFrame(() => certListModal.classList.add('open'));
            document.body.style.overflow = 'hidden'; 
        });

        function closeCertList() {
            certListModal.classList.remove('open');
            setTimeout(() => {
                certListModal.style.display = 'none';
                const certModal = document.getElementById('certModal');
                if (certModal && !certModal.classList.contains('open')) {
                    document.body.style.overflow = 'auto';
                }
            }, 300);
        }

        if (closeCertListBtn) closeCertListBtn.addEventListener('click', closeCertList);
        certListModal.addEventListener('click', (e) => {
            if (e.target === certListModal) closeCertList();
        });
    }

    const certItems = document.querySelectorAll('.cert-item'); 
    const certModal = document.getElementById('certModal');
    
    if (certItems.length > 0 && certModal) {
        const closeCertModalBtn = document.getElementById('closeCertModalBtn');
        const certIframe = document.getElementById('certIframe');
        const certModalTitle = document.getElementById('certModalTitle');

        certItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.getAttribute('data-cert-title');
                const link = item.getAttribute('data-cert-link');

                if (certModalTitle) certModalTitle.textContent = title;
                if (certIframe) certIframe.src = link; 
                
                certModal.style.display = 'flex';
                requestAnimationFrame(() => certModal.classList.add('open'));
            });
        });

        function closeCertModal() {
            certModal.classList.remove('open');
            setTimeout(() => {
                certModal.style.display = 'none';
                if (certIframe) certIframe.src = ''; 
            }, 300);
        }

        if (closeCertModalBtn) closeCertModalBtn.addEventListener('click', closeCertModal);
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) closeCertModal();
        });
    }

});