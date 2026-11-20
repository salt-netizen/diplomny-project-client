# diplomny-project-client

Клієнтська частина проєкту "клон Booking.com"

Команда frontend: Дем'яненко Олексій, Василенко Максим

## Технології

- React + Vite, JavaScript
- React Router (маршрутизація)
- Axios (запити до API)
- React Hook Form (форми)
- React Datepicker, date-fns (дати)
- Swiper (галерея фото)
- Leaflet + OpenStreetMap (карта)
- @microsoft/signalr (чат і сповіщення)
- Recharts (графіки статистики в адмін-панелі)
- CSS Modules (стилі)
- ESLint, Prettier

## Запуск

Потрібен Node.js 20 або новіший

```
npm install
cp .env.example .env
npm run dev
```

Сайт відкриється на http://localhost:5173

У файлі `.env` вказати адресу сервера ASP.NET Core (`VITE_BACKEND_URL`). Усі запити на `/api` перенаправляються на цей сервер

## Зв'язок із сервером

Клієнт звертається до API серверної частини (ASP.NET Core). Документація API у Swagger

## Команди

- `npm run dev` - запуск для розробки
- `npm run build` - збірка
- `npm run lint` - перевірка коду
- `npm run format` - форматування коду

## Структура

```
src/
  api/          підключення до API (axios)
  context/      авторизація (AuthContext)
  routes/       захищені маршрути
  components/   спільні компоненти (шапка, підвал)
  pages/        сторінки
  styles/       кольори, шрифти, загальні стилі
```

## Сторінки

| Адреса | Сторінка | Доступ |
| --- | --- | --- |
| / | Головна | усі |
| /search | Результати пошуку | усі |
| /property/:id | Сторінка житла | усі |
| /tour/:id | Сторінка туру | усі |
| /login | Вхід | усі |
| /register | Реєстрація | усі |
| /forgot-password | Відновлення пароля | усі |
| /reset-password | Новий пароль | усі |
| /booking/:type/:id | Бронювання та оплата | після входу |
| /account | Особистий кабінет | після входу |
