'use client';

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Total Orders</h2>
          <p className="text-4xl font-bold text-yellow-500">0</p>
        </div>

        <div className="p-6 bg-white border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Revenue</h2>
          <p className="text-4xl font-bold text-yellow-500">$0</p>
        </div>

        <div className="p-6 bg-white border rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Customers</h2>
          <p className="text-4xl font-bold text-yellow-500">0</p>
        </div>
      </div>
    </main>
  );
}