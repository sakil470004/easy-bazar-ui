
import DashboardSideBar from "../components/Dashboard/DashboardSideBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  my-6 px-6">
        <label
            htmlFor="my-drawer-2"
            className="absolute top-4 right-4 btn btn-sm btn-outline btn-warning drawer-button lg:hidden"
          >
            |||
          </label>
          {/* Page content here */}
          <Outlet />
        
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <DashboardSideBar />
        
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
