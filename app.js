// ===============================
// FILE: app.js  (نسخة مبسطة نهائية)
// ✅ حذف كل تفاعلات الهيدر
// ✅ تفاعل بسيط فقط على الإيقونة الحمراء
// ✅ تقليل سرعة دوران الكتاب
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
   ✅ دوران الكتاب (أبطأ)
========================== */
const book = document.getElementById('book3d');
const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

if (book && bg1 && bg2) {
  let ry = -18, rx = 2, g = 0;

  const ROT_SPEED = 0.12;     // أبطأ
  const GLOSS_SPEED = 0.008;  // أبطأ

  function tick(){
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
