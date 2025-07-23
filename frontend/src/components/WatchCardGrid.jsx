import WatchCard from "./WatchCard";

const watches = [
  {
    id: "1",
    name: "Vintage Seiko 6139",
    brand: "Seiko",
    description: "Classic 1970s automatic chronograph.",
    price: 250.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "Rolex Submariner",
    brand: "Rolex",
    description: "Iconic dive watch from Rolex.",
    price: 9500.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: false,
  },
  {
    id: "3",
    name: "Grand Seiko SBGA413",
    brand: "Grand Seiko",
    description: "Iconic vintage GS.",
    price: 1500.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: false,
  },
  {
    id: "4",
    name: "Vintage Seiko 6139",
    brand: "Seiko",
    description: "Classic 1970s automatic chronograph.",
    price: 250.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: true,
  },
  {
    id: "5",
    name: "Rolex Submariner",
    brand: "Rolex",
    description: "Iconic dive watch from Rolex.",
    price: 9500.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: false,
  },
  {
    id: "6",
    name: "Grand Seiko SBGA413",
    brand: "Grand Seiko",
    description: "Iconic vintage GS.",
    price: 1500.0,
    imageUrl: "https://live.staticflickr.com/306/19827719123_82c93e6aee_b.jpg",
    inStock: false,
  },
];

export default function WatchCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-36 py-6 ">
      {watches.map((watch) => (
        <WatchCard key={watch.id} watch={watch} />
      ))}
    </div>
  );
}
