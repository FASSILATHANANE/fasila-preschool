"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpdatePassword(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (error) {
      setError("تعذر تغيير كلمة المرور. حاولي فتح رابط الاسترجاع من جديد.");
      console.error(error);
      return;
    }

    setMessage("✅ تم تغيير كلمة المرور بنجاح. يمكنك الآن الدخول إلى الإدارة.");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />

          <h1 className="text-3xl font-extrabold text-green-800">
            تغيير كلمة المرور
          </h1>

          <p className="text-gray-600 mt-2">
            حساب إدارة روضة فسيلة الأوراس
          </p>

        </div>

        {message && (
          <div className="mb-5 p-4 rounded-xl bg-green-100 text-green-700 text-center font-bold">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-5 p-4 rounded-xl bg-red-100 text-red-700 text-center font-bold">
            {error}
          </div>
        )}

        <form
          onSubmit={handleUpdatePassword}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-bold text-gray-900">
              كلمة المرور الجديدة
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور الجديدة"
              required
              className="w-full border border-gray-400 rounded-xl p-4 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-900">
              تأكيد كلمة المرور
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="أعد كتابة كلمة المرور"
              required
              className="w-full border border-gray-400 rounded-xl p-4 text-black"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white text-lg font-bold py-4 rounded-xl"
          >
            {loading
              ? "⏳ جارٍ تغيير كلمة المرور..."
              : "🔐 حفظ كلمة المرور الجديدة"}
          </button>

        </form>

      </div>
    </main>
  );
}