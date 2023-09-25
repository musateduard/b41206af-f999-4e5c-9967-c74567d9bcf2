import './App.scss';
import React, { Fragment, Key, ReactElement, useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import EventItem from './components/EventItem';
import ShoppingCart from './components/ShoppingCart';
import {EventItemData} from "./types";


export default function App(): ReactElement {

    let [events, setEvents] = useState<EventItemData[]>([]);

    /** function that fetches list of events from api */
    const get_events: Function = async function(controller: AbortController): Promise<void> {

        try {
            const response: Response = await fetch("https://teclead-ventures.github.io/data/london-events.json", {signal: controller.signal});
            const data = await response.json();

            setEvents(data);
        }

        catch (error) {
            console.log(error);
        }

        return;
    }

    useEffect(

        // effect handler
        () => {
            const controller: AbortController = new AbortController();
            get_events(controller);
            return () => {controller.abort()};
        },

        // dependency array
        []);

    let html: ReactElement =

        <Fragment>

            <TopBar />

            <main>

                <section
                    className='EventList'>

                    <ul>{events.map((item: any, index: Key) => {return <EventItem key={index} {...item} />})}</ul>

                </section>

            </main>

            <footer className='Footer'>footer</footer>

            <ShoppingCart />

        </Fragment>

    return html;}
