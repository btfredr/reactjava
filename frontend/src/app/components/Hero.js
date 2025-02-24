import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <Image 
                src="/hero.jpg" 
                alt="Eiendomsutvikling" 
                layout="fill" 
                objectFit="cover" 
                priority 
                />
            <div className="hero-content">
                <h1 className="hero-title">Velkommen til HHF Eiendom</h1>
                <p>Vi skaper fremtidens boliger og næringsbygg</p>
                <Link href="../pages/" className="cta-button">Se våre prosjekter</Link>
            </div>
        </section>
  )
}

export default Hero