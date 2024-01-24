import TextEditor from "@/components/textEditor/TextEditor";
import Layout from "./layout";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function Description() {
  return (
    <Layout>
      <div className="w-75">
        <TextEditor />
        {/* */}
      </div>
    </Layout>
  );
}

export default Description;
