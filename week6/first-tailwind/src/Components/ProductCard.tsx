import React from "react";
import Button from "./Button";

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    onAddToCart?: () => void;
}

const ProductCard: React.FC<CardProps> = ({ imageUrl, title, description, price, onAddToCart }) => {
    return (
        <div className="shadow-lg rounded-lg p-6 bg-white w-full max-w-sm mx-auto">
            <img src={imageUrl} alt={title} className="w-full h-48 object-contain rounded-md mb-12" />
            <h2 className="text-xl font-bold mt-4 text-black text-left">{title}</h2>
            <p className="text-gray-600 mt-2 text-left">{description}</p>
            <p className ="text-lg text-green-600 font-semibold mt-4 text-left ">${price.toFixed(2)}</p>
            <Button 
                variant="primary" 
                size="md" 
                className="mt-4 w-full"
                onClick={onAddToCart}
            >
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard;