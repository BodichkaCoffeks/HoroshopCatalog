document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Знаходимо стандартний блок Хорошопу для заміни
    const horoshopGrid = document.querySelector('.categories-grid.__normalGrid'); 
    
    if (horoshopGrid) {
        // 2. Створюємо новий контейнер
        const myCustomBlock = document.createElement('div');
        myCustomBlock.className = 'my-custom-catalog-panel';
        
        // 3. Вставляємо структуру макета (image_372bb7.png) та CSS-анімації
        myCustomBlock.innerHTML = `
            
            <!-- ====== HTML СТРУКТУРА ПАНЕЛІ ====== -->
            <div class="custom-catalog-wrapper">
                
                <!-- Картка 1: Жіноча білизна -->
                <a href="https://dressetogether.com.ua/dlia-zhinok/" class="custom-catalog-card">
                    <div class="card-image-wrapper">
                        <!-- Замініть шлях на реальне посилання на картинку -->
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Zinka.png?raw=true" alt="Жіноча білизна" class="card-img">
                    </div>
                    <div class="card-text-wrapper">
                        <span class="card-title">Жіноча білизна</span>
                    </div>
                </a>

                <!-- Картка 2: Чоловіча білизна -->
                <a href="https://dressetogether.com.ua/dlia-cholovikiv/1103/" class="custom-catalog-card">
                    <div class="card-image-wrapper">
                        <!-- Замініть шлях на реальне посилання на картинку -->
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Cholovik.jpg?raw=true" alt="Чоловіча білизна" class="card-img">
                    </div>
                    <div class="card-text-wrapper">
                        <span class="card-title">Чоловіча білизна</span>
                    </div>
                </a>

                <!-- Картка 3: Роздріб -->
                <a href="https://dressetogether.com.ua/rozdrib/1126/" class="custom-catalog-card">
                    <div class="card-image-wrapper">
                        <!-- Замініть шлях на реальне посилання на картинку -->
                        <img src="https://github.com/BodichkaCoffeks/HoroshopCatalog/blob/main/Rozdrib.png?raw=true" alt="Роздріб" class="card-img">
                    </div>
                    <div class="card-text-wrapper">
                        <span class="card-title">Роздріб</span>
                    </div>
                </a>

            </div>
            
            <!-- ====== CSS СТИЛІ ТА АНІМАЦІЇ ====== -->
            <style>
    .custom-catalog-wrapper {
        width: 100%;
        max-width: 1000px;
        margin: 40px auto;
        padding: 40px 15px; /* Збільшили відступи всередині */
        /* Чорні лінії зверху та знизу */
        border-top: 2px solid #000000;
        border-bottom: 2px solid #000000;
        display: flex;
        flex-direction: column;
        gap: 40px;
        box-sizing: border-box;
        background-color: #ffffff;
    }

    .custom-catalog-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #e0dcd9;
        background: #ffffff;
        text-decoration: none;
        color: #333;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        width: 100%;
        position: relative;
        background-image: radial-gradient(#dcdcdc 0.5px, transparent 0.5px);
        background-size: 20px 20px;
    }

    /* Ефект при наведенні: кофейне світіння */
    .custom-catalog-card:hover {
        transform: scale(1.05);
        /* Кофейна підсвітка (glow) по контуру */
        box-shadow: 0 0 20px rgba(111, 78, 55, 0.5); 
        border-color: #6F4E37;
    }

    .card-image-wrapper {
        width: 100%;
        height: 420px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .custom-catalog-card:hover .card-img {
        transform: scale(1.05);
    }

    .card-text-wrapper {
        padding: 20px;
        text-align: center;
        background: #ffffff;
    }

    .card-title {
        font-family: 'Segoe UI', sans-serif;
        font-size: 20px;
        font-weight: 500;
        position: relative;
        padding-bottom: 5px;
        display: inline-block;
    }

    /* Лінія підкреслення тепер теж кофейного кольору */
    .card-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #6F4E37; 
        transition: width 0.3s ease;
    }

    .custom-catalog-card:hover {
        transform: scale(1.05);
        /* Збільшили розмиття (30px) та поширення (5px) для яскравості */
        /* Підняли прозорість з 0.5 до 0.8 */
        box-shadow: 0 0 30px 5px rgba(111, 78, 55, 0.8); 
        border-color: #6F4E37;
    }

    @media (min-width: 768px) {
        .custom-catalog-wrapper {
            flex-direction: row;
            justify-content: center;
            gap: 30px;
        }
        .custom-catalog-card {
            width: 28%;
        }
    }
</style>
        `;
        
        horoshopGrid.parentNode.replaceChild(myCustomBlock, horoshopGrid);
    }
});
