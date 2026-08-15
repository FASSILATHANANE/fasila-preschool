export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6">
          عن روضة فسيلة الأوراس
        </h1>

        <p className="text-center text-gray-600 text-xl leading-9 max-w-4xl mx-auto mb-16">
          روضة فسيلة الأوراس مؤسسة تربوية خاصة تستقبل الأطفال من عمر
          <span className="font-bold text-green-700"> 6 أشهر إلى 6 سنوات </span>
          في بيئة آمنة وداعمة، تعتمد على منهج مونتيسوري لتنمية شخصية الطفل
          وتعزيز الاستقلالية والإبداع والتعلم من خلال التجربة.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">🎯</div>

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              رسالتنا
            </h2>

            <p className="text-gray-700 leading-8">
              توفير بيئة تربوية آمنة تساعد الطفل على النمو المتوازن
              وتنمية مهاراته الفكرية والاجتماعية.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">🌱</div>

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              رؤيتنا
            </h2>

            <p className="text-gray-700 leading-8">
              إعداد جيل واثق من نفسه، مستقل، محب للتعلم وقادر على الإبداع.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition">
            <div className="text-6xl mb-5">❤️</div>

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              قيمنا
            </h2>

            <p className="text-gray-700 leading-8">
              الاحترام، الأمان، التعاون، المسؤولية، والاهتمام بكل طفل
              باعتباره شخصية مميزة.
            </p>
          </div>

        </div>

        <div className="bg-green-700 rounded-3xl text-white p-10 mt-16 text-center">

          <h2 className="text-4xl font-bold mb-6">
            لماذا يختار الأولياء روضة فسيلة الأوراس؟
          </h2>

          <p className="text-xl leading-9 max-w-4xl mx-auto">
            لأننا نوفر بيئة تعليمية حديثة مستوحاة من منهج مونتيسوري،
            مع فريق تربوي يهتم بكل طفل، وأنشطة متنوعة تساعده على
            التعلم بالاستكشاف وبناء شخصيته وثقته بنفسه.
          </p>

        </div>

      </div>

    </main>
  );
}
