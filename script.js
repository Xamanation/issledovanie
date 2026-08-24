/* =========================================================
   Перечень блоков диагностики — реальные направления бизнеса
   + комментарий «почему» и подсказки к секциям РНК
   ========================================================= */
const BLOCKS = [
  { id:'strategy',  name:'Стратегия и цели',         short:'Стратегия',
    q:'Есть ли у компании понятная стратегия на 1–3 года, доведённая до команды, с измеримыми KPI?',
    why:'Без стратегии любая инициатива превращается в набор разрозненных действий.',
    tipTopic:'strategy' },
  { id:'finance',   name:'Финансы и unit-экономика',  short:'Финансы',
    q:'Видите ли вы в реальном времени картину доходов, расходов и маржи по направлениям, а не раз в квартал?',
    why:'Скрытая маржа съедает рост: видеть деньги ежедневно — базовое требование.',
    tipTopic:'finance' },
  { id:'sales',     name:'Продажи и воронка',         short:'Продажи',
    q:'Измеряется ли конверсия на каждом этапе воронки и понятно, где теряются клиенты?',
    why:'Если не знаете, где клиент уходит, — рост продаж случайный.',
    tipTopic:'sales' },
  { id:'marketing', name:'Маркетинг и клиенты',       short:'Маркетинг',
    q:'Есть ли система привлечения и удержания клиентов, а не разовые акции «по настроению»?',
    why:'Без системы каждый месяц приходится заново «придумывать» поток клиентов.',
    tipTopic:'marketing' },
  { id:'product',   name:'Продукт и ассортимент',     short:'Продукт',
    q:'Насколько системно вы обновляете ассортимент и проверяете гипотезы до запуска?',
    why:'Без гипотез новый продукт — лотерея: либо попадёт, либо провалится.',
    tipTopic:'product' },
  { id:'ops',       name:'Операции и процессы',       short:'Операции',
    q:'Задокументированы ли ключевые процессы и понятно ли, кто за что отвечает?',
    why:'Когда процессы «в голове» у одного человека, бизнес завязан на нём одного.',
    tipTopic:'ops' },
  { id:'team',      name:'Команда и оргструктура',    short:'Команда',
    q:'Есть ли прозрачные роли, регулярная обратная связь и понятная система мотивации?',
    why:'Размытые роли = конфликты, выгорание ключевых людей и замедление роста.',
    tipTopic:'team' },
  { id:'legal',     name:'Юридическая защита и комплаенс', short:'Комплаенс',
    q:'В порядке ли договоры, лицензии, требования по маркировке и нормативы вашей отрасли?',
    why:'Один штраф или сорванная поставка из-за просрочки лицензии может обнулить прибыль за квартал.',
    tipTopic:'legal' },
  { id:'service',   name:'Клиентский сервис',         short:'Сервис',
    q:'Знаете ли вы NPS, скорость ответа и где клиент «буксует» при обращении?',
    why:'Сервис «на глазок» — главная причина, почему клиенты уходят тихо, без претензий.',
    tipTopic:'service' },
  { id:'tech',      name:'Автоматизация и данные',    short:'Автоматизация',
    q:'Используете ли вы системы учёта, CRM и дашборды или по-прежнему «всё в Excel и голове»?',
    why:'Ручные процессы не масштабируются: рост x2 даёт x2 ошибок и срывов сроков.',
    tipTopic:'tech' }
];

/* =========================================================
   Подсказки: какие секции РНК рекомендовать.
   Темы и время взяты из официальной программы сайта realnormconf.ru
   (утренний блок, 22 октября 2026). Все секции проходят 22 октября 2026 года.
   ========================================================= */
