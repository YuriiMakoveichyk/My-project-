import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'

import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="sticky" className="app-bar">
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu />
                    <div>
                        <ul className="header-menu-shop">
                            <li>
                                <SearchSharpIcon></SearchSharpIcon>
                            </li>
                            <li>
                                <ShoppingBasketSharpIcon></ShoppingBasketSharpIcon>
                            </li>
                            <li>
                                <AccountCircleSharpIcon></AccountCircleSharpIcon>
                            </li>
                        </ul>
                    </div>

                    <Button variant="contained">
                        Consultations
                        <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                    </Button>

                    <MenuIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
