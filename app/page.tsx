
{/* Header */}
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">

    {/* Logo */}
    <a href="/" className="flex items-center gap-3 group">
      <img
        src="/logo.jpg"
        alt="روضة فسيلة الأوراس"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md group-hover:scale-105 transition duration-300"
      />
      

      <div>
        <h1 className="text-lg md:text-2xl font-extrabold text-green-700">
          روضة فسيلة الأوراس
        </h1>

        <p className="hidden md:block text-xs text-gray-500 mt-1">
          نرافق طفلكم نحو مستقبل أجمل 🌱
        </p>
      </div>
    </a>

    {/* Navigation */}
    <nav className="hidden lg:flex items-center gap-1 bg-green-700/95 px-3 py-2 rounded-2xl shadow-md">

      <a
        href="/"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        الرئيسية
      </a>

      <a
        href="/about"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        عن الروضة
      </a>

      <a
        href="/programs"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        البرامج والأنشطة
      </a>

      <a
        href="/gallery"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        معرض الصور
      </a>

      <a
        href="/register"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        التسجيل
      </a>

      <a
        href="/contact"
        className="text-white font-bold px-4 py-2 rounded-xl hover:bg-white/15 hover:text-yellow-300 transition"
      >
        تواصل معنا
      </a>

    </nav>

    {/* Admin */}
    <a
      href="/login"
      className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 md:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition"
    >
      🔒 <span className="hidden sm:inline">إدارة</span>
    </a>

  </div>

</header>


