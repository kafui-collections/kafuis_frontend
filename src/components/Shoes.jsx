import React from "react";

const shoes = [
  {
    name: "Comfortable Slippers",
    description: "Cozy slippers for home.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBZFZAG0YqIezZ_dKCoGaVp1t-790cvcCKgPilXFv1k0sZqNJA91ric1IUFs9hzTADpkS-EWaCznR62JX0T5Zel-HZYXbs-sunWpMH2lkc5X-Gs871C3Ww8cSiidP8zyC5arJwCnh1tzPibrPVnJ6FqKVSgV9dsE0tktlyReFoosCLKahKMoU8WfT6CKi2l8P-0z5FP9T0gYH5emSeaAf5nOZxtlhQBBW9gxl53iynTLNMzS5Q159HDvDCEnndLfCq7-N-os17MR8k"
  },
  {
    name: "Stylish Sneakers",
    description: "Trendy sneakers for everyday wear.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8obX52iVhjd5B7Jgvg4yhAjspkL8inA03L_ZvoHZGtH_JP3SaJJddSd87Go5ogrNmls2ZYkYfFPp1LoXsveEBK84WIOgnJEXb0354KW7WGURNRrNKTprZrzdItYffD_ld5JCS9j1APEBHqCkXqIz4U5XakNwmnAxKyn1Jg3xoR7iWtlUPGHSrMiuU8vKEHtG1OQ5DP5fxJrjolY6d9TbWyuslFPHiMx5kqCtpSY3b6EzTIn98Xv_RAW0dK63N4pUKKf7FukBAZHW"
  },
  {
    name: "Elegant Heels",
    description: "Heels for special occasions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2S1UT5K1OviiixeFWQuAcnBgFiibCvqqKLNWn_PS_TW68uBpfFXMPz6GnWG1KRLeZDG3ITwSA3wXQGyTdtcxm0o2Zlo5pZtP1Xmir98SZ3-nLMDVT_kyWbn7Zn7OQ7ohPSwqVe9TiqlAEBA3kDJ79zMIuQPGtn6mhY_5OeP_DC6XxbQqCZ5K85yc5-YfDRQSlLtZNkrRCuRW3uZmyzQkIN3u26QgWHJdTotxBfHXLbzQeh8l2XQX0lLdW43QNs59AkvZ5RIVujv6x"
  }
];

export default function Shoes() {
  return (
    <section className="py-6">
      <h2 className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Shoes &amp; Slippers
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {shoes.map((shoe, idx) => (
          <div key={idx} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${shoe.image})` }}
            />
            <div>
              <p className="text-[#101419] text-base font-medium leading-normal">{shoe.name}</p>
              <p className="text-[#58728d] text-sm font-normal leading-normal">{shoe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
