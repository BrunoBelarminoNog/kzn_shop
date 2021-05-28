import React from 'react'
import { ProductCard } from './styles'
import formatValue from '../../utils/formatValue'

const Product = ({product}) => {

    return (
        <ProductCard>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{formatValue(product.price)}</p>
            </div>
            <button>
                Adicionar
            </button>
        </ProductCard>
    )
}

export default Product
