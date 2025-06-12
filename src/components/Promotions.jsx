import React from "react";

export default function Promotions() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-[#101419] text-[22px] font-bold pb-3">Promotions</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 rounded-xl overflow-hidden">
        <div
          className="w-full md:w-1/2 aspect-video bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwxA69YZRNEpR_MiCoCk5_aheLBs_ryh_YfpSNxaASCn_pwcukmouXZHzWqaTMpDD-BoNiOsvo_6Yd5r3JeGbYScVGHIkwKBqJgr1D-e3hFX6U47OMJQW-0j4zr5hpHpwZhxB--OXuLNaF5uhdFQWnAMsEDcjKom8T2E82iOqtXuOa4suUeVskuq_VYToqBKcW3HuoExR_KeFfi3tvUjAtvCdwmAoa77J-2Niu6hjtrDE-eBz1Um8DSvQDF5AB5jUUZGnad1Ub5ipx")`
          }}
        ></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 py-4">
          <p className="text-[#101419] text-lg font-bold">Exclusive Summer Sale</p>
          <p className="text-[#58728d] text-base">Get up to 50% off on selected items. Limited time offer!</p>
          <button className="w-fit bg-[#d2e2f3] text-[#101419] text-sm font-medium px-4 py-2 rounded-xl">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
