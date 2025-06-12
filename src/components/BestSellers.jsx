import React from "react";

const products = [
  {
    title: "Top Selling Dress",
    desc: "Our most popular dress this season.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoFPbGdubokMjC54ipe-k7um806Eevc2v0DhuxzGzoAo-zOBPq5elxD_868MJKNYzvQXTn8pSt6l24F3fUVUGFk15dGoI4KXALvNbLqn7p8xZfiWkqeUTim31OQ7LeiO2dGiJa693MuTSKFYT26bp9nHFVyMdJjuX0mipesc4qjohXv7mkkUsMUBoZJgNqZA43QVWBOHqBnIvEVAC-FGveLdTr_EOvSzDPzDAlYT3NOLtyXDhpAwG_exKAq6zNRNLGg1N-EYEhHpw4"
  },
  {
    title: "Popular Jacket",
    desc: "The jacket everyone is talking about.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTMGeS7-YvuU6zSnd51Ylh6NgssESJEMgMizIvxZFlFIZ4swgBkvL1ZCAhpr2KcLTKuIOclQneBplCP6XaJI_fi3uptQNJSRvBhlT_YS9w0F1KJvttykygtFYrZlDi3NMTdcO_ZhkqRES1yRxliK4pftUsA74zUIVBxYVsDNKxMSrE6oGw_OmFDdXpYm4JdO0VBwtRGPKOXhr4MgRNzrkx8hHeNMqqfCZ3gzZrFb6rXbwZcjH_2TpicdfwZpdysJWE04TFrFBYw2Sl"
  },
  {
    title: "Favorite Kids Outfit",
    desc: "A top pick for kids' fashion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1vUXgZFO-jEifWSMHQJIIh7p626tTQwuGVSLqz_s4OgqoPwBTTZwST1m5E9yT48iNWPkcIT2Z73pps35sLwxVuHfg7LwUdJ4K6nAqCtVQ3OnweuGeDVuLrxrnLJ4U7TkoI3IOgJ0uF0RWapOOWBT1H-vMTze7GnFANMSxY9gBYStGRJqlWIR7xDQGkY4aUq6KK2FYgsYekXNIr3vDndi4JLciT4qE1_90_LHJ6VA2O2fqctFY5_7CNdPe1d5HfhjR7e__IOXzv5"
  }
];

export default function BestSellers() {
  return (
    <section className="py-8">
      <h2 className="text-[#101419] text-[22px] font-bold px-4 pb-3">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="p-3">
              <p className="text-[#101419] font-medium">{item.title}</p>
              <p className="text-[#58728d] text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
