import Link from "next/link";
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_items">

                <div className="footer_logo_socials">
                    <div className="logo">
                        <img src="/Block.png" alt="SwapHub Logo" />
                    </div>
                    <div className="socials_links">
                        <Link href="https://x.com/"><FaXTwitter /></Link>
                        <Link href="https://www.instagram.com/"><FaInstagram /></Link>
                        <Link href="https://www.youtube.com/"><FaYoutube /></Link>
                        <Link href="https://www.linkedin.com/"><FaLinkedin /></Link>
                    </div>
                </div>


                <div className="footer_list">
                    <h3>About SwapHub</h3>
                    <Link href="#">How it works</Link>
                    <Link href="#">Community guidelines</Link>
                    <Link href="#">Our mission</Link>
                    <Link href="#">Contact us</Link>
                </div>


                <div className="footer_list">
                    <h3>Discover</h3>
                    <Link href="#">Browse categories</Link>
                    <Link href="#">Popular Swaps</Link>
                    <Link href="#">Successful stories</Link>
                    <Link href="#">Upcoming events</Link>
                </div>


                <div className="footer_list">
                    <h3>Support</h3>
                    <Link href="#">Help Center</Link>
                    <Link href="#">FAQs</Link>
                    <Link href="#">Safety tips</Link>
                    <Link href="#">Report an issue</Link>
                </div>
            </div>
        </footer>
    );
}
