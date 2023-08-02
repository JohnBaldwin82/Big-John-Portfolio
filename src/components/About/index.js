import React from 'react'

function About() {
    return (
        <section className='my-5'>
            <div className='about-me'>
                <img src={image} alt='image'></img>
                <p>I am a junior fullstack web developer that is looking to restart my career. I have spent many years in sales and the mortgage industry. Now I am ready to start my new adventure in the wonderful world of coding.
                </p>

                <p>Computers have always interested me. Whether it's surfing the web or playing video games I have always wondered whats behind the scenes. What makes this technology work? I am excited to enter into my next adventure in web development.</p>
            </div>
        </section>
    )
}

export default About;