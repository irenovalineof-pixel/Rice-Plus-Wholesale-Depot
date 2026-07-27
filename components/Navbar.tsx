export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 border-b">

      <h2 className="font-bold">
        Rice Plus
      </h2>

      <div className="space-x-5">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
      </div>

    </nav>
  );
}