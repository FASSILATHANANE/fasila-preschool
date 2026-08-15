export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6">
          معرض الصور
        </h1>

        <p className="text-center text-gray-600 text-xl mb-16">
          لحظات جميلة من الأنشطة اليومية داخل روضة فسيلة الأوراس.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="/images/activity1.jpg"
            alt="نشاط 1"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/activity2.jpg"
            alt="نشاط 2"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/activity3.jpg"
            alt="نشاط 3"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/activity4.jpg"
            alt="نشاط 4"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/activity5.jpg"
            alt="نشاط 5"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/activity6.jpg"
            alt="نشاط 6"
            className="rounded-3xl shadow-lg h-72 w-full object-cover hover:scale-105 transition duration-300"
          />

        </div>

      </div>

    </main>
  );
}
