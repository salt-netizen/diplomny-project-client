import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="container">
      <h1>Сторінку не знайдено</h1>
      <p>
        Такої сторінки немає. <Link to="/">Повернутися на головну</Link>
      </p>
    </section>
  );
}
