"use client"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "./morebutton.scss";


export default function MoreButton() {




    return (
        <div className="previous_next_button">
            <button className="previous_button"><GrFormPrevious /> Previous</button>
            <button className="active">1</button>
            <button className="not_active">2</button>
            <button className="not_active">3</button>
            <button className="next_button">Next <MdNavigateNext /></button>

        </div>
    );
}
