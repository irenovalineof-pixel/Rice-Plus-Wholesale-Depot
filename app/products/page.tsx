import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Premium White Rice",
      price: 45.99,
      quantity: "10kg",
      description: "High quality long grain white rice",
    },
    {
      id: 2,
      name: "Basmati Rice",
      price: 55.99,
      quantity: "10kg",
      description: "Authentic basmati rice for biryanis and pulaos",
    },
    {
      id: 3,
      name: "Vegetable Oil",
      price: 35.99,
      quantity: "20L",
      description: "Pure vegetable oil for cooking",
    },
  ];

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}