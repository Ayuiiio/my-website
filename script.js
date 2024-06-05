document.addEventListener('DOMContentLoaded', () => {
    // 固定位置和旋转照片墙
    const galleryItems = document.querySelectorAll('.gallery-item');
    const positions = [
        { top: '15%', left: '15%', rotate: '-10deg', scale: '1' },
        { top: '30%', left: '50%', rotate: '5deg', scale: '1' },
        { top: '55%', left: '25%', rotate: '-5deg', scale: '1' },
        { top: '20%', left: '70%', rotate: '15deg', scale: '1' },
        { top: '65%', left: '40%', rotate: '-15deg', scale: '1' },
        { top: '80%', left: '70%', rotate: '15deg', scale: '1' },
        { top: '90%', left: '85%', rotate: '-15deg', scale: '1' },
    ];

    galleryItems.forEach((item, index) => {
        if (positions[index]) {
            const pos = positions[index];
            item.style.top = pos.top;
            item.style.left = pos.left;
            item.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}) scale(${pos.scale})`;
        }
    });

    // 音乐播放按钮
    const playButton = document.getElementById('playButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    playButton.addEventListener('click', () => {
        backgroundMusic.play();
        
        setInterval(createBubble, 200);
        setInterval(createStar, 300);
    });

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const comments = document.getElementById('comments');
    const span = document.getElementsByClassName('close')[0];

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            modalImage.src = item.querySelector('img').src;
            comments.textContent = item.dataset.comment; // 使用自定义属性中的评论内容
        });
    });

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000); // Bubble disappears after 5 seconds
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '★';
    const size = Math.random() * 10 + 10;
    star.style.fontSize = `${size}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s to 10s
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 10000); // Star disappears after 10 seconds
}
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var backgroundMusic = document.getElementById('backgroundMusic');
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var comments = document.getElementById('comments');
    var closeBtn = document.getElementsByClassName('close')[0];

    playButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playButton.innerText = '暂停音乐';
        } else {
            backgroundMusic.pause();
            playButton.innerText = '播放音乐';
        }
    });

    var galleryItems = document.getElementsByClassName('gallery-item');
    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.getElementsByTagName('img')[0].src;
            comments.innerText = this.getAttribute('data-comment');
        });
    }

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
