export default function WatchCard({ watch }) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={watch.imageUrl} alt={watch.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{watch.name}</h2>
        <p>{watch.description}</p>
        <p className="text-lg font-bold">{watch.price}</p>
        <p className="font-bold">£{watch.price.toFixed(2)}</p>
        {watch.inStock ? (
          <button className="btn btn-primary btn-sm">Add to Cart</button>
        ) : (
          <button className="btn btn-disabled btn-sm">Out of Stock</button>
        )}
      </div>
    </div>
  );
}
