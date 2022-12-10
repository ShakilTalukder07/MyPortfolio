import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='text-xl font-bold text-center'>Get In Touch</h2>
            <h5 className='text-2xl font-bold text-center'>Contact Me</h5>
            <div className='flex'>
                <div>
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
                    <form className='flex flex-col mx-40 shadow-2xl'>
                        <input type="text" name='name' placeholder='Your Full Name' className="input w-full input-bordered max-w-xs bg-transparent" required />
                        <input type="email" name='email' placeholder='Your Email' className="input w-full input-bordered max-w-xs bg-transparent" required />
                        <textarea type="message" rows='7' placeholder='Your Message' required className='input w-full max-w-xs input-bordered bg-transparent' />
                        <button></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;