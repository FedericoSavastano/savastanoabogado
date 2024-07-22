import { useState } from 'react';
import savastanoLogo from './assets/savastano-logo.png';
import './App.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <h2 className='title'>
                    <span className='color-shadow'>Savastano</span> & Asoc.{' '}
                </h2>
                <ul>
                    <li>
                        <a href='#hero'>Inicio</a>
                    </li>
                    <li>
                        <a href='#grid'>Servicios</a>
                    </li>
                    <li>
                        <a href='#contact'>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section id='hero' className='hero'>
            <div className='container'>
                <img src={savastanoLogo} alt='' />
                <h2>Alguna frase descriptiva</h2>
                <p>algun otro detalle, nro de matricula?.</p>
            </div>
        </section>
    );
}

function Services() {
    const servicesList = [
        { title: 'Familia', desc: 'divorcios, sucesiones, etc, etc' },
        {
            title: 'Laboral',
            desc: 'despidos, accidentes, robos',
        },
        {
            title: 'Otro',
            desc: 'bla, bla, bla, bla,',
        },
        {
            title: 'Etc',
            desc: 'bla, bla, bla, bla,',
        },
        {
            title: 'Etc',
            desc: 'bla, bla, bla, bla,',
        },
    ];

    return (
        <section id='grid' className='grid-section'>
            <div className='container'>
                <h2>Nuestros servicios</h2>
                <div className='grid'>
                    {servicesList.map((service, index) => (
                        <div className='grid-item' key={index}>
                            <h3 className='title'>{service.title}</h3>
                            <p>{service.desc}.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id='contact' className='contact'>
            <h2>Contactanos</h2>
            <div className='container-contact'>
                <form>
                    <input type='text' placeholder='Nombre' />
                    <input type='telephone' placeholder='Teléfono' />
                    <input type='email' placeholder='Email' />
                    <textarea placeholder='Mensaje'></textarea>
                    <button type='submit'>Enviar</button>
                </form>

                <div className='social'>redes sociales instagram, whatsapp</div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <p>&copy; 2024 Savastano & Asociados. Estudio Jurídico. </p>
            </div>
        </footer>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar></NavBar>
            <Hero></Hero>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export default App;
