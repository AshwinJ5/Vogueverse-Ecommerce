export const FilterContent = () => (
    <div className="space-y-6 pb-24 lg:pb-0">
        <h3 className="text-xl font-bold mb-4 text-text-light hidden lg:block">Filters</h3>
        <div>
            <h4 className="font-bold mb-3 text-text-light">Category</h4>
            <ul className="space-y-2 text-sm text-secondary-text-light">
                {["T-Shirts", "Jeans", "Dresses", "Jackets", "Shoes"].map((cat, i) => (
                    <li key={i}>
                        <a href="#" className="hover:text-primary transition-colors">
                            {cat}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h4 className="font-bold mb-3 text-text-light">Brand</h4>
            <div className="space-y-2">
                {["Brand A", "Brand B", "Brand C", "Brand D"].map((brand, i) => (
                    <label key={i} className="flex items-center space-x-2 text-sm text-text-light cursor-pointer">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary/50 border-border-dark" />
                        <span>{brand}</span>
                    </label>
                ))}
            </div>
        </div>
        <div>
            <h4 className="font-bold mb-3 text-text-light">Price Range</h4>
            <div className="relative pt-1">
                <input
                    type="range"
                    min="0"
                    max="500"
                    defaultValue="75"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-secondary-text-light mt-2">
                    <span>$0</span>
                    <span>$500+</span>
                </div>
            </div>
        </div>

        <div>
            <h4 className="font-bold mb-3 text-text-light">Size</h4>
            <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL"].map((size, i) => (
                    <button
                        key={i}
                        className="flex items-center justify-center border border-border-light h-8 w-10 rounded-lg text-sm text-text-light hover:border-primary hover:text-primary transition-colors bg-white"
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
            <button className="w-full text-white bg-secondary hover:bg-secondary/90 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors">
                Apply Filters
            </button>
            <button className="w-full text-text-light bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors">
                Clear All
            </button>
        </div>
    </div>
);
