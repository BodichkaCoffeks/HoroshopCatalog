(function() {
    const targetSelector = 'section.categories.__bigIcons';
    
    function init() {
        const target = document.querySelector(targetSelector);
        if (target && !document.querySelector('.hc-custom-container')) {
            // Створюємо контейнер
            const container = document.createElement('div');
            container.className = 'hc-custom-container';
            container.innerHTML = `
                <div class="hc-wrapper">
                    <a href="https://dressetogether.com.ua/dlia-zhinok/" class="hc-card">
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Zinka.png?raw=true" class="hc-img">
                        <div class="hc-title">Жіноча білизна</div>
                    </a>
                    <a href="https://dressetogether.com.ua/dlia-cholovikiv/1103/" class="hc-card">
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Cholovik.jpg?raw=true" class="hc-img">
                        <div class="hc-title">Чоловіча білизна</div>
                    </a>
                    <a href="https://dressetogether.com.ua/rozdrib/1126/" class="hc-card">
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Rozdrib.png?raw=true" class="hc-img">
                        <div class="hc-title">Роздріб</div>
                    </a>
                </div>
                <style>
                    .hc-custom-container { display: block !important; width: 100% !important; margin: 20px 0 !important; }
                    .hc-wrapper { display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 20px !important; }
                    .hc-card { width: 300px !important; border: 2px solid #333 !important; text-decoration: none !important; display: block !important; transition: 0.3s !important; }
                    .hc-card:hover { transform: scale(1.05); }
                    .hc-img { width: 100% !important; height: 300px !important; object-fit: cover !important; display: block !important; }
                    .hc-title { padding: 15px !important; text-align: center !important; font-size: 18px !important; color: #000 !important; font-weight: bold !important; }
                </style>
            `;
            
            target.parentNode.insertBefore(container, target);
            target.style.display = 'none'; // Приховуємо стандартні категорії
        }
    }
    
    // Запускаємо перевірку кожні 500мс
    setInterval(init, 500);
})();
