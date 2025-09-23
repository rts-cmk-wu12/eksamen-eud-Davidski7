"use client";



export default function ProfileItem({ profileData }) {


    return (
        <form >
            <div>
                <label>
                    <span>Fornavn</span>
                    <input type="text" name="firstname" defaultValue={profileData.firstname} readOnly disabled />
                </label>
            </div>
            <div>
                <label>
                    <span>Efternavn</span>
                    <input type="text" name="lastname" defaultValue={profileData.lastname} readOnly disabled />
                </label>
            </div>
            <div>
                <label>
                    <span>Adresse</span>
                    <input type="text" name="adresse" defaultValue={profileData.adresse} readOnly />
                </label>
            </div>
            <div>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" defaultValue={profileData.email} readOnly disabled />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" defaultValue={profileData.password} readOnly disabled />
                </label>
            </div>
            <button type="submit" >Gem</button>
        </form>
    );
}
