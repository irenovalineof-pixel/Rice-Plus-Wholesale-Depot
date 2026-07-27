'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image_url: string | null;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const supabase = createClient();
        
        let query = supabase
          .from('products')
          .select('id, name, description, price, unit, image_url, category');
        
        if (selectedCategory !== 'all') {
          query = query.eq('category', selectedCategory);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) {
          setError(`Failed to fetch products: ${fetchError.message}`);
          console.error('Supabase error:', fetchError);
          setProducts([]);
        } else if (data) {
          setProducts(data as Product[]);
        } else {
          setProducts([]);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(errorMessage);
        console.error('Fetch error:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const categories = ['all', 'rice', 'vegetable_oil', 'other'];

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 mb-10">
          Quality wholesale rice and vegetable oil for your business needs
        </p>

        {/* Category Filter */}
        <div className="mb-8 flex gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-yellow-500'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            <p className="text-lg text-gray-600 mt-4">Loading products...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800 font-semibold">Error loading products</p>
            <p className="text-red-700 mt-1">{error}</p>
            <p className="text-sm text-red-600 mt-2">
              ⚠️ Make sure your Supabase database has a 'products' table with columns: id, name, description, price, unit, image_url, category
            </p>
          </div>
        )}

        {/* No Products State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-600">No products found in this category.</p>
            <p className="text-sm text-gray-500 mt-2">Try selecting a different category or add products to your Supabase database.</p>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && products.length > 0 && (
          <>
            <p className="text-gray-600 mb-6">Showing {products.length} product(s)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
