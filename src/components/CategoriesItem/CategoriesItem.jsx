import React from 'react'
import './categoriesItem.scss'
import CategoryItem from '../CategoryItem/CategoryItem'

const categories = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
]

const CategoriesItem = () => {
    return (
        <div className="categories-container">
            {categories.map(({ id, title, imageUrl }) => (
                <CategoryItem key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>
    )
}

export default CategoriesItem