"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Child = {
  id: string;

  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  address: string | null;

  father_first_name: string | null;
  father_last_name: string | null;
  father_phone: string | null;

  mother_first_name: string | null;
  mother_last_name: string | null;
  mother_phone: string | null;

  email: string | null;

  // القسم
  class_type: string | null;

  // نوع الدوام
  subscription_type: string | null;

  monthly_fee: number | null;

  transport_requested: boolean | null;
  transport_fee: number | null;

  terms_accepted: boolean | null;

  created_at: string;
};

type Documents = {
  child_id: string;
  birth_certificate: string | null;
  vaccination_book: string | null;
};

export default function Dashboard() {
  const [children, setChildren] = useState<Child[]>([]);

  const [documents, setDocuments] = useState<
    Record<string, Documents>
  >({});

  const [loading, setLoading] = useState(true);

  const [selectedChild, setSelectedChild] =
    useState<Child | null>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    setLoading(true);
    setError("");

    try {
      // ===============================
      // جلب التسجيلات
      // ===============================

      const {
        data: childrenData,
        error: childrenError,
      } = await supabase
        .from("children")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (childrenError) {
        throw childrenError;
      }

      // ===============================
      // جلب الوثائق
      // ===============================

      const {
        data: documentsData,
        error: documentsError,
      } = await supabase
        .from("child_documents")
        .select("*");

      if (documentsError) {
        throw documentsError;
      }

      setChildren(childrenData || []);

      const documentsMap: Record<
        string,
        Documents
      > = {};

      (documentsData || []).forEach((doc) => {
        documentsMap[doc.child_id] = doc;
      });

      setDocuments(documentsMap);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "حدث خطأ أثناء تحميل البيانات."
      );
    } finally {
      setLoading(false);
    }
  }

  // ===============================
  // فتح الوثيقة
  // ===============================

  async function openDocument(
    path: string | null,
    fileName: string
  ) {
    if (!path) {
      alert(الوثيقة ${fileName} غير موجودة.);
      return;
    }

    const { data, error } =
      await supabase.storage
        .from("child-documents")
        .createSignedUrl(path, 300);

    if (error || !data?.signedUrl) {
      console.error(error);
      alert("تعذر فتح الوثيقة.");
      return;
    }

    window.open(data.signedUrl, "_blank");
  }

  // ===============================
  // التاريخ
  // ===============================

  function formatDate(date: string) {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "ar-DZ",
      {
        timeZone: "Africa/Algiers",
      }
    );
  }

  // ===============================
  // تاريخ ووقت التسجيل
  // توقيت الجزائر
  // ===============================

  function formatDateTime(date: string) {
    if (!date) return "-";

    return new Date(date).toLocaleString(
      "ar-DZ",
      {
        timeZone: "Africa/Algiers",
        dateStyle: "short",
        timeStyle: "short",
      }
    );
  }

  // ===============================
  // الإحصائيات
  // ===============================

  const totalChildren = children.length;

  const fullTimeChildren = children.filter(
    (child) =>
      child.subscription_type === "دوام كامل"
  ).length;

  const halfTimeChildren = children.filter(
    (child) =>
      child.subscription_type === "نصف دوام"
  ).length;

  const transportChildren = children.filter(
    (child) => child.transport_requested
  ).length;

  const nurseryChildren = children.filter(
    (child) =>
      child.class_type === "حضانة"
  ).length;

  const beforePreparatoryChildren =
    children.filter(
      (child) =>
        child.class_type === "قبل التمهيدي"
    ).length;

  const preparatoryChildren = children.filter(
    (child) =>
      child.class_type === "تمهيدي"
  ).length;

  const preschoolChildren = children.filter(
    (child) =>
      child.class_type === "تحضيري"
  ).length;

  return (
    <main
      className="min-h-screen bg-green-50 flex"
      dir="rtl"
    >
      {/* =====================================
          Sidebar
      ===================================== */}

      <aside className="w-72 bg-green-800 text-white p-6 hidden md:block">

        <div className="text-center mb-8">

          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
          />

          <h1 className="text-xl font-bold">
            روضة فسيلة الأوراس
          </h1>

        </div>

        <nav className="space-y-4">

          <a className="block bg-green-700 p-3 rounded-xl">
            🏠 الرئيسية
          </a>

          <a className="block hover:bg-green-700 p-3 rounded-xl">
            👧 الأطفال
          </a>

          <a className="block hover:bg-green-700 p-3 rounded-xl">
            📝 التسجيلات
          </a>

          <a className="block hover:bg-green-700 p-3 rounded-xl">
            👩‍🏫 الموظفين
          </a>

          <a className="block hover:bg-green-700 p-3 rounded-xl">
            💰 المالية
          </a>

          <a className="block hover:bg-green-700 p-3 rounded-xl">
            📸 الصور
          </a>

        </nav>

      </aside>

      {/* =====================================
          المحتوى
      ===================================== */}

      <section className="flex-1 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-green-700">
              لوحة التحكم
            </h2>

            <p className="text-gray-600 mt-2">
              إدارة ومتابعة تسجيلات روضة فسيلة الأوراس
            </p>

          </div>

          <button
            onClick={loadDashboard}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl"
          >
            🔄 تحديث
          </button>

        </div>

        {/* Error */}

        {error && (
          <div className="mb-6 bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl font-bold">
            حدث خطأ: {error}
          </div>
        )}

        {/* =====================================
            البطاقات الرئيسية
        ===================================== */}

        <div className="grid md:grid-cols-4 gap-6">

          {/* الأطفال */}

          <div className="bg-white rounded-2xl shadow p-6">

            <div className="text-4xl mb-3">
              👧
            </div>

            <h3 className="font-bold text-xl">
              إجمالي الأطفال
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              {loading
                ? "..."
                : `${totalChildren} طفل`}
            </p>

          </div>

          {/* دوام كامل */}

          <div className="bg-white rounded-2xl shadow p-6">

            <div className="text-4xl mb-3">
              🕐
            </div>

            <h3 className="font-bold text-xl">
              دوام كامل
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              {loading
                ? "..."
                : `${fullTimeChildren} طفل`}
            </p>

          </div>

          {/* نصف دوام */}

          <div className="bg-white rounded-2xl shadow p-6">

            <div className="text-4xl mb-3">
              ⏰
            </div>

            <h3 className="font-bold text-xl">
              نصف دوام
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              {loading
                ? "..."
                : `${halfTimeChildren} طفل`}
            </p>

          </div>

          {/* التوصيل */}

          <div className="bg-white rounded-2xl shadow p-6">

            <div className="text-4xl mb-3">
              🚐
            </div>

            <h3 className="font-bold text-xl">
              التوصيل
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              {loading
                ? "..."
                : `${transportChildren} طفل`}
            </p>

          </div>

        </div>

        {/* =====================================
            إحصائيات الأقسام
        ===================================== */}

        <div className="mt-8">

          <h3 className="text-2xl font-bold text-green-700 mb-5">
            🎓 توزيع الأطفال حسب القسم
          </h3>

          <div className="grid md:grid-cols-4 gap-5">

            <div className="bg-white rounded-2xl shadow p-5 border-r-4 border-purple-500">

              <p className="text-gray-600 font-bold">
                حضانة
              </p>

              <p className="text-3xl font-bold text-purple-700 mt-2">
                {loading
                  ? "..."
                  : nurseryChildren}
              </p>

              <p className="text-gray-500">
                طفل
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-5 border-r-4 border-pink-500">

              <p className="text-gray-600 font-bold">
                قبل التمهيدي
              </p>

              <p className="text-3xl font-bold text-pink-700 mt-2">
                {loading
                  ? "..."
                  : beforePreparatoryChildren}
              </p>

              <p className="text-gray-500">
                طفل
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-5 border-r-4 border-blue-500">

              <p className="text-gray-600 font-bold">
                تمهيدي
              </p>

              <p className="text-3xl font-bold text-blue-700 mt-2">
                {loading
                  ? "..."
                  : preparatoryChildren}
              </p>

              <p className="text-gray-500">
                طفل
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-5 border-r-4 border-green-500">

              <p className="text-gray-600 font-bold">
                تحضيري
              </p>

              <p className="text-3xl font-bold text-green-700 mt-2">
                {loading
                  ? "..."
                  : preschoolChildren}
              </p>

              <p className="text-gray-500">
                طفل
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
            التسجيلات
        ===================================== */}

        <div className="mt-10 bg-white rounded-2xl shadow p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h3 className="text-2xl font-bold text-green-700">
                📝 إجمالي الطلبات
              </h3>

              <p className="text-gray-600 mt-1">
                طلبات التسجيل المرسلة عبر الموقع
              </p>

            </div>

            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
              {totalChildren} طلب
            </span>

          </div>

          {/* Loading */}

          {loading ? (

            <div className="text-center py-12 text-gray-500">
              ⏳ جارٍ تحميل التسجيلات...
            </div>

          ) : children.length === 0 ? (

            <div className="text-center py-12 text-gray-500">
              لا توجد تسجيلات حتى الآن.
            </div>

          ) : (

            <div className="space-y-5">

              {children.map((child) => {

                const childDocuments =
                  documents[child.id];

                return (

                  <div
                    key={child.id}
                    className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
                  >

                    {/* المعلومات الأساسية */}

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                      {/* الطفل */}

                      <div className="min-w-[220px]">

                        <h4 className="text-xl font-bold text-green-800">
                          {child.first_name}{" "}
                          {child.last_name}
                        </h4>

                        <p className="text-gray-600 mt-2">
                          📅 تاريخ الميلاد:{" "}
                          {formatDate(
                            child.birth_date
                          )}
                        </p>

                        <p className="text-gray-600 mt-1">
                          👤 الجنس:{" "}
                          {child.gender}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                          🕐 تسجيل الطلب:{" "}
                          {formatDateTime(
                            child.created_at
                          )}
                        </p>

                      </div>

                      {/* القسم */}

                      <div className="bg-purple-50 rounded-xl p-4 min-w-[200px]">

                        <p className="font-bold text-purple-800">
                          🎓 القسم
                        </p>

                        <p className="text-gray-800 mt-2 font-bold text-lg">
                          {child.class_type ||
                            "غير محدد"}
                        </p>

                      </div>

                      {/* نوع الدوام */}

                      <div className="bg-green-50 rounded-xl p-4 min-w-[200px]">

                        <p className="font-bold text-green-800">
                          🕐 نوع الدوام
                        </p>

                        <p className="text-gray-800 mt-2 font-bold text-lg">
                          {child.subscription_type ||
                            "غير محدد"}
                        </p>

                        <p className="font-bold text-gray-900 mt-1">
                          {child.monthly_fee
                            ? ${child.monthly_fee} دج / الشهر
                            : "-"}
                        </p>

                      </div>

                      {/* التوصيل */}

                      <div className="bg-blue-50 rounded-xl p-4 min-w-[200px]">

                        <p className="font-bold text-blue-800">
                          🚐 التوصيل
                        </p>

                        {child.transport_requested ? (

                          <>
                            <p className="text-gray-800 mt-2">
                              مطلوب
                            </p>

                            <p className="font-bold text-gray-900">
                              من 1000 إلى 2000 دج
                            </p>
                          </>

                        ) : (

                          <p className="text-gray-600 mt-2">
                            بدون توصيل
                          </p>

                        )}

                      </div>

                    </div>

                    {/* الأزرار */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      <button
                        onClick={() =>
                          setSelectedChild(child)
                        }
                        className="bg-green-700 hover:bg-green-800 text-white px-4 py-3 rounded-xl font-bold"
                      >
                        👁️ التفاصيل
                      </button>

                      {childDocuments?.birth_certificate && (

                        <button
                          onClick={() =>
                            openDocument(
                              childDocuments.birth_certificate,
                              "شهادة الميلاد"
                            )
                          }
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-bold"
                        >
                          📄 شهادة الميلاد
                        </button>

                      )}

                      {childDocuments?.vaccination_book && (

                        <button
                          onClick={() =>
                            openDocument(
                              childDocuments.vaccination_book,
                              "دفتر التلقيح"
                            )
                          }
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-xl font-bold"
                        >
                          📕 دفتر التلقيح
                        </button>

                      )}

                    </div>

                  </div>

                );

              })}

            </div>

          )}

        </div>

        {/* =====================================
            الترحيب
        ===================================== */}

        <div className="mt-10 bg-white rounded-2xl shadow p-8">

          <h3 className="text-2xl font-bold text-green-700 mb-5">
            مرحبا بك في نظام إدارة الروضة 🌱
          </h3>

          <p className="text-gray-700 leading-8">
            من هنا يمكنك متابعة الأطفال والتسجيلات
            والأقسام والاشتراكات والتوصيل والوثائق
            بطريقة منظمة وسهلة.
          </p>

        </div>

      </section>

      {/* =====================================
          نافذة التفاصيل
      ===================================== */}

      {selectedChild && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">

          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">

            {/* رأس النافذة */}

            <div className="flex justify-between items-center mb-6">

              <div>

                <h2 className="text-2xl font-bold text-green-800">
                  👶 تفاصيل طلب التسجيل
                </h2>

                <p className="text-gray-500 mt-1">
                  معلومات الطفل وولي الأمر والوثائق
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedChild(null)
                }
                className="bg-red-100 text-red-700 px-4 py-2 rounded-xl font-bold"
              >
                ✕ إغلاق
              </button>

            </div>

            {/* =====================================
                معلومات الطفل
            ===================================== */}

            <div className="bg-green-50 rounded-2xl p-5 mb-5">

              <h3 className="text-xl font-bold text-green-800 mb-4">
                👶 معلومات الطفل
              </h3>

              <div className="grid md:grid-cols-2 gap-3 text-gray-800">

                <p>
                  <strong>الاسم:</strong>{" "}
                  {selectedChild.first_name}{" "}
                  {selectedChild.last_name}
                </p>

                <p>
                  <strong>تاريخ الميلاد:</strong>{" "}
                  {formatDate(
                    selectedChild.birth_date
                  )}
                </p>

                <p>
                  <strong>الجنس:</strong>{" "}
                  {selectedChild.gender}
                </p>

                <p>
                  <strong>العنوان:</strong>{" "}
                  {selectedChild.address ||
                    "-"}
                </p>

                <p>
                  <strong>القسم:</strong>{" "}
                  {selectedChild.class_type ||
                    "غير محدد"}
                </p>

                <p>
                  <strong>نوع الدوام:</strong>{" "}
                  {selectedChild.subscription_type ||
                    "غير محدد"}
                </p>

                <p>
                  <strong>تاريخ ووقت التسجيل:</strong>{" "}
                  {formatDateTime(
                    selectedChild.created_at
                  )}
                </p>

              </div>

            </div>

            {/* =====================================
                ولي الأمر
            ===================================== */}

            <div className="bg-gray-50 rounded-2xl p-5 mb-5">

              <h3 className="text-xl font-bold text-green-800 mb-4">
                👨 معلومات ولي الأمر
              </h3>

              <div className="grid md:grid-cols-2 gap-3 text-gray-800">

                <p>
                  <strong>الأب:</strong>{" "}
                  {selectedChild.father_first_name}{" "}
                  {selectedChild.father_last_name}
                </p>

                <p>
                  <strong>هاتف الأب:</strong>{" "}
                  {selectedChild.father_phone ||
                    "-"}
                </p>

                <p>
                  <strong>الأم:</strong>{" "}
                  {selectedChild.mother_first_name}{" "}
                  {selectedChild.mother_last_name}
                </p>

                <p>
                  <strong>هاتف الأم:</strong>{" "}
                  {selectedChild.mother_phone ||
                    "-"}
                </p>

                <p>
                  <strong>البريد:</strong>{" "}
                  {selectedChild.email ||
                    "-"}
                </p>

              </div>

            </div>

            {/* =====================================
                الاشتراك والمالية
            ===================================== */}

            <div className="bg-yellow-50 rounded-2xl p-5 mb-5">

              <h3 className="text-xl font-bold text-green-800 mb-4">
                💳 الاشتراك والمالية
              </h3>

              <div className="space-y-3 text-gray-800">

                <p>
                  <strong>القسم:</strong>{" "}
                  {selectedChild.class_type ||
                    "-"}
                </p>

                <p>
                  <strong>نوع الدوام:</strong>{" "}
                  {selectedChild.subscription_type ||
                    "-"}
                </p>

                <p>
                  <strong>الاشتراك الشهري:</strong>{" "}
                  {selectedChild.monthly_fee
                    ? `${selectedChild.monthly_fee} دج`
                    : "-"}
                </p>

                <p>
                  <strong>حقوق التسجيل:</strong>{" "}
                  3000 دج
                </p>

                <p>
                  <strong>التوصيل:</strong>{" "}

                  {selectedChild.transport_requested
                    ? "مطلوب — من 1000 إلى 2000 دج حسب العنوان"
                    : "بدون توصيل"}

                </p>

                <p>
                  <strong>الموافقة:</strong>{" "}

                  {selectedChild.terms_accepted
                    ? "✅ تمت الموافقة"
                    : "❌ لم تتم الموافقة"}

                </p>

              </div>

            </div>

            {/* =====================================
                تاريخ التسجيل
            ===================================== */}

            <div className="bg-orange-50 rounded-2xl p-5 mb-5">

              <h3 className="text-xl font-bold text-orange-800 mb-3">
                🕐 معلومات الطلب
              </h3>

              <p className="text-gray-800">
                <strong>
                  تاريخ ووقت إرسال الطلب:
                </strong>{" "}
                {formatDateTime(
                  selectedChild.created_at
                )}
              </p>

            </div>

            {/* =====================================
                الوثائق
            ===================================== */}

            <div className="bg-blue-50 rounded-2xl p-5">

              <h3 className="text-xl font-bold text-green-800 mb-4">
                📄 الوثائق
              </h3>

              <div className="flex flex-wrap gap-3">

                {documents[selectedChild.id]
                  ?.birth_certificate && (

                  <button
                    onClick={() =>
                      openDocument(
                        documents[selectedChild.id]
                          .birth_certificate,
                        "شهادة الميلاد"
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    📄 فتح شهادة الميلاد
                  </button>

                )}

                {documents[selectedChild.id]
                  ?.vaccination_book && (

                  <button
                    onClick={() =>
                      openDocument(
                        documents[selectedChild.id]
                          .vaccination_book,
                        "دفتر التلقيح"
                      )
                    }
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    📕 فتح دفتر التلقيح
                  </button>

                )}

                {!documents[selectedChild.id]
                  ?.birth_certificate &&
                  !documents[selectedChild.id]
                    ?.vaccination_book && (

                  <p className="text-gray-600">
                    لا توجد وثائق مرفوعة.
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}