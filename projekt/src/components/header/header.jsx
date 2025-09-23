import "./header.scss";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutAction from "@/actions/logout-action.js";

export default async function Header() {

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    return (
        <header className="header_box">
            <div className="header_logo">
                <img src="/Block.png" alt="Logo" />
            </div>

            <nav className="header_nav">
                <ul>
                    <li>
                        <Link href="/" className="active">Listings</Link>
                    </li>
                    <li>
                        <Link href="/">Community</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="header_buttons">
                {!token ? (
                    <>
                        <Link href="/login">
                            <button className="button button-light">Sign in</button>
                        </Link>
                        <Link href="/opretbruger">
                            <button className="button button-dark">Register</button>
                        </Link>
                    </>
                ) : (

                    <>
                        <form action={LogoutAction}>
                            <button type="submit" className="button button-light">
                                Log Out
                            </button>
                        </form>
                        <Link href="/profil">
                            <button className="button button-dark">Profil</button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
