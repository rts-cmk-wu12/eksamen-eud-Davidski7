"use client";

// Noget af koden er fra mine tidligere opgaver

export default function ProfileItem({ profileData }) {


    return (
        <div className="form_container">
            <form className="form_container_item">
                <div className="form_items">
                    <label>
                        <span>Fornavn</span>
                        <input className="input_content" type="text" name="firstname" defaultValue={profileData.firstname} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Efternavn</span>
                        <input className="input_content" type="text" name="lastname" defaultValue={profileData.lastname} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Adresse</span>
                        <input className="input_content" type="text" name="adresse" defaultValue={profileData.adresse} readOnly />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Email</span>
                        <input className="input_content" type="email" name="email" defaultValue={profileData.email} readOnly disabled />
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <span>Password</span>
                        <input className="input_content" type="password" name="password" defaultValue={profileData.password} readOnly disabled />
                    </label>
                </div>
                <button type="submit" >Gem</button>
            </form>
        </div>
    );
}
