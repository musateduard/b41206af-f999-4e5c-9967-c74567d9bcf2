// css imports
import "./TopBar.scss";

// react imports
import { ReactElement, useState } from "react";

// material ui components
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

// material ui icons
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({

    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function TopBar(): ReactElement {

    const [cart, setCart] = useState<boolean>(false);

    let html: ReactElement =

        <AppBar
            position="sticky">

            <Toolbar
                sx={{justifyContent: "space-between"}}>

                <Search>

                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>

                    <StyledInputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }} />

                </Search>

                <Drawer
                    anchor="right"
                    open={cart}
                    onClose={() => {setCart(false)}}>

                    this is the shopping cart
                </Drawer>

                <IconButton
                    color="inherit"
                    onClick={() => setCart(true)}>

                    <ShoppingCartIcon />
                </IconButton>

            </Toolbar>

        </AppBar>

    return html;}
