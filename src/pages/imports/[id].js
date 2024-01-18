import ProductDetails from "@/components/productDetails/ProductDetails";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function productItem() {
  return (
    <div>
      <ProductDetails />
    </div>
  );
}

export default productItem;
