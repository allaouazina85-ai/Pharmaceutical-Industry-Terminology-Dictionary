// ===============================
// FILE: app.js  (نسخة مبسطة نهائية)
// ✅ حذف كل تفاعلات الهيدر
// ✅ تفاعل بسيط فقط على الإيقونة الحمراء
// ✅ زيادة بسيطة لسرعة دوران الكتاب على الهاتف فقط
// ===============================

document.addEventListener('DOMContentLoaded', function() {

  // تفاعل بسيط على الإيقونة الحمراء فقط
  const extendedIcon = document.querySelector('.extended-icon');
  if (extendedIcon) {
    extendedIcon.addEventListener('mouseenter', () => {
      extendedIcon.classList.add('red-simple-hover');
    });

    extendedIcon.addEventListener('mouseleave', () => {
      extendedIcon.classList.remove('red-simple-hover');
      extendedIcon.classList.remove('red-simple-click');
    });

    extendedIcon.addEventListener('click', () => {
      extendedIcon.classList.add('red-simple-click');
      setTimeout(() => extendedIcon.classList.remove('red-simple-click'), 150);
    });
  }

  /* =========================
     ✅ دوران الكتاب (سرعة مختلفة للهاتف فقط)
  ========================== */
  const book = document.getElementById('book3d');
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');

  if (book && bg1 && bg2) {
    let ry = -18, rx = 2, g = 0;

    // ✅ هاتف فقط (<= 768px)
    const mq = window.matchMedia('(max-width: 768px)');

    // ✅ الحاسوب يبقى كما هو، الهاتف أسرع قليلًا
    let ROT_SPEED = mq.matches ? 0.22 : 0.12;
    let GLOSS_SPEED = mq.matches ? 0.012 : 0.008;

    // ✅ تحديث السرعات عند تدوير الهاتف/تغيير حجم الشاشة
    function updateSpeeds() {
      ROT_SPEED = mq.matches ? 0.30 : 0.12;
      GLOSS_SPEED = mq.matches ? 0.012 : 0.008;
    }

    if (mq.addEventListener) mq.addEventListener('change', updateSpeeds);
    else mq.addListener(updateSpeeds);

    function tick() {
      ry += ROT_SPEED;
      book.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;

      g += GLOSS_SPEED;
      const gx = -60 + Math.sin(g) * 55;
      bg1.style.transform = `translateX(${gx}%)`;
      bg2.style.transform = `translateX(${gx}%)`;

      requestAnimationFrame(tick);
    }
    tick();
  }

  /* =========================
     ✅ سنة تلقائية + تفاعل خفيف للفوتر
  ========================== */
  const fy = document.getElementById('footerYear');
  if (fy) fy.textContent = new Date().getFullYear();

  document.querySelectorAll('.soc').forEach(a => {
    a.addEventListener('mouseenter', () => a.classList.add('is-hover'));
    a.addEventListener('mouseleave', () => a.classList.remove('is-hover'));
  });

});

