import { useParams } from 'react-router-dom';

export default function PropertyPage() {
  const { id } = useParams();

  return (
    <section className="container">
      <h1>Сторінка житла</h1>
      <p>ID: {id}</p>
      <p>Тут будуть фото, опис, зручності, номери, правила, карта, відгуки і форма бронювання</p>
    </section>
  );
}
