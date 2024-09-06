function Tilepic({ title, cover, id }) {
  return (
    <>
      {/* <Link to={"/logement/${item.id}"}> */}
      <div className="tilepic" id={id}>
        <img src={cover} alt={title} className="img-tile" />
        <div className="title-content">
          <h3>{title}</h3>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}

export default Tilepic;
