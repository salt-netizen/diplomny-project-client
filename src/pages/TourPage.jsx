import { useParams } from 'react-router-dom';

export default function TourPage() {
  const { id } = useParams();

  return (
    <section className="container">
      <h1>Сторінка туру</h1>
      <p>ID: {id}</p>
      <p>
        Тут будуть фото, опис, програма туру, умови, маршрут на карті, відгуки і форма бронювання
      </p>
    </section>
  );
}