const RECS = {
  strategy:  { topic:'Открытие конференции: «Сдохнуть, выжить или расти?»', speakers:'Анна Исакова · Анна Криницына',         time:'10:00–10:10', when:'22 октября 2026 · 10:00–10:10', reason:'Старт дня: главные вызовы и повестка конференции — помогает сверить свою стратегию с рынком УрФО.' },
  finance:   { topic:'Мастер-класс: «Как объединить сервис, маркетинг и HR в единую стратегию»', speakers:'Галина Куртыгина',                time:'10:50–11:30', when:'22 октября 2026 · 10:50–11:30', reason:'Разбирают сквозной контур «деньги → клиент → команда», чтобы финансы были видны каждый день.' },
  sales:     { topic:'Питч-сессия: можно ли расти в кризис и где теряются деньги', speakers:'Анна Криницына · Анна Исакова · Татьяна Щенникова', time:'10:10–10:50', when:'22 октября 2026 · 10:10–10:50', reason:'3 питча от практиков маркетинга, сервиса и HR про рост, работу с командой и AI в продажах.' },
  marketing: { topic:'Доклад: «Не все отзывы надо слушать» — решения, которые усиливают бизнес', speakers:'Роман Нохрин',                       time:'11:30–12:00', when:'22 октября 2026 · 11:30–12:00', reason:'17+ лет в CX: какие сигналы клиентов реально влияют на рост, а какие — шум.' },
  product:   { topic:'Питч-сессия: «Помогает ли AI в работе и сможет ли заменить человека?»', speakers:'Александр Лебедев · Анна Исакова',     time:'10:10–10:50', when:'22 октября 2026 · 10:10–10:50', reason:'Разбор реальных кейсов применения AI в продукте и ограничений, о которых важно знать заранее.' },
  ops:       { topic:'Мастер-класс: «Как объединить сервис, маркетинг и HR в единую стратегию»', speakers:'Галина Куртыгина',                time:'10:50–11:30', when:'22 октября 2026 · 10:50–11:30', reason:'Готовые шаблоны сквозных процессов и чек-листы, которые внедряются за 2 недели.' },
  team:      { topic:'Питч-сессия: «Как работать с командой в кризисное время?»', speakers:'Юлия Фуртат · Анна Криницына',          time:'10:10–10:50', when:'22 октября 2026 · 10:10–10:50', reason:'Прямые ответы практиков: удержание, мотивация, роль руководителя в турбулентности.' },
  legal:     { topic:'Исследование бизнеса УрФО — тренды, нормативы, регуляторика', speakers:'Оргкомитет РНК · Анна Исакова',         time:'10:00–10:10', when:'22 октября 2026 · 10:00–10:10', reason:'Свежий срез по 300+ компаниям 15 отраслей Урала — сверяете свои риски с рынком.' },
  service:   { topic:'Доклад: «Не все отзывы надо слушать» — решения, которые усиливают бизнес', speakers:'Роман Нохрин',                       time:'11:30–12:00', when:'22 октября 2026 · 11:30–12:00', reason:'Подход к клиентскому сервису, в котором NPS перестаёт быть «средней температурой по больнице».' },
  tech:      { topic:'Питч-сессия: «Помогает ли AI в работе и сможет ли заменить человека?»', speakers:'Александр Лебедев · Анна Исакова',     time:'10:10–10:50', when:'22 октября 2026 · 10:10–10:50', reason:'Подборка интеграций и готовых дашбордов под типовые процессы среднего бизнеса.' }
};

const state = { answers: Array(10).fill(3), initialized:false };

const gaugeTo10 = v => 1 + (v - 1) * (9 / 4);
function zoneColor(v10){
  if (v10 <= 3) return { c:'red',   label:'критично',         hex:'#e23b53' };
  if (v10 <= 8) return { c:'amber', label:'требует внимания', hex:'#e89c1a' };
  return         { c:'green', label:'всё в порядке',                hex:'#2bb673' };
}

/* =========================================================
   Зоны по 5-балльной шкале бегунков:
     сильные       → оценка 4 или 5
     требуют внимания → оценка 2, 3 или 4
     критичные     → оценка 1
   (4 балла попадают в обе «позитивные» категории — это требование заказчика.)
   ========================================================= */
function classifyByScore(score){
  if (score === 1)                  return ['weak'];        // критичные
  if (score === 5)                  return ['strong'];      // сильные
  if (score === 4)                  return ['strong','mid'];// 4 — и сильная, и требует внимания
  if (score === 2 || score === 3)   return ['mid'];         // требуют внимания
  return [];
}

/* ---------- счётчик компаний ----------
   База: ровно 78. Каждое прохождение диагностики (отправка формы)
   прибавляет +1 к счётчику и сохраняет в localStorage. */
