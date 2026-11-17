
export default function Card({ name, price, image, alt }) {

  return (
    <>
      <img src={image} alt={alt} />
      <div className="d-flex align-items-center justify-content-between px-2">
        <div>
          <h6 className="my-2">{name}</h6>
          <p>₹{price}</p>
        </div>
        <div className="mt-3">
          <button className="btn-secondary">Add</button>
        </div>
      </div>
    </>
  )
}
