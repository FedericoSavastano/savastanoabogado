import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import savastanoLogo from './assets/savastano-logo.png';
import './App.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <h2 className='title'>Savastano & Asoc. </h2>
                <ul>
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
                <h3 className='phrase'>
                    Resolución eficiente de conflictos legales con
                    responsabilidad, transparencia y confidencialidad
                </h3>
            </div>
        </section>
    );
}

function Services() {
    const servicesList = [
        {
            title: 'Derecho Civil',
            desc: 'Solución de conflictos entre particulares',
        },
        {
            title: 'Derecho Laboral',
            desc: 'Defensa de derechos laborales y relaciones de trabajo',
        },
        {
            title: 'Derecho de seguros',
            desc: 'Asesoría y reclamos de seguros',
        },
        {
            title: 'Accidentes de tránsito',
            desc: 'Reclamos por daños en siniestros viales',
        },
        {
            title: 'Accidentes de trabajo y enfermedades profesionales',
            desc: 'Indemnización por accidentes laborales y enfermedades',
        },
        {
            title: 'Jubilaciones',
            desc: 'Gestión de trámites previsionales y jubilatorios',
        },
    ];

    return (
        <section id='grid' className='grid-section'>
            <div className='container'>
                <h2>Nuestros servicios</h2>
                <div className='grid'>
                    {servicesList.map((service, index) => (
                        <div className='grid-item' key={index}>
                            <h3 className='title title-bold'>
                                {service.title}
                            </h3>
                            <p>{service.desc}.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Faq() {
    return (
        <section id='faq' className='grid-section'>
            <div className='container faq'>
                <h2>Preguntas frecuentes</h2>

                <details className='grid-item'>
                    <summary className='title title-bold'>
                        Sobre accidentes de tránsito
                    </summary>
                    <ul>
                        <li>
                            <p className='question'>
                                ¿Qué necesito para reclamar por un accidente de
                                tránsito?
                            </p>
                            <p>
                                Si sos peatón, ciclista o pasajero: Datos del
                                vehículo y conductor (nombre, documento,
                                domicilio). Certificados médicos, gastos médicos
                                y de transporte, fotos de lesiones y
                                recuperación. Testigos del accidente (nombre,
                                documento, teléfono). DNI. Si conducías tu
                                propio vehículo: Además de lo anterior,
                                necesitarás cédula verde, licencia, seguro, VTV
                                y fotos del vehículo.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Cuánto tiempo tengo para denunciar el siniestro
                                en mi seguro?
                            </p>
                            <p>
                                72 horas. Si estás lesionado, un familiar puede
                                hacer la denuncia. Algunas aseguradoras permiten
                                hacerlo por teléfono o web.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Dónde hago la denuncia penal?{' '}
                            </p>
                            <p>
                                En la comisaría correspondiente o en la Oficina
                                de Denuncias del Ministerio Público Fiscal.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Qué pasa si el otro conductor no denuncia en su
                                seguro?
                            </p>
                            <p>
                                Debes enviarle una carta documento para que lo
                                haga.
                            </p>
                        </li>
                    </ul>
                </details>
                <details className='grid-item'>
                    <summary className='title title-bold'>
                        Sobre sucesiones
                    </summary>
                    <ul>
                        <li>
                            <p className='question'>
                                ¿Puedo vender la propiedad o el vehículo de un
                                familiar fallecido sin hacer la sucesión?
                            </p>
                            <p>
                                No. La venta puede hacerse mediante tracto
                                abreviado sin necesidad de inscribir el bien a
                                nombre del heredero.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Qué documentos necesito para iniciar la
                                sucesión?
                            </p>
                            <p>
                                Se requiere certificado de defunción, partida de
                                matrimonio, partidas de nacimiento de los hijos,
                                escritura de propiedad o título automotor,
                                constancia de CUIT y DNI de los herederos.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                Si el fallecido tenía varios bienes, ¿puedo
                                hacer la sucesión de solo uno?
                            </p>
                            <p>
                                Es recomendable incluir todos los bienes en la
                                sucesión, pero puedes inscribir solo uno luego
                                de obtener la declaratoria de herederos.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Debo inscribir la propiedad a mi nombre tras la
                                sucesión?
                            </p>
                            <p>
                                No es necesario si planeas venderla. El
                                comprador la adquirirá por tracto abreviado.
                            </p>
                        </li>
                    </ul>
                </details>
                <details className='grid-item'>
                    <summary className='title title-bold'>
                        Sobre derecho laboral
                    </summary>
                    <ul>
                        <li>
                            <p className='question'>
                                ¿Debe el empleador pagarme si me enfermo por
                                causas ajenas al trabajo?
                            </p>
                            <p>
                                Sí. El empleador debe pagar el salario hasta 3 o
                                6 meses, dependiendo de la antigüedad (menos o
                                más de 5 años). Si tienes familia a cargo, el
                                plazo se extiende a 6 o 12 meses.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Qué salario recibo durante la licencia por
                                enfermedad?
                            </p>
                            <p>
                                Recibes el mismo salario que percibías al
                                enfermarte, con los aumentos que se otorguen
                                durante tu licencia. Si tu salario es variable,
                                se calculará el promedio del último semestre.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Qué hago si sufro un accidente o enfermedad
                                laboral?
                            </p>
                            <p>
                                Debes notificar inmediatamente a tu empleador y
                                a la ART contratada, por teléfono o a través de
                                los medios que proporcionen para emergencias.
                            </p>
                        </li>
                    </ul>
                </details>
                <details className='grid-item'>
                    <summary className='title title-bold'>
                        Sobre seguros
                    </summary>
                    <ul>
                        <li>
                            <p className='question'>
                                ¿Cuándo se considera destrucción total del
                                vehículo?
                            </p>
                            <p>
                                Cuando el costo de reparación supera el 80% del
                                valor del vehículo.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Cuánto tiempo tiene la aseguradora para
                                responder a una denuncia?
                            </p>
                            <p>
                                La aseguradora tiene 30 días corridos. Si pide
                                más información, el plazo comienza al recibirla
                                completa.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Para qué sirve un seguro de caución?
                            </p>
                            <p>
                                Garantiza el cumplimiento de obligaciones no
                                financieras mediante un contrato de seguro.
                            </p>
                        </li>
                        <li>
                            <p className='question'>
                                ¿Qué pasa si la aseguradora rechaza la cobertura
                                por reticencia?
                            </p>
                            <p>
                                La aseguradora puede rechazar la cobertura si se
                                ocultó información relevante que afecte el
                                riesgo, siempre que exista relación entre lo
                                omitido y el siniestro.
                            </p>
                        </li>
                    </ul>
                </details>
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
                                    <span className='btn-name'> Instagram</span>
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
                                    <span className='btn-name'> WhatsApp</span>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:dr.savastanoagustin@gmail.com'
                                target='_blank'>
                                <button className='full-button'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        fill='currentColor'
                                        class='bi bi-envelope-at'
                                        viewBox='0 0 16 16'>
                                        <path d='M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z' />
                                        <path d='M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z' />
                                    </svg>
                                    <span className='btn-name'> E-mail</span>
                                </button>
                            </a>
                        </li>
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
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export default App;
