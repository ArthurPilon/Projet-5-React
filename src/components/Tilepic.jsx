function Tilepic({ title, cover, id }) {
  return (
    <>
      <div className="tilepic" key={id}>
        <img src={cover} alt={title} className="img-tile" />
        <div className="title-content">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}

export default Tilepic;
