import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    const categories = [
        {
            name: "Dresses",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRGr4u8Cj76WHGZNB3lhwrW_S2BfuVhY0KlsKfMwN_LfK3Azx4bg3SqyuP2jw-0o8MuXoTQL9u77El8uPMJpf07ioVDJcKsurHjbUNGv7CZhI-ps_p1wosDcO5uFPZl_xm6lGpYjgT6GMKqWxV5QaPtZZT1U5GI7OFK4grRjmkWff44SQoToVG_HjZYhNFmJpnHbEustjsZX9Ll-YhLeEdFfW9eROEHhEXmaL1Dns0sUmBgmSmxlg_wr2H0M58TbEjFbqeeQBdxHyo",
            alt: "A woman wearing a stylish summer dress in a field of flowers.",
        },
        {
            name: "Tops",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDakNxC-KXyRM_bK3KKBkBs62vFgWRdJmz3J59iRcNDizXj70T8cHoZqYThZG6Ycjn47vDU0yOKQIV9T2Nr-2ybAMjnsa9GXsHHGMB7NePi-ZplkNfC3HiWitYaAsjdUj6TmunxERwIGYq9BwxxzXRfjW9TzI1uoFe7YB-BOZ7dMxgCe3DismBXSQGWklNoBSaL8gssdqSQdvENj2rBxaE8gd3_QLl4e_Iv8Yz4x27bshjLOdJj7bbdmtmzcssl9zxYj4id8NvaIKi0",
            alt: "Close-up of a collection of fashionable tops on hangers.",
        },
        {
            name: "Jeans",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBExjE0-HvOfhPip7D45imkud7DHU_oKg4JObIteM1aHjfbnRBPqT-VnoWGmf9a7f8MrplnJxPi8b9_gC-Rp31QYNcmw6UeX-nEyUCTIfIkfQakGf8ckojoDTuCQb_Nu1IO9s2JLgo-liERN3WKcpc1n6LZpM3om6spd3o8NlK5TU-KK_BkDgRQ0hjGyo0QF6gtqSM1zZjurbyiITx5GVXOcMRe2BRmd6wVbs7jRvNS5OImqk8Zz3kZAl_WMS24zFun_fDei21EXog",
            alt: "A person wearing trendy ripped jeans standing against a brick wall.",
        },
        {
            name: "Outerwear",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACNsEwpAG8sfQCOFTARZxgFXlZsksEStbm7TPhAvRFXinl8mkLNXUq-J71oeaC7cx-ADXfmCmYpRYQETqaEWe0jjkgVT94np2aQU4ML3i1m-xiiGKpK_FnhKH7wC2o3153kL7Wb1Vd2BivrTgL3JTsnR66l6Xzez7WNA1Hd9oYlFYutwlzSMpllveSGM8_zSNk-KDZN-LNBVQ0_7oaaKZXAMqkmYOGeJa2lYStAf_ZAT9yFSe-iEGpeyJlXOskpgQE9dg7hUbmHG3B",
            alt: "A man wearing a stylish winter jacket in a snowy landscape.",
        },
        {
            name: "Shoes",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlgmMNbFxRQSDmCpkUOVtgTjiWePkTeRzjFhY5GjryP9acyM69OKNDFJbTd09bXdhLrvCjN5mQF2mpQdDdyA4MOd5gXlIG7wRmuSrh5-GljOXkyAmjlQ45NANR6TA_98uo5IXNftOkhobsroABRyzynSMwBgVNwIv-OLjkoaJStPG-J1rfg-acJ5vCTxcCM492UnW9WdfOJG2gfVAZts2Si9hnvk7vIJnlVFIhex2E8oiaqBhOiRKt7a9xus-cH_uEu-RbXIYlmMHf",
            alt: "A collection of fashionable women's shoes displayed on shelves.",
        },
        {
            name: "Accessories",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUfE9AAiaO_14Ez0kO4IfPrTVZ4HjtNmrzZzou03SfsAsPqJ6YiSCY-XL2HoY9SfCB8lYLwp2jvcsCt9Yha2G1Ttu-5-iqIt4nJrz40Wpr1UPHA6TgZuy0SB60WJwHEwLaQULjIjLVEUQtFfukhPG880bF8zdH90nMyAidRjbi4zAl1hvAiwmUj9As-Bl7qkdF2SVR4R8NlIU37fLDGhow8tvvukEOedX7MetnrGQqNntF5S-oe5aUl-Ndx_2ogHe5FcF_dOBX3uIc",
            alt: "Stylish accessories like sunglasses, a watch, and a handbag arranged neatly.",
        },
        {
            name: "Men's T-Shirts",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfs3Qe1MXfFn9T_xjnFyTt1cZDeGhYVvu9PrCTpMxY_keUA88oPVLDEgH9vz-L-huScS04xpD65kJ6bO-Jk7y-ZIGgAiMwh5bL67DjdeHls1st_yEvxcLltNJt73ABXyC_fLb09DQlY1pMvIFNMsNCQ77b2_Mci9hgFVJE999242_hXBPgHnruovZfg52JGOYb0ko6YJcDqUAeLmWNxxtemVAeOjIjfOpmJJB7-GjsbXhbCNQjFzPGZ6IS3l_Wia3T3_ZSz4y1lHSr",
            alt: "A man in a casual t-shirt posing in an urban environment.",
        },
        {
            name: "Men's Shirts",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWc9VNGpw5zAo4vqoxbuojc5UWeLChlcGHx2zzPxEufvmEMKms5WAzeqyWynrHpkv_Z312UQf-hGIhfjF5LQO-SCx82Jm8GwNgHEJLfdTXJhRrhdJ46bRbY6ifM2fla3WMjU5StICt65diqudC0W0tRcV164X8DtpnO0xQP-ttXMWRNGVVsy1H5Q4BQsCQmq9zdMugZASaRk3OUo-CTlCeyvIfutfZ6jdAx5VQvntEK5XsdHIAbqNNmh8i75dt_3yLt9KX4y_BrAZi",
            alt: "A formal men's shirt on a mannequin.",
        },
    ];
    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full">
            <Navbar />
            <section className="container mx-auto px-4 py-12 md:py-16">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-sm tracking-widest text-secondary font-semibold">BROWSE BY CATEGORY</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-light">POPULAR CATEGORIES</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-secondary-text-light text-sm md:text-base px-4">
                        Explore our top categories, from casual wear to elegant accessories. Find your perfect style for any
                        occasion.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((item, index) => (
                        <Link
                            key={index}
                            href="/products"
                            className="group relative aspect-3/4 overflow-hidden rounded-xl block cursor-pointer"
                        >
                            <Image
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                alt={item.alt}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                src={item.image}
                            />

                            {/* Dark Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent -z-10 pointer-events-none"></div>

                            {/* Orange Hover Overlay Effect */}
                            <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
                                <h3 className="font-bold text-lg md:text-2xl text-white group-hover:text-primary">
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Categories;
