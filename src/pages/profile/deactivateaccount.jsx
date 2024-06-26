import ProfileLayout from "./layout";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function Deactivateaccount() {
  return (
    <ProfileLayout>
      <div className="profileForm deactivateaccount">
        <div className="billingAddressHeader">
          <h5>Deactivate account</h5>
        </div>
        <p className="pOne">
          For extra security, this requires you to confirm you email
        </p>
        <div className="d-flex align-items-center">
          <div>
            <label class="control control-checkbox  d-flex align-items-center ">
              <p className="p2">I confirm my account deactivation</p>
              <input type="checkbox" />
              <div class="control_indicator"></div>
            </label>
          </div>
        </div>
        <div className="deleteAndEdit my-3">
          <button className="btn delete">Deactivate account</button>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Deactivateaccount;
