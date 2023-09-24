import "./EventItem.scss"
import { ReactElement } from "react";
import { EventItemData } from "../types";


export default function EventItem(event: EventItemData): ReactElement {

    let html: ReactElement = <li className={EventItem.name}>{event.title}</li>

    return html;}
