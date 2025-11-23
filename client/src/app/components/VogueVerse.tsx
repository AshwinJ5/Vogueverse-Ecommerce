import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
import Collection from "./Collection";
import Link from "next/link";

export const VogueVerse = () => {
    const brands = ["Terranova", "Sézane", "Zara", "Pull&Bear", "Bershka", "Forever 21"];

    const popularCategories = [
        {
            name: "T-shirt",
            image: "/img1.png",
            alt: "Woman wearing a stylish t-shirt",
        },
        {
            name: "Shirt",
            image: "/img2.png",
            alt: "Man wearing a crisp formal shirt",
        },
        {
            name: "Pants",
            image: "/img4.png",
            alt: "Person wearing trendy pants",
        },
        {
            name: "Watches",
            image: "/img5.png",
            alt: "Close-up of a luxury watch on a wrist",
        },
        {
            name: "Sarees",
            image: "/img6.png",
            alt: "Woman in an elegant saree",
        },
        {
            name: "Sandals",
            image: "/img7.png",
            alt: "Fashionable sandals",
        },
        {
            name: "Shoes",
            image: "/img8.png",
            alt: "Stylish modern shoes",
        },
    ];

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full">
            <Navbar />

            <main className="grow w-full">
                {/* Hero Section */}
                <section className="bg-[#F0F0F0]">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 items-center">
                            {/* Text Content */}
                            <div className="py-12 md:py-24 md:pr-8 order-2 md:order-1 text-center md:text-left">
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight">
                                    New Collection <br className="hidden md:block" />
                                    <span className="text-primary">Spring-Summer</span>
                                </h1>
                                <p className="mt-4 text-secondary-text-light text-sm md:text-base max-w-md mx-auto md:mx-0">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have
                                    alteration.
                                </p>
                                <p className="mt-4 text-lg font-bold text-black">
                                    from <span className="text-secondary">$195.00</span>
                                </p>
                                <Link href={"/products"}>
                                    <button className="mt-6 mx-auto md:mx-0 flex items-center justify-center rounded-md h-12 px-8 bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-all uppercase hover:scale-102 cursor-pointer">
                                        View more
                                    </button>
                                </Link>
                            </div>

                            {/* Hero Image */}
                            <div className="relative h-[300px] sm:h-[400px] md:h-full min-h-[300px] md:min-h-[500px] order-1 md:order-2 w-full">
                                <Image
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    alt="A high-fashion model posing in an elegant autumn coat"
                                    className="object-cover object-top"
                                    src="/banner001.png"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#F0F0F0] via-transparent to-transparent md:hidden"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands Section */}
                <section className="py-6 sm:py-12 lg:py-16 bg-white overflow-hidden">
                    <div className="w-full overflow-y-hidden py-2">
                        <Marquee
                            autoFill
                            speed={40}
                            gradient={true}
                            gradientColor="white"
                            gradientWidth={100}
                            style={{ overflowY: "hidden" }}
                        >
                            {brands.length > 0 ? (
                                brands.map((brand) => (
                                    <p
                                        key={brand}
                                        className="text-xl md:text-3xl font-semibold text-gray-400 text-center tracking-wider mx-8 md:mx-16"
                                    >
                                        {brand}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center mx-6">No brands available</p>
                            )}
                        </Marquee>
                    </div>
                </section>

                {/* Men & Women Categories */}
                <section className="container mx-auto px-4 py-6 sm:py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Men */}
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden group rounded-lg bg-primary/10">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                                alt="Men's Collection"
                                src="/image005.png"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent"></div>
                            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-black">MEN</h2>
                                <p className="mt-1 text-secondary-text-light text-sm">New Vibes</p>
                                <Link
                                    href={"/products"}
                                    className="mt-4 w-fit h-10 px-6 rounded-md bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-all flex justify-center items-center"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Women */}
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden group rounded-lg bg-secondary/10">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                                alt="Women's Collection"
                                src="/image004.png"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/40 to-transparent"></div>
                            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-black">WOMEN</h2>
                                <p className="mt-1 text-secondary-text-light text-sm">New Checks</p>
                                <Link
                                    href={"/products"}
                                    className="mt-4 w-fit h-10 px-6 rounded-md bg-secondary text-black text-sm font-bold hover:bg-opacity-90 transition-all flex just  items-center"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Categories */}
                <section className="container mx-auto px-4 py-6 sm:py-12 lg:py-16">
                    <div className="text-center mb-8 md:mb-12">
                        <p className="text-sm tracking-widest text-secondary font-semibold">BROWSE BY CATEGORY</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-light">POPULAR CATEGORIES</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-secondary-text-light text-sm md:text-base px-4">
                            Explore our top categories, from casual wear to elegant accessories. Find your perfect style for
                            any occasion.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {popularCategories.map((item, index) => (
                            <Link
                                key={index}
                                className="group relative aspect-3/4 overflow-hidden rounded-xl block cursor-pointer"
                                href="/products"
                            >
                                <Image
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    alt={item.alt}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={item.image}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                                    <h3 className="font-bold text-xl md:text-2xl text-white">{item.name}</h3>
                                </div>
                            </Link>
                        ))}

                        {/* Explore More Card */}
                        <div className="group relative aspect-3/4 overflow-hidden rounded-xl flex items-center justify-center p-4 text-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">
                            <Link className="absolute inset-0 z-10" href="/categories">
                                <span className="sr-only">Explore More Categories</span>
                            </Link>
                            <div className="relative z-0 text-center">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-4xl">arrow_forward</span>
                                </div>
                                <h3 className="mt-4 font-bold text-xl md:text-2xl text-text-light">Explore More</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Items */}
                <Collection />
            </main>

            <Footer />
        </div>
    );
};
