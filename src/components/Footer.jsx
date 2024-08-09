import { useState } from 'react'
import '../styles/Footer.scss';

export default function Footer(){
    return (
       <>
        <footer className='footer container mx-auto py-20 px-2 ' id='footer'>
            <h2 className='font-bold py-20 uppercase title'>FOLLOW ALONG</h2>
            <ul className="socials flex ">
                <li className="social ">
                    <a href='' className='text-4xl title max-md:text-lg max-xs:text-sm'>Twitter</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right font-bold linkArrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </li>
                <li className="social ">
                    <a href='' className='text-4xl title max-md:text-lg max-xs:text-sm'>Discord</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right font-bold linkArrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </li>
                <li className="social ">
                    <a href='' className='text-4xl title max-md:text-lg max-xs:text-sm'>Blog</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right font-bold linkArrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </li>
                <li className="social ">
                    <a href='' className='text-4xl title max-md:text-lg max-xs:text-sm'>Telegram</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right font-bold linkArrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </li>
                <li className="social ">
                    <a href='' className='text-4xl title max-md:text-lg max-xs:text-sm'>YouTube</a>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right font-bold linkArrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </li>
            </ul>
        </footer>
        
        
       </>

    )
}