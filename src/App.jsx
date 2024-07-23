import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    const [sendingEmailMsg, setSendingEmailMsg] = useState('');
    const [completeFormAlert, setCompleteFormAlert] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            form.current.from_name.value &&
            form.current.phone_number.value &&
            form.current.from_email.value &&
            form.current.message.value
        ) {
            setCompleteFormAlert(false);
            setSendingEmailMsg('Enviando mensaje...');

            emailjs
                .sendForm(
                    import.meta.env.VITE_REACT_APP_SERVICE_ID,
                    import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
                    form.current,
                    {
                        publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
                    }
                )
                .then(
                    () => {
                        console.log('SUCCESS!');

                        setSendingEmailMsg(
                            'Mensaje enviado exitosamente! Nos contactaremos a la brevedad'
                        );
                        setTimeout(() => {
                            setSendingEmailMsg('');
                        }, 1000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setSendingEmailMsg(
                            'Ha ocurrido un error. Intente de nuevo en unos instantes'
                        );
                        setTimeout(() => {
                            setSendingEmailMsg('');
                        }, 1000);
                    }
                );
        } else {
            setCompleteFormAlert(true);
            setTimeout(() => {
                setCompleteFormAlert(false);
            }, 3000);
        }
    };

    return (
        <section id='contact' className='contact'>
            <h2>Contactanos</h2>
            <div className='container-contact'>
                {sendingEmailMsg ? (
                    <div className='contact-message'> {sendingEmailMsg} </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        {completeFormAlert ? (
                            <span>Complete todo el formulario</span>
                        ) : (
                            ''
                        )}
                        <input
                            type='text'
                            placeholder='Nombre'
                            name='from_name'
                            id='from_name'
                        />
                        <input
                            type='number'
                            placeholder='Teléfono'
                            name='phone_number'
                            id='phone_number'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            name='from_email'
                            id='from_email'
                        />
                        <textarea
                            placeholder='Mensaje'
                            name='message'
                            id='message'></textarea>
                        <button type='submit' value='Send'>
                            Enviar
                        </button>
                    </form>
                )}

                <div className='social'>
                    <ul>
                        <li>
                            <a
                                href='https://www.instagram.com/savastanoabogados/'
                                target='_blank'>
                                <button className='full-button'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        fill='currentColor'
                                        class='bi bi-instagram'
                                        viewBox='0 0 16 16'>
                                        <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
                                    </svg>
                                    {'   '} Instagram
                                </button>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://api.whatsapp.com/send?phone=5491165036451'
                                target='_blank'>
                                <button className='full-button'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        fill='currentColor'
                                        class='bi bi-whatsapp'
                                        viewBox='0 0 16 16'>
                                        <path d='M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232'></path>
                                    </svg>
                                    {'   '} WhatsApp
                                </button>
                            </a>
                        </li>
                        <li>???</li>
                    </ul>
                </div>
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
