"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function JobsPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await supabase
      .from("job_applications")
      .insert([
        {
          first_name: form.first_name,
          last_name: form.last_name,
          phone: form.phone,
          email: form.email,
          position: form.position,
          experience: form.experience,
        },
      ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setError("حدث خطأ أثناء إرسال الطلب. حاولي مرة أخرى.");
      return;
    }

    setSuccess(
      "تم إرسال طلب التوظيف بنجاح ✅ سنتواصل معك عند دراسة طلبك."
    );

    setForm({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      position: "",
      experience: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* Header */}
      <header className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <img
              src="/logo.jpg"
              alt="روضة فسيلة الأوراس"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-lg md:text-2xl font-extrabold text-green-700">
                روضة فسيلة الأوراس
              </h1>

              <p className="hidden md:block text-xs text-gray-500">
                نرافق طفلكم نحو مستقبل أجمل 🌱
              </p>
            </div>

          </a>

          <a
            href="/"
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-bold transition"
          >
            🏠 الرئيسية
          </a>

        </div>

      </header>


      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-green-50 via-white to-yellow-50">

        <div className="max-w-4xl mx-auto">

          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-5">
            💼 انضموا إلى فريقنا
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800">
            فرص العمل
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-9">
            هل تحبين العمل مع الأطفال والمساهمة في بناء جيل مبدع وواثق؟
            يسعدنا استقبال طلبات التوظيف والانضمام إلى فريق روضة فسيلة الأوراس.
          </p>

        </div>

      </section>


      {/* Jobs */}
      <section className="py-20 px-6 md:px-8">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-12">
            المناصب المتاحة
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Job 1 */}
            <div className="bg-white border border-green-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-4xl">
                  👩‍🏫
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-green-700">
                    مربية أطفال
                  </h3>

                  <p className="text-gray-500">
                    دوام كامل
                  </p>
                </div>

              </div>

              <h4 className="font-bold text-gray-800 mb-2">
                المهام:
              </h4>

              <p className="text-gray-600 leading-8 mb-5">
                المساهمة في رعاية الأطفال ومرافقتهم في الأنشطة التربوية
                والتعليمية واليومية داخل الروضة.
              </p>

              <h4 className="font-bold text-gray-800 mb-2">
                المتطلبات:
              </h4>

              <ul className="text-gray-600 leading-8 mb-7 list-disc pr-5">
                <li>القدرة على التعامل مع الأطفال.</li>
                <li>الجدية والانضباط.</li>
                <li>القدرة على العمل ضمن فريق.</li>
                <li>يفضل وجود خبرة في مجال الطفولة.</li>
              </ul>

              <a
                href="#apply"
                className="block text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold transition"
              >
                تقديم الطلب
              </a>

            </div>


            {/* Job 2 */}
            <div className="bg-white border border-yellow-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-4xl">
                  👶
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-yellow-600">
                    مساعدة مربية
                  </h3>

                  <p className="text-gray-500">
                    دوام كامل
                  </p>
                </div>

              </div>

              <h4 className="font-bold text-gray-800 mb-2">
                المهام:
              </h4>

              <p className="text-gray-600 leading-8 mb-5">
                مساعدة المربية في رعاية الأطفال وتنظيم الأنشطة والمحافظة
                على نظافة وترتيب فضاء القسم.
              </p>

              <h4 className="font-bold text-gray-800 mb-2">
                المتطلبات:
              </h4>

              <ul className="text-gray-600 leading-8 mb-7 list-disc pr-5">
                <li>حب الأطفال والصبر في التعامل معهم.</li>
                <li>الجدية والانضباط.</li>
                <li>القدرة على العمل الجماعي.</li>
                <li>الالتزام بأوقات العمل.</li>
              </ul>

              <a
                href="#apply"
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold transition"
              >
                تقديم الطلب
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Application Form */}
      <section
        id="apply"
        className="py-20 px-6 md:px-8 bg-green-50"
      >

        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10">

            <span className="inline-block bg-white text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-4">
              📝 التقديم
            </span>

            <h2 className="text-4xl font-extrabold text-green-800">
              قدمي طلب العمل
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              املئي المعلومات التالية وسنتواصل معك عند دراسة طلبك.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-6 md:p-10 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  الاسم
                </label>

                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  placeholder="الاسم"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  اللقب
                </label>

                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  placeholder="اللقب"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

            </div>


            <div>
              <label className="block font-bold text-gray-700 mb-2">
                رقم الهاتف
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="05 / 06 / 07 ..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />
            </div>


            <div>
              <label className="block font-bold text-gray-700 mb-2">
                البريد الإلكتروني
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />
            </div>


            <div>
              <label className="block font-bold text-gray-700 mb-2">
                المنصب المطلوب
              </label>

              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-green-600"
              >
                <option value="">
                  اختاري المنصب
                </option>

                <option value="مربية أطفال">
                  مربية أطفال
                </option>

                <option value="مساعدة مربية">
                  مساعدة مربية
                </option>
              </select>
            </div>


            <div>
              <label className="block font-bold text-gray-700 mb-2">
                الخبرة المهنية
              </label>

              <textarea
                name="experience"
                value={form.experience}
                onChange={handleChange}
                rows={4}
                placeholder="اذكري باختصار خبرتك السابقة..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 resize-none"
              />
            </div>


            {/* CV - نربطوه لاحقًا */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                السيرة الذاتية CV
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
              />

              <p className="text-sm text-gray-500 mt-2">
                PDF أو Word — رفع الملف سنربطوه في الخطوة القادمة.
              </p>
            </div>


            {/* Success */}
            {success && (
              <div className="bg-green-100 border border-green-200 text-green-700 rounded-xl p-4 text-center font-bold">
                {success}
              </div>
            )}


            {/* Error */}
            {error && (
              <div className="bg-red-100 border border-red-200 text-red-700 rounded-xl p-4 text-center font-bold">
                {error}
              </div>
            )}


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-md"
            >
              {loading ? "جاري إرسال الطلب..." : "إرسال طلب التوظيف"}
            </button>

          </form>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-green-800 text-white">

        <div className="max-w-7xl mx-auto px-6 py-8 text-center">

          <p className="text-green-100">
            © 2026 جميع الحقوق محفوظة | روضة فسيلة الأوراس
          </p>

        </div>

      </footer>

    </main>
  );
}
