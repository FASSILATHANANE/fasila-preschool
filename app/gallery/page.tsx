export default function Gallery() {
  const images = Array.from({ length: 43 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6">
          معرض الصور
        </h1>

        <p className="text-center text-gray-600 text-xl mb-16">
          لحظات جميلة من الأنشطة اليومية داخل روضة فسيلة الأوراس.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((number) => (
            <img
              key={number}
              src={`/images/${number}.jpg`}
              alt={`صورة من أنشطة روضة فسيلة الأوراس ${number}`}
              className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
            />
          ))}
        </div>

      </div>
    </main>
  );
}