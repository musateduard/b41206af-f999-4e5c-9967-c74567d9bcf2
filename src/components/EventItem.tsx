// css imports
import "./EventItem.scss";

// react imports
import { ReactElement, useState } from "react";

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


export default function EventItem(props: {event: EventItemData, setCartItems: Function}): ReactElement {

    const event: EventItemData = props.event;
    const setCartItems: Function = props.setCartItems;

    const [inCart, setInCart] = useState<boolean>(false);

    /** function that updates cart list when item is added */
    const addToCart: Function = function(): void {

        console.log(`inCart: ${inCart}`);

        if (inCart) {
            console.log("item already in cart");}

        else {
            setInCart(true);
            setCartItems((items: EventItemData[]) => {return items.push(event)});
            console.log("added to cart");}

        return;}

    const html: ReactElement =

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
                    endIcon={<AddCircle />}
                    onClick={(event): void => {addToCart()}}>

                    Add to Cart
                </Button>

            </CardContent>

        </Card>

    return html;}