const COUNTER_BASE = 78;
function getCounter(){
  try{
    const stored = parseInt(localStorage.getItem('rnk_counter') || '0', 10);
    if (Number.isFinite(stored) && stored >= COUNTER_BASE) return stored;
  }catch(e){}
  return COUNTER_BASE;
}
function setCounter(n){ try{ localStorage.setItem('rnk_counter', String(n)); }catch(e){} }
function paintCounter(){
  const el = document.getElementById('counterNum');
  if (!el) return;
  const target = getCounter();
  const start = parseInt((el.textContent || '0').replace(/\s+/g,''), 10) || COUNTER_BASE;
  if (start === target){ el.textContent = target.toLocaleString('ru'); return; }
  const dur = 900;
  const t0 = performance.now();
  function tick(t){
    const k = Math.min(1, (t - t0) / dur);
    const v = Math.round(start + (target - start) * k);
    el.textContent = v.toLocaleString('ru');
    if (k < 1) requestAnimationFrame(tick);
    else setCounter(target);
  }
  requestAnimationFrame(tick);
}

/* ---------- построение вопросов ---------- */
function buildQuiz(){
  const list = document.getElementById('qList');
  list.innerHTML = '';
  BLOCKS.forEach((b, i) => {
    const item = document.createElement('div');
    item.className = 'q';
    item.dataset.idx = i;
    item.innerHTML = `
      <div class="q__left">
        <span class="q__num"><span class="num">${i+1}</span>${b.name}</span>
        <h4 class="q__title">${b.name}</h4>
        <p class="q__sub">${b.q}</p>
      </div>
      <div class="q__ctrl">
        <div class="q__head">
          <span>Ваша оценка</span>
          <b class="score" data-score>${state.answers[i]}</b>
        </div>
        <input type="range" min="1" max="5" step="1" value="${state.answers[i]}" data-input>
        <div class="q__scale">
          <span>1 · не работает</span><span>2</span><span>3</span><span>4</span><span>5 · всё готово</span>
        </div>
      </div>`;
    list.appendChild(item);
    const range = item.querySelector('[data-input]');
    const score = item.querySelector('[data-score]');
    range.addEventListener('input', () => {
      const v = parseInt(range.value, 10);
      state.answers[i] = v;
      score.textContent = v;
      paintGauges();
      paintProgress();
      paintKpis();
      paintZones();
      paintRecs();
    });
  });
}

/* ---------- прогресс-бар внизу ---------- */
function buildProgressDots(){
  const wrap = document.getElementById('progDots');
  wrap.innerHTML = '';
  BLOCKS.forEach((b, i) => {
    const d = document.createElement('div');
    d.className = 'prog-dot';
    d.dataset.idx = i;
    d.innerHTML = `<b>${i+1}</b>${b.short}`;
    wrap.appendChild(d);
  });
}
function paintProgress(){
  const total = BLOCKS.length;
  const done = state.answers.filter(v => v !== null && v !== undefined).length;
  const pct = Math.round(done / total * 100);
  document.getElementById('progFill').style.width = pct + '%';
  document.getElementById('progPercent').textContent = pct + '%';
  document.querySelectorAll('.prog-dot').forEach((dot, i) => {
    dot.classList.remove('is-done','is-red','is-amber','is-green');
    const v = state.answers[i];
    if (v === null || v === undefined) return;
    const v10 = gaugeTo10(v);
    dot.classList.add('is-done');
    const z = zoneColor(v10);
    dot.classList.add('is-' + z.c);
  });
  const prog = document.getElementById('progress');
  if (done > 0) prog.classList.add('is-visible');
}

