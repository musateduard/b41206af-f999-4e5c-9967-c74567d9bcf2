// css imports
import "./EventItem.scss"

// react imports
import { ReactElement } from "react";

// material components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

// material icons
import AddCircle from "@mui/icons-material/AddCircle";

// types
import { EventItemData } from "../types";


export default function EventItem(event: EventItemData): ReactElement {

    let html: ReactElement =

        <Card
            sx={{
                minWidth: 275,
                my: 1 }}>

            <CardContent sx={{paddingBottom: 1}} >

                <Typography>{event.title}</Typography>
                <Typography>{event.city.charAt(0).toLocaleUpperCase() + event.city.slice(1)}</Typography>
                <Typography>{event.date.toString()}</Typography>

                <Button
                    variant="contained"
                    endIcon={<AddCircle />}>

                    Add to Cart
                </Button>

            </CardContent>

        </Card>

    return html;}
