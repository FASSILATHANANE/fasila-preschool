export default function Programs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6">
          برامجنا وأنشطتنا
        </h1>

        <p className="text-center text-gray-600 text-xl max-w-4xl mx-auto leading-9 mb-16">
          نوفر برامج تربوية متكاملة تساعد الطفل على التعلم، الإبداع،
          الاستقلالية، وتنمية مهاراته في بيئة ممتعة وآمنة.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">🌱</div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              منهج مونتيسوري
            </h2>
            <p className="text-gray-700 leading-8">
              أنشطة عملية تساعد الطفل على تنمية الاستقلالية والتركيز والاعتماد على النفس.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">🎨</div>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              الأنشطة الإبداعية
            </h2>
            <p className="text-gray-700 leading-8">
              الرسم، الأشغال اليدوية، التلوين، المسرح، والألعاب التعليمية.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">🌍</div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              اللغات
            </h2>
            <p className="text-gray-700 leading-8">
              تعلم مبسط للغة العربية، الفرنسية والإنجليزية بطريقة ممتعة.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">🕌</div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              التربية الإسلامية
            </h2>
            <p className="text-gray-700 leading-8">
              تحفيظ قصار السور، الأذكار، والآداب الإسلامية المناسبة لعمر الطفل.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">⚽</div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              الأنشطة الرياضية
            </h2>
            <p className="text-gray-700 leading-8">
              ألعاب حركية وتمارين تساعد على تنمية التوازن والتنسيق واللياقة.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-6xl mb-5">🚌</div>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              الخرجات التربوية
            </h2>
            <p className="text-gray-700 leading-8">
              تنظيم رحلات وزيارات تعليمية وترفيهية لإثراء خبرات الأطفال.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
