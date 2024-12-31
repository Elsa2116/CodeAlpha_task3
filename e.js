const images = document.querySelectorAll('.item img');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentIndex = 0;
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                modal.style.display = 'flex';
                modalImage.src = img.src;  
            });
        });
       modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex].src;
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex].src;
        });

    