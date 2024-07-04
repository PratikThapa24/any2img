import React from "react";

function Section2() {
  return (
    <>
      <section class="w-full relative bg-darkTeal text-neutral-content p-6 py-16 md:py-32">
        <div className="space-y-12">
          <h3 className="relative text-center text-3xl md:text-5xl tracking-tighter font-black leading-relaxed md:leading-relaxed">
            Job hunting is now effortless
          </h3>
          <p className="relative text-center text-lg md:text-xl opacity-90">
            You shouldn't have to waste time creating spreadsheets and tracking
            applications manually...
          </p>
        </div>
        <p className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 opacity-80 text-sm flex gap-1">↓ Discover a simpler way to manage your job search</p>
      </section>
    </>
  );
}
export default Section2;