/* ---------- датчики ---------- */
function buildGaugesGrid(){
  const grid = document.getElementById('gauges');
  grid.innerHTML = '';
  BLOCKS.forEach((b, i) => {
    const g = document.createElement('div');
    g.className = 'gauge';
    g.innerHTML = `
      <svg viewBox="0 0 120 80" width="100%" height="80" aria-hidden="true">
        <path d="M15 70 A45 45 0 0 1 33 35"  stroke="#e23b53" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M33 35 A45 45 0 0 1 87 35"  stroke="#e89c1a" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M87 35 A45 45 0 0 1 105 70" stroke="#2bb673" stroke-width="10" fill="none" stroke-linecap="round"/>
        <g class="needle" data-needle="${i}">
          <line x1="60" y1="70" x2="60" y2="30" stroke="#1a1f5c" stroke-width="3" stroke-linecap="round"/>
          <circle cx="60" cy="70" r="5" fill="#1a1f5c"/>
        </g>
      </svg>
      <div class="gauge__name">${b.short}</div>
      <div class="gauge__val" data-gval="${i}">—</div>
      <div class="gauge__zone" data-gzone="${i}">—</div>`;
    grid.appendChild(g);
  });
}
function paintGauges(){
  BLOCKS.forEach((b, i) => {
    const v5  = state.answers[i] ?? 3;
    const v10 = gaugeTo10(v5);
    const z   = zoneColor(v10);
    const needle = document.querySelector(`[data-needle="${i}"]`);
    if (needle) needle.setAttribute('transform', `rotate(${-90 + (v10 - 1) / 9 * 180} 60 70)`);
    const gval  = document.querySelector(`[data-gval="${i}"]`);
    const gzone = document.querySelector(`[data-gzone="${i}"]`);
    if (gval){ gval.textContent = v10.toFixed(1); gval.style.color = z.hex; }
    if (gzone){ gzone.textContent = z.label; gzone.style.color = z.hex; }
  });
}

/* ---------- KPI: средний балл + счётчики по зонам ---------- */
function paintKpis(){
  const vs = state.answers.map(gaugeTo10);
  const avg = vs.reduce((s,v)=>s+v,0) / vs.length;

  /* Считаем по 5-балльной шкале — это и есть «категории пользователя» */
  let strong = 0, mid = 0, weak = 0;
  state.answers.forEach(score => {
    const cats = classifyByScore(score);
    if (cats.includes('strong')) strong++;
    if (cats.includes('mid'))    mid++;
    if (cats.includes('weak'))   weak++;
  });

  document.getElementById('kpiAvg').innerHTML = `${avg.toFixed(1)} <span class="denom">/ 10</span>`;
  document.getElementById('kpiAvgSub').textContent =
    avg >= 8 ? 'отличная управляемость' :
    avg >= 5 ? 'есть точки роста' :
    'нужны системные изменения';
  document.getElementById('kpiStrong').textContent = strong;
  document.getElementById('kpiMid').textContent    = mid;
  document.getElementById('kpiWeak').textContent   = weak;
}

