import Image from "next/image";
import Link from "next/link";

const Collection = () => {
    const featuredItems = [
        {
            name: "Flowy Maxi Dress",
            price: "$129.99",
            image: "/image001.png",
            alt: "Woman wearing a flowy, floral maxi dress walking through a sunlit field.",
        },
        {
            name: "Suede Ankle Boots",
            price: "$189.50",
            image: "/image002.png",
            alt: "Man in a classic black leather jacket leaning against a brick wall in an urban setting.",
            hasActions: true,
        },
        {
            name: "Tailored Wool Blazer",
            price: "$210.00",
            image: "/image003.png",
            alt: "Woman wearing a sharp, tailored grey wool blazer over a white shirt.",
        },
        {
            name: "Weekend T-Shirt",
            price: "$49.27",
            image: "/image006.png",
            alt: "Close-up of stylish brown suede ankle boots on a cobblestone street.",
        },
    ];
    return (
        <>
            {/* Featured Items Section */}
            <section className="container mx-auto px-4 py-6 sm:py-12 lg:py-16">
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-sm tracking-widest text-secondary font-semibold">SEE OUR COLLECTION</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-light">STORE FEATURED ITEMS</h2>
                </div>

                {/* 
       Grid Layout Update:
       - grid-cols-2: Shows 2 items per row on mobile (smaller cards).
       - lg:grid-cols-4: Shows 4 items per row on large screens.
       - gap-x-4 gap-y-8: Tighter spacing on mobile.
    */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
                    {featuredItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 group text-center">
                            <div className="relative w-full aspect-3/4 overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    alt={item.alt}
                                    src={item.image}
                                />

                                {/* 
                        Action Buttons (Like & Share)
                        - Mobile: opacity-100 (Always visible)
                        - Desktop (md): opacity-0 (Hidden), group-hover:opacity-100 (Visible on hover)
                    */}
                                <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-10">
                                    <button className="h-8 w-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-light">
                                        <span className="material-symbols-outlined text-lg">favorite</span>
                                    </button>
                                    <button className="h-8 w-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-light">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                    </button>
                                </div>

                                {/* 
                        Add to Cart Button
                        - Mobile: opacity-100 (Always visible)
                        - Desktop (md): opacity-0, translate-y-2.5 (Hidden & pushed down), slides up on hover.
                    */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] opacity-100 md:opacity-0 md:translate-y-2.5 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                                    <button className="w-full h-9 md:h-11 bg-primary text-white text-xs md:text-sm font-bold tracking-wider shadow-lg rounded hover:bg-opacity-90">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>

                            <div className="mt-1 md:mt-2">
                                <p className="text-sm md:text-base font-medium leading-normal truncate">{item.name}</p>
                                <p className="text-secondary-text-light text-xs font-medium">BASEL</p>
                                <p className="text-text-light text-sm font-bold mt-1">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-12 text-center flex justify-center items-center">
                    <Link href={"/products"}  className="px-8 py-3 border border-gray-300 rounded-lg text-sm font-bold text-text-light hover:bg-black hover:text-white hover:border-black transition-colors duration-300 uppercase tracking-wide w-max">
                        Load More Products
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Collection;
