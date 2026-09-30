export default function BlogHero() {
  return (
    <section className="w-full bg-[#f8f7f4] pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <p className="text-sm text-slate-500 mb-6">
          Home <span className="mx-1.5">/</span> Blog
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Insights & <span className="text-[#f5b800]">ideas</span>
        </h1>

        {/* Description */}
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed">
          Practical thinking on building, shipping and scaling software — plus
          lessons from the CodeWire Academy classroom. Written by our own
          engineers.
        </p>
      </div>
    </section>
  );
}
