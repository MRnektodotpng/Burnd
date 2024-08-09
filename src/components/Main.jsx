import { useState } from 'react'
import loopGif from '../assets/fyEP_light.gif'
import '../styles/Main.scss';


export default function Main(){
    return (
        <>
            <main className='main container pt-20 mx-auto' id='about'>
                <div className="main__inner px-2">
                {/* flex justify-between flex-wrap */}
                    <div className="frst_line flex flex-col mx-auto justify-center align-center pb-10 ">
                    <h3 className='container__title font-bold title'>WHO WE ARE</h3>
                    
                    <div className="blocks grid gap-12 grid-cols-2">
                        <div className="block ">
                            <h2 className='block__title text-2xl max-sm:text-lg title'>burnd IS A WEB3 FOUNDRY.</h2>
                            <p className='block__text plain_text'>
                            Burnd is a pioneering web technology company dedicated to advancing society's financial and creative freedom. 
                                <br />Our mission is to empower individuals and communities by leveraging cutting-edge digital tools and innovative solutions.
                            </p>
                        </div>
                        <div className="block ">
                            <h2 className='block__title text-2xl max-sm:text-lg title'><br /></h2>
                            <p className='block__text plain_text' >
                            At Burnd, we believe in a world where financial and creative freedom is accessible to all. We are committed to breaking down barriers and providing the tools necessary for everyone to achieve their full potential. 
                                <br />Our vision is driven by a passion for innovation and a dedication to making a meaningful impact.
                            </p>
                        </div>
                        
                    </div>
                        
                    </div>
                    <div className="scnd_line flex flex-col mx-auto justify-center align-center" >
                        <h3 className='container__title font-bold title'>KEY INITIATIVES</h3>
                        <div className="blocks grid gap-16 grid-cols-2">
                            <div className="block ">
                                    <h2 className='block__title text-2xl max-sm:text-lg title'>XXXX</h2>
                                    <p className='block__text plain_text'>
                                    Our mission to advance society’s financial and creative freedom is supported by a range of key initiatives. We are focused on creating digital financial solutions that empower individuals by providing greater access and control over their finances. Additionally, we develop creative platforms that encourage the free exchange of ideas and foster innovation. To ensure that everyone can benefit from our technology, we offer educational programs designed to help individuals understand and leverage digital tools effectively. Through these initiatives, we are committed to making a meaningful impact and driving positive change in society.

                                    </p>
                            </div>
                            <div className="block ">
                                <h2 className='block__title text-2xl max-sm:text-lg '><br /></h2>
                                <p className='block__text plain_text' >
                                We are always looking for passionate and talented individuals to join our team. If you are excited about the potential of digital technology to transform lives and want to be part of a dynamic and innovative company, we would love to hear from you.


                                </p>
                            </div>
                        </div>
                    
                    </div>

                    <div className="news__letter py-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm  leading-6 text-white font-bold title">
                            COMPANY NEWSLETTER
                        </label>
                        <div className="mt-2 form__inner ">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder='Email address'
                            className="email__form block w-full rounded-md border-0 py-4 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:ring-fuchsia-700 focus:ring-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                            />
                            <button className='submit fa-solid fa-arrow-right-long text-white'> </button>
                    
                        </div>
                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}