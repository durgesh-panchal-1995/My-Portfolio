export default function Services() {
    const services = [
        {
            name: 'UI/UX Development',
            icon: './assets/new-icons/frontend-development.png'
        },
        {
            name: 'Mobile Responsive UI',
            icon: './assets/new-icons/mobile-responsive.png',
        },
        {
            name: 'Accessibility',
            icon: './assets/new-icons/accessibility.png',
        },
        {
            name: 'Design Systems',
            icon: './assets/new-icons/cross-browser.png',
        },
        {
            name: 'Frontend Performance Optimization',
            icon: './assets/new-icons/performance-optimization.png',
        },
        {
            name: 'Debugging and Bug-fixing',
            icon: './assets/new-icons/debugging.png',
        },
        {
            name: 'Unit Testing',
            icon: './assets/new-icons/unit-testing.png',
        },
        {
            name: 'Agile & Scrum Mthodology',
            icon: './assets/new-icons/agile-scrum.png',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Senior Frontend Developer from Mumbai, India with 7 years of experience in multiple companies like Houzeo, Docsmart and e-Zest.</p>
            <div className="grid grid-cols-4 gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-4 py-4 hover:shadow-black  hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10 dark:invert dark:brightness-0 dark:contrast-200" />
                        <h3 className="text-md my-2 text-gray-700 dark:text-white font-semibold">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}