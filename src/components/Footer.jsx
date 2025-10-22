import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/Sunflower-01.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white mt-10 py-8">

                <div className="max-w-11/12 mx-auto flex flex-wrap justify-between gap-8 md:gap-12">



                    {/* 1. Contact Information */}
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                            Contact info
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a className="hover:text-white cursor-pointer transition duration-300">
                                    Email: info@Sunflower.com
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white cursor-pointer transition duration-300">
                                    Phone: 01315187164
                                </a>
                            </li>
                            <li className="text-sm hover:text-white cursor-pointer">
                                Address: 123 Main St, Gazipur, Dhaka
                            </li>
                        </ul>
                    </div>

                    {/* 2. Social Links */}
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                            Social Links
                        </h3>
                        <div className="flex space-x-4">
                            {/* Facebook Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-gray-400 hover:text-secondary transition duration-300 transform hover:scale-110"
                            >
                                <FaFacebook size={24} />
                            </a>

                            {/* Twitter Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="text-gray-400 hover:text-secondary transition duration-300 transform hover:scale-110"
                            >
                                <FaTwitter size={24} />
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-secondary transition duration-300 transform hover:scale-110"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                        <div>
                            <img src={logo} alt="" className='w-40 mt-5' />
                        </div>
                    </div>

                    {/* 3. Policy & Copyright */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
                            Legal & Info
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a className="hover:text-white cursor-pointer transition duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white cursor-pointer transition duration-300">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom / Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Our Sunflower. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;