{/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">

  {/* Decorative shapes */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto min-h-[82vh] flex items-center justify-center px-6 py-16 md:py-20">

    <div className="max-w-4xl mx-auto text-center">

      {/* Logo */}
      <div className="inline-flex mb-8">
        <div className="p-2 bg-white rounded-full shadow-xl">
          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Small badge */}
      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm md:text-base mb-5">
        🌱 تربية • اكتشاف • استقلالية
      </div>

      {/* Main title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
        روضة فسيلة الأوراس
      </h1>

      <p className="mt-5 text-2xl md:text-3xl font-bold text-yellow-600">
        نزرع اليوم... لنُثمر غدًا 🌱
      </p>

      {/* Description */}
      <p className="mt-7 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-9">
        فضاء تربوي آمن ومحفز، نرافق فيه طفلكم في رحلة التعلم والاكتشاف،
        ونساعده على بناء شخصيته وتنمية استقلاليته وثقته بنفسه
        من خلال التعلم باللعب والتجربة.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">

        <a
          href="/register"
          className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-9 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          📝 التسجيل الإلكتروني
        </a>

        <a
          href="/about"
          className="w-full sm:w-auto bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-9 py-4 rounded-2xl text-lg font-bold shadow-sm hover:shadow-md transition duration-300"
        >
          🌿 اكتشف روضتنا
        </a>

      </div>

      {/* Quick info */}
      <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-5">

        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
          👶 من 6 أشهر إلى 6 سنوات
        </div>

        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
          🌱 منهج مونتيسوري
        </div>

        <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
          ❤️ بيئة آمنة ومحفزة
        </div>

      </div>

    </div>

  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-green-600 text-2xl animate-bounce">
    ↓
  </div>

</section>
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="روضة فسيلة الأوراس"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
            />

            <div>
              <h1 className="text-lg md:text-2xl font-extrabold text-green-700">
                روضة فسيلة الأوراس
              </h1>

              <p className="hidden md:block text-xs text-gray-500 mt-1">
                نرافق طفلكم نحو مستقبل أجمل 🌱
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-green-700 px-3 py-2 rounded-2xl shadow-md">

            <a
              href="/"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              الرئيسية
            </a>

            <a
              href="/about"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              عن الروضة
            </a>

            <a
              href="/programs"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              البرامج والأنشطة
            </a>

            <a
              href="/gallery"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              معرض الصور
            </a>

            <a
              href="/register"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              التسجيل
            </a>

            <a
              href="/contact"
              className="text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600 hover:text-yellow-300 transition"
            >
              تواصل معنا
            </a>

          </nav>

          {/* Admin */}
          <a
            href="/login"
            className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 md:px-5 py-3 rounded-xl shadow-md transition"
          >
            🔒 <span className="hidden sm:inline">إدارة</span>
          </a>

        </div>

      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto min-h-[82vh] flex items-center justify-center px-6 py-16">

          <div className="max-w-4xl mx-auto text-center">

            {/* Logo */}
{/* Logo */}
<div className="inline-flex mb-7">
  <div className="flex justify-center mb-8">
  <img
    src="/logo.jpg"
    alt="روضة فسيلة الأوراس"
    className="w-64 h-auto md:w-80 object-contain"
  />
</div>
</div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm md:text-base mb-5">
              🌱 تربية • اكتشاف • استقلالية
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
              روضة فسيلة الأوراس
            </h1>

            <p className="mt-5 text-2xl md:text-3xl font-bold text-yellow-600">
              نزرع اليوم... لنُثمر غدًا 🌱
            </p>

            {/* Description */}
            <p className="mt-7 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-9">
              فضاء تربوي آمن ومحفز، نرافق فيه طفلكم في رحلة التعلم والاكتشاف،
              ونساعده على بناء شخصيته وتنمية استقلاليته وثقته بنفسه
              من خلال التعلم باللعب والتجربة.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">

              <a
                href="/register"
                className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-9 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition"
              >
                📝 التسجيل الإلكتروني
              </a>

              <a
                href="/about"
                className="w-full sm:w-auto bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-9 py-4 rounded-2xl text-lg font-bold shadow-sm transition"
              >
                🌿 اكتشف روضتنا
              </a>

            </div>

            {/* Quick Info */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">

              <div className="bg-white px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
                👶 من 6 أشهر إلى 6 سنوات
              </div>

              <div className="bg-white px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
                🌱 منهج مونتيسوري
              </div>

              <div className="bg-white px-5 py-3 rounded-2xl shadow-sm text-gray-700 font-semibold">
                ❤️ بيئة آمنة ومحفزة
              </div>

            </div>

          </div>

        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-green-600 text-2xl animate-bounce">
          ↓
        </div>

      </section>


      {/* ================= FEATURES ================= */}
    
{/* Logo */}
<div className="flex justify-center mb-8">
  <img
    src="/logo.jpg"
    alt="روضة فسيلة الأوراس"
    className="w-64 h-auto md:w-80 object-contain"
  />
</div>
{/* ================= FEATURES ================= */}
<section className="py-20 bg-white px-6 md:px-8">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-4">
        🌱 لماذا نحن؟
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
        لماذا روضة فسيلة الأوراس؟
      </h2>

      <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-8">
        لأننا نؤمن أن لكل طفل قدراته الخاصة، ونمنحه المساحة المناسبة
        ليكتشفها وينميها بثقة وحب.
      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-7">

      {/* Montessori */}
      <div className="group bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-2xl text-4xl mb-6 group-hover:scale-110 transition">
          🌱
        </div>

        <h3 className="text-2xl font-extrabold text-green-700 mb-4">
          منهج مونتيسوري
        </h3>

        <p className="text-gray-600 leading-8">
          تعليم يعتمد على الاستقلالية، الاكتشاف، وتنمية شخصية الطفل
          واحترام إيقاعه الخاص في التعلم.
        </p>

      </div>


      {/* Activities */}
      <div className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-2xl text-4xl mb-6 group-hover:scale-110 transition">
          🎨
        </div>

        <h3 className="text-2xl font-extrabold text-yellow-600 mb-4">
          أنشطة متنوعة
        </h3>

        <p className="text-gray-600 leading-8">
          ورشات فنية، لغات، ألعاب تربوية، وأنشطة حركية تساعد الطفل
          على التعلم والاستمتاع في الوقت نفسه.
        </p>

      </div>


      {/* Safety */}
      <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-2xl text-4xl mb-6 group-hover:scale-110 transition">
          ❤️
        </div>

        <h3 className="text-2xl font-extrabold text-blue-700 mb-4">
          بيئة آمنة
        </h3>

        <p className="text-gray-600 leading-8">
          نهتم براحة الطفل وسلامته داخل فضاء تربوي مريح، آمن،
          ومحفز على التعلم والاكتشاف.
        </p>

      </div>

    </div>

  </div>

</section>


   




     {/* ================= ABOUT ================= */}
<section className="py-20 bg-green-50 px-6 md:px-8">

  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-14">

      <span className="inline-block bg-white text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-4 shadow-sm">
        🌿 عن روضتنا
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
        نبذة عن روضة فسيلة الأوراس
      </h2>

    </div>


    {/* Description */}
    <div className="max-w-4xl mx-auto text-center mb-12">

      <p className="text-gray-700 text-lg md:text-xl leading-9">
        روضة فسيلة الأوراس فضاء تربوي مخصص لرعاية وتعليم الأطفال
        في بيئة آمنة ومحفزة، نعتمد فيها على منهج تربوي حديث يساعد الطفل
        على اكتشاف قدراته وتنمية استقلاليته من خلال التعلم باللعب والتجربة.
      </p>

    </div>


    {/* Information Cards */}
    <div className="grid md:grid-cols-3 gap-7">

      {/* Location */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-2xl text-4xl mb-5">
          📍
        </div>

        <h3 className="text-xl font-extrabold text-green-700 mb-3">
          الموقع
        </h3>

        <p className="text-gray-600 leading-7">
          روضة فسيلة الأوراس
          <br />
          حي بن بوالعيد مقابل وحدة العلاج
        </p>

      </div>


      {/* Age */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-2xl text-4xl mb-5">
          👧
        </div>

        <h3 className="text-xl font-extrabold text-yellow-600 mb-3">
          الفئة العمرية
        </h3>

        <p className="text-gray-600 leading-7">
          استقبال الأطفال
          <br />
          من 6 أشهر إلى 6 سنوات
        </p>

      </div>


      {/* Vision */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-2xl text-4xl mb-5">
          🌱
        </div>

        <h3 className="text-xl font-extrabold text-blue-700 mb-3">
          رؤيتنا
        </h3>

        <p className="text-gray-600 leading-7">
          بناء شخصية طفل مستقل،
          <br />
          مبدع وواثق من نفسه.
        </p>

      </div>

    </div>


    {/* Map Button */}
    <div className="text-center mt-10">

      <a
        href="https://maps.app.goo.gl/dVacjgf6WgW2ZCGj7?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-lg transition"
      >
        📍 موقع الروضة على الخريطة
      </a>

    </div>

  </div>

</section>


{/* ================= GALLERY ================= */}
<section className="py-20 bg-green-50 px-6 md:px-8">

  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-14">

      <span className="inline-block bg-white text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-4 shadow-sm">
        📸 لحظات من روضتنا
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
        معرض الصور
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg leading-8">
        نشارككم بعض اللحظات الجميلة من أنشطة أطفال روضة فسيلة الأوراس.
      </p>

    </div>


    {/* Images */}
    <div className="grid md:grid-cols-3 gap-6">

      <div className="group relative overflow-hidden rounded-3xl shadow-md bg-white">
        <img
          src="/images/activity1.jpg"
          alt="أنشطة الروضة"
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
          <p className="text-white font-bold text-lg">
            أنشطة تربوية 🌱
          </p>
        </div>
      </div>


      <div className="group relative overflow-hidden rounded-3xl shadow-md bg-white">
        <img
          src="/images/activity2.jpg"
          alt="أطفال الروضة"
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
          <p className="text-white font-bold text-lg">
            لحظات طفولية جميلة ❤️
          </p>
        </div>
      </div>


      <div className="group relative overflow-hidden rounded-3xl shadow-md bg-white">
        <img
          src="/images/activity3.jpg"
          alt="أنشطة إبداعية"
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
          <p className="text-white font-bold text-lg">
            الإبداع والاكتشاف 🎨
          </p>
        </div>
      </div>

    </div>


    {/* Button */}
    <div className="text-center mt-10">

      <a
        href="/gallery"
        className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-lg transition"
      >
        🖼️ مشاهدة كل الصور
      </a>

    </div>

  </div>

</section>


     
{/* ================= CONTACT ================= */}
<section className="py-20 bg-white px-6 md:px-8">

  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-14">

      <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm mb-4">
        💚 نحن هنا من أجلكم
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
        تواصل معنا
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg leading-8">
        يسعدنا استقبالكم والإجابة عن استفساراتكم والتعرف أكثر على احتياجات أطفالكم.
      </p>

    </div>


    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-7">

      {/* Phone */}
      <div className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-2xl shadow-sm text-4xl mb-5">
          📞
        </div>

        <h3 className="text-xl font-extrabold text-green-700 mb-3">
          الهاتف
        </h3>

        <a
          href="tel:0698431464"
          className="text-gray-700 font-bold text-lg hover:text-green-700 transition"
        >
          0698431464
        </a>

      </div>


      {/* Location */}
      <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-2xl shadow-sm text-4xl mb-5">
          📍
        </div>

        <h3 className="text-xl font-extrabold text-yellow-600 mb-3">
          الموقع
        </h3>

        <p className="text-gray-700 leading-7">
          خنشلة
          <br />
          حي بن بولعيد مقابل وحدة العلاج
        </p>

      </div>


      {/* Working Hours */}
      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-2xl shadow-sm text-4xl mb-5">
          ⏰
        </div>

        <h3 className="text-xl font-extrabold text-blue-700 mb-3">
          أوقات العمل
        </h3>

        <p className="text-gray-700 font-bold text-lg">
          07:30 - 16:30
        </p>

      </div>

    </div>


    {/* Bottom Actions */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">

      <a
        href="https://maps.app.goo.gl/dVacjgf6WgW2ZCGj7?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-lg transition"
      >
        📍 افتح موقعنا على الخريطة
      </a>

      <a
        href="https://www.facebook.com/share/1HbMZQSWRJ/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-lg transition"
      >
        🌐 صفحتنا على فيسبوك
      </a>

    </div>


    {/* Age */}
    <div className="mt-10 text-center">

      <p className="inline-block bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl text-gray-700 font-bold">
        👧 الفئة العمرية المستقبلة: من 6 أشهر إلى 6 سنوات
      </p>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}
<footer className="bg-green-800 text-white">

  <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">

    <div className="grid md:grid-cols-3 gap-12">

      {/* About */}
      <div>

        <div className="flex items-center gap-3 mb-5">

          <img
            src="/logo.jpg"
            alt="روضة فسيلة الأوراس"
            className="w-16 h-16 object-contain"
          />

          <h2 className="text-xl md:text-2xl font-extrabold">
            روضة فسيلة الأوراس
          </h2>

        </div>

        <p className="text-green-100 leading-8">
          بيئة تربوية حديثة تعتمد على منهج مونتيسوري لتنمية شخصية الطفل
          وبناء ثقته بنفسه في جو آمن ومليء بالمحبة.
        </p>

      </div>


      {/* Quick Links */}
      <div>

        <h2 className="text-xl font-extrabold mb-6">
          روابط سريعة
        </h2>

        <div className="grid grid-cols-2 gap-y-4">

          <a
            href="/"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            الرئيسية
          </a>

          <a
            href="/about"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            عن الروضة
          </a>

          <a
            href="/programs"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            البرامج والأنشطة
          </a>

          <a
            href="/gallery"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            معرض الصور
          </a>

          <a
            href="/register"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            التسجيل الإلكتروني
          </a>

          <a
            href="/contact"
            className="text-green-100 hover:text-yellow-300 transition"
          >
            تواصل معنا
          </a>

        </div>

      </div>


      {/* Contact */}
      <div>

        <h2 className="text-xl font-extrabold mb-6">
          معلومات التواصل
        </h2>

        <div className="space-y-4 text-green-100">

          <p>
            📍 حي بن بولعيد مقابل وحدة العلاج - خنشلة
          </p>

          <a
            href="tel:0698431464"
            className="block hover:text-white transition"
          >
            📞 0698431464
          </a>

          <p>
            🕒 07:30 - 16:30
          </p>

        </div>

        <a
          href="https://www.facebook.com/share/1HbMZQSWRJ/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition"
        >
          🌐 صفحة الفيسبوك
        </a>

      </div>

    </div>

  </div>


  {/* Bottom */}
  <div className="border-t border-green-700">

    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-green-100">

      <p>
        © 2026 جميع الحقوق محفوظة | روضة فسيلة الأوراس
      </p>

      <p>
        نزرع اليوم... لنُثمر غدًا 🌱
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}