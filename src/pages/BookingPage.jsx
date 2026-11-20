import { useParams } from 'react-router-dom';

export default function BookingPage() {
  const { id } = useParams();

  return (
    <section className="container">
      <h1>Бронювання та оплата</h1>
      <p>ID: {id}</p>
      <p>Тут будуть дані гостя, оплата і результат</p>
    </section>
  );
}
