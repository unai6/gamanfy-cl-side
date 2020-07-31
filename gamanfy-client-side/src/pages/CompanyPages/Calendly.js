import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import '../../CSS/userEditProfile.css'

export const Calendly = ({ minWidth, height, url }) => {


    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {

        const abortController = new AbortController()
        const signal = abortController.signal
        const any = async () => {
          
        const timeOut =  setTimeout(() => {
                
                const head = document.querySelector('head');
                const script =  document.createElement('script');
               
                script.setAttribute(
                    'src',
                    'https://assets.calendly.com/assets/external/widget.js',
                    
                    );
                    head.appendChild(script)
                    setIsLoading(false)
                }, 1500);
                setIsLoading(true)
              
                signal.addEventListener('abort', () => {
                    clearTimeout(timeOut);
                   
                })

                console.log(timeOut)
        }
        any()


    }, []);
    return (
        <div>
            {
                isLoading
                    ?
                    <Loader className='loader-calendly' type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    :
                    <div
                        className="calendly-inline-widget"
                        data-url='https://calendly.com/gamanfy/15min'
                        style={{ minWidth: '300px', height: '650px' }}

                    />
            }
        </div>
    );
};