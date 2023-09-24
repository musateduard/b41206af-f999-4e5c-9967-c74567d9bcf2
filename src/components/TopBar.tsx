import "./TopBar.scss";
import { ReactElement } from "react";


export default function TopBar(): ReactElement {

    let html: ReactElement =
        <header className={TopBar.name}>
            <input type="text" placeholder="search event..." />
            <p>shopping cart</p>
        </header>

    return html;}
