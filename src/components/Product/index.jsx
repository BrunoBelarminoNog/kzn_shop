import React from 'react'
import { ProductCard } from './styles'
import formatValue from '../../utils/formatValue'
import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../store/modules/cart/thunk'

const Product = ({product}) => {
    const dispatch = useDispatch()

    return (
        <ProductCard>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{formatValue(product.price)}</p>
            </div>
            <button type="button" onClick={()=> dispatch(addToCartThunk(product))}>
                Adicionar
            </button>
        </ProductCard>
    )
}

export default Product
