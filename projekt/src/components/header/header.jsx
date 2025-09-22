import "./header.scss";
import Link from "next/link";


export default function Header() {

    return (
        <>
            <div className="header_box">
                <img src="/Block.png" />
                <ul className="header_list_item">
                    <li> <Link href="/" className="header-item">Listings </Link> </li>
                    <li> <Link href="/" className="header-item">Community </Link> </li>
                    <li> <Link href="/" className="header-item">Contact </Link> </li>
                    <Link href="/login">
                        <button className="header_button">
                            sign in
                        </button>
                    </Link>
                    <button className="header_button">
                        register
                    </button>
                </ul>

            </div>
        </>
    )
}