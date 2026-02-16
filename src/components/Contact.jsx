import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="w-full px-[12%] py-14 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 font-Ovo">
                <div>
                    <p className="text-sm lg:text-lg text-center lg:text-left">Contact: 8097275967</p>
                </div>
                <div>
                     <p className="text-sm lg:text-lg text-center lg:text-left">Email: durgeshpanchal1995@gmail.com</p>
                </div>
             
                <div>
                     <p className="text-sm lg:text-lg text-center lg:text-left">LinkedIn: 
                        <a href="https://www.linkedin.com/in/durgeshpanchal95/" target="_blank" className="text-blue-500 hover:underline"> https://www.linkedin.com/in/durgeshpanchal95/</a></p>
                </div>
                 <div>
                     <p className="text-sm lg:text-lg text-center lg:text-left">Github: 
                        <a href="https://github.com/durgeshpanchal95" target="_blank" className="text-blue-500 hover:underline"> https://github.com/durgeshpanchal95</a></p>
                </div>
            </div>
        </div>
    )
}