import { AiFillTikTok } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="bg-coffee-brown text-white p-5">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4  gap-8">
                <div>
                    <h3 className="font-semibold text-lg text-coffee-cream">☕  <span className="text-coffee-orange gap-2">IDU</span> Coffee Shop</h3>
                    <p className="mt-3 text-white/80">Fresh coffee, snacks and simple menu online ordaring experience.</p>

                </div>
                <div>
                    <h4 className="font-semibold text-coffee-orange text-lg">Quick Links</h4>
                    <ol className="mt-2 space-y-2 text-white/80 ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                       
                    </ol>
                </div>
                <div>
                    <h4 className="font-semibold text-coffee-orange text-lg">Contact</h4>
                    <ol className="mt-2 text-white/80" >
                        <li className="flex  items-center  gap-2"><FiMapPin /> Riyadh, Saudi Aarbia</li>
                        <li className="flex  items-center  gap-2"><FiPhone /> +966 543 747 294</li>
                        <li className="flex items-center  gap-2 "> <FiMail /> iducoffeeshop@gmail.com</li>
                    </ol>
                </div>
                <div>
                    <h4 className="font-semibold text-coffee-orange text-lg ">Follow Us</h4>
                    <ol className="mt-4 flex gap-2 text-3xl text-amber-80">
                        <li><Link to="https://www.facebook.com/share/1JXpv6bUVL/" className="hover:text-coffee-orange "><FiFacebook /></Link></li>
                        <li><Link to="https://www.instagram.com/iabdishuu?stkn=MTRlMzFkZWF4bGtm" className="hover:text-coffee-orange "><FiInstagram /></Link></li>
                        <li><Link to="https://www.tiktok.com/@idiriis.abdishuu3?_r=1&_d=eh5ggbgg7de2i6&sec_uid=MS4wLjABAAAAurWmoPODPpP0QyStCs2AAsvdoDRVfU7Rv3GOtFEY3y3SVa4JAIdU9XSej4bmuu1U&share_author_id=7434514808324736055&sharer_language=en&source=h5_m&u_code=eh5ggi76lc2333&timestamp=1788783376&user_id=7434514808324736055&sec_user_id=MS4wLjABAAAAurWmoPODPpP0QyStCs2AAsvdoDRVfU7Rv3GOtFEY3y3SVa4JAIdU9XSej4bmuu1U&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7681972875725309716&share_link_id=40c5e880-18ac-4035-bfa6-16f5c990036d&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" className="hover:text-coffee-orange"><AiFillTikTok /></Link></li>
                        
                    
                    </ol>

                </div>
            </div>
            <div className="mt-6 border-t border-white/55 flex flex-col items-center" >
                <p className="text-white/65 text-sm mt-2 text-center">
                    ©:{new Date().getFullYear()} IDU coffee shop. All right reserved.

                </p>
            </div>
        </footer>
    )
}
export default Footer;