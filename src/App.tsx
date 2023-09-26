// css imports
import './App.scss';

// react imports
import React, { Fragment, Key, ReactElement, useEffect, useState } from 'react';

// components
import EventItem from './components/EventItem';
import TopBar from './components/TopBar';
import ShoppingCart from './components/ShoppingCart';

// material ui imports
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActions, CardContent, CardHeader, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled, alpha } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

// types
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

            <Box
                component={"main"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                padding={2}>

                {events.map((item: EventItemData, index: Key) => {return <EventItem key={index} {...item} />})}

            </Box>

        </Fragment>

    return html;}
