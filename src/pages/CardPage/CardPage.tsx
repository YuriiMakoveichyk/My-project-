import Banner from 'components/Banner/Banner'
import CartTotal from 'components/CartTotal/CartTotal'
import { Container, Grid } from '@mui/material'
import CartProductLict from 'components/CartProductList/CartProductLict'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtende'
import './CardPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CardPage = ({ productsInCart }: Props) => {
    return (
        <>
            <Banner />
            <Container>
                <Grid container spacing={4} className="card-page">
                    <CartProductLict
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <CartTotal productsInCart={productsInCart} />
            </Container>
        </>
    )
}

export default CardPage
