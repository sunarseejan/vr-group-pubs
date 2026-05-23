import React from "react";

export default function VRGroupHomepage() {
  const pubs = [
    {
      name: "The Jolly Sailor",
      location: "West Bromwich",
      address: "Oldbury Road, West Bromwich, B70 9EF",
      image:
        "/src/assets/jolly_sailor.gif",
    },
    {
      name: "The Railway Inn",
      location: "Oldbury",
      address: "96 Bromford Road, West Bromwich, B70 7JB",
      image:
        "/src/assets/railway_inn.jpeg",
    },
    {
      name: "The Pendulum",
      location: "Wolverhampton",
      address: "Blaydon Road, Pendeford, WV9 5NP",
      image:
        "/src/assets/the_pendulum.jpg",
    },
    {
      name: "The Firs",
      location: "Castlecroft",
      address: "Windmill Lane, Wolverhampton, WV3 8HG",
      image:
        "/src/assets/the_firs.jpg",
    },
    {
      name: "Port 'N' Ale",
      location: "Tipton",
      address: "178 Horseley Heath, DY4 7DS",
      image:
        "/src/assets/port-n-ale.jpg",
    },
    {
      name: "The Fradley Arms",
      location: "Lichfield",
      address: "Rykneld Street, WS13 8RD",
      image:
        "/src/assets/fradley_arms.jpg",
    },
    {
      name: "The Clock Tower",
      location: "Telford",
      address: "Station Road, TF2 8JY",
      image:
        "/src/assets/clock_tower.jpg",
    },
    {
      name: "The Dilke",
      location: "Walsall",
      address: "Aldridge Road, WS4 2JP",
      image:
        "/src/assets/dilke.jpg",
    },
  ];

  const menuHighlights = [
    {
      name: "Butter Chicken",
      desc: "Creamy tomato sauce finished with butter and spices.",
    },
    {
      name: "Lamb Rogan Josh",
      desc: "Slow cooked lamb with fresh tomatoes and aromatic spices.",
    },
    {
      name: "Mixed Grill",
      desc: "A sizzling platter of tikka, wings, kebab and lamb chops.",
    },
    {
      name: "Vegetable Biryani",
      desc: "Traditional biryani served with raita or curry sauce.",
    },
  ];

  const menuData = {
    starters: [
      "Basket of Papadam with Chutneys - £3.50",
      "Chopped Onions - £2.50",
      "Onion Rings - £4.99",
      "Onion Pakora - £5.50",
      "Vegetable Samosa - £5.75",
      "Spring Roll - £5.50",
      "Aloo Tikki - £6.50",
      "Veg Soya Tikka Shashlik - £8.95",
      "Paneer Tikka - £9.99",
      "Chilli Paneer - £9.50",
      "Chicken Pakora - £8.99",
      "Fish Pakora - £9.50",
      "Chilli Chicken - £9.50",
    ],

    vegCurries: [
      "Daal - £8.95",
      "Mixed Vegetable Curry - £9.50",
      "Saag - £8.95",
      "Saag Paneer - £9.95",
      "Paneer Butter Masala - £10.50",
      "Chana Masala - £8.95",
      "Mutter Paneer - £9.95",
      "Malai Kofta - £9.95",
    ],

    chickenCurries: [
      "Butter Chicken - £11.40",
      "Chicken Tikka Masala - £11.25",
      "Chicken Korma - £11.25",
      "Chicken Madras - £10.95",
      "Chicken Vindaloo - £10.95",
      "Chicken Balti - £10.95",
      "Chicken Dhansak - £10.95",
      "Saag Chicken - £10.95",
    ],

    lambCurries: [
      "Lamb Rogan Josh - £11.99",
      "Lamb Curry - £11.50",
      "Lamb Madras - £11.75",
      "Lamb Vindaloo - £11.75",
      "Saag Lamb - £11.95",
    ],

    biryani: [
      "Vegetable Biryani - £10.75",
      "Chicken Biryani - £11.95",
      "Lamb Biryani - £12.75",
      "Prawn Biryani - £14.99",
    ],

    breads: [
      "Plain Naan - £2.50",
      "Butter Naan - £2.75",
      "Garlic Naan - £2.99",
      "Chilli Naan - £3.25",
      "Peshwari Naan - £3.50",
      "Keema Naan - £3.75",
      "Cheese Naan - £3.50",
    ],

    chipsSides: [
      "Masala Chips - £4.50",
      "Chilli Chips - £4.95",
      "Battered Chips - £4.50",
      "Battered Masala Chips - £5.25",
      "Battered Chilli Chips - £5.50",
    ],

    burgers: [
      "Chicken Burger with Chips - £7.50",
      "Veg Burger with Chips - £6.50",
      "Chicken Nuggets with Chips - £5.50",
      "Fish Fingers with Chips - £6.00",
    ],
  };

  const [selectedPub, setSelectedPub] = React.useState(null);

  return (
    <div className="min-h-screen bg-[#0F1720] text-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-yellow-700/20 bg-[#0F1720]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-black tracking-widest text-yellow-500">
              VR GROUP
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Premium Pub Experience
            </p>
          </div>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#pubs" className="transition hover:text-yellow-400">
              Pubs
            </a>
            <a href="#menu" className="transition hover:text-yellow-400">
              Menu
            </a>
            <a href="#reservation" className="transition hover:text-yellow-400">
              Reservations
            </a>
            <a href="#contact" className="transition hover:text-yellow-400">
              Contact
            </a>
          </div>

          <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400">
            Book Table
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400&auto=format&fit=crop')",
          }}
        />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-yellow-400">
            VR Group Hospitality
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Discover The Finest
            <span className="block text-yellow-500">Pub Dining Experience</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore premium pubs, authentic Indian cuisine, takeaway ordering,
            reservations and unforgettable dining experiences across the
            Midlands.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-400">
              Explore Pubs
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold transition hover:bg-white/10">
              View Menus
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-yellow-700/10 bg-[#111C28]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {[
            ["8+", "Premium Pubs"],
            ["100+", "Menu Items"],
            ["12:00 24:00", "Opening Hours"],
            ["10000+", "Happy Guests"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-4xl font-black text-yellow-500">
                {number}
              </div>
              <div className="mt-2 text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PUBS */}
      <section id="pubs" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-yellow-500">
            Our Locations
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Explore Our Pubs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pubs.map((pub) => (
            <div
              key={pub.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#162433] transition duration-300 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pub.image}
                  alt={pub.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-3xl font-black">{pub.name}</h3>
                  <p className="text-yellow-400">{pub.location}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-6 text-sm leading-7 text-gray-300">
                  {pub.address}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedPub(pub)}
                    className="rounded-xl bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400"
                  >
                    View Menu
                  </button>

                  <button className="rounded-xl border border-white/15 bg-white/5 py-3 font-semibold transition hover:bg-white/10">
                    Reserve
                  </button>

                  <button className="rounded-xl border border-white/15 bg-white/5 py-3 font-semibold transition hover:bg-white/10">
                    Eat-In
                  </button>

                  <button className="rounded-xl border border-white/15 bg-white/5 py-3 font-semibold transition hover:bg-white/10">
                    Takeaway
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="bg-[#111C28] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 uppercase tracking-[0.3em] text-yellow-500">
              Signature Dishes
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Customer Favourites
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {menuHighlights.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-[#162433] p-8 transition hover:border-yellow-500/40"
              >
                <div className="mb-5 text-5xl">🍽️</div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  {item.name}
                </h3>
                <p className="mt-4 leading-7 text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500 to-yellow-600 p-12 text-black shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 uppercase tracking-[0.3em] text-black/70">
                Reservations
              </p>

              <h2 className="text-5xl font-black leading-tight">
                Reserve Your Table Today
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/80">
                Book your dining experience across all VR Group pubs with our
                modern reservation platform.
              </p>
            </div>

            <div className="rounded-3xl bg-black/10 p-8 backdrop-blur-md">
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Select Pub"
                  className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4 outline-none"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="date"
                    className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4 outline-none"
                  />

                  <input
                    type="time"
                    className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4 outline-none"
                  />
                </div>

                <select className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4 outline-none">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8 Guests</option>
                </select>

                <button className="rounded-2xl bg-black py-4 text-lg font-bold text-white transition hover:bg-[#111]">
                  Confirm Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#111C28] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 uppercase tracking-[0.3em] text-yellow-500">
              Why VR Group
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Hospitality Reimagined
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Premium Dining",
              "Takeaway Available",
              "Family Friendly",
              "Authentic Indian Cuisine",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-[#162433] p-8 text-center"
              >
                <div className="mb-5 text-5xl">⭐</div>
                <h3 className="text-2xl font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#0B1118]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black text-yellow-500">
              VR GROUP
            </h3>
            <p className="mt-5 leading-7 text-gray-400">
              Premium hospitality experiences across the Midlands with modern
              dining, takeaway and reservation solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xl font-bold">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <p>Home</p>
              <p>Our Pubs</p>
              <p>Reservations</p>
              <p>Menus</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xl font-bold">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>info@vrgroup.co.uk</p>
              <p>West Midlands, United Kingdom</p>
              <p>+44 0000 000000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © 2026 VR Group Pubs. All rights reserved.
        </div>
      {/* MENU MODAL */}
      {selectedPub && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#162433] p-8 text-white shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-black text-yellow-500">
                  {selectedPub.name}
                </h2>
                <p className="mt-2 text-gray-400">Menu Preview</p>
              </div>

              <button
                onClick={() => setSelectedPub(null)}
                className="rounded-full bg-red-500 px-5 py-2 font-bold"
              >
                Close
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                ["Starters", menuData.starters],
                ["Veg Curries", menuData.vegCurries],
                ["Chicken Curries", menuData.chickenCurries],
                ["Lamb Curries", menuData.lambCurries],
                ["Biryani", menuData.biryani],
                ["Naans & Breads", menuData.breads],
                ["Chips & Sides", menuData.chipsSides],
                ["Burgers & Snacks", menuData.burgers],
              ].map(([title, items]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#0F1720] p-6"
                >
                  <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                    {title}
                  </h3>

                  <div className="space-y-3 text-gray-300">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-yellow-500/30"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      </footer>
    </div>
  );
}
