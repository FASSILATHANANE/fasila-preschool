"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Child = {
  id: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  parent_name: string;
  phone: string;
  email: string | null;
  created_at: string;
};

type ChildDocument = {
  birth_certificate: string | null;
  vaccination_book: string | null;
};

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [loginError, setLoginError] = useState("");

  const [search, setSearch] = useState("");

  const [selectedChild, setSelectedChild] =
    useState<Child | null>(null);

  const [documents, setDocuments] =
    useState<ChildDocument | null>(null);

  const [documentsLoading, setDocumentsLoading] =
    useState(false);

  // =========================
  // تسجيل الدخول
  // =========================

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoginError("");
    setMessage("");
    setLoading(true);

    const result =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (result.error) {
      console.error(result.error);

      setLoginError(
        "البريد الإلكتروني أو كلمة المرور غير صحيحة."
      );

      return;
    }

    setLoggedIn(true);

    await loadChildren();
  }

  // =========================
  // تحميل الأطفال
  // =========================

  async function loadChildren() {
    setLoading(true);
    setMessage("");

    const result = await supabase
      .from("children")
      .select(
        "id, first_name, last_name, birth_date, gender, parent_name, phone, email, created_at"
      )
      .order("created_at", {
        ascending: false,
      });

    setLoading(false);

    if (result.error) {
      console.error(result.error);

      setMessage(
        "تعذر تحميل طلبات التسجيل."
      );

      return;
    }

    setChildren(result.data || []);
  }

  // =========================
  // فتح تفاصيل الطفل
  // =========================

  async function openChild(child: Child) {
    setSelectedChild(child);
    setDocuments(null);
    setDocumentsLoading(true);
    setMessage("");

    console.log("Child ID:", child.id);

    const result = await supabase
      .from("child_documents")
      .select(
        "birth_certificate, vaccination_book"
      )
      .eq("child_id", child.id)
      .limit(1);

    console.log(
      "Documents:",
      result.data
    );

    console.log(
      "Document error:",
      result.error
    );

    setDocumentsLoading(false);

    if (result.error) {
      console.error(result.error);

      setMessage(
        "تعذر تحميل وثائق الطفل."
      );

      return;
    }

    setDocuments(
      result.data?.[0] || null
    );
  }

  // =========================
  // فتح الوثيقة
  // =========================

  async function openDocument(
    path: string | null
  ) {
    if (!path) {
      setMessage(
        "لا يوجد مسار للوثيقة."
      );

      return;
    }

    console.log(
      "Opening document:",
      path
    );

    const {
      data,
      error,
    } = await supabase.storage
      .from("child-documents")
      .createSignedUrl(
        path,
        60 * 10
      );

    console.log(
      "Signed URL:",
      data?.signedUrl
    );

    console.log(
      "Storage error:",
      error
    );

    if (
      error ||
      !data?.signedUrl
    ) {
      console.error(
        "Storage error:",
        error
      );

      setMessage(
        "تعذر فتح الوثيقة. الملف غير موجود في المسار المسجل."
      );

      return;
    }

    window.open(
      data.signedUrl,
      "_blank"
    );
  }

  // =========================
  // تسجيل الخروج
  // =========================

  async function handleLogout() {
    await supabase.auth.signOut();

    setLoggedIn(false);
    setChildren([]);
    setEmail("");
    setPassword("");
    setSearch("");
    setSelectedChild(null);
    setDocuments(null);
    setMessage("");
    setLoginError("");
  }

  // =========================
  // البحث
  // =========================

  const filteredChildren =
    children.filter((child) => {
      const text =
        search.toLowerCase();

      return (
        child.first_name
          .toLowerCase()
          .includes(text) ||
        child.last_name
          .toLowerCase()
          .includes(text) ||
        child.parent_name
          .toLowerCase()
          .includes(text) ||
        child.phone.includes(text)
      );
    });

  // =========================
  // صفحة الدخول
  // =========================

  if (!loggedIn) {
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
              إدارة الروضة
            </h1>

            <p className="text-gray-600 mt-2">
              لوحة استقبال طلبات التسجيل
            </p>

          </div>

          {loginError && (
            <div className="mb-5 p-4 rounded-xl bg-red-100 text-red-700 text-center font-bold">
              {loginError}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                البريد الإلكتروني
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="البريد الإلكتروني للإدارة"
                required
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-500"
              />

            </div>

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                كلمة المرور
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="كلمة المرور"
                required
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white text-lg font-bold py-4 rounded-xl transition"
            >
              {loading
                ? "⏳ جارٍ الدخول..."
                : "🔐 دخول الإدارة"}
            </button>

          </form>

        </div>
      </main>
    );
  }

  // =========================
  // لوحة الإدارة
  // =========================

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 md:p-10"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="bg-white rounded-3xl shadow-xl p-5 md:p-6 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-center gap-4">

              <img
                src="/logo.jpg"
                alt="روضة فسيلة الأوراس"
                className="w-16 h-16 object-contain"
              />

              <div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-green-800">
                  لوحة استقبال طلبات التسجيل
                </h1>

                <p className="text-gray-600 mt-1">
                  روضة فسيلة الأوراس
                </p>

              </div>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl transition"
            >
              تسجيل الخروج
            </button>

          </div>

        </div>

        {/* STATISTICS */}

        <div className="grid md:grid-cols-2 gap-5 mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <p className="text-gray-500 font-bold">
              إجمالي الطلبات
            </p>

            <p className="text-4xl font-extrabold text-green-700 mt-2">
              {children.length}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">

            <div>

              <p className="text-gray-500 font-bold">
                تحديث الطلبات
              </p>

              <p className="text-sm text-gray-500 mt-2">
                اضغطي لتحديث القائمة
              </p>

            </div>

            <button
              onClick={loadChildren}
              disabled={loading}
              className="bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold px-5 py-3 rounded-xl"
            >
              {loading
                ? "⏳ تحميل..."
                : "🔄 تحديث"}
            </button>

          </div>

        </div>

        {/* MESSAGE */}

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-700 font-bold text-center">
            {message}
          </div>
        )}

        {/* TABLE */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="p-5 md:p-6 border-b">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <h2 className="text-2xl font-bold text-green-800">
                📋 طلبات التسجيل
              </h2>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="🔎 ابحثي عن الطفل أو الولي أو الهاتف..."
                className="w-full md:w-96 border border-gray-300 rounded-xl p-3 text-black outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

          </div>

          {children.length === 0 &&
            !loading && (
              <div className="p-10 text-center text-gray-500">
                لا توجد طلبات تسجيل.
              </div>
            )}

          {children.length > 0 &&
            filteredChildren.length === 0 && (
              <div className="p-10 text-center text-gray-500">
                لا توجد نتيجة مطابقة للبحث.
              </div>
            )}

          {filteredChildren.length > 0 && (

            <div className="overflow-x-auto">

              <table className="w-full text-right">

                <thead className="bg-green-50">

                  <tr>

                    <th className="p-4 font-bold text-green-900">
                      الطفل
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      تاريخ الميلاد
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      الجنس
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      الولي
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      الهاتف
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      تاريخ الطلب
                    </th>

                    <th className="p-4 font-bold text-green-900">
                      التفاصيل
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredChildren.map(
                    (child) => (

                      <tr
                        key={child.id}
                        className="border-b hover:bg-green-50 transition"
                      >

                        <td className="p-4 font-bold text-gray-900">
                          {child.first_name}{" "}
                          {child.last_name}
                        </td>

                        <td className="p-4 text-gray-700">
                          {child.birth_date}
                        </td>

                        <td className="p-4 text-gray-700">
                          {child.gender}
                        </td>

                        <td className="p-4 text-gray-700">
                          {child.parent_name}
                        </td>

                        <td
                          className="p-4 text-gray-700"
                          dir="ltr"
                        >
                          {child.phone}
                        </td>

                        <td className="p-4 text-gray-700">
                          {new Date(
                            child.created_at
                          ).toLocaleDateString(
                            "ar-DZ"
                          )}
                        </td>

                        <td className="p-4">

                          <button
                            onClick={() =>
                              openChild(child)
                            }
                            className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 rounded-xl transition whitespace-nowrap"
                          >
                            👁️ عرض
                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

      {/* DETAILS MODAL */}

      {selectedChild && (

        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedChild(null);
            setDocuments(null);
          }}
        >

          <div
            className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* TITLE */}

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-extrabold text-green-800">
                  تفاصيل طلب التسجيل
                </h2>

                <p className="text-gray-500 mt-1">
                  معلومات الطفل وولي الأمر والوثائق
                </p>

              </div>

              <button
                onClick={() => {
                  setSelectedChild(null);
                  setDocuments(null);
                }}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xl"
              >
                ×
              </button>

            </div>

            {/* CHILD INFO */}

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  اسم الطفل
                </p>

                <p className="text-lg font-extrabold text-gray-900 mt-1">
                  {selectedChild.first_name}{" "}
                  {selectedChild.last_name}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  تاريخ الميلاد
                </p>

                <p className="text-lg font-bold text-gray-900 mt-1">
                  {selectedChild.birth_date}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  الجنس
                </p>

                <p className="text-lg font-bold text-gray-900 mt-1">
                  {selectedChild.gender}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  اسم الولي
                </p>

                <p className="text-lg font-bold text-gray-900 mt-1">
                  {selectedChild.parent_name}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  رقم الهاتف
                </p>

                <p
                  dir="ltr"
                  className="text-lg font-bold text-gray-900 mt-1 text-right"
                >
                  {selectedChild.phone}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4">

                <p className="text-gray-500 text-sm font-bold">
                  البريد الإلكتروني
                </p>

                <p
                  dir="ltr"
                  className="text-lg font-bold text-gray-900 mt-1 text-right break-all"
                >
                  {selectedChild.email ||
                    "غير مسجل"}
                </p>

              </div>

            </div>

            {/* DOCUMENTS */}

            <div className="mt-8">

              <h3 className="text-xl font-extrabold text-green-800 mb-4">
                📁 وثائق الطفل
              </h3>

              {documentsLoading && (

                <div className="bg-gray-50 rounded-2xl p-6 text-center text-gray-600 font-bold">
                  ⏳ جارٍ تحميل الوثائق...
                </div>

              )}

              {!documentsLoading &&
                !documents && (

                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-center text-yellow-800 font-bold">
                    ⚠️ لا توجد وثائق مسجلة لهذا الطفل.
                  </div>

                )}

              {!documentsLoading &&
                documents && (

                  <div className="grid md:grid-cols-2 gap-4">

                    {/* BIRTH CERTIFICATE */}

                    <div className="border border-gray-200 rounded-2xl p-5">

                      <div className="text-4xl mb-3">
                        📄
                      </div>

                      <h4 className="font-extrabold text-gray-900">
                        شهادة الميلاد
                      </h4>

                      {documents.birth_certificate ? (

                        <button
                          onClick={() =>
                            openDocument(
                              documents.birth_certificate
                            )
                          }
                          className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-xl"
                        >
                          👁️ فتح شهادة الميلاد
                        </button>

                      ) : (

                        <p className="text-red-600 font-bold mt-3">
                          لم يتم رفع الوثيقة
                        </p>

                      )}

                    </div>

                    {/* VACCINATION BOOK */}

                    <div className="border border-gray-200 rounded-2xl p-5">

                      <div className="text-4xl mb-3">
                        💉
                      </div>

                      <h4 className="font-extrabold text-gray-900">
                        دفتر التلقيح
                      </h4>

                      {documents.vaccination_book ? (

                        <button
                          onClick={() =>
                            openDocument(
                              documents.vaccination_book
                            )
                          }
                          className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-xl"
                        >
                          👁️ فتح دفتر التلقيح
                        </button>

                      ) : (

                        <p className="text-red-600 font-bold mt-3">
                          لم يتم رفع الوثيقة
                        </p>

                      )}

                    </div>

                  </div>

                )}

            </div>

            {/* DATE */}

            <div className="mt-6 bg-gray-50 rounded-2xl p-4">

              <p className="text-gray-500 text-sm font-bold">
                تاريخ إرسال الطلب
              </p>

              <p className="font-bold text-gray-900 mt-1">
                {new Date(
                  selectedChild.created_at
                ).toLocaleString(
                  "ar-DZ"
                )}
              </p>

            </div>

            {/* CLOSE */}

            <button
              onClick={() => {
                setSelectedChild(null);
                setDocuments(null);
              }}
              className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-xl transition"
            >
              إغلاق
            </button>

          </div>

        </div>

      )}

    </main>
  );
}