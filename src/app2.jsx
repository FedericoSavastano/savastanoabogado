import React from 'react';
import './App.css';

const App2 = () => {
    return (
        <div className='App'>
            {/* <Navbar /> 
            <Hero />
            <GridSection />
            <Contact />*/}
            <Footer />
        </div>
    );
};

const Navbar = () => (
    <nav className='navbar'>
        <div className='container'>
            <h1>My Landing Page</h1>
            <ul>
                <li>
                    <a href='#hero'>Home</a>
                </li>
                <li>
                    <a href='#grid'>Items</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
);

const Hero = () => (
    <section id='hero' className='hero'>
        <div className='container'>
            <h2>Welcome to Our Landing Page</h2>
            <p>Your success starts here.</p>
        </div>
    </section>
);

const GridSection = () => (
    <section id='grid' className='grid-section'>
        <div className='container'>
            <h2>Our Items</h2>
            <div className='grid'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className='grid-item' key={index}>
                        <h3>Item {index + 1}</h3>
                        <p>This is a description of item {index + 1}.</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id='contact' className='contact'>
        <div className='container'>
            <h2>Contact Us</h2>
            <form>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Your Email' />
                <textarea placeholder='Your Message'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </section>
);

const Footer = () => (
    <footer className='footer'>
        <div className='container'>
            <p>&copy; 2023 My Landing Page. All rights reserved.</p>
        </div>
    </footer>
);

export default App2;
