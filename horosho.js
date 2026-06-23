(function() {
    console.log("СКРИПТ ЗАВАНТАЖИВСЯ!");
    
    function testReplace() {
        const target = document.querySelector('section.categories.__bigIcons');
        if (target) {
            console.log("ЦІЛЬ ЗНАЙДЕНО!");
            target.style.border = "5px solid red"; // Просто підсвітимо рамкою
            target.innerHTML = "<h1>СКРИПТ ПРАЦЮЄ!</h1>"; // Замінимо вміст
        } else {
            console.log("Ціль ще не знайдено...");
        }
    }

    new MutationObserver(testReplace).observe(document.body, { childList: true, subtree: true });
    testReplace();
})();
