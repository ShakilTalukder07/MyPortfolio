import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5lfnm6h', 'template_dzdf3pi', form.current, 'KhpRBlUblX-y3YEuH')
        e.target.reset()
    }

    return (
        <section id='contact' className='my-10'>
            <h2 className='text-center text-2xl font-bold text-cyan-300'>Get In Touch</h2>
            <h5 className='text-center text-cyan-300'>Contact Me</h5>
            <div className='grid grid-flow-row md:grid-flow-row lg:grid-flow-col justify-items-center my-4'>
                <div className='flex flex-col gap-4'>
                    <div className="card w-72 bg-transparent shadow-2xl">
                        <div className="card-body">
                            <h4>Email</h4>
                            <h5>shakil.ahmed01940@gmail.com</h5>
                            <a href="mailto:shakil.ahmed01940@gmail.com" target='blank'>Send a message</a>
                        </div>
                    </div>
                    <div className="card w-72 bg-transparent shadow-2xl">
                        <div className="card-body">
                            <h4>Messenger</h4>
                            <h5>shakil</h5>
                            <a href="https://www.facebook.com/shakil.ahamed.07/" target='blank'>Send a message</a>
                        </div>
                    </div>
                    <div className="card w-72 bg-transparent shadow-2xl">
                        <div className="card-body">
                            <h4>What's app</h4>
                            <h5>+8801680067377</h5>
                            <a href="https://api.whatsapp.com/send?phone+8801680067377" target='blank'>Send a message</a>
                        </div>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}
                        className='flex flex-col items-center shadow-3xl gap-8 my-20'>
                        <input type="text" name='name' placeholder='Your Full Name' className="input w-96 input-bordered max-w-xs bg-sky-400 text-white shadow-2xl" required />
                        <input type="email" name='email' placeholder='Your Email' className="input w-96 input-bordered max-w-xs  bg-sky-400 text-white" required />
                        <textarea type="message" rows='7' placeholder='Your Message' required className='input w-96 h-32 max-w-xs input-bordered bg-sky-400 text-white' />
                        <button className='btn btn-primary w-80'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;