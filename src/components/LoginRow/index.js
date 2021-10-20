import './LoginRow.css';
function LoginRow({ title, description, image, order }) {
  return (
    <div className='loginrow'>
      <div className='section-center loginrow__center'>
        <article className='loginrow__left' style={{ order: order }}>
          <h1>{title}</h1>
          <p>{description}</p>
        </article>
        <article className='loginrow__right'>
          {image && <img src={image} alt={title} />}
        </article>
      </div>
    </div>
  );
}

export default LoginRow;
