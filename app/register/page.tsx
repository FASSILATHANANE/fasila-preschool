"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const [classType, setClassType] = useState("");

  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [fatherPhone, setFatherPhone] = useState("");

  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [motherPhone, setMotherPhone] = useState("");

  const [email, setEmail] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergiesOrIllness, setAllergiesOrIllness] = useState("");
  const [notes, setNotes] = useState("");

  const [subscriptionType, setSubscriptionType] = useState("");
  const [transportRequested, setTransportRequested] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [birthCertificate, setBirthCertificate] =
    useState<File | null>(null);

  const [vaccinationBook, setVaccinationBook] =
    useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!firstName || !lastName || !birthDate || !gender) {
      setError("يرجى ملء معلومات الطفل الأساسية.");
      return;
    }

    if (!classType) {
      setError("يرجى اختيار قسم الطفل.");
      return;
    }

    if (!fatherFirstName || !fatherLastName || !fatherPhone) {
      setError("يرجى ملء معلومات الأب ورقم الهاتف.");
      return;
    }

    if (!subscriptionType) {
      setError("يرجى اختيار نوع الدوام.");
      return;
    }

    if (!address) {
      setError("يرجى إدخال عنوان السكن.");
      return;
    }

    if (!birthCertificate || !vaccinationBook) {
      setError("يرجى تحميل شهادة الميلاد ودفتر التلقيح.");
      return;
    }

    if (!termsAccepted) {
      setError(
        "يرجى الموافقة على الأسعار والتصريح بصحة جميع المعلومات."
      );
      return;
    }

    setLoading(true);

    try {
      const parentName =
        fatherFirstName + " " + fatherLastName;

      const monthlyFee =
        subscriptionType === "دوام كامل"
          ? 9000
          : 5000;

      const transportFee =
        transportRequested ? 1000 : 0;

      // حفظ معلومات الطفل
      const { data: child, error: insertError } =
        await supabase
          .from("children")
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              birth_date: birthDate,
              gender: gender,
              address: address,

              // القسم
              class_type: classType,

              // نوع الدوام
              subscription_type: subscriptionType,
              monthly_fee: monthlyFee,

              transport_requested: transportRequested,
              transport_fee: transportFee,
              terms_accepted: termsAccepted,

              father_first_name: fatherFirstName,
              father_last_name: fatherLastName,
              father_phone: fatherPhone,

              mother_first_name: motherFirstName,
              mother_last_name: motherLastName,
              mother_phone: motherPhone,

              parent_name: parentName,
              phone: fatherPhone,
              email: email || null,

              blood_type: bloodType,
              allergies_or_illness: allergiesOrIllness,
              notes: notes,
            },
          ])
          .select("id")
          .single();

      if (insertError) {
        console.log("INSERT ERROR:", insertError);

        setError(
          "خطأ التسجيل: " +
            insertError.message +
            " | code: " +
            insertError.code
        );

        setLoading(false);
        return;
      }

      if (!child) {
        throw new Error("لم يتم إنشاء سجل الطفل.");
      }

      // رفع شهادة الميلاد
      const birthCertificatePath =
        "children/" +
        child.id +
        "/birth_certificate_" +
        Date.now();

      const { error: birthUploadError } =
        await supabase.storage
          .from("child-documents")
          .upload(
            birthCertificatePath,
            birthCertificate
          );

      if (birthUploadError) {
        throw new Error(
          "فشل رفع شهادة الميلاد: " +
            birthUploadError.message
        );
      }

      // رفع دفتر التلقيح
      const vaccinationPath =
        "children/" +
        child.id +
        "/vaccination_book_" +
        Date.now();

      const { error: vaccinationUploadError } =
        await supabase.storage
          .from("child-documents")
          .upload(
            vaccinationPath,
            vaccinationBook
          );

      if (vaccinationUploadError) {
        throw new Error(
          "فشل رفع دفتر التلقيح: " +
            vaccinationUploadError.message
        );
      }

      // حفظ معلومات الوثائق
      const { error: documentsError } =
        await supabase
          .from("child_documents")
          .insert({
            child_id: child.id,
            birth_certificate: birthCertificatePath,
            vaccination_book: vaccinationPath,
          });

      if (documentsError) {
        console.error(
          "DOCUMENTS ERROR:",
          documentsError
        );

        throw new Error(
          "تم رفع الملفات لكن لم يتم حفظ بيانات الوثائق: " +
            documentsError.message
        );
      }

      // رسالة النجاح
      setMessage(
        "✅ تم إرسال طلب التسجيل والوثائق بنجاح، وسيتم التواصل معكم بعد مراجعة الطلب."
      );

      // تفريغ النموذج
      setFirstName("");
      setLastName("");
      setBirthDate("");
      setGender("");
      setAddress("");

      setClassType("");

      setFatherFirstName("");
      setFatherLastName("");
      setFatherPhone("");

      setMotherFirstName("");
      setMotherLastName("");
      setMotherPhone("");

      setEmail("");
      setBloodType("");
      setAllergiesOrIllness("");
      setNotes("");

      setSubscriptionType("");
      setTransportRequested(false);
      setTermsAccepted(false);

      setBirthCertificate(null);
      setVaccinationBook(null);

      document
        .querySelectorAll<HTMLInputElement>(
          'input[type="file"]'
        )
        .forEach((input) => {
          input.value = "";
        });

    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "حدث خطأ أثناء إرسال الطلب."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6"
      dir="rtl"
    >

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        {/* العنوان */}

        <div className="flex items-center justify-center gap-4 mb-6">

          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-20 h-20 object-contain"
          />

          <h1 className="text-5xl font-extrabold text-green-800">
            التسجيل الإلكتروني
          </h1>

        </div>

        <p className="text-center text-gray-900 text-lg mb-10 font-medium">
          يرجى ملء جميع المعلومات المطلوبة بدقة، وسيتم التواصل معكم بعد مراجعة الطلب.
        </p>

        {/* رسالة النجاح */}

        {message && (
          <div className="mb-6 rounded-xl bg-green-100 border border-green-300 p-4 text-green-800 text-center font-bold">
            {message}
          </div>
        )}

        {/* رسالة الخطأ */}

        {error && (
          <div className="mb-6 rounded-xl bg-red-100 border border-red-300 p-4 text-red-700 text-center font-bold">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* ================= معلومات الطفل ================= */}

          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">
            👶 معلومات الطفل
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                اسم الطفل
              </label>

              <input
                type="text"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
                placeholder="أدخل اسم الطفل"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                لقب الطفل
              </label>

              <input
                type="text"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
                placeholder="أدخل لقب الطفل"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                تاريخ الميلاد
              </label>

              <input
                type="date"
                value={birthDate}
                onChange={(e) =>
                  setBirthDate(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                الجنس
              </label>

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black"
              >
                <option value="">
                  اختر الجنس
                </option>

                <option value="ذكر">
                  ذكر
                </option>

                <option value="أنثى">
                  أنثى
                </option>
              </select>
            </div>

          </div>

          {/* ================= معلومات ولي الأمر ================= */}

          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">
            👨 معلومات ولي الأمر
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                اسم الأب
              </label>

              <input
                type="text"
                value={fatherFirstName}
                onChange={(e) =>
                  setFatherFirstName(e.target.value)
                }
                placeholder="اسم الأب"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                لقب الأب
              </label>

              <input
                type="text"
                value={fatherLastName}
                onChange={(e) =>
                  setFatherLastName(e.target.value)
                }
                placeholder="لقب الأب"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                رقم هاتف الأب
              </label>

              <input
                type="tel"
                value={fatherPhone}
                onChange={(e) =>
                  setFatherPhone(e.target.value)
                }
                placeholder="رقم هاتف الأب"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                اسم الأم
              </label>

              <input
                type="text"
                value={motherFirstName}
                onChange={(e) =>
                  setMotherFirstName(e.target.value)
                }
                placeholder="اسم الأم"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                لقب الأم
              </label>

              <input
                type="text"
                value={motherLastName}
                onChange={(e) =>
                  setMotherLastName(e.target.value)
                }
                placeholder="لقب الأم"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-900">
                رقم هاتف الأم
              </label>

              <input
                type="tel"
                value={motherPhone}
                onChange={(e) =>
                  setMotherPhone(e.target.value)
                }
                placeholder="رقم هاتف الأم"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />
            </div>

          </div>

          <div>

            <label className="block mb-2 font-bold text-gray-900">
              البريد الإلكتروني (اختياري)
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              placeholder="example@email.com"
            />

          </div>


          {/* ================= الاشتراك ================= */}

          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">
            💳 معلومات الاشتراك
          </h2>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 space-y-6">

            {/* نوع الدوام */}

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                نوع الدوام
              </label>

              <select
                value={subscriptionType}
                onChange={(e) =>
                  setSubscriptionType(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black bg-white"
              >

                <option value="">
                  اختر نوع الدوام
                </option>

                <option value="دوام كامل">
                  دوام كامل — 9000 دج / الشهر
                </option>

                <option value="نصف يوم صباحًا">
                  نصف يوم صباحًا — 5000 دج / الشهر
                </option>

                <option value="نصف يوم مساءً">
                  نصف يوم مساءً — 5000 دج / الشهر
                </option>

              </select>

            </div>
          {/* ================= قسم الطفل ================= */}

          <div>

            <h2 className="text-2xl font-bold text-green-800 border-b pb-2 mb-5">
              🏫 قسم الطفل
            </h2>

            <p className="text-gray-700 mb-4">
              يرجى اختيار القسم المناسب للطفل:
            </p>

            <div className="grid md:grid-cols-2 gap-3">

              {[
                "الحضانة",
                "قبل التمهيدي",
                "التمهيدي",
                "التحضيري",
              ].map((className) => (

                <label
                  key={className}
                  className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
                    classType === className
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 bg-white hover:bg-green-50"
                  }`}
                >

                  <input
                    type="radio"
                    name="classType"
                    value={className}
                    checked={classType === className}
                    onChange={(e) =>
                      setClassType(e.target.value)
                    }
                    className="w-5 h-5 accent-green-700"
                  />

                  <span className="font-bold text-gray-900">
                    {className}
                  </span>

                  {classType === className && (
                    <span className="mr-auto text-green-700 font-bold">
                      ✓
                    </span>
                  )}

                </label>

              ))}

            </div>

          </div>

            {/* التوصيل */}

            <div className="bg-white rounded-xl p-5 border border-gray-200">

              <p className="font-bold text-gray-900 mb-3">
                🚐 خدمة التوصيل
              </p>

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={transportRequested}
                  onChange={(e) =>
                    setTransportRequested(
                      e.target.checked
                    )
                  }
                  className="w-5 h-5 accent-green-700"
                />

                <span className="text-gray-900 font-medium">
                  أريد الاستفادة من خدمة التوصيل
                </span>

              </label>

              <p className="text-sm text-gray-700 mt-3">
                سعر التوصيل من 1000 دج إلى 2000 دج
                شهريًا حسب عنوان السكن.
              </p>

            </div>

            {/* العنوان */}

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                📍 عنوان السكن / عنوان التوصيل
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700 bg-white"
                placeholder="أدخل العنوان بالتفصيل"
              />

            </div>

            {/* حقوق التسجيل */}

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">

              <p className="font-bold text-gray-900 text-lg">
                📌 حقوق التسجيل: 3000 دج
              </p>

              <p className="text-gray-800 mt-2">
                تُدفع مع الملف في بداية الموسم الدراسي.
              </p>

            </div>

            {/* ملخص السعر */}

            {subscriptionType && (

              <div className="bg-white border border-green-300 rounded-xl p-5">

                <p className="font-bold text-green-800 text-lg">
                  💰 ملخص الاشتراك
                </p>

                <p className="text-gray-900 mt-3">
                  الاشتراك الشهري:{" "}
                  <strong>
                    {subscriptionType === "دوام كامل"
                      ? "9000 دج"
                      : "5000 دج"}
                  </strong>
                </p>

                {transportRequested && (
                  <p className="text-gray-900 mt-2">
                    التوصيل:{" "}
                    <strong>
                      من 1000 إلى 2000 دج
                    </strong>{" "}
                    حسب العنوان
                  </p>
                )}

                <p className="text-gray-900 mt-2">
                  حقوق التسجيل:{" "}
                  <strong>
                    3000 دج
                  </strong>{" "}
                  تُدفع مع الملف في بداية الموسم.
                </p>

              </div>

            )}

          </div>

          {/* ================= الموافقة ================= */}

          <div className="bg-gray-50 border border-gray-300 rounded-2xl p-5">

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) =>
                  setTermsAccepted(
                    e.target.checked
                  )
                }
                className="w-5 h-5 mt-1 accent-green-700"
              />

              <span className="text-gray-900 font-medium leading-7">
                أوافق على الأسعار المذكورة أعلاه،
                وأقر بأن جميع المعلومات والوثائق
                المقدمة في طلب التسجيل صحيحة وكاملة.
              </span>

            </label>

          </div>

          {/* ================= معلومات صحية ================= */}

          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">
            🩺 معلومات صحية
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                فصيلة الدم
              </label>

              <input
                type="text"
                value={bloodType}
                onChange={(e) =>
                  setBloodType(e.target.value)
                }
                placeholder="فصيلة الدم"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />

            </div>

            <div>

              <label className="block mb-2 font-bold text-gray-900">
                الحساسية أو الأمراض
              </label>

              <input
                type="text"
                value={allergiesOrIllness}
                onChange={(e) =>
                  setAllergiesOrIllness(
                    e.target.value
                  )
                }
                placeholder="هل يعاني الطفل من حساسية أو مرض؟"
                className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
              />

            </div>

          </div>

          <textarea
            rows={4}
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="ملاحظات إضافية"
            className="w-full border border-gray-400 rounded-xl p-4 text-black placeholder:text-gray-700"
          />

          {/* ================= الوثائق ================= */}

          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">
            📄 الوثائق المطلوبة
          </h2>

          <div>

            <label className="block mb-2 font-bold text-gray-900">
              شهادة الميلاد
            </label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                setBirthCertificate(
                  e.target.files?.[0] || null
                )
              }
              className="block w-full text-black border border-gray-400 rounded-xl p-3 file:bg-green-700 file:text-white file:border-0 file:px-5 file:py-2 file:rounded-lg file:cursor-pointer"
            />

          </div>

          <div>

            <label className="block mb-2 font-bold text-gray-900">
              نسخة من دفتر التلقيح
            </label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                setVaccinationBook(
                  e.target.files?.[0] || null
                )
              }
              className="block w-full text-black border border-gray-400 rounded-xl p-3 file:bg-green-700 file:text-white file:border-0 file:px-5 file:py-2 file:rounded-lg file:cursor-pointer"
            />

          </div>

          {/* ================= زر الإرسال ================= */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white text-xl font-bold py-4 rounded-xl transition"
          >

            {loading
              ? "⏳ جارٍ إرسال الطلب..."
              : "✅ إرسال طلب التسجيل"}

          </button>

        </form>

      </div>

    </main>
  );
}