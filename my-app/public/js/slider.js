
        let currentIndex = 0;

        function moveSlide(direction) {
            const items = document.querySelectorAll('.product-item');
            const totalItems = items.length;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalItems - 1; // переход к последнему элементу
            } else if (currentIndex >= totalItems) {
                currentIndex = 0; // переход к первому элементу
            }

            const offset = currentIndex * -100; // сдвиг в процентах
            document.querySelector('.product-container').style.transform = `translateX(${offset}%)`;
        }
    