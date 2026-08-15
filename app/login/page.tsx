export default function Login() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center">

        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="روضة فسيلة الأوراس"
          className="w-24 h-24 mx-auto rounded-full object-cover mb-5"
        />

        <h1 className="text-3xl font-bold text-green-700 mb-2">
          روضة فسيلة الأوراس
        </h1>

        <p className="text-gray-600 mb-8">
          الدخول إلى لوحة الإدارة
        </p>


        <form className="space-y-5 text-right">

          <div>
            <label className="block font-bold text-gray-700 mb-2">
              اسم المستخدم
            </label>

            <input
              type="text"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="أدخل اسم المستخدم"
            />
          </div>


          <div>
            <label className="block font-bold text-gray-700 mb-2">
              كلمة المرور
            </label>

            <input
              type="password"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="أدخل كلمة المرور"
            />
          </div>


          <div>
            <label className="block font-bold text-gray-700 mb-2">
              نوع الحساب
            </label>

            <select className="w-full border rounded-xl px-4 py-3">
              <option>المديرة</option>
              <option>المسيرة</option>
              <option>الإدارة المالية</option>
            </select>
          </div>


          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition"
          >
            دخول 🔒
          </button>

        </form>


      </div>

    </main>
  );
}