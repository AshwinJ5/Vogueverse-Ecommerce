"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptyWishlist from "../components/EmptyWishlist";

const Wishlist = () => {
  // --- Mock Data & State ---
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Fiery Red Dress",
      price: "$129.99",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsCcUNotMWx_3dcus7hEKF11lU0EHpzkGG9VA1vniahx6zHRwxlmOJc31nEAPEePbHkljwxE_5MrkAZyoG0LFh5w0BsipU4Xi2fKEBycBbeE0yk8QD_ZYK7mp5feMvALf88sxzUmUqqj_eoOVmfC27RwwfW94L9mG0od9ygxSNVVtX9mf3KozXUqbSAC5PeeGYs7z9MuMqHbi9UTQMzpeSz_ZNCGLHR2YAqUvJWFWgvTpQibGRL_7FMPQW88NjftiiKRPYIEpCqf3O",
      alt: "Model wearing a fiery red dress",
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      price: "$89.99",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgXD7epbs7Q3JmVc2mDUP7jgPF259lk45OzThi8RArFs74dCSKxWfDDSSISSrKaiCwHHWD9vVjS9Cq6IpMalTpfykbnzThrrtOAnF9ih34hqUsmp15ITa50l1CILHpNHwV7qz97adoAS_A1-L7572xxGalektCGUHVBF_1rHXBYSyXMvjNrLqGBN2zE7H9SMOFgTdgG8bGCu26b3Ci6iEjh0bkshPX0VTXzIw4rm7kEoYEr4UTOeXJTmQGC0m1MIHctKHYj02lu7xR",
      alt: "Vintage denim jacket",
    },
    {
      id: 3,
      name: "Classic Leather Tote",
      price: "$159.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGgXssl9Ev6hWjJO7TgP27m8y4ycVYTt4_a4pX1gWpWEcRSF07hXHAXxSY-ekuMPUZ3chi43eUG-86AQ_BCeGk7fszJiSz3GqVZxvhohGhwcseVr2Ega-oTK6yjxLN7ZOdHqos1vYhQx7fhzgXfgu34p9ZDCMwR0ooi5Zeyt-LEkvC_4mkm5pj3t9DhI9aj3MNgRVq78DL5lfyR7UhfB9WZCvEDSXdAHov8S_e3YsgJsgni0E9L2KL5fG6_40PXPZK01eBPl-CICJv",
      alt: "Brown leather tote bag",
    },
    {
      id: 4,
      name: "Urban Explorer Sneakers",
      price: "$110.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3JPYoBSp-DRyQYyqVdJW2XWxovzWvANRdAmH597waWmtEUKzEPozo2VIZ-7i8ETU0PA6lIRdJ9eyBP2LvB-zveZ9Odpgr9M694VVsTi46NdlfHZHOnqkWp-TfwsadwfYG_dKJTHWKK5CbCDSvhzKiS2u3dk0EfeqUr4nnqqIh98wdoHwbsgWIHvCBDOsgNTVZcO7mrX1nKNJ5jEKw4Sr-_DJYtlWqSOkfm8xqO4RC3xrbKsgYdafZXSoZOdG0gE4wZc28FIiItieU",
      alt: "White and orange sneakers",
    },
    {
      id: 5,
      name: "Elegant High-Waist Trousers",
      price: "$95.50",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwe0GqeGND1HxrEceMdg2uAc3HkK0FWttgW2hP6Dq_nCN9VLeKbSOuT7TWclX2eGO-jnaMUeWD6sTZ47tn-AY3ZHKlzmKfGSsITIWZmu4waMMxzK5WrDdcX-GS6_A30fx5ExNcONNmOA9UZAKeQ3lS9KIQsnfkxrMP4pXwAX9qP07VB6gaZ6XcG_7OlQx_9AbogRhGNoKEog3A0Fg7kxswsAe-oHOyDbE4gsfX2FAH3AzTaAx7euXWjKfCzbWJH7gltj1Snb0QvnsT",
      alt: "Black high-waist trousers",
    },
  ]);

  // --- Handlers ---
  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-5">
        <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col">
          <main className="flex-grow">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 md:p-8">
              <div className="flex min-w-72 flex-col gap-2">
                <h1 className="text-text-light text-4xl font-black tracking-tighter">My Wishlist</h1>
                <p className="text-text-subtle-light text-base font-normal">
                  Your saved items for future inspiration and purchases.
                </p>
              </div>
            </div>

            {wishlistItems.length > 0 ? (
              /* ImageGrid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-8">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card-light shadow-sm transition-shadow hover:shadow-lg border border-border-light"
                  >
                    {/* Remove Button */}
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-card-light/80 backdrop-blur-sm text-accent hover:text-primary transition-colors shadow-sm"
                        title="Remove from Wishlist"
                      >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-3/4 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-4 p-4 pt-0">
                      <div>
                        <p className="text-text-light text-base font-semibold leading-normal truncate">
                          {item.name}
                        </p>
                        <p className="text-text-subtle-light text-sm font-normal leading-normal">
                          {item.price}
                        </p>
                      </div>
                      <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide transition-opacity hover:opacity-90 hover:shadow-md">
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyWishlist/>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;