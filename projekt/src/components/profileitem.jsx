"use client";

// Noget af koden er fra mine tidligere opgaver

export default function ProfileItem({ loginData }) {


    return (
        <div className="form_container">
            <form className="form_container_item">
                <div className="form_items">
                    <label>
                        <span>Fornavn</span>
                        <input className="input_content" type="text" name="firstname" defaultValue={loginData.firstname} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Efternavn</span>
                        <input className="input_content" type="text" name="lastname" defaultValue={loginData.lastname} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Email</span>
                        <input className="input_content" type="email" name="email" defaultValue={loginData.email} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Password</span>
                        <input className="input_content" type="password" name="password" placeholder="Vi kan desværre ikke vise dit password" readOnly disabled />
                    </label>
                </div>
            </form>
        </div>
    );
}
