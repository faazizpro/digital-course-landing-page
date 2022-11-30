import React from 'react';
import './About.css';
import about from '../../Assets/images/about.png';
import line from '../../Assets/images/Line.png';

const About = () => {
    return (
        <div className='h-[900px] author-bg mb-32 grid items-center justify-items-center'>
            <div className='h-[750px] lg:h-[600px] w-[350px] md:w-[1300px] brd bg-white shadow-2xl shadow-pink-200 '>
                {/* grid grid-cols-2 justify-items-center items-center */}
                <div className='lg:flex justify-center items-center self-center'>
                    <div className='lg:pl-10 pt-5'>
                        <h2 className='text-center md:text-left text-xl lg:text-6xl font-poppins font-bold'>Fahad Abdul Aziz</h2>
                        <img src={line} className=' w-40 lg:w-80 mx-auto md:mx-0 mt-2 mb-5' alt="line" />
                        <p className='font-poppins text-lg text-justify  lg:text-xl lg:leading-relaxed md:italic lg:tracking-wider lg:w-4/5 p-5 md:p-0'>
                            I'm a MERN Stack Developer. I have expertise in HTML, CSS, JS, React JS, Node. I can build websites like educational, e-commerce, business wbsites and more. Besides, I use Taildwind Css for beautiful design and responsive. Also, I can do Figma or PSD to HTML, CSS, Bootstrap, Tailwind, React Js, Next Js.
                        </p>
                    </div>
                    <div>
                        <img src={about} className='w-2/4 lg:w-full mx-auto lg:mx-0' alt="" />
                    </div>
                </div>
                <h3 className='text-center  font-poppins text-xl font-semibold mb-3'>You can connect with me through:</h3>
                <div className='flex justify-center items-center space-x-2'>
                    {/* Facebook */}
                    <a href='https://www.facebook.com/faazizpro' target='_blank' class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    {/* Twitter */}
                    <a href='https://twitter.com/faazizpro' target='_blank' class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                    </a>
                    {/* LinkeDin */}
                    <a href='https://www.linkedin.com/in/faazizpro/' target='_blank' class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                        </svg>
                    </a>
                    {/* Github */}
                    
                </div>
            </div>
        </div>
    );
};

export default About;