/* ---------- Подробный разбор по зонам (раскрывающиеся карточки) ---------- */
function buildZonesToggles(){
  document.querySelectorAll('.kpi[data-zone]').forEach(kpi => {
    const z = kpi.dataset.zone;
    const zone = document.querySelector(`.zone[data-zone="${z}"]`);
    if (!zone) return;
    const toggle = () => {
      const active = zone.classList.toggle('is-active');
      kpi.classList.toggle('is-active', active);
      const btn = zone.querySelector('.zone__head');
      if (btn) btn.setAttribute('aria-expanded', active ? 'true' : 'false');
      kpi.setAttribute('aria-expanded', active ? 'true' : 'false');
    };
    kpi.addEventListener('click', toggle);
    kpi.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    const head = zone.querySelector('.zone__head');
    if (head) head.addEventListener('click', toggle);
  });
}
function buildZoneItem(b, idx, score, kind){
  /* kind: 'green' | 'amber' | 'red' */
  const tip = RECS[b.tipTopic];
  const tipHTML = tip ? `
    <div class="zone__tip">
      <a href="#dashboard">📅 ${tip.when.split(' · ')[1] || tip.when}</a>
      <a href="#dashboard">🎤 ${tip.speakers.split(' · ')[0]}</a>
      <a href="#dashboard">Подробнее →</a>
    </div>` : '';
  return `
    <li class="zone__item">
      <div class="zone__score ${kind}">${score}</div>
      <div>
        <div class="zone__name">${b.name}</div>
        <div class="zone__why">${b.why}</div>
        ${tipHTML}
      </div>
    </li>`;
}
function paintZones(){
  const listStrong = document.getElementById('zoneListStrong');
  const listMid    = document.getElementById('zoneListMid');
  const listWeak   = document.getElementById('zoneListWeak');
  const cntStrong  = document.getElementById('zoneCountStrong');
  const cntMid     = document.getElementById('zoneCountMid');
  const cntWeak    = document.getElementById('zoneCountWeak');

  const strongHTML = [], midHTML = [], weakHTML = [];

  BLOCKS.forEach((b, idx) => {
    const score = state.answers[idx];
    if (score === null || score === undefined) return;
    const cats = classifyByScore(score);
    if (cats.includes('strong')) strongHTML.push(buildZoneItem(b, idx, score, 'green'));
    if (cats.includes('mid'))    midHTML.push(buildZoneItem(b, idx, score, 'amber'));
    if (cats.includes('weak'))   weakHTML.push(buildZoneItem(b, idx, score, 'red'));
  });

  listStrong.innerHTML = strongHTML.length
    ? strongHTML.join('')
    : '<li class="zone__empty">Пока ни одного блока в сильной зоне — двигайте бегунки и оцените направления, где у вас всё работает.</li>';
  listMid.innerHTML = midHTML.length
    ? midHTML.join('')
    : '<li class="zone__empty">Здесь пусто. Это значит, что либо оценки 2–4 ещё не выставлены, либо все ваши блоки уже либо «сильные», либо «критичные».</li>';
  listWeak.innerHTML = weakHTML.length
    ? weakHTML.join('')
    : '<li class="zone__empty">Критичных блоков нет — отлично! Ни одно направление не оценено в 1 балл.</li>';

  cntStrong.textContent = strongHTML.length;
  cntMid.textContent    = midHTML.length;
  cntWeak.textContent   = weakHTML.length;
}

/* ---------- Рекомендации спикеров (карточки секций) ---------- */
function paintRecs(){
  const wrap = document.getElementById('recs');
  wrap.innerHTML = '';
  BLOCKS.forEach((b, i) => {
    const v5 = state.answers[i];
    const v10 = gaugeTo10(v5);
    if (v10 >= 9) return;
    const rec = RECS[b.id];
    const card = document.createElement('div');
    card.className = 'rec';
    const timeParts = rec.time.split('–');
    card.innerHTML = `
      <div class="rec__time">${timeParts[0]}–<b>${timeParts[1] || ''}</b><small>22 окт 2026</small></div>
      <div class="rec__badge">${b.short.slice(0,2).toUpperCase()}</div>
      <div>
        <p class="rec__title">${rec.topic}</p>
        <p class="rec__sub">Спикеры: ${rec.speakers} · ${rec.reason}</p>
        <span class="rec__when">📅 ${rec.when}</span>
      </div>
      <button class="rec__btn" data-topic="${i}">Записаться</button>`;
    wrap.appendChild(card);
  });
  if (!wrap.children.length){
    wrap.innerHTML = '<div class="rec" style="grid-template-columns:1fr"><div><p class="rec__title">Все блоки в зелёной зоне 🎉</p><p class="rec__sub">Приходите на РНК 2026 за продвинутыми практиками и нетворкингом.</p></div></div>';
  }
}

/* ---------- форма ----------
   Каждая успешная отправка = +1 к счётчику «Прошли диагностику». */
function bindForm(){
  const form = document.getElementById('leadForm');
  const msg  = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.company || !data.email || !data.agree){
      msg.textContent = 'Пожалуйста, заполните все поля и подтвердите согласие.';
      msg.style.color = '#ffb4c2';
      return;
    }
    msg.style.color = '#bcd0ff';
    msg.textContent = 'Готово! Отчёт отправлен на ' + data.email + '. Промокод: DIAG2026 (−15% на билет РНК 2026).';
    /* +1 к счётчику после каждого прошедшего */
    const newCount = getCounter() + 1;
    setCounter(newCount);
    paintCounter();
    form.reset();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  buildQuiz();
  buildProgressDots();
  buildGaugesGrid();
  buildZonesToggles();
  paintGauges();
  paintProgress();
  paintKpis();
  paintZones();
  paintRecs();
  paintCounter();
  bindForm();
});
