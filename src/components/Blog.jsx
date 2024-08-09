
import React, { useEffect,useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/Blog.scss';



export default function Blog(){
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = React.useState(false);
    useEffect(() => {
      if (hasAnimated) {
        controls.start({ opacity: 1 });
      }
    }, [controls, hasAnimated]);
  
    return(

        <div className="blog pt-20">
            <div className="container mx-auto px-2">
            <div className="from_blog ">
                <h2 className='font-bold title'>FROM THE BLOG</h2>
                <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={ {duration: 1} }
                 animate={controls}
                 viewport={{ once: true, amount: 0.1 }}
           
                >
                <div className="articles">
                    <a href="#" className='article__link relative'>
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>01</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-3xl title max-md:text-lg max-sm:text-sm max-xs:text-xs'>A New Era for Burnd</h3>
                                    <p className='text-xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>It’s been a while since we last spoke. Today, we end the silence with several major announcements that mark the beginning of an exciting new chapter for Burnd.</p>
                                    <h5 className='uppercase font-medium max-md:text-xs'>read more</h5>
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>

                    

           
                    <a href="#" className='article__link relative ' >
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>02</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-3xl title max-md:text-lg max-sm:text-sm max-xs:text-xs'>Burnd Announces Strategic Investment</h3>
                                    <p className='text-xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>We are excited to share that Burnd has secured a strategic investment to further our mission of mainstream consumer adoption. This investment will help us accelerate our growth and expand our reach.</p>
                                    <h5 className='uppercase font-medium max-md:text-xs'>read more</h5>
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>
                  

                </div>
                </motion.div>

                <h2 className='font-bold pt-20 title'>AS FEATURED IN</h2>


                <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={ {duration: 1} }
                 animate={controls}
                 viewport={{ once: true, amount: 0.1 }}
           
                >
                    
                <div className="articles">
                    <a href="#" className='article__link relative'>
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>01</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-sm uppercase title'>Fortune</h3>
                                    <p className='text-3xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>Burnd Raises $25M To Revolutionize Digital Innovation</p>
                              
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='article__link relative'>
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>02</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-sm uppercase title'>THE NEW YORKER</h3>
                                    <p className='text-3xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>Burnd's Innovative Approach to Digital Art and Creativity</p>
                              
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='article__link relative'>
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>03</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-sm uppercase title'>DECRYPT</h3>
                                    <p className='text-3xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>An Original Banksy Has Been Innovatively Transformed</p>
                              
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
             
                </motion.div>
                
                <h2 className='font-bold pt-20 title'>AS FEATURED IN</h2>
                <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={ {duration: 1} }
                 animate={controls}
                 viewport={{ once: true, amount: 0.1 }}
           
                >
                <div className="articles">
                    <a href="#" className='article__link relative'>
                        <div className="article  flex  items-center py-5 ">
                            <div className='   pr-3'> <p className='text-gray-500 text-xl'>01</p></div>
                            <div className="article__inner flex items-center justify-between w-dvw">
                                <div className="article__text ">
                                    <h3 className='text-sm uppercase title'>PRESS KIT</h3>
                                    <p className='text-3xl plain_text max-md:text-md max-sm:text-sm max-xs:text-xs'>Brand Assets & Guidelines</p>
                              
                                </div>
                                <div className='flex  '>
                                    <i className=' fa-solid fa-arrow-right-long text-white text-xl'> </i>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                </motion.div>
            </div>
            </div>
            
        </div>
    )

}

