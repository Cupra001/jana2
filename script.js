// توليد الحقول المضيئة للورد الزهري تلقائياً
document.querySelectorAll('.flower-container').forEach(el => {
    el.innerHTML = `
        <div class="flower-top">
            <div class="flower-petal flower-petal__1"></div>
            <div class="flower-petal flower-petal__2"></div>
            <div class="flower-petal flower-petal__3"></div>
            <div class="flower-petal flower-petal__4"></div>
            <div class="flower-petal flower-petal__5"></div>
            <div class="flower-petal flower-petal__6"></div>
            <div class="flower-petal flower-petal__7"></div>
            <div class="flower-petal flower-petal__8"></div>
            <div class="flower-circle"></div>
            <div class="flower-light flower-light__1"></div>
            <div class="flower-light flower-light__2"></div>
            <div class="flower-light flower-light__3"></div>
            <div class="flower-light flower-light__4"></div>
            <div class="flower-light flower-light__5"></div>
            <div class="flower-light flower-light__6"></div>
            <div class="flower-light flower-light__7"></div>
            <div class="flower-light flower-light__8"></div>
        </div>
        <div class="flower-bottom">
            <div class="flower-stem"></div>
            <div class="flower-leaf flower-leaf__1"></div>
            <div class="flower-leaf flower-leaf__2"></div>
            <div class="flower-leaf flower-leaf__3"></div>
            <div class="flower-leaf flower-leaf__4"></div>
            <div class="flower-leaf flower-leaf__5"></div>
            <div class="flower-leaf flower-leaf__6"></div>
            <div class="flower-grass flower-grass__1"></div>
            <div class="flower-grass flower-grass__2"></div>
            <div class="flower-grass flower-grass__3"></div>
            <div class="flower-grass flower-grass__4"></div>
        </div>`;
});

// عند نقر زر الترحيب والدخول للمفاجأة القططية
document.getElementById('startBtn').addEventListener('click', function () {
    const music = document.getElementById("bgMusic");
    music.play().catch(error => console.log("Audio block bypass:", error));

    const overlay = document.getElementById('welcome-overlay');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => overlay.style.display = 'none', 1000);

    const title = document.getElementById('flower-title');
    setTimeout(() => {
        title.classList.add('show-title');
    }, 1200);

    // سحب القطة الكبيرة لمنتصف الشاشة
    const envelopeContainer = document.getElementById('envelope-container');
    setTimeout(() => {
        envelopeContainer.classList.add('show-envelope');
    }, 1800);

    // تفعيل انتشار الإضاءة الزهرية بالتتابع الاحترافي
    const flowers = Array.from(document.querySelectorAll('.flower-container'));
    const animatedClass = 'animate';

    flowers[0].classList.add(animatedClass);

    setTimeout(() => {
        for (let i = 1; i <= 2 && i < flowers.length; i++) {
            flowers[i].classList.add(animatedClass);
        }

        let remaining = flowers.slice(3);
        const interval = setInterval(() => {
            if (remaining.length === 0) {
                clearInterval(interval);
                return;
            }

            const randomIndex = Math.floor(Math.random() * remaining.length);
            const el = remaining.splice(randomIndex, 1)[0];
            el.classList.add(animatedClass);
        }, 500);

    }, 2500);
});

// حدث الضغط على المطة لفتحها وتطاير القطط الصغيرة
const catEnvelope = document.querySelector('.cat-envelope');
catEnvelope.addEventListener('click', function () {
    if (!this.classList.contains('open')) {
        this.classList.add('open');

        // إطلاق مجموعة القطط الطائرة من داخل فم/قلب القطة الكبيرة
        createFlyingCats();
    }
});

function createFlyingCats() {
    const container = document.getElementById('cats-container');
    const envelopeRect = catEnvelope.getBoundingClientRect();

    // نقطة الانطلاق السحرية من مركز وجه القطة الكبيرة
    const startX = envelopeRect.left + envelopeRect.width / 2;
    const startY = envelopeRect.top + envelopeRect.height / 2;

    // تشكيلة أيقونات القطط والمخالب الكيوت
    const catIcons = ['fa-cat', 'fa-paw', 'fa-heart'];

    for (let i = 0; i < 35; i++) {
        const item = document.createElement('i');
        const randomIcon = catIcons[Math.floor(Math.random() * catIcons.length)];
        item.className = `fas ${randomIcon} flying-cat`;

        const fontSize = Math.random() * 14 + 18; // مقاسات بين 18px و 32px
        item.style.fontSize = `${fontSize}px`;

        item.style.left = `${startX}px`;
        item.style.top = `${startY}px`;

        // حساب إحداثيات انطلاق عشوائية متفرقة للأعلى والجوانب
        const targetX = (Math.random() - 0.5) * window.innerWidth * 1.4;
        const targetY = -(Math.random() * window.innerHeight * 0.85 + 160);
        const randomScale = Math.random() * 0.8 + 0.6;
        const randomRotation = (Math.random() - 0.5) * 140;
        const duration = Math.random() * 2.2 + 2.2;
        const delay = Math.random() * 0.3;

        item.style.setProperty('--cx', `${targetX}px`);
        item.style.setProperty('--cy', `${targetY}px`);
        item.style.setProperty('--cs', randomScale);
        item.style.setProperty('--cr', `${randomRotation}deg`);

        item.style.animation = `catFlyAway ${duration}s cubic-bezier(0.19, 1, 0.22, 1) forwards`;
        item.style.animationDelay = `${delay}s`;

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, (duration + delay) * 1000);
    }
}