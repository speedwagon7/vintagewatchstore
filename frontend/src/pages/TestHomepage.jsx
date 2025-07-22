
const products = [
  { name: "King Seiko 44-9890", price: "$1,260" },
  { name: "Omega Constellation", price: "$1,800" },
  { name: "Grand Seiko 4520", price: "$2,100" },
  { name: "Tissot Seastar", price: "$750" },
];

const collections = [
  {
    title: "Japanese Icons",
    subtitle: "Seiko, Citizen, Orient",
  },
  {
    title: "Swiss Legends",
    subtitle: "Omega, Tissot, Longines",
  },
  {
    title: "Curated Straps",
    subtitle: "Horween leather, NATO, steel bracelets",
  },
];

export default function VintageWatchHomePage() {
  return (
    <div className="bg-[#FAF4EF] text-[#2D1E1E] font-serif">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <img
          src="/hero-watch.jpg"
          alt="Hero Watch"
          className="mx-auto w-full max-w-4xl rounded-lg shadow-md"
        />
        <h1 className="text-4xl font-bold mt-8">Crafted in Time. Preserved with Purpose.</h1>
        <p className="mt-4 text-lg">
          Japanese and Swiss vintage timepieces from the golden age.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#6E3B3B] text-white px-6 py-2 rounded">Shop the Collection</button>
          <button className="border border-[#6E3B3B] px-6 py-2 rounded text-[#6E3B3B]">Learn More</button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {collections.map((col) => (
            <div key={col.title} className="bg-white rounded-lg shadow p-4">
              <div className="h-40 bg-gray-200 mb-4 rounded" />
              <h3 className="text-xl font-bold">{col.title}</h3>
              <p className="text-sm text-gray-700">{col.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded shadow flex flex-col items-center"
            >
              <div className="h-40 w-full bg-gray-200 rounded mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm mb-2">{product.price}</p>
              <button className="bg-[#6E3B3B] text-white px-4 py-1 rounded text-sm">View Watch</button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-[#F5EEE6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="h-64 bg-gray-200 rounded" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              We believe in timeless craftsmanship. Every watch we offer has a story,
              hand-selected and serviced for a second lifetime.
            </p>
            <button className="bg-[#6E3B3B] text-white px-6 py-2 rounded">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
