import { useState } from 'react';

export default function Work() {
    const [showAll, setShowAll] = useState(false);
    
    const work = [
        {
            name: 'MayFair Housing',
            icon: './assets/mayfair.png',
            description: 'Appreciating You',
            link: 'https://mayfairhousing.com/',
        },
        {
            name: 'Houzeo',
            icon: './assets/houzeo.webp',
            description: "America's Best Home Buying and Selling Platform",
            link: 'https://www.houzeo.com/',
        },
        {
            name: 'DocSmart',
            icon: './assets/docsmart.png',
            description: 'Inspiring Health Care',
            link: 'https://www.docsmart.in/',
        },
        {
            name: 'Guitar Store',
            icon: './assets/guitat.avif',
            description: "guitar store website",
            link: 'https://durgesh-panchal-1995.github.io/Responsive-React-UI-Platform/',  
        },
        {
            name: 'Sunteck Realty',
            icon: './assets/sunteck.png',
            description: 'Innovative Design & Luxury Living',
            link: 'https://www.sunteckindia.com/',
        },
        {
            name: 'Canara Robeco Mutual Fund',
            icon: './assets/canara-robecco.jpg',
            description: 'UI/UX Design',
            link: 'https://www.canararobeco.com/',
        },
        {
            name: 'PNB Metlife Insurance',
            icon: './assets/pnb-metlife-insurance.avif',
            description: 'UI/UX Design',
            link: 'https://www.pnbmetlife.com/',
        },
        {
            name: 'Sunshine Fertiltiy',
            icon: './assets/sunshine-fertility.jpeg',
            description: 'Fertitliy & IVF Center',
            link: 'https://sunshineivf.com/',
        },
        {
            name: 'Bailey Walsh',
            icon: './assets/bailey.jpeg',
            description: 'Protecting Your Innovations Worldwiden',
            link: 'https://bailey-walsh.com/',
        },
        {
            name: 'Vue Jewellery Brand',
            icon: './assets/brand-promotion.jpeg',
            description: 'vue brand promotions',
            link: 'https://vue-jewellery-brand.netlify.app/',
        },
         {
            name: 'Music Band',
            icon: './assets/dummy-image.png',
            description: 'music band Website    ',
            link: 'https://react-musical-static-template.netlify.app/   ',
        }   
    ];

    

    // Split work items into visible (first 8) and hidden (rest)
    const visibleWork = work.slice(0, 4);
    const hiddenWork = work.slice(4);

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>

            <div className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10 gap-5 dark:text-black">
                {/* Always visible work items */}
                {visibleWork.map((workItem) => (
                    <a 
                        key={workItem.name}
                        href={workItem.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div 
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative border cursor-pointer group" 
                            style={{ backgroundImage: `url(${workItem.icon})` }}
                        >
                            <div className="bg-gradient-to-r from-[#b820e6] to-[#da7d20] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold text-white">{workItem.name}</h2>
                                    <p className="text-sm text-gray-700 text-white">{workItem.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
                
                {/* Hidden work items with smooth animation */}
                <div 
                    className={`col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 overflow-hidden transition-all duration-700 ease-in-out ${
                        showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    {hiddenWork.map((workItem) => (
                        <a 
                            key={workItem.name}
                            href={workItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div 
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative border cursor-pointer group" 
                                style={{ backgroundImage: `url(${workItem.icon})` }}
                            >
                                <div className="bg-gradient-to-r from-[#b820e6] to-[#da7d20] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
                                    <div>
                                        <h2 className="font-semibold text-white">{workItem.name}</h2>
                                        <p className="text-sm text-gray-700 text-white">{workItem.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Show More/Less Button */}
            
            <button 
                onClick={() => setShowAll(!showAll)}
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
            >
                <span className="font-Ovo">{showAll ? 'Show less' : 'Show more'}</span>
                <svg
                        className={`w-5 h-5 text-gray-700 dark:text-white transition-transform duration-500 ${
                            showAll ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
            </button>
        </div>
    );
}