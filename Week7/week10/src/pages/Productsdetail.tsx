import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>(); 
  // productId จะมีค่าตรงกับที่ระบุใน URL

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Product Detail</h1>
      <p className="mb-4">
        Showing details for product ID:{" "}
        <span className="font-semibold text-blue-400">{productId}</span>
      </p>
      <Link to="/products" className="text-blue-600 hover:underline">
        ← Back to Product List
      </Link>
    </div> 
  );
}
