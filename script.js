// Все переводы
const translations = {
    ru: {
        title: "⚡ Справочник энергетика",
        subtitle: "Главные формулы и таблицы для студентов",
        nav_laws: "Законы",
        nav_kirchhoff: "Кирхгоф",
        nav_resistors: "Резисторы",
        nav_cable: "Кабели",
        laws_title: "Законы постоянного тока",
        law1_title: "Закон Ома (участок)",
        law1_text: "I — ток (А), U — напряжение (В), R — сопротивление (Ом)",
        law2_title: "Закон Ома (полный)",
        law2_text: "r — внутреннее сопротивление источника",
        law3_title: "Мощность",
        law3_text: "P — мощность (Вт)",
        kirchhoff_title: "Законы Кирхгофа",
        kirchhoff1_title: "Первый закон",
        kirchhoff1_text: "Сумма токов в узле = 0",
        kirchhoff1_example: "I₁ + I₂ - I₃ = 0",
        kirchhoff2_title: "Второй закон",
        kirchhoff2_text: "Сумма падений напряжения = сумме ЭДС",
        kirchhoff2_example: "∑IR = ∑E",
        resistors_title: "Цветовая маркировка резисторов",
        table_color: "Цвет",
        table_mult: "Множитель",
        table_tolerance: "Допуск",
        resistor_example: "💡 Пример: Коричневый-Черный-Красный = 1000 Ом (1 кОм)",
        cable_title: "Сечение медных кабелей",
        cable_section: "Сечение (мм²)",
        cable_current: "Ток (А)",
        cable_power: "Мощность (кВт)",
        cable_usage: "Применение",
        lighting: "💡 Освещение",
        sockets: "🔌 Розетки",
        conditioners: "❄️ Кондиционеры",
        stoves: "🔥 Плиты",
        footer: "👨‍💻 Автор: Ибрагимов Мухаммаджасур | 2026"
    },
    
    tj: {
        title: "⚡ Дастури энергетики ҷавон",
        subtitle: "Формулаҳо ва ҷадвалҳои асосӣ барои донишҷӯён",
        nav_laws: "Қонунҳо",
        nav_kirchhoff: "Кирҳоф",
        nav_resistors: "Резисторҳо",
        nav_cable: "Ноқилҳо",
        laws_title: "Қонунҳои ҷаратони доимӣ",
        law1_title: "Қонуни Ом (қитъа)",
        law1_text: "I — қувваи ҷараён (А), U — шиддат (В), R — муқовимат (Ом)",
        law2_title: "Қонуни Ом (пурра)",
        law2_text: "r — муқовимати дохилии манбаъ",
        law3_title: "Қувва",
        law3_text: "P — қувва (Вт)",
        kirchhoff_title: "Қонунҳои Кирҳоф",
        kirchhoff1_title: "Қонуни якум",
        kirchhoff1_text: "Ҷамъи ҷараёнҳо дар гиреҳ = 0",
        kirchhoff1_example: "I₁ + I₂ - I₃ = 0",
        kirchhoff2_title: "Қонуни дуюм",
        kirchhoff2_text: "Ҷамъи шиддатҳо = ҷамъи ЭҲК",
        kirchhoff2_example: "∑IR = ∑E",
        resistors_title: "Рамзгузории резисторҳо",
        table_color: "Ранг",
        table_mult: "Зарбкунанда",
        table_tolerance: "Хатогӣ",
        resistor_example: "💡 Мисол: Қаҳвагӣ-Сиёҳ-Сурх = 1000 Ом (1 кОм)",
        cable_title: "Буриши ноқилҳои мисӣ",
        cable_section: "Буриш (мм²)",
        cable_current: "Ҷараён (А)",
        cable_power: "Қувва (кВт)",
        cable_usage: "Истифода",
        lighting: "💡 Равшанӣ",
        sockets: "🔌 Розеткаҳо",
        conditioners: "❄️ Кондитсионер",
        stoves: "🔥 Плитаҳо",
        footer: "👨‍💻 Муаллиф: Ибрагимов Мухаммадҷасур | 2026"
    },
    
    en: {
        title: "⚡ Engineer's Handbook",
        subtitle: "Main formulas and tables for students",
        nav_laws: "Laws",
        nav_kirchhoff: "Kirchhoff",
        nav_resistors: "Resistors",
        nav_cable: "Cables",
        laws_title: "DC Circuit Laws",
        law1_title: "Ohm's Law (circuit part)",
        law1_text: "I — current (A), U — voltage (V), R — resistance (Ω)",
        law2_title: "Ohm's Law (full circuit)",
        law2_text: "r — internal resistance",
        law3_title: "Power",
        law3_text: "P — power (W)",
        kirchhoff_title: "Kirchhoff's Laws",
        kirchhoff1_title: "First Law",
        kirchhoff1_text: "Sum of currents at node = 0",
        kirchhoff1_example: "I₁ + I₂ - I₃ = 0",
        kirchhoff2_title: "Second Law",
        kirchhoff2_text: "Sum of voltage drops = sum of EMF",
        kirchhoff2_example: "∑IR = ∑E",
        resistors_title: "Resistor Color Code",
        table_color: "Color",
        table_mult: "Multiplier",
        table_tolerance: "Tolerance",
        resistor_example: "💡 Example: Brown-Black-Red = 1000 Ω (1 kΩ)",
        cable_title: "Copper Cable Cross-section",
        cable_section: "Section (mm²)",
        cable_current: "Current (A)",
        cable_power: "Power (kW)",
        cable_usage: "Application",
        lighting: "💡 Lighting",
        sockets: "🔌 Sockets",
        conditioners: "❄️ Air conditioners",
        stoves: "🔥 Stoves",
        footer: "👨‍💻 Author: Ibragimov Mukhammadjasur | 2026"
    }
};

function changeLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('subtitle').textContent = translations[lang].subtitle;
    
    document.getElementById('nav-laws').innerHTML = `<i class="fas fa-bolt"></i> ${translations[lang].nav_laws}`;
    document.getElementById('nav-kirchhoff').innerHTML = `<i class="fas fa-project-diagram"></i> ${translations[lang].nav_kirchhoff}`;
    document.getElementById('nav-resistors').innerHTML = `<i class="fas fa-chart-line"></i> ${translations[lang].nav_resistors}`;
    document.getElementById('nav-cable').innerHTML = `<i class="fas fa-grip-lines"></i> ${translations[lang].nav_cable}`;
    
    document.getElementById('laws-title').innerHTML = `<span class="highlight">01.</span> ${translations[lang].laws_title}`;
    document.getElementById('kirchhoff-title').innerHTML = `<span class="highlight">02.</span> ${translations[lang].kirchhoff_title}`;
    document.getElementById('resistors-title').innerHTML = `<span class="highlight">03.</span> ${translations[lang].resistors_title}`;
    document.getElementById('cable-title').innerHTML = `<span class="highlight">04.</span> ${translations[lang].cable_title}`;
    
    document.getElementById('law1-title').textContent = translations[lang].law1_title;
    document.getElementById('law1-text').textContent = translations[lang].law1_text;
    document.getElementById('law2-title').textContent = translations[lang].law2_title;
    document.getElementById('law2-text').textContent = translations[lang].law2_text;
    document.getElementById('law3-title').textContent = translations[lang].law3_title;
    document.getElementById('law3-text').textContent = translations[lang].law3_text;
    
    document.getElementById('kirchhoff1-title').textContent = translations[lang].kirchhoff1_title;
    document.getElementById('kirchhoff1-text').textContent = translations[lang].kirchhoff1_text;
    document.getElementById('kirchhoff1-example').textContent = translations[lang].kirchhoff1_example;
    document.getElementById('kirchhoff2-title').textContent = translations[lang].kirchhoff2_title;
    document.getElementById('kirchhoff2-text').textContent = translations[lang].kirchhoff2_text;
    document.getElementById('kirchhoff2-example').textContent = translations[lang].kirchhoff2_example;
    
    document.getElementById('table-color').textContent = translations[lang].table_color;
    document.getElementById('table-mult').textContent = translations[lang].table_mult;
    document.getElementById('table-tolerance').textContent = translations[lang].table_tolerance;
    document.getElementById('resistor-example').innerHTML = translations[lang].resistor_example;
    
    document.getElementById('cable-section').textContent = translations[lang].cable_section;
    document.getElementById('cable-current').textContent = translations[lang].cable_current;
    document.getElementById('cable-power').textContent = translations[lang].cable_power;
    document.getElementById('cable-usage').textContent = translations[lang].cable_usage;
    document.getElementById('lighting').innerHTML = translations[lang].lighting;
    document.getElementById('sockets').innerHTML = translations[lang].sockets;
    document.getElementById('conditioners').innerHTML = translations[lang].conditioners;
    document.getElementById('stoves').innerHTML = translations[lang].stoves;
    
    document.getElementById('footer').innerHTML = translations[lang].footer;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});