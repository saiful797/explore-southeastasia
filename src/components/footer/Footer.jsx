import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <footer className="p-5 text-center mt-10 bg-black text-white">
            <div className="footer max-w-6xl grid  place-content-center md:place-content-between	">
                <aside>
                    <div className="ml-16 md:ml-0 text-white mt-10">
                        <Link to='/' className="text-4xl font-bold flex">
                            <div className="relative">
                                <h1 className="font-Tangerine">Explore<span className="text-amber-500">Southeast</span>Asia</h1> 
                                <p className="text-xs font-extrabold absolute top-7 right-0 text-white">Best Tourism</p>
                            </div>
                        </Link>
                        <p className="mt-3">Unveil the Magic of Southeast Asia</p>
                    </div>
                </aside> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Services</h6> 
                    <a className="link link-hover">Travel Packages</a>
                    <a className="link link-hover">Travel Blog </a>
                    <a className="link link-hover">Activities and Tours</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Contact Us</h6> 
                    <a className="link link-hover">exploreasia@gmail.com</a>
                    <a className="link link-hover">Phone: +1-123-456-7890</a>
                    <div className="flex justify-center items-center gap-3 text-2xl">
                        <FaFacebook />
                        <FaXTwitter />
                        <BsInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Subscribe</h6> 
                    <div className="join ml-10 md:ml-0">
                        <input className="input input-bordered join-item w-1/2 rounded-l-full text-black " placeholder="Enter Email..."/>
                        <button className=" btn join-item rounded-r-full bg-stone-600">
                            Subscribe
                        </button>
                    </div>
                </nav>
            </div>
            <div className="bg-white h-[1px] mt-3"></div>
            <div className="mt-2">
                <p>Copyright © 2024 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;