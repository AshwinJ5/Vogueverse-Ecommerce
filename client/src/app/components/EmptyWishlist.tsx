import Link from "next/link";

const EmptyWishlist = () => {
    return (
        <div>
            <div className="font-display bg-background-light text-text-light flex flex-col w-full">
                {/* Main Content Area */}
                <main className="flex flex-1 flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center gap-8 max-w-lg w-full">
                        {/* Empty State Icon */}
                        <div className="text-primary animate-in fade-in zoom-in duration-500">
                            <svg
                                className="h-24 w-24 sm:h-32 sm:w-32"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 122.88 107.39"
                                fill="currentColor"
                            >
                                <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center gap-3">
                            <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-text-light">
                                Your Wishlist Awaits!
                            </h1>
                            <p className="text-secondary-text-light text-base sm:text-lg font-normal max-w-xs sm:max-w-sm">
                                See something you love? Add it to your wishlist by clicking the heart icon on any product.
                            </p>
                        </div>

                        {/* Action Button */}
                        <Link
                            href="/products"
                            className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                        >
                            Browse Products
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EmptyWishlist;
