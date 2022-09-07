import React, { useContext } from 'react'
import './shop.scss'
import { ProductContext } from '../../context/products'
import ProductCard from '../../components/ProductCard/ProductCard'

const Shop = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop