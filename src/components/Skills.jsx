import { useState } from 'react';

export default function Skills() {
    const [showAll, setShowAll] = useState(false);
    
    const skills = [
        {
            name: 'Frontend development',
            link: '#',
        },
        {
            name: 'Responsive Design',
            link: '#',
        },
        {
            name: 'HTML & CSS',
            link: '#',
        },
        {
            name: 'Bootstrap',
            link: '#',
        },
        {
            name: 'Javascript',
            link: '#',
        },
        {
            name: 'Jquery',
            link: '#',
        },
        {
            name: 'React Js',
            link: '#',
        },
        {
            name: 'Vue Js',
            link: '#',
        },
        {
            name: 'Figma & Photoshop', 
            link: '#',
        },
        {
            name: 'JIRA', 
            link: '#',
        },
        {
            name: 'Git & Github', 
            link: '#',
        },
        {
            name: 'Agile & Scrum', 
            link: '#',
        },
        {
            name: 'Page Speed & Performance Optimization', 
            link: '#',
        },
        {
            name: 'Module & Cross-Browser Testing', 
            link: '#',
        },
        {
            name: 'Component-Based Architecture', 
            link: '#',
        },
        {
            name: 'Code Reviews & Version Control', 
            link: '#',
        },
        {
            name: 'State Management (Redux, Vuex)', 
            link: '#',
        },
        {
            name: 'Team mentorship', 
            link: '#',
        },
        {
            name: 'Webpack & vite', 
            link: '#',
        },
        {
            name: 'Eslint & Prettier', 
            link: '#',
        },
    ];

    // Split skills into visible (first 8) and hidden (rest)
    const visibleSkills = skills.slice(0, 4);
    const hiddenSkills = skills.slice(4);

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i have</h4>
            <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 my-10">
                {/* Always visible skills */}
                {visibleSkills.map((skill) => (
                    <div 
                        key={skill.name} 
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-4 py-3 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                    >
                        <img src={skill.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-2 pt-1 text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{skill.description}</p>
                    </div>
                ))}
                
                {/* Hidden skills with smooth animation */}
                <div 
                    className={`col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-hidden transition-all duration-700 ease-in-out ${
                        showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    {hiddenSkills.map((skill) => (
                        <div 
                            key={skill.name} 
                            className="border border-gray-300 dark:border-white/30 rounded-lg px-4 py-3 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                        >
                            <img src={skill.icon} alt="" className="w-10" />
                            <h3 className="text-lg my-2 pt-1 text-gray-700 dark:text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More/Less Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-2 px-8 py-2 border border-gray-300 dark:border-white/30 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-300"
                >
                    <span className="text-gray-700 dark:text-white font-Ovo">
                        {showAll ? 'Show Less' : 'Show More'}
                    </span>
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
        </div>
    );
}  