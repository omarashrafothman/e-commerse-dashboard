import ProductDetails from "@/components/productDetails/ProductDetails";
import { useRouter } from "next/router";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function productItem() {
  const router = useRouter();

  return (
    <div>
      <ProductDetails segment={router.query.productId} />
    </div>
  );
}

export default productItem;
