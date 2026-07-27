'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image_url: string | null;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log(`Added ${quantity} x ${product.name} to cart`);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-sm">No image</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>

        {/* Unit and Category */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <span className="font-medium">Unit: {product.unit}</span>
          <span className="bg-gray-100 px-2 py-1 rounded capitalize">
            {product.category.replace('_', ' ')}
          </span>
        </div>

        {/* Pricing */}
        <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-lg font-bold text-yellow-600">
            ${product.price.toFixed(2)}/{product.unit}
          </p>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label htmlFor={`quantity-${product.id}`} className="text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <input
              id={`quantity-${product.id}`}
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              addedToCart
                ? 'bg-green-500 text-white'
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}