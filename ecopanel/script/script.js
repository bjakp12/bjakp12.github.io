const app = {
    chartInstance: null,
    simulationInterval: null,
    data: {
        production: 14.25,
        consumption: 8.10,
        battery: 88
    },

    templates: {
        dashboard: `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="glass-card p-6 rounded-[2rem] border-t-4 border-t-emerald-400 relative overflow-hidden group">
                    <div class="absolute right-[-20px] top-[-20px] bg-emerald-100 w-24 h-24 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <p class="text-emerald-700 text-sm font-bold mb-1 relative z-10">Total Produksi Surya</p>
                    <div class="flex items-center gap-2 relative z-10">
                        <span id="prod-val" class="text-3xl font-bold text-slate-800">14.25</span>
                        <span class="text-emerald-600 font-bold text-lg">kWh</span>
                    </div>
                    <p class="text-[10px] text-emerald-500 font-bold mt-2 flex items-center gap-1 relative z-10">
                        <i data-lucide="arrow-up-right" class="w-3 h-3"></i> Meningkat
                    </p>
                </div>
                <div class="glass-card p-6 rounded-[2rem] border-t-4 border-t-blue-400 relative overflow-hidden group">
                    <div class="absolute right-[-20px] top-[-20px] bg-blue-100 w-24 h-24 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <p class="text-blue-700 text-sm font-bold mb-1 relative z-10">Total Konsumsi</p>
                    <div class="flex items-center gap-2 relative z-10">
                        <span id="cons-val" class="text-3xl font-bold text-slate-800">8.10</span>
                        <span class="text-blue-600 font-bold text-lg">kWh</span>
                    </div>
                    <p class="text-[10px] text-blue-500 font-bold mt-2 flex items-center gap-1 relative z-10">
                        <i data-lucide="activity" class="w-3 h-3"></i> Beban Aktif
                    </p>
                </div>
                <div class="glass-card p-6 rounded-[2rem] border-l-4 border-l-emerald-500">
                    <div class="flex justify-between items-start mb-2">
                        <p class="text-emerald-700 text-sm font-bold">Baterai</p>
                        <i data-lucide="battery-charging" class="w-5 h-5 text-emerald-500 animate-pulse"></i>
                    </div>
                    <div class="flex items-end gap-2">
                        <span id="batt-val" class="text-4xl font-bold text-slate-800">88</span>
                        <span class="text-emerald-600 font-bold text-xl">%</span>
                    </div>
                    <div class="mt-4 w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <div id="batt-bar" class="h-full bg-emerald-500 transition-all duration-1000" style="width: 88%"></div>
                    </div>
                </div>
                <div class="glass-card p-6 rounded-[2rem] bg-emerald-900 border-none text-white relative overflow-hidden">
                    <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
                    <p class="text-emerald-200 text-sm font-bold mb-1">Total Penghematan</p>
                    <div class="flex flex-col relative z-10">
                        <span id="save-val" class="text-2xl font-bold tracking-tight">Rp 20.500</span>
                        <span class="text-[10px] text-emerald-400 font-bold uppercase mt-1">Estimasi Hari Ini</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 glass-card p-8 rounded-[2rem] shadow-sm">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-emerald-900">Grafik Daya (Realtime)</h3>
                        <span class="flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> LIVE
                        </span>
                    </div>
                    <div class="h-[300px]"><canvas id="mainChart"></canvas></div>
                </div>
                <div class="glass-card p-8 rounded-[2rem] shadow-sm">
                    <h3 class="text-lg font-bold text-emerald-900 mb-6 flex items-center gap-2">
                        <i data-lucide="zap" class="w-5 h-5 text-emerald-500"></i> Beban Aktif
                    </h3>
                    <div id="device-list" class="space-y-5"></div>
                </div>
            </div>
        `,
        forms: `<div class="glass-card p-10 rounded-[2.5rem] text-center max-w-2xl mx-auto mt-10"><div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500"><i data-lucide="file-plus" class="w-10 h-10"></i></div><h3 class="text-2xl font-bold text-emerald-900 mb-2">Input Data Baru</h3><p class="text-slate-500 mb-8">Halaman ini untuk mencatat pemasangan panel baru.</p><button class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">Buka Formulir</button></div>`,
        admin: `<div class="glass-card p-8 rounded-[2rem]"><div class="flex justify-between items-center mb-8"><h3 class="text-xl font-bold text-emerald-900">Manajemen Pengguna</h3><button class="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-bold hover:bg-emerald-200">+ Invite User</button></div><div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-emerald-50 text-emerald-800 uppercase font-bold text-xs"><tr><th class="p-4 rounded-l-xl">Nama</th><th class="p-4">Role</th><th class="p-4 rounded-r-xl">Status</th></tr></thead><tbody class="text-slate-600"><tr class="border-b border-slate-100"><td class="p-4 font-bold">Bijak (You)</td><td class="p-4">Super Admin</td><td class="p-4 text-emerald-600 font-bold">Online</td></tr><tr class="border-b border-slate-100"><td class="p-4">Teknisi Lapangan</td><td class="p-4">Staff</td><td class="p-4 text-slate-400">Offline</td></tr></tbody></table></div></div>`,
        settings: `<div class="flex flex-col items-center justify-center h-[60vh] text-slate-400"><i data-lucide="settings" class="w-16 h-16 mb-4 text-emerald-200"></i><h3 class="text-xl font-bold text-emerald-900">Pengaturan Sistem</h3><p class="text-sm">Fitur konfigurasi sedang dalam pengembangan.</p></div>`
    },

    toggleSidebar: function() {
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('main-content');
        const overlay = document.getElementById('overlay');
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            sidebar.classList.toggle('lg:translate-x-0');
            main.classList.toggle('lg:ml-64');
        } else {
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }
    },

    loadPage: function(pageName) {
        const contentArea = document.getElementById('content-area');
        const pageTitle = document.getElementById('page-title');
        
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active-menu', 'text-emerald-400', 'bg-white/5');
            el.classList.add('text-emerald-100/70');
        });
        const activeBtn = document.getElementById(`btn-${pageName}`);
        if(activeBtn) {
            activeBtn.classList.add('active-menu');
            activeBtn.classList.remove('text-emerald-100/70');
        }

        if (this.simulationInterval) clearInterval(this.simulationInterval);
        if (this.chartInstance) { 
            this.chartInstance.destroy(); 
            this.chartInstance = null; 
        }

        switch(pageName) {
            case 'dashboard': 
                pageTitle.innerText = "Dashboard Overview"; 
                contentArea.innerHTML = this.templates.dashboard; 
                this.initDashboard(); 
                break;
            case 'forms': 
                pageTitle.innerText = "Data Input"; 
                contentArea.innerHTML = this.templates.forms; 
                break;
            case 'admin': 
                pageTitle.innerText = "Admin Panel"; 
                contentArea.innerHTML = this.templates.admin; 
                break;
            case 'settings': 
                pageTitle.innerText = "Settings"; 
                contentArea.innerHTML = this.templates.settings; 
                break;
        }

        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('overlay').classList.add('hidden');
        }
        
        lucide.createIcons();
    },

    initDashboard: function() {
        const ctx = document.getElementById('mainChart').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        this.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
                datasets: [{
                    label: 'Power (W)', data: [150, 400, 1200, 1400, 900, 600],
                    borderColor: '#10b981', backgroundColor: gradient, fill: true, tension: 0.4, borderWidth: 3, pointRadius: 0
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#ecfdf5' } } } }
        });

        this.simulationInterval = setInterval(() => {
            this.data.production += (Math.random() * 0.005);
            this.data.consumption += (Math.random() * 0.003);
            this.data.battery = Math.max(20, Math.min(100, this.data.battery + (Math.random() > 0.5 ? 0.1 : -0.1)));

            const elProd = document.getElementById('prod-val');
            const elCons = document.getElementById('cons-val');
            const elBatt = document.getElementById('batt-val');
            const elBattBar = document.getElementById('batt-bar');
            const elSave = document.getElementById('save-val');

            if(elProd) elProd.innerText = this.data.production.toFixed(2);
            if(elCons) elCons.innerText = this.data.consumption.toFixed(2);
            if(elBatt) elBatt.innerText = Math.floor(this.data.battery);
            if(elBattBar) elBattBar.style.width = this.data.battery + '%';
            if(elSave) elSave.innerText = 'Rp ' + Math.floor(this.data.production * 1444).toLocaleString('id-ID');

            const devices = [
                { name: 'AC Server', val: 450, color: 'bg-emerald-500' },
                { name: 'PC Admin', val: 200, color: 'bg-blue-400' },
                { name: 'Pompa Air', val: 150, color: 'bg-teal-400' },
                { name: 'Lampu', val: 45, color: 'bg-green-300' }
            ];
            const list = document.getElementById('device-list');
            if(list) {
                list.innerHTML = devices.map(d => `
                    <div>
                        <div class="flex justify-between text-sm mb-1 font-bold text-slate-700">
                            <span>${d.name}</span>
                            <span>${d.val + Math.floor(Math.random()*20)} W</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-100 rounded-full">
                            <div class="h-full ${d.color} rounded-full" style="width: ${Math.random()*100}%"></div>
                        </div>
                    </div>
                `).join('');
            }

            const badge = document.getElementById('source-badge');
            const text = document.getElementById('source-text');
            if(Math.random() > 0.7) {
                badge.className = "hidden md:flex px-4 py-2 rounded-full items-center gap-2 text-xs font-bold shadow-sm transition-all duration-500 bg-slate-800 text-white border border-slate-600";
                text.innerText = "Listrik PLN";
            } else {
                badge.className = "hidden md:flex px-4 py-2 rounded-full items-center gap-2 text-xs font-bold shadow-sm transition-all duration-500 bg-emerald-100 text-emerald-700 battery-glow";
                text.innerText = "Baterai Panel Surya";
            }
            lucide.createIcons();

        }, 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.loadPage('dashboard');
});