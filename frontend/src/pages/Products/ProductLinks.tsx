import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';

const ProductLinks: React.FC = () => {
    return (
        <div>
            {Object.keys(productsData).map(key => {
                const product = productsData[key];
                return (
                    <div key={key}>
                        <Link to={`/products/${encodeURIComponent(product.name)}`}>
                            <img src={`/images/${product.image}`} alt={product.name} />
                            <p>{product.name}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductLinks;