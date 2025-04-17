import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from 'react-router';
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#4A3F36] text-[#FFF8F0] font-serif px-20 pt-12 pb-6 text-base overflow-x-hidden w-full"
        >
            <div className="flex flex-wrap justify-between gap-8 mb-16">
                {/* Logo */}
                <NavLink to="/" className="flex flex-col justify-center items-center">
                    <img
                        src="/images/LOGO_VinylRoasts_2.png"
                        alt="Vinyl Roasts Logo"
                        className="w-20 h-auto mb-2 hover:rotate-[360deg] duration-700 ease-in-out"
                    />
                    <h2 className="text-lg font-bold mt-1 text-center">Vinyl Roasts</h2>
                </NavLink>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 font-sans text-xs">
                        <li className="flex items-start gap-2">
                            <MapPin size={18} className="mt-1" />
                            <span>No. 123, Music Road, Da’an District, Taipei City, Taiwan</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={18} />
                            <span>(02) 1234-5678</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={18} />
                            <span>VinylRoasts@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4 mt-1">
                        {[
                            { icon: <Facebook size={35} />, link: "#" },
                            { icon: <Instagram size={35} />, link: "#" },
                            { icon: <Twitter size={35} />, link: "#" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="hover:text-[#F4EBD9] transition-colors"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="border-t border-[#e0dcd4] my-6" />

            <div className="text-center text-xs mt-4 font-sans">
                <p>Copyright © 2025 Vinyl Roasts. All rights reserved.</p>
            </div>
        </motion.footer>
    );
}

export default Footer;
