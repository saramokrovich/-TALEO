# TALEO · BrizanMAG — Telegram Mini App

Статичный мини-апп (HTML/CSS/JS) для GitHub Pages: витрина сайта www.taleo.pro, продукт BrizanMAG и форма заявки дилера. Русский и английский язык (переключатель вверху, по умолчанию берётся язык Telegram).

## 1. Настройка
Откройте `config.js`:
- `telegramUsername` — username менеджера или бота без «@». Если указан, после заполнения формы откроется чат с готовым текстом заявки.
- `email` — почта для заявок (сейчас `info@taleo-water.com`, взята с сайта).

## 2. Публикация на GitHub Pages
1. Создайте репозиторий на GitHub (например, `taleo-miniapp`), загрузите в него все файлы из этой папки (Add file → Upload files).
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, папка `/ (root)` → Save.
3. Через 1–2 минуты сайт будет доступен по адресу `https://<ваш-логин>.github.io/taleo-miniapp/`.

## 3. Подключение к Telegram
1. Напишите @BotFather → `/newbot` (если бота ещё нет).
2. `/newapp` → выберите бота → название, описание, картинку 640×360 → URL из шага 2 → короткое имя, например `taleo`.
   Ссылка на мини-апп: `https://t.me/<бот>/taleo`. Сразу на форму дилера: `https://t.me/<бот>/taleo?startapp=dealer`.
3. Кнопка меню бота: @BotFather → `/mybots` → бот → Bot Settings → Menu Button → URL из шага 2.

## Файлы
- `index.html` — разметка, `styles.css` — дизайн, `app.js` — логика и тексты (RU/EN), `config.js` — настройки, `assets/` — логотип TALEO.
