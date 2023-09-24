import "./ShoppingCart.scss";
import { ReactElement } from "react";


export default function ShoppingCart(): ReactElement {

    let html: ReactElement =
        <nav className={ShoppingCart.name}>
            <div>shopping cart</div>
        </nav>

    return html;}
