interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
        <p className="text-2xl font-bold text-yellow-500">${product.price}</p>
      </div>

      <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}