export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex items-center justify-center gap-4 mb-8">

          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-20 h-20 object-contain"
          />

          <h1 className="text-5xl font-extrabold text-green-800">
            تواصل معنا
          </h1>

        </div>

        <p className="text-center text-gray-900 text-lg mb-12 font-medium">
          يسعدنا استقبال استفساراتكم والإجابة عن جميع أسئلتكم.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-50 rounded-2xl p-6 shadow">

            <h2 className="text-2xl font-bold text-green-800 mb-6">
              📍 معلومات الروضة
            </h2>

            <p className="text-gray-900 mb-4">
              <strong>الاسم:</strong> روضة فسيلة الأوراس
            </p>

            <p className="text-gray-900 mb-4">
              <strong>العنوان:</strong> حي بن بولعيد مقابل وحدة العلاج - خنشلة
            </p>

            <p className="text-gray-900 mb-4">
              <strong>الهاتف:</strong> 0698431464
            </p>

            <p className="text-gray-900 mb-4">
              <strong>أوقات العمل:</strong> 07:30 إلى 16:30
            </p>

            <a
              href="https://www.facebook.com/share/1HbMZQSWRJ/?mibextid=wwXIfr"
              target="_blank"
              className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
            >
              🌐 زيارة صفحة الفيسبوك
            </a>

          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow">

            <h2 className="text-2xl font-bold text-green-800 mb-6">
              ✉️ أرسل رسالة
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />

              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />

              <textarea
                rows={6}
                placeholder="اكتب رسالتك هنا..."
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white text-xl font-bold py-4 rounded-xl"
              >
                إرسال الرسالة
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}
