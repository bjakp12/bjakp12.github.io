document.addEventListener('DOMContentLoaded', () => {
    
    function updateClock() {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        
        const timeString = formatter.format(now);
        const [hours, minutes] = timeString.split(':');
        
        const hourNum = parseInt(hours);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        
        document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
        document.getElementById('currentAmPm').textContent = ampm;
    }
    setInterval(updateClock, 1000);
    updateClock();

    const gridContainer = document.getElementById('projectGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        gridContainer.innerHTML = ''; 

        projectsData.forEach(project => {
            if (filter === 'all' || project.category === filter) {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.onclick = () => openModal(project.id); 

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

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    const modal = document.getElementById('detailModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const modalMediaContainer = document.getElementById('modal-media-container');

    const mCat = document.getElementById('m-cat');
    const mTitle = document.getElementById('m-title');
    const mYear = document.getElementById('m-year');
    const mRole = document.getElementById('m-role');
    const mDesc = document.getElementById('m-desc');

    window.openModal = function(id) {
        const project = projectsData.find(p => p.id === id);
        if (!project) return;

        mCat.textContent = project.categoryLabel;
        mTitle.textContent = project.title;
        mYear.textContent = project.year;
        mRole.textContent = project.role;
        
        let descHtml = project.fullDesc;
        
        modalMediaContainer.innerHTML = `<img src="${project.image}" id="m-img" class="modal-img" onerror="this.src='https://placehold.co/600x400/111/444?text=Preview'">`;

        if (project.type === 'iframe') {
            descHtml += `
                <button class="simulation-btn" onclick="startSimulation('${project.id}')">
                    <i class="ph-bold ph-monitor"></i> Open Full Simulation
                </button>
            `;
        }

        mDesc.innerHTML = descHtml;

        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('open'), 10);
        document.body.style.overflow = 'hidden'; 
    };

    window.startSimulation = function(id) {
        const project = projectsData.find(p => p.id === id);
        if (project && project.iframeUrl) {
            window.location.href = project.iframeUrl;
        }
    };

    function closeModal() {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalMediaContainer.innerHTML = ''; 
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

});