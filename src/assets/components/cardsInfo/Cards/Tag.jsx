function Tag({ name, background }) {
  return (
    <>
      <div
        style={{ background: background }}
        className={`tag text-white p-1 px-2 rounded-full`}
      >
        <p style={{ fontSize: "xx-small" }}>{name}</p>
      </div>
    </>
  );
}

export default Tag;
