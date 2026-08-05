
// CHANGE THESE DATES
const start = new Date('2026-08-04T00:00:00');
const target = new Date('2026-09-19T00:00:00');
const notes = [
"Люблю тебе по-чорному. І це вже твоя проблема.",
"Доступ до мого серця має лише один користувач: Vladik.",
"Рапорт: Ти мені досі подобаєшся 😁.",
"Посилка з 'зацілую' в дорозі. Орієнтовна доставка — 19 вересня.",
"Так, це романтика. Я теж в шоці.",
"Ти - моя улюблена людина з усіх",
"Нагадування для Владіка: тебе дуже сильно люблять.",
"Вийти з цих стосунків неможливо. Кнопка видалена.",
"GPS: мої думки знову знайшли тебе.",
"Перехоплено ще одну думку про Владіка.",
"Звіт за добу: Без тебе якось нецікаво.",
"Системне нагадування: поїв? Якщо ні — поїж. (с) Таня 😠",
"Рівень сумування: 99,9%.",
"Кажуть, Суми від слова «сум». Тепер зрозуміло чому.",
"Цей сайт існує лише тому, що ти існуєш.",
"Якщо дочитав аж сюди — з тебе кава.",
"Купон на безлімітні поцілунки активується після зустрічі.",
"Не зазнавайся. Але ти реально класний.",
"Ти офіційно моя зона комфорту.",
"Ще мінус один день. Непогано працюємо.",
"План після зустрічі: обійняти. Не відпускати.",
"Тільки між нами: я іноді заходжу на цей сайт просто подивитися, скільки ще чекати.",
"Люблю тебе по-чорному. І навіть Git цього вже не відкотить.",
"Mission: дочекатися Владіка. Status: in progress."
];

ocument.getElementById("noteBtn").onclick = () => {

    // ключ сьогоднішнього дня
    const today = new Date();
    const dayKey =
        today.getFullYear() + "-" +
        (today.getMonth() + 1) + "-" +
        today.getDate();

    // якщо для сьогодні вже вибрана фраза — показуємо її
    let todayIndex = localStorage.getItem("todayNote-" + dayKey);

    if (todayIndex === null) {

        // список вже використаних фраз
        let used = JSON.parse(localStorage.getItem("usedNotes") || "[]");

        // якщо всі використані — починаємо новий цикл
        if (used.length >= notes.length) {
            used = [];
        }

        // шукаємо доступні фрази
        const available = [];

        for (let i = 0; i < notes.length; i++) {
            if (!used.includes(i)) {
                available.push(i);
            }
        }

        // випадкова серед доступних
        todayIndex =
            available[Math.floor(Math.random() * available.length)];

        used.push(todayIndex);

        localStorage.setItem(
            "usedNotes",
            JSON.stringify(used)
        );

        localStorage.setItem(
            "todayNote-" + dayKey,
            todayIndex
        );
    }

    document.getElementById("note").textContent =
        notes[todayIndex];

};

function tick(){
 const now=new Date();
 let diff=target-now;
 if(diff<0){document.body.innerHTML='<main class="card"><h1>🤍 Finally.</h1><p>Go hug each other.</p></main>';return;}
 const d=Math.floor(diff/86400000); diff%=86400000;
 const h=Math.floor(diff/3600000); diff%=3600000;
 const m=Math.floor(diff/60000); diff%=60000;
 const s=Math.floor(diff/1000);
 days.textContent=d;hours.textContent=h;minutes.textContent=m;seconds.textContent=s;

 const total=target-start;
 const passed=now-start;
 let p=Math.max(0,Math.min(100,passed/total*100));
 bar.style.width=p+'%';
 percent.textContent=p.toFixed(1)+'% of waiting is already over';
}
setInterval(tick,1000);tick();
