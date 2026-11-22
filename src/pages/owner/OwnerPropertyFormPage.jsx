import { useParams } from 'react-router-dom';

export default function OwnerPropertyFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <section className="container">
      <h1>{isEdit ? 'Редагування об’єкта' : 'Створення об’єкта'}</h1>
      <p>
        Тут буде форма житла: основна інформація, зручності, номери, правила, фотографії та календар
        доступності.
      </p>
    </section>
  );
}