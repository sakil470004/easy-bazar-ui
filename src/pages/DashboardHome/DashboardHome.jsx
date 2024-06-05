import React from "react";
import BarChart from "./BarChart";
import PolarAreaChart from "./PolarAreaChart";
import LineChart from "./LineChart";

function DashboardHome() {
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Shop Overview
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl ">Total Products</h2>
            <p className="text-lg text-orange-400 font-bold">100</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Orders</h2>
            <p className="text-lg text-orange-400 font-bold">50</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Revenue</h2>
            <p className="text-lg text-orange-400 font-bold">$5000</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Users</h2>
            <p className="text-lg text-orange-400 font-bold">500</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-md border border-blue-200 rounded-lg text-center">
          <div>
            <h2 className="text-xl">Total Categories</h2>
            <p className="text-lg text-orange-400 font-bold">10</p>
          </div>
        </div>
      </div>
      <LineChart />
      <PolarAreaChart />

      <BarChart />
    </div>
  );
}

export default DashboardHome;
