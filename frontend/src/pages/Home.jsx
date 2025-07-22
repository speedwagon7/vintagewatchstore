import watchImg from '../assets/vintage-watches.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-orange-200">
      <div className="flex flex-col items-center w-full">
        <img src={watchImg} alt="Vintage Watches" />
        <h1 className="text-3xl font-bold p-25 font-serif  text-emerald-900">Ikigai Vintage Watches</h1>
        <p className="mt-2 text-shadow-purple-50 border-black p-2 font-serif bg-amber-900" >Explore Japanese and Swiss timepieces</p>
      </div>
    </div>
  );
}