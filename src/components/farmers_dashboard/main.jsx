import React from "react";
import { BsCash } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { TbCash, TbTruckDelivery } from "react-icons/tb";

export default function DashBoardMainContent() {
  return (
    <div className="bg-gray-50 rounded-2xl p-10  w-3/4 flex gap-10">
      {/* total sales */}
      <div className="bg-gray-200 p-10 w-full rounded-2xl flex flex-col gap-2 ">
        <span className="text-2xl font-semibold ">N20,000</span>
        <span className="flex text-gray-600 items-center gap-1">
          <TbCash className="text-2xl" />
          Total Sales
        </span>
      </div>
      {/* total products */}
      <div className="bg-gray-200 p-10 w-full rounded-2xl flex flex-col gap-2  ">
        <span className="text-2xl font-semibold">30</span>
        <span className="flex text-gray-600 items-center gap-1">
          <GoPackage className="text-2xl" />
          Verified Products
        </span>
      </div>
      {/* total deliveries */}
      <div className="bg-gray-200 p-10 rounded-2xl w-full flex flex-col gap-2 ">
        <span className="text-2xl font-semibold">10</span>
        <span className="flex text-gray-600 items-center gap-1">
          <TbTruckDelivery className="text-2xl" />
          Completed Deliveries
        </span>
      </div>
    </div>
  );
}
