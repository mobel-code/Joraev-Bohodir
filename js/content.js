/* =====================================================================
 *  CONTENT FILE — every piece of text on the site lives here.
 *
 *  How to edit:
 *   • Any text value can be a plain string (same in all languages)
 *     or an object { uz: "...", ru: "...", en: "..." }.
 *   • Uzbek uses the Latin alphabet. Letters: o‘ g‘ (U+2018 ‘) and the
 *     tutuq belgisi ’ (U+2019), e.g. "ta’lim", "ma’ruza".
 *   • **double asterisks** in the bio make a phrase bold + highlighted.
 *   • Counters in the stats bar are calculated automatically from the
 *     publication list and `person.careerStartYear`, so they never drift.
 *   • To fill an empty contact slot (email, etc.), put the value in
 *     `contacts` — empty values are hidden on the page.
 * ===================================================================== */

window.SITE = {
  defaultLang: "uz", // "uz" | "ru" | "en"

  /* ------------------------------------------------------------------ */
  person: {
    name: {
      uz: "Joraev Baxodir Nurmuhammadovich",
      ru: "Жураев Баходир Нурмахамадович",
      en: "Joraev Baxodir Nurmuhammadovich",
    },
    shortName: { uz: "Baxodir Joraev", ru: "Баходир Жураев", en: "Baxodir Joraev" },
    initials: "BJ",
    photoAlt: {
      uz: "Baxodir Joraevning portreti",
      ru: "Портрет Баходира Жураева",
      en: "Portrait of Baxodir Joraev",
    },
    title: {
      uz: "PhD · Og‘iz bo‘shlig‘i va yuz-jag‘ jarrohi",
      ru: "PhD · Челюстно-лицевой хирург",
      en: "PhD · Oral & Maxillofacial Surgeon",
    },
    tagline: {
      uz: "Jarroh, tadqiqotchi va pedagog — odontogen infeksiyalar va yuz-jag‘ jarrohligida tashxis va davolashni takomillashtirish ustida ishlayman.",
      ru: "Хирург, исследователь и преподаватель — совершенствую диагностику и лечение одонтогенных инфекций в челюстно-лицевой хирургии.",
      en: "Surgeon, researcher and educator — optimizing diagnosis and treatment of odontogenic infections and maxillofacial surgery.",
    },
    position: {
      uz: "CAMU xalqaro universiteti «Og‘iz bo‘shlig‘i va yuz-jag‘ jarrohligi» kafedrasi mudiri",
      ru: "Заведующий кафедрой «Хирургия полости рта и челюстно-лицевая хирургия», Международный университет CAMU",
      en: "Head of the Department of Oral and Maxillofacial Surgery, CAMU International University",
    },
    badges: [
      "PhD",
      { uz: "Oliy toifali shifokor", ru: "Врач высшей категории", en: "Highest-category physician" },
      { uz: "Kafedra mudiri", ru: "Заведующий кафедрой", en: "Head of Department" },
    ],
    careerStartYear: 2017, // used for the "years of experience" counter
  },

  /* ------------------------------------------------------------------ */
  /* Contacts. Leave a value empty ("") to hide it.                     */
  contacts: {
    phone: "+998937386660",
    phoneDisplay: "+998 93 738 66 60",
    facebook: "https://www.facebook.com/share/1BqZWPzV9R/",
    telegram: "drjuraev", // username without @ — leave "" to hide
    instagram: "dr_juraev_", // username without @ — leave "" to hide
    email: "", // e.g. "name@example.com" — leave "" to hide
  },

  /* Link for the "Download full publication list" button.
     Put the PDF into assets/ and write its path here, e.g. "assets/publications.pdf".
     While empty, the button is shown as "coming soon". */
  publicationsPdf: "",

  /* ------------------------------------------------------------------ */
  /* Interface labels                                                   */
  ui: {
    uz: {
      langName: "O‘zbekcha",
      language: "Til",
      metaTitle: "Baxodir Joraev — PhD, yuz-jag‘ jarrohi",
      metaDescription: "PhD, oliy toifali shifokor, yuz-jag‘ jarrohi. CAMU xalqaro universiteti «Og‘iz bo‘shlig‘i va yuz-jag‘ jarrohligi» kafedrasi mudiri. Ilmiy ishlar, faoliyat va aloqa.",
      nav: { about: "Men haqimda", expertise: "Yo‘nalishlar", cases: "Amaliyot", career: "Faoliyat", research: "Tadqiqot", publications: "Ilmiy ishlar", contact: "Aloqa" },
      skip: "Asosiy mazmunga o‘tish",
      menu: "Menyu",
      themeDark: "Tungi rejim",
      themeLight: "Kunduzgi rejim",
      contactMe: "Bog‘lanish",
      viewPubs: "Nashrlarni ko‘rish",
      stats: {
        publications: "ilmiy ish",
        articles: "jurnal maqolasi",
        years: "yillik klinik va akademik tajriba",
        talks: "konferensiyalarda ma’ruza",
      },
      aboutEyebrow: "Men haqimda",
      aboutTitle: "Klinika, ilm va ta’lim — bir yo‘lda",
      expertiseEyebrow: "Yo‘nalishlar",
      expertiseTitle: "Kasbiy yo‘nalishlar",
      careerEyebrow: "Faoliyat",
      careerTitle: "Kasbiy yo‘l",
      careerHint: "Sahifani pastga aylantiring — vaqt chizig‘i harakatlanadi",
      present: "hozirgacha",
      researchEyebrow: "Tadqiqot",
      cases: {
        eyebrow: "Amaliyot", title: "Davolangan bemorlar",
        lead: "Klinik holatlar bemorlar yozma roziligi bilan va shaxsini aniqlab bo‘lmaydigan tarzda e’lon qilinadi.",
        problem: "Muammo", diagnosis: "Tashxis", complaints: "Shikoyatlar", patient: "Bemor", cause: "Sabab", instagram: "Instagram’da ko‘rish", treatment: "Davolash", result: "Natija", duration: "Davolash muddati",
        before: "Oldin", after: "Keyin", prevCase: "Oldingi holat", nextCase: "Keyingi holat", compare: "Oldin va keyin rasmlarini solishtirish", photoSoon: "Foto qo‘shiladi", sample: "Namuna",
      },
      researchTitle: "PhD tadqiqoti",
      dissertation: "Dissertatsiya mavzusi",
      themesTitle: "Ilmiy yo‘nalishlar",
      pubsEyebrow: "Ilmiy ishlar",
      pubsTitle: "Maqolalar, tezislar va ma’ruzalar",
      filters: { all: "Barchasi", article: "Maqolalar", thesis: "Tezislar", talk: "Ma’ruzalar" },
      types: { article: "Maqola", thesis: "Tezis", talk: "Ma’ruza" },
      coauthors: "Hammualliflar",
      details: { more: "Batafsil", venue: "Jurnal / tadbir", where: "Joy va sana", pages: "Sahifalar", ids: "Identifikatorlar", authors: "Mualliflar", country: "Mamlakat", close: "Yopish", doi: "Maqolani ochish (DOI)", site: "Jurnal sayti" },
      pages: "b.",
      prev: "Oldingi",
      next: "Keyingi",
      downloadPdf: "Nashrlar ro‘yxati (PDF)",
      soon: "tez orada",
      eduEyebrow: "Ta’lim",
      eduTitle: "Ta’lim va tashkilotlar",
      education: "Ta’lim",
      affiliations: "Tashkilotlar",
      contactEyebrow: "Aloqa",
      contactTitle: "Aloqa ma’lumotlari",
      contactLabels: { phone: "Telefon", telegram: "Telegram", facebook: "Facebook", instagram: "Instagram", email: "Elektron pochta" },
      contactActions: { phone: "Qo‘ng‘iroq qilish", telegram: "Yozish", facebook: "Sahifani ochish", instagram: "Profilni ochish", email: "Xat yozish" },
      footerRights: "Barcha huquqlar himoyalangan.",
    },
    ru: {
      langName: "Русский",
      language: "Язык",
      metaTitle: "Баходир Жураев — PhD, челюстно-лицевой хирург",
      metaDescription: "PhD, врач высшей категории, челюстно-лицевой хирург. Заведующий кафедрой «Хирургия полости рта и челюстно-лицевая хирургия» Международного университета CAMU. Научные работы, карьера и контакты.",
      nav: { about: "Обо мне", expertise: "Направления", cases: "Практика", career: "Карьера", research: "Исследования", publications: "Научные труды", contact: "Контакты" },
      skip: "Перейти к содержимому",
      menu: "Меню",
      themeDark: "Тёмная тема",
      themeLight: "Светлая тема",
      contactMe: "Связаться",
      viewPubs: "Публикации",
      stats: {
        publications: "научных работ",
        articles: "журнальных статей",
        years: "лет клинического и академического опыта",
        talks: "докладов на конференциях",
      },
      aboutEyebrow: "Обо мне",
      aboutTitle: "Клиника, наука и преподавание",
      expertiseEyebrow: "Направления",
      expertiseTitle: "Профессиональные направления",
      careerEyebrow: "Карьера",
      careerTitle: "Профессиональный путь",
      careerHint: "Прокручивайте страницу вниз — линия времени движется",
      present: "по н.в.",
      researchEyebrow: "Исследования",
      cases: {
        eyebrow: "Практика", title: "Пролеченные пациенты",
        lead: "Клинические случаи публикуются с письменного согласия пациентов и в обезличенном виде.",
        problem: "Проблема", diagnosis: "Диагноз", complaints: "Жалобы", patient: "Пациент", cause: "Причина", instagram: "Смотреть в Instagram", treatment: "Лечение", result: "Результат", duration: "Срок лечения",
        before: "До", after: "После", prevCase: "Предыдущий случай", nextCase: "Следующий случай", compare: "Сравнение фото до и после", photoSoon: "Фото будет добавлено", sample: "Пример",
      },
      researchTitle: "Диссертационное исследование (PhD)",
      dissertation: "Тема диссертации",
      themesTitle: "Научные направления",
      pubsEyebrow: "Научные труды",
      pubsTitle: "Статьи, тезисы и доклады",
      filters: { all: "Все", article: "Статьи", thesis: "Тезисы", talk: "Доклады" },
      types: { article: "Статья", thesis: "Тезисы", talk: "Доклад" },
      coauthors: "Соавторы",
      details: { more: "Подробнее", venue: "Журнал / мероприятие", where: "Место и дата", pages: "Страницы", ids: "Идентификаторы", authors: "Авторы", country: "Страна", close: "Закрыть", doi: "Открыть статью (DOI)", site: "Сайт журнала" },
      pages: "с.",
      prev: "Назад",
      next: "Вперёд",
      downloadPdf: "Список публикаций (PDF)",
      soon: "скоро",
      eduEyebrow: "Образование",
      eduTitle: "Образование и организации",
      education: "Образование",
      affiliations: "Организации",
      contactEyebrow: "Контакты",
      contactTitle: "Связь со мной",
      contactLabels: { phone: "Телефон", telegram: "Telegram", facebook: "Facebook", instagram: "Instagram", email: "Эл. почта" },
      contactActions: { phone: "Позвонить", telegram: "Написать", facebook: "Открыть страницу", instagram: "Открыть профиль", email: "Написать письмо" },
      footerRights: "Все права защищены.",
    },
    en: {
      langName: "English",
      language: "Language",
      metaTitle: "Baxodir Joraev — PhD, Oral & Maxillofacial Surgeon",
      metaDescription: "PhD, highest-category physician and oral & maxillofacial surgeon. Head of the Department of Oral and Maxillofacial Surgery at CAMU International University. Publications, career and contacts.",
      nav: { about: "About", expertise: "Expertise", cases: "Practice", career: "Career", research: "Research", publications: "Papers", contact: "Contact" },
      skip: "Skip to content",
      menu: "Menu",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      contactMe: "Contact me",
      viewPubs: "View publications",
      stats: {
        publications: "scientific publications",
        articles: "journal articles",
        years: "years of clinical & academic experience",
        talks: "conference presentations",
      },
      aboutEyebrow: "About",
      aboutTitle: "Clinic, research and teaching",
      expertiseEyebrow: "Expertise",
      expertiseTitle: "Areas of expertise",
      careerEyebrow: "Career",
      careerTitle: "Career timeline",
      careerHint: "Keep scrolling — the timeline moves with you",
      present: "present",
      researchEyebrow: "Research",
      cases: {
        eyebrow: "Practice", title: "Patients treated",
        lead: "Clinical cases are published with the patient's written consent and anonymised.",
        problem: "Problem", diagnosis: "Diagnosis", complaints: "Complaints", patient: "Patient", cause: "Cause", instagram: "View on Instagram", treatment: "Treatment", result: "Result", duration: "Treatment time",
        before: "Before", after: "After", prevCase: "Previous case", nextCase: "Next case", compare: "Compare before and after photos", photoSoon: "Photo to be added", sample: "Sample",
      },
      researchTitle: "PhD research",
      dissertation: "Dissertation topic",
      themesTitle: "Research themes",
      pubsEyebrow: "Papers",
      pubsTitle: "Articles, theses and talks",
      filters: { all: "All", article: "Articles", thesis: "Theses", talk: "Conference talks" },
      types: { article: "Article", thesis: "Thesis", talk: "Talk" },
      coauthors: "Co-authors",
      details: { more: "Details", venue: "Journal / event", where: "Place & date", pages: "Pages", ids: "Identifiers", authors: "Authors", country: "Country", close: "Close", doi: "Open article (DOI)", site: "Journal website" },
      pages: "pp.",
      prev: "Previous",
      next: "Next",
      downloadPdf: "Full publication list (PDF)",
      soon: "coming soon",
      eduEyebrow: "Education",
      eduTitle: "Education & affiliations",
      education: "Education",
      affiliations: "Affiliations",
      contactEyebrow: "Contact",
      contactTitle: "Get in touch",
      contactLabels: { phone: "Phone", telegram: "Telegram", facebook: "Facebook", instagram: "Instagram", email: "Email" },
      contactActions: { phone: "Call", telegram: "Send a message", facebook: "Open page", instagram: "Open profile", email: "Write an email" },
      footerRights: "All rights reserved.",
    },
  },

  /* ------------------------------------------------------------------ */
  about: {
    uz: [
      "Men **og‘iz bo‘shlig‘i va yuz-jag‘ jarrohi**, **oliy toifali shifokorman**. 2017-yilda Buxoro davlat tibbiyot institutini tamomlab, Toshkent davlat stomatologiya institutida magistraturada (2017–2020) tahsil oldim.",
      "**PhD tadqiqotim** flegmonalar bilan asoratlangan o‘tkir odontogen osteomiyelitni tashxislash va davolashga bag‘ishlangan.",
      "Kattalar yuz-jag‘ jarrohligi bo‘limida navbatchi shifokor sifatidagi klinik ish bilan bir qatorda assistent, katta o‘qituvchi va dotsent vazifasini bajaruvchi sifatida dars berdim, yoshlar ishlari bo‘yicha dekan o‘rinbosari lavozimida ishladim.",
      "2026-yil sentabridan buyon **CAMU xalqaro universitetining «Og‘iz bo‘shlig‘i va yuz-jag‘ jarrohligi» kafedrasiga rahbarlik qilaman**.",
    ],
    ru: [
      "Я **челюстно-лицевой хирург**, **врач высшей категории**. В 2017 году окончил Бухарский государственный медицинский институт, затем — магистратуру Ташкентского государственного стоматологического института (2017–2020).",
      "**Моё PhD-исследование** посвящено диагностике и лечению острого одонтогенного остеомиелита, осложнённого флегмонами.",
      "Параллельно с клинической работой дежурным хирургом в отделении челюстно-лицевой хирургии взрослых преподавал в должностях ассистента, старшего преподавателя и исполняющего обязанности доцента, работал заместителем декана по делам молодёжи.",
      "С сентября 2026 года **заведую кафедрой «Хирургия полости рта и челюстно-лицевая хирургия»** Международного университета CAMU.",
    ],
    en: [
      "I am an **oral and maxillofacial surgeon** and a **highest-category physician**. I graduated from Bukhara State Medical Institute in 2017 and completed a master's degree at Tashkent State Dental Institute (2017–2020).",
      "**My PhD research** focuses on the diagnosis and treatment of acute odontogenic osteomyelitis complicated by phlegmons.",
      "Alongside clinical work as an on-duty surgeon in the adult maxillofacial surgery department, I have taught as an assistant, senior lecturer and acting associate professor, and served as deputy dean for youth affairs.",
      "Since September 2026 I have **headed the Department of Oral and Maxillofacial Surgery** at CAMU International University.",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* icon: one of osteo | inflam | sorbent | rehab | stats | teach      */
  expertise: [
    {
      icon: "osteo",
      title: { uz: "O‘tkir odontogen osteomiyelit va flegmonalar", ru: "Острый одонтогенный остеомиелит и флегмоны", en: "Acute odontogenic osteomyelitis and phlegmons" },
      text: { uz: "Tashxis va kompleks davolash — PhD tadqiqotimning asosiy mavzusi.", ru: "Диагностика и комплексное лечение — основная тема PhD-исследования.", en: "Diagnosis and comprehensive treatment — the core of my PhD research." },
    },
    {
      icon: "inflam",
      title: { uz: "Yuz-jag‘ sohasining yiringli-yallig‘lanish kasalliklari", ru: "Гнойно-воспалительные заболевания челюстно-лицевой области", en: "Purulent-inflammatory diseases of the maxillofacial area" },
      text: { uz: "Klinik amaliyot va tibbiy-statistik tahlil.", ru: "Клиническая практика и медико-статистический анализ.", en: "Clinical practice and medical-statistical analysis." },
    },
    {
      icon: "sorbent",
      title: { uz: "Mahalliy terapiya", ru: "Местная терапия", en: "Local therapy" },
      text: { uz: "«Celloform», «Celloform-neo» sorbentlari, sorbsion-applikatsion terapiya.", ru: "Сорбенты «Целлоформ», «Целлоформ-нео», сорбционно-аппликационная терапия.", en: "Sorbents “Celloform” and “Celloform-neo”, sorption-application therapy." },
    },
    {
      icon: "rehab",
      title: { uz: "Reabilitatsiya", ru: "Реабилитация", en: "Rehabilitation" },
      text: { uz: "Kinezioteyping va pastki jag‘ yallig‘lanish kontrakturasida tish-jag‘ trenajyori.", ru: "Кинезиотейпирование и зубочелюстной тренажёр при воспалительной контрактуре нижней челюсти.", en: "Kinesiotaping and a dentition trainer for inflammatory contracture of the lower jaw." },
    },
    {
      icon: "stats",
      title: { uz: "Tibbiy-statistik tadqiqotlar va epidemiologiya", ru: "Медико-статистические исследования и эпидемиология", en: "Medical-statistical research and epidemiology" },
      text: { uz: "O‘zbekiston ma’lumotlari asosida bemorlar tarqalishi va tarkibini o‘rganish.", ru: "Распространённость и структура пациентов по данным Узбекистана.", en: "Prevalence and patient structure based on data from Uzbekistan." },
    },
    {
      icon: "teach",
      title: { uz: "Stomatologiyada ta’lim va akademik rahbarlik", ru: "Преподавание и академическое руководство в стоматологии", en: "Teaching and academic leadership in dentistry" },
      text: { uz: "Assistentlikdan kafedra mudirigacha.", ru: "От ассистента до заведующего кафедрой.", en: "From assistant to head of department." },
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Career, oldest first (2012 → 2026). `end: null` means "present".   */
  timeline: [
    {
      start: "2012", end: "2017", edu: true,
      role: { uz: "Oliy tibbiy ta’lim", ru: "Высшее медицинское образование", en: "Medical degree" },
      org: { uz: "Buxoro davlat tibbiyot instituti", ru: "Бухарский государственный медицинский институт", en: "Bukhara State Medical Institute" },
    },
    {
      start: "2017", end: "",
      role: { uz: "Stomatolog shifokor", ru: "Врач-стоматолог", en: "Dentist" },
      org: { uz: "Farg‘ona shahar ko‘p tarmoqli poliklinikasi, Farg‘ona viloyati", ru: "Многопрофильная поликлиника г. Ферганы, Ферганская область", en: "Fergana City Multi-Profile Polyclinic, Fergana region" },
    },
    {
      start: "2017", end: "2020", edu: true,
      role: { uz: "Magistratura talabasi", ru: "Магистрант", en: "Master's student" },
      org: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
    },
    {
      start: "2020", end: null,
      role: { uz: "Kattalar yuz-jag‘ jarrohligi bo‘limi navbatchi shifokori", ru: "Дежурный хирург отделения челюстно-лицевой хирургии взрослых", en: "On-duty surgeon, Adult Maxillofacial Surgery Department" },
      org: { uz: "Toshkent davlat stomatologiya instituti klinikasi", ru: "Клиника Ташкентского государственного стоматологического института", en: "Tashkent State Dental Institute clinic" },
    },
    {
      start: "2020", end: { uz: "Sentabr 2024", ru: "Сентябрь 2024", en: "Sept 2024" },
      role: { uz: "Yuz-jag‘ jarrohligi kafedrasi assistenti", ru: "Ассистент кафедры челюстно-лицевой хирургии", en: "Assistant, Department of Maxillofacial Surgery" },
      org: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
    },
    {
      start: "2023", end: { uz: "Sentabr 2024", ru: "Сентябрь 2024", en: "Sept 2024" },
      role: { uz: "Xorijiy talabalar bilan ishlash fakulteti yoshlar ishlari bo‘yicha dekan o‘rinbosari", ru: "Заместитель декана по делам молодёжи факультета по работе с иностранными студентами", en: "Deputy Dean for Youth Affairs, Faculty of Work with Foreign Students" },
      org: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
    },
    {
      start: { uz: "Sentabr 2024", ru: "Сентябрь 2024", en: "Sept 2024" }, end: { uz: "Yanvar 2025", ru: "Январь 2025", en: "Jan 2025" },
      role: { uz: "Stomatologiya kafedrasi katta o‘qituvchisi", ru: "Старший преподаватель кафедры стоматологии", en: "Senior Lecturer, Department of Dentistry" },
      org: "EMU University",
    },
    {
      start: { uz: "Yanvar 2025", ru: "Январь 2025", en: "Jan 2025" }, end: { uz: "Avgust 2026", ru: "Август 2026", en: "Aug 2026" },
      role: { uz: "Otorinolaringologiya kursi bilan gospital stomatologiya kafedrasi dotsenti v.v.b.", ru: "И.о. доцента кафедры госпитальной стоматологии с курсом оториноларингологии", en: "Acting Associate Professor, Department of Hospital Dentistry with an Otorhinolaryngology course" },
      org: "EMU University",
    },
    {
      start: { uz: "Sentabr 2026", ru: "Сентябрь 2026", en: "Sept 2026" }, end: null, current: true,
      role: { uz: "«Og‘iz bo‘shlig‘i va yuz-jag‘ jarrohligi» kafedrasi mudiri", ru: "Заведующий кафедрой «Хирургия полости рта и челюстно-лицевая хирургия»", en: "Head of the Department of Oral and Maxillofacial Surgery" },
      org: { uz: "CAMU xalqaro universiteti", ru: "Международный университет CAMU", en: "CAMU International University" },
    },
  ],

  /* ------------------------------------------------------------------ */
  research: {
    topic: {
      uz: "Flegmonalar bilan asoratlangan o‘tkir odontogen osteomiyelitlarda tashxis va davolash chora-tadbirlarini optimallashtirish",
      ru: "Оптимизация лечебно-диагностических мероприятий при острых одонтогенных остеомиелитах, осложнённых флегмонами",
      en: "Optimization of diagnostic and treatment measures in acute odontogenic osteomyelitis complicated by phlegmons",
    },
    degree: { uz: "Tibbiyot fanlari bo‘yicha falsafa doktori (PhD)", ru: "Доктор философии (PhD) по медицинским наукам", en: "Doctor of Philosophy (PhD) in Medical Sciences" },
    institution: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
    secretary: { uz: "Ilmiy kotib: t.f.d., professor A.A. Yuldashev", ru: "Учёный секретарь: д.м.н., профессор А.А. Юлдашев", en: "Scientific Secretary: Prof. A.A. Yuldashev, DSc" },
    themes: [
      { uz: "Odontogen flegmonalar epidemiologiyasi va tuzilishi", ru: "Эпидемиология и структура одонтогенных флегмон", en: "Epidemiology and structure of odontogenic phlegmons" },
      { uz: "Mahalliy sorbentlar va sorbsion-applikatsion terapiya", ru: "Местные сорбенты и сорбционно-аппликационная терапия", en: "Local sorbents and sorption-application therapy" },
      { uz: "Yallig‘lanish kontrakturasida kinezioteyping va tish-jag‘ treningi", ru: "Кинезиотейпирование и зубочелюстной тренинг при воспалительной контрактуре", en: "Kinesiotaping and dentition training in inflammatory contracture" },
      { uz: "Pastki jag‘ o‘smalari epidemiologiyasi", ru: "Эпидемиология опухолей нижней челюсти", en: "Epidemiology of mandibular tumours" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PUBLICATIONS                                                        *
   * type: "article" | "thesis" | "talk"                                 *
   * Optional fields: pages, ids (ISSN/DOI text), doi, url, coauthors,   *
   * place, date. Newest are shown first automatically (sorted by year). */
  publications: [
    // ---- 2026 (from the co-authorship statement, form 3.3) ----
    {
      type: "article", year: 2026, country: "uz",
      title: { uz: "O‘zbekiston Respublikasida pastki jag‘ xavfli o‘smalaridan (C41.1) o‘lim: 2016–2025-yillar epidemiologik tahlili", ru: "Смертность от злокачественных опухолей нижней челюсти (C41.1) в Республике Узбекистан: эпидемиологический анализ за 2016–2025 гг.", en: "Mortality from malignant tumours of the mandible (C41.1) in the Republic of Uzbekistan: an epidemiological analysis for 2016–2025" },
      venue: { uz: "ActaCAMU, 4 (17)-son", ru: "ActaCAMU, № 4 (17)", en: "ActaCAMU, No. 4 (17)" }, ids: "ISSN 2181-4155", doi: "10.5281/zenodo.23558004",
      coauthors: "Ganiev A.A., Khazratov A.I.",
    },
    {
      type: "article", year: 2026, country: "uz",
      title: { uz: "Mahalliy tarqalgan og‘iz va og‘iz-halqum saratonida klinik-immunologik tekshiruvlar", ru: "Клинико-иммунологические исследования при местнораспространённом раке полости рта и ротоглотки", en: "Clinical and immunological studies in locally advanced oral and oropharyngeal cancer" },
      venue: { uz: "Integrativ stomatologiya va yuz-jag‘ jarrohligi, 5-jild, 2(14)-son", ru: "Интегративная стоматология и челюстно-лицевая хирургия, т. 5, вып. 2(14)", en: "Integrative Dentistry and Maxillofacial Surgery, Vol. 5, Issue 2(14)" },
      pages: "159–164", doi: "10.57231/j.idmfs.2026.5.2.021",
      coauthors: "Ganiev A.A., Ganiev A.K.",
    },
    {
      type: "article", year: 2026, country: "uz",
      title: { uz: "Pastki jag‘ning saraton oldi va saraton kasalliklarini kompleks davolash va tashxislashni epidemiologiya va molekulyar-genetik tadqiqotlar asosida takomillashtirish (sharh maqola)", ru: "Усовершенствование комплексного лечения и диагностики предраковых и раковых заболеваний нижней челюсти с изучением эпидемиологии и молекулярно-генетических исследований (обзорная статья)", en: "Improving comprehensive treatment and diagnosis of precancerous and cancerous diseases of the mandible through epidemiological and molecular-genetic research (review)" },
      venue: { uz: "Integrativ stomatologiya va yuz-jag‘ jarrohligi, 5-jild, 1(13)-son", ru: "Интегративная стоматология и челюстно-лицевая хирургия, т. 5, вып. 1(13)", en: "Integrative Dentistry and Maxillofacial Surgery, Vol. 5, Issue 1(13)" },
      pages: "61–67", doi: "10.57231/j.idmfs.2026.5.1.008",
      coauthors: "Ganiev A.A., Khazratov A.I.",
    },
    {
      type: "article", year: 2026, country: "uz",
      title: { uz: "Dental implantlarda turli abatmentlar yordamida turli ortopedik konstruksiyalarni qo‘llashni asoslash", ru: "Обоснование применения различных ортопедических конструкций на дентальных имплантатах с использованием различных абатментов", en: "Rationale for different prosthetic constructions on dental implants using various abutments" },
      venue: { uz: "Integrativ stomatologiya va yuz-jag‘ jarrohligi, 5-jild, 1(13)-son", ru: "Интегративная стоматология и челюстно-лицевая хирургия, т. 5, вып. 1(13)", en: "Integrative Dentistry and Maxillofacial Surgery, Vol. 5, Issue 1(13)" },
      pages: "83–86", doi: "10.57231/j.idmfs.2026.5.1.011",
      coauthors: "Qahramonov B.D., Shovkatov O.Sh.",
    },
    {
      type: "article", year: 2026, country: "uz",
      title: { uz: "Yuz-jag‘ sohasining chegaralangan odontogen yiringli-yallig‘lanish kasalliklarini kompleks davolashni takomillashtirish (sharh maqola)", ru: "Совершенствование комплексного лечения ограниченных одонтогенных гнойно-воспалительных заболеваний челюстно-лицевой области (обзорная статья)", en: "Improving comprehensive treatment of localized odontogenic purulent-inflammatory diseases of the maxillofacial region (review)" },
      venue: { uz: "Integrativ stomatologiya va yuz-jag‘ jarrohligi, 5-jild, 1(13)-son", ru: "Интегративная стоматология и челюстно-лицевая хирургия, т. 5, вып. 1(13)", en: "Integrative Dentistry and Maxillofacial Surgery, Vol. 5, Issue 1(13)" },
      pages: "105–109", doi: "10.57231/j.idmfs.2026.5.1.016",
      coauthors: "Fasikhiddinov R.K.",
    },

    // ---- PhD publication list (form 3.4) — articles ----
    {
      type: "article", year: 2022, country: "ru",
      title: { uz: "Yiringli-yallig‘lanish jarayoniga mahalliy ta’sir etuvchi zamonaviy vositalar va ularni yuz-jag‘ jarrohligi hamda xirurgik stomatologiyada qo‘llash istiqbollari", ru: "Современные средства местного воздействия на течение гнойно-воспалительного процесса и перспективы их использования в челюстно-лицевой хирургии и хирургической стоматологии", en: "Modern local-action agents in the purulent-inflammatory process and prospects of their use in maxillofacial surgery and surgical dentistry" },
      venue: { uz: "«Rossiyskaya stomatologiya» jurnali", ru: "«Российская стоматология»", en: "Rossiyskaya Stomatologiya" },
      pages: "8–11",
      coauthors: "Ksembaev S.S., Nesterov E.E., Juraev B.N., Torgashova O.E., Khafizova L.N.",
    },
    {
      type: "article", year: 2021, country: "uz",
      title: { uz: "Kinezioteyping va uni yuz-jag‘ sohasi yallig‘lanish kasalliklarida qo‘llash imkoniyati", ru: "Кинезиотейпирование и возможность его применения при воспалительных заболеваниях челюстно-лицевой области", en: "Kinesiotaping and its application in inflammatory diseases of the maxillofacial area" },
      venue: { uz: "Medicina and Innovations, 1-son", ru: "Medicina and Innovations, № 1", en: "Medicina and Innovations, No. 1" }, pages: "61–67",
      coauthors: "Ksembaev S.S., Khalmatova M.A., Juraev B.N.",
    },
    {
      type: "article", year: 2021, country: "uz",
      title: { uz: "Odontogen yallig‘lanish kasalliklarida zamonaviy davolash va kinezioteyplarni qo‘llash", ru: "Современное лечение и применение кинезиотейпов при одонтогенных воспалительных заболеваниях", en: "Modern treatment and use of kinesiotypes in odontogenic inflammatory diseases" },
      venue: { uz: "Uzbek Medical Journal, SI-4-son", ru: "Uzbek Medical Journal, № SI-4", en: "Uzbek Medical Journal, No. SI-4" }, pages: "15–21", ids: "ISSN 2181-0664 · DOI 10.26739/2181-0664",
      coauthors: "Ksembaev S.S., Khalmatova M.A., Juraev B.N.",
    },
    {
      type: "article", year: 2022, country: "uz",
      title: { uz: "Yiringli-yallig‘lanish jarayoniga mahalliy ta’sir qiluvchi zamonaviy vositalar va ularni yuz-jag‘ jarrohligi hamda xirurgik stomatologiyada qo‘llash istiqbollari", ru: "Современные местновоздействующие средства на течение гнойно-воспалительного процесса и перспективы их использования в челюстно-лицевой хирургии и хирургической стоматологии", en: "Modern locally acting agents in the purulent-inflammatory process and prospects of their use in maxillofacial surgery and surgical dentistry" },
      venue: { uz: "Med Union, 1-jild, 1-son", ru: "Med Union, т. 1, № 1", en: "Med Union, Vol. 1, No. 1" }, pages: "44–48", ids: "E-ISSN 2181-3183",
      coauthors: "Ksembaev S.S., Khalmatova M.A., Juraev B.N.",
    },
    {
      type: "article", year: 2023, country: "ru",
      title: { uz: "Odontogen flegmonali bemorlarning tibbiy-statistik tavsifi (O‘zbekiston Respublikasi ma’lumotlari asosida)", ru: "Медико-статистическая характеристика пациентов с одонтогенными флегмонами (по материалам Республики Узбекистан)", en: "Medical-statistical characteristics of patients with odontogenic phlegmons (based on data from the Republic of Uzbekistan)" },
      venue: { uz: "«Meditsinskiy vestnik Yevrazii», 1-son", ru: "Медицинский вестник Евразии, № 1", en: "Medical Bulletin of Eurasia, No. 1" },
      pages: "47–53", ids: "ISSN 2413-4864",
      coauthors: "Ksembaev S.S., Khalmatova M.A., Salakhov A.K., Juraev B.N.",
    },
    {
      type: "article", year: 2023,
      title: { uz: "Yiringli yuz-jag‘ jarrohligi klinikasida sorbsion-applikatsion terapiyaning samaradorligi", ru: "Эффективность сорбционно-аппликационной терапии в клинике гнойной челюстно-лицевой хирургии", en: "Effectiveness of sorption-application therapy in the clinic of purulent maxillofacial surgery" },
      venue: { uz: "Original Medicine, 2-jild, 1-son", ru: "Original Medicine, т. 2, вып. 1", en: "Original Medicine, Vol. 2, Issue 1" }, pages: "90–97", ids: "ISSN 2729-8043", url: "https://www.original-medicine.eu/",
      coauthors: "Ksembaev S.S., Khalmatova M.A., Torgashova O.E., Juraev B.N.",
    },

    // ---- Conference theses ----
    {
      type: "thesis", year: 2023, country: "uz",
      title: { uz: "Odontogen flegmonalar: ularning tuzilishiga ilmiy qarashlar", ru: "Одонтогенные флегмоны, научные взгляды на их строение", en: "Odontogenic phlegmons: scientific views on their structure" },
      venue: { uz: "«Yuz-jag‘ jarrohligida istiqbollar va innovatsiyalar. Yosh olimlar yechimlari» xalqaro ilmiy-amaliy konferensiyasi", ru: "Международная научно-практическая конференция «Перспективы и инновации в челюстно-лицевой хирургии. Решения молодых учёных»", en: "International conference “Prospects and innovations in maxillofacial surgery. Solutions of young scientists”" },
      place: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent" }, date: { uz: "10-fevral", ru: "10 февраля", en: "10 Feb" },
      coauthors: "Mukhamedova Sh.Yu., Juraev B.N., Kholmurodov J.R.",
    },
    {
      type: "thesis", year: 2023, country: "tj",
      title: { uz: "Yuz-jag‘ jarrohligi klinikasida «Celoform-neo» preparatining samaradorligi", ru: "Эффективность препарата «Целоформ-нео» в клинике челюстно-лицевой хирургии", en: "Efficacy of the drug “Celoform-neo” in the clinic of maxillofacial surgery" },
      venue: { uz: "«Bolalar stomatologiyasi va ortodontiyaning dolzarb masalalari: muammolar va rivojlanish istiqbollari» xalqaro ilmiy-amaliy konferensiyasi", ru: "Международная научно-практическая конференция «Актуальные вопросы детской стоматологии и ортодонтии: проблемы и перспективы их развития»", en: "International conference “Current issues of pediatric dentistry and orthodontics: problems and prospects”" },
      place: { uz: "Tursunzoda", ru: "Турсунзаде", en: "Tursunzoda" }, date: { uz: "23-iyun", ru: "23 июня", en: "23 Jun" },
      coauthors: "Juraev B.N., Khalmatova M.A., Ksembaev S.S.",
    },
    {
      type: "thesis", year: 2023, country: "ru",
      title: { uz: "Paxta sellyulozasidan olingan «Celoform» va «Celoform-neo» sorbentlarining klinik samaradorligini fizik-kimyoviy ko‘rsatkichlar asosida qiyosiy baholash", ru: "Сравнительная оценка клинической эффективности сорбентов из хлопковой целлюлозы «Целоформ» и «Целоформ-нео» на основании анализа физико-химических параметров", en: "Comparative assessment of the clinical effectiveness of cotton-cellulose sorbents “Celoform” and “Celoform-neo” based on physico-chemical parameters" },
      venue: { uz: "Xalqaro ishtirokdagi XV Butunrossiya ilmiy-amaliy konferensiyasi", ru: "XV Всероссийская научно-практическая конференция с международным участием", en: "XV All-Russian conference with international participation" },
      place: { uz: "Qozon", ru: "Казань", en: "Kazan" }, date: { uz: "16–17-mart", ru: "16–17 марта", en: "16–17 Mar" },
      coauthors: "Yamaleeva E.S., Mansurov M.N., Juraev B.N., Ksembaev S.S., Musin I.N., Torgashova O.E.",
    },

    // ---- Conference talks ----
    {
      type: "talk", year: 2023, country: "uz",
      title: { uz: "Flegmona bilan asoratlangan o‘tkir odontogen osteomiyelitli bemorlarning tarqalishi va klinik tavsifi (Toshkent viloyati, O‘zbekiston)", ru: "Распространённость и клиническая характеристика пациентов с острым одонтогенным остеомиелитом, осложнённым флегмоной (по материалам Ташкентской области, Узбекистан)", en: "Prevalence and clinical characteristics of patients with acute odontogenic osteomyelitis complicated by phlegmon (Tashkent region, Uzbekistan)" },
      venue: { uz: "«Yuz-jag‘ jarrohligida istiqbollar va innovatsiyalar. Yosh olimlar yechimlari»", ru: "«Перспективы и инновации в челюстно-лицевой хирургии. Решения молодых учёных»", en: "“Prospects and innovations in maxillofacial surgery. Solutions of young scientists”" },
      coauthors: "Ksembaev S.S., Khalmatova M.A., Juraev B.N.",
    },
    {
      type: "talk", year: 2023, country: "ru",
      title: { uz: "Odontogen flegmonalarda pastki jag‘ yallig‘lanish kontrakturasini kamaytirishda tish-jag‘ treningining samaradorligi", ru: "Эффективность зубочелюстного тренинга в редукции воспалительной контрактуры нижней челюсти при одонтогенных флегмонах", en: "Effectiveness of dentition training in reducing inflammatory contracture of the lower jaw in odontogenic phlegmons" },
      venue: { uz: "XXXI xalqaro onlayn kongress «Stomatologiyada innovatsion texnologiyalar»", ru: "XXXI Международный онлайн-конгресс «Инновационные технологии в стоматологии»", en: "XXXI International online congress “Innovative technologies in dentistry”" },
      place: { uz: "Omsk", ru: "Омск", en: "Omsk" },
    },
    {
      type: "talk", year: 2022, country: "ru",
      title: { uz: "O‘zbekiston Respublikasida odontogen flegmonalar bilan gospitalizatsiya qilingan bemorlarning tarqalishi va tarkibi", ru: "Распространённость и структура госпитализированных пациентов с одонтогенными флегмонами в Республике Узбекистан", en: "Prevalence and structure of hospitalized patients with odontogenic phlegmons in Uzbekistan" },
      venue: { uz: "XIV Butunrossiya ilmiy-amaliy virtual forumi «XXI asrda inson salomatligi. Hayot sifati»", ru: "XIV Всероссийский научно-практический виртуальный форум «Здоровье человека в XXI веке. Качество жизни»", en: "XIV All-Russian virtual forum “Human Health in the XXI Century. Quality of Life”" },
      date: { uz: "17–18-mart", ru: "17–18 марта", en: "17–18 Mar" },
    },
    {
      type: "talk", year: 2023,
      title: { uz: "Odontogen flegmonalarda pastki jag‘ yallig‘lanish kontrakturasini kamaytirishda tish-jag‘ treningining samaradorligi", ru: "Эффективность зубочелюстного тренинга в редукции воспалительной контрактуры нижней челюсти при одонтогенных флегмонах", en: "Effectiveness of dentition training in reducing inflammatory contracture of the lower jaw in odontogenic phlegmons" },
      venue: { uz: "Xalqaro ishtirokdagi II mintaqalararo ilmiy-amaliy konferensiya", ru: "II Межрегиональная научно-практическая конференция с международным участием", en: "II Interregional scientific-practical conference with international participation" },
      date: { uz: "29-sentabr", ru: "29 сентября", en: "29 Sep" },
    },
    {
      type: "talk", year: 2023, country: "uz",
      title: { uz: "O‘tkir odontogen yallig‘lanish kasalliklari bo‘lgan bemorlarni davolashda «Celloform-neo» sorbenti va tish-jag‘ trenajyorining samaradorligi", ru: "Эффективность сорбента «Целлоформ-нео» и зубочелюстного тренажёра в лечении пациентов с острыми одонтогенными воспалительными заболеваниями", en: "Efficiency of the sorbent “Celloform-neo” and dentition simulator in the treatment of patients with acute odontogenic inflammatory diseases" },
      venue: "Trends in Modern Dentistry and Maxillofacial Surgery",
      place: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent" }, date: { uz: "3-oktabr", ru: "3 октября", en: "3 Oct" },
    },
  ],

  /* ------------------------------------------------------------------ */
  /* CLINICAL CASES ("Patients treated")                                 *
   * Publish only with the patient's WRITTEN consent, and anonymised:    *
   * no names, no faces that identify the person (crop/cover the eyes).  *
   *                                                                     *
   * Each case:                                                          *
   *   category  — short tag, e.g. { uz: "Flegmona", ru: "Флегмона", … } *
   *   year      — optional                                              *
   *   title, patient, cause, complaints (optional), diagnosis,         *
   *   treatment, result — text ({ uz, ru, en }); **bold** allowed     *
   *   duration  — optional, e.g. { uz: "14 kun", ru: "14 дней", … }     *
   *   before / after — images shown left / right of the story          *
   *   photo     — a single image, if there is no before/after pair       *
   *   source    — optional link to the original post                    *
   *   sample: true — marks a TEMPLATE card (dashed border, "Sample").   *
   * Current cases: 3D CT before/after from the doctor's own Instagram.  */
  cases: [
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "Janjaldan keyingi pastki jag‘ singanligi", ru: "Перелом нижней челюсти после драки", en: "Mandibular fracture after a fight" },
      patient: { uz: "Erkak, 33 yosh", ru: "Мужчина, 33 года", en: "Man, 33" },
      cause: { uz: "Janjal", ru: "Драка", en: "Fight" },
      diagnosis: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      treatment: { uz: "**Og‘iz ichidan** osteosintez", ru: "Остеосинтез **внутриротовым доступом**", en: "**Intraoral** osteosynthesis" },
      result: { uz: "Jag‘ **yuz terisida kesmasiz** tiklandi", ru: "Челюсть восстановлена **без разреза на коже лица**", en: "Jaw restored **without a skin incision on the face**" },
      before: "assets/cases/case-05-before.webp", after: "assets/cases/case-05-after.webp",
      source: "https://www.instagram.com/p/DKB2_dhNoHe/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "67 yoshli bemorda pastki jag‘ bo‘g‘im boshchasi singanligi", ru: "Перелом головки нижней челюсти у пациента 67 лет", en: "Mandibular condylar head fracture in a 67-year-old" },
      patient: { uz: "67 yosh", ru: "67 лет", en: "Aged 67" },
      cause: { uz: "Uyda yiqilish, 1 hafta oldin", ru: "Падение дома, неделю назад", en: "Fall at home, a week earlier" },
      complaints: { uz: "Og‘izni keng ocha olmaslik, og‘riq, tishlovning buzilishi", ru: "Не может широко открыть рот, боль, нарушение прикуса", en: "Unable to open the mouth wide, pain, malocclusion" },
      diagnosis: { uz: "Chap tomonda pastki jag‘ bo‘g‘im boshchasi singanligi", ru: "Перелом головки нижней челюсти слева", en: "Fracture of the left mandibular condylar head" },
      treatment: { uz: "Osteosintez amaliyoti", ru: "Операция остеосинтеза", en: "Osteosynthesis" },
      result: { uz: "Bo‘laklar **mahkamlandi** — nazorat KT rasmda", ru: "Отломки **фиксированы** — контрольная КТ на снимке", en: "Fragments **fixed** — the post-operative CT is shown" },
      before: "assets/cases/case-02-before.webp", after: "assets/cases/case-02-after.webp",
      source: "https://www.instagram.com/p/DJ3Q6QDs4Am/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "So‘riluvchi plastinalar bilan osteosintez — O‘zbekistonda birinchi marta", ru: "Остеосинтез рассасывающимися пластинами — впервые в Узбекистане", en: "Osteosynthesis with absorbable plates — a first in Uzbekistan" },
      patient: { uz: "Erkak, 30 yosh", ru: "Мужчина, 30 лет", en: "Man, 30" },
      cause: { uz: "Janjal", ru: "Драка", en: "Fight" },
      diagnosis: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      treatment: { uz: "Osteosintez **so‘riluvchi mini-plastinalar** bilan, og‘iz ichidan", ru: "Остеосинтез **рассасывающимися мини-пластинами** внутриротовым доступом", en: "Osteosynthesis with **absorbable mini-plates**, intraoral approach" },
      result: { uz: "Jag‘ **yuz terisida kesmasiz** tiklandi", ru: "Челюсть восстановлена **без разреза на коже лица**", en: "Jaw restored **without a skin incision on the face**" },
      before: "assets/cases/case-01-before.webp", after: "assets/cases/case-01-after.webp",
      source: "https://www.instagram.com/p/DIgT94ANAGR/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "Pastki jag‘ tanasining ikki tomonlama singanligi", ru: "Двусторонний перелом тела нижней челюсти", en: "Bilateral fracture of the mandibular body" },
      patient: { uz: "Erkak, 55 yosh", ru: "Мужчина, 55 лет", en: "Man, 55" },
      cause: { uz: "Janjal, 2 kun oldin", ru: "Драка, 2 дня назад", en: "Fight, 2 days earlier" },
      complaints: { uz: "Yuz asimmetriyasi (o‘ngda shish), og‘riq; mahalliy klinikada shina qo‘yilgan", ru: "Асимметрия лица (отёк справа), боль; в местной клинике наложены шины", en: "Facial asymmetry (right-sided swelling), pain; splints placed at a local clinic" },
      diagnosis: { uz: "Pastki jag‘ tanasining ikki tomonlama singanligi", ru: "Двусторонний перелом тела нижней челюсти", en: "Bilateral fracture of the mandibular body" },
      treatment: { uz: "**Og‘iz ichidan** osteosintez", ru: "Остеосинтез **внутриротовым доступом**", en: "**Intraoral** osteosynthesis" },
      result: { uz: "Jag‘ **yuz terisida kesmasiz** tiklandi", ru: "Челюсть восстановлена **без разреза на коже лица**", en: "Jaw restored **without a skin incision on the face**" },
      before: "assets/cases/case-03-before.webp", after: "assets/cases/case-03-after.webp",
      source: "https://www.instagram.com/p/DIJnJ2HNKg1/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "Pastki jag‘ning siljish bilan ikki tomonlama singanligi", ru: "Двусторонний перелом нижней челюсти со смещением", en: "Bilateral displaced mandibular fracture" },
      patient: { uz: "Erkak, 33 yosh", ru: "Мужчина, 33 года", en: "Man, 33" },
      cause: { uz: "Janjal, 2 kun oldin", ru: "Драка, 2 дня назад", en: "Fight, 2 days earlier" },
      complaints: { uz: "Yuz asimmetriyasi (o‘ngda shish), og‘riq; mahalliy klinikada shina qo‘yilgan", ru: "Асимметрия лица (отёк справа), боль; в местной клинике наложены шины", en: "Facial asymmetry (right-sided swelling), pain; splints placed at a local clinic" },
      diagnosis: { uz: "Pastki jag‘ning siljish bilan ikki tomonlama singanligi", ru: "Двусторонний перелом нижней челюсти со смещением", en: "Bilateral displaced mandibular fracture" },
      treatment: { uz: "**Og‘iz ichidan** osteosintez, jag‘lararo shinalar olib tashlandi", ru: "Остеосинтез **внутриротовым доступом**, межчелюстные шины сняты", en: "**Intraoral** osteosynthesis; intermaxillary splints removed" },
      result: { uz: "Jag‘ **kesmasiz va shinalarsiz** tiklandi", ru: "Челюсть восстановлена **без разреза и без шин**", en: "Jaw restored **with no incision and no splints**" },
      before: "assets/cases/case-04-before.webp", after: "assets/cases/case-04-after.webp",
      source: "https://www.instagram.com/reel/DH55uloNaTG/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "Sport jarohatidan keyin bo‘g‘im o‘sig‘i singanligi", ru: "Перелом суставного отростка после спортивной травмы", en: "Condylar process fracture after a sports injury" },
      patient: { uz: "Erkak, 28 yosh", ru: "Мужчина, 28 лет", en: "Man, 28" },
      cause: { uz: "Mashg‘ulotda jarohat, 2 kun oldin", ru: "Травма на тренировке, 2 дня назад", en: "Training injury, 2 days earlier" },
      complaints: { uz: "Yuz asimmetriyasi (chapda shish), og‘riq; mahalliy klinikada shina qo‘yilgan", ru: "Асимметрия лица (отёк слева), боль; в местной клинике наложены шины", en: "Facial asymmetry (left-sided swelling), pain; splints placed at a local clinic" },
      diagnosis: { uz: "Chap tomonda pastki jag‘ bo‘g‘im o‘sig‘i singanligi", ru: "Перелом суставного отростка нижней челюсти слева", en: "Fracture of the left mandibular condylar process" },
      treatment: { uz: "**Og‘iz ichidan** osteosintez, shinalar olib tashlandi", ru: "Остеосинтез **внутриротовым доступом**, шины сняты", en: "**Intraoral** osteosynthesis; splints removed" },
      result: { uz: "Jag‘ **yuz terisida kesmasiz** tiklandi", ru: "Челюсть восстановлена **без разреза на коже лица**", en: "Jaw restored **without a skin incision on the face**" },
      before: "assets/cases/case-06-before.webp", after: "assets/cases/case-06-after.webp",
      source: "https://www.instagram.com/p/DGgBXsztVtf/",
    },
    {
      year: 2025, category: { uz: "Pastki jag‘ singanligi", ru: "Перелом нижней челюсти", en: "Mandibular fracture" },
      title: { uz: "Pastki jag‘ bo‘g‘im o‘sig‘i singanligi", ru: "Перелом суставного отростка нижней челюсти", en: "Fracture of the mandibular condylar process" },
      patient: { uz: "Erkak, 22 yosh", ru: "Мужчина, 22 года", en: "Man, 22" },
      cause: { uz: "Janjal, 1 kun oldin", ru: "Драка, 1 день назад", en: "Assault, 1 day earlier" },
      complaints: { uz: "Yuz asimmetriyasi (chapda shish), og‘riq", ru: "Асимметрия лица (отёк слева), боль", en: "Facial asymmetry (left-sided swelling), pain" },
      diagnosis: { uz: "Chap tomonda pastki jag‘ bo‘g‘im o‘sig‘i singanligi", ru: "Перелом суставного отростка нижней челюсти слева", en: "Fracture of the left mandibular condylar process" },
      treatment: { uz: "**Og‘iz ichidan** osteosintez", ru: "Остеосинтез **внутриротовым доступом**", en: "**Intraoral** osteosynthesis" },
      result: { uz: "Jag‘ **yuzda chandiqsiz** tiklandi", ru: "Челюсть восстановлена **без рубцов на лице**", en: "Jaw restored **with no scars on the face**" },
      before: "assets/cases/case-07-before.webp", after: "assets/cases/case-07-after.webp",
      source: "https://www.instagram.com/p/DGWGwHAtWUz/",
    },
  ],

  countries: {
    uz: { uz: "O‘zbekiston", ru: "Узбекистан", en: "Uzbekistan" },
    ru: { uz: "Rossiya", ru: "Россия", en: "Russia" },
    tj: { uz: "Tojikiston", ru: "Таджикистан", en: "Tajikistan" },
  },

  /* ------------------------------------------------------------------ */
  education: [
    {
      years: "2012–2017",
      name: { uz: "Buxoro davlat tibbiyot instituti", ru: "Бухарский государственный медицинский институт", en: "Bukhara State Medical Institute" },
      detail: { uz: "Oliy tibbiy ta’lim", ru: "Высшее медицинское образование", en: "Medical degree" },
      city: { uz: "Buxoro", ru: "Бухара", en: "Bukhara" },
    },
    {
      years: "2017–2020",
      name: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
      detail: { uz: "Magistratura", ru: "Магистратура", en: "Master's degree" },
      city: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent" },
    },
    {
      years: "PhD",
      name: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" },
      detail: { uz: "Tibbiyot fanlari bo‘yicha falsafa doktori", ru: "Доктор философии по медицинским наукам", en: "Doctor of Philosophy in Medical Sciences" },
      city: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent" },
    },
  ],
  /* `logo`: 2–4 letters for the monogram tile · `current: true` marks the present employer */
  affiliations: [
    { logo: "CAMU", years: { uz: "2026 — hozirgacha", ru: "2026 — н.в.", en: "2026 — present" }, current: true, name: { uz: "CAMU xalqaro universiteti", ru: "Международный университет CAMU", en: "CAMU International University" }, detail: { uz: "Kafedra mudiri", ru: "Заведующий кафедрой", en: "Head of Department" } },
    { logo: "EMU", years: "2024 — 2026", name: "EMU University", detail: { uz: "Katta o‘qituvchi, dotsent v.v.b.", ru: "Старший преподаватель, и.о. доцента", en: "Senior Lecturer, Acting Associate Professor" } },
    { logo: "TSDI", years: "2017 — 2024", name: { uz: "Toshkent davlat stomatologiya instituti", ru: "Ташкентский государственный стоматологический институт", en: "Tashkent State Dental Institute" }, detail: { uz: "Assistent, dekan o‘rinbosari, jarroh", ru: "Ассистент, заместитель декана, хирург", en: "Assistant, Deputy Dean, surgeon" } },
  ],
};
