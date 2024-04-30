import React from "react";
import { Link } from "react-router-dom";
import { userStore } from "../../state";

export default function TopNav() {
  const user = userStore((state) => state.user);
  return (
    <div className="text-sm p-10 flex items-center justify-end gap-36">
      <ul className="flex gap-10">
        <Link className="focus:text-gray-800 focus:font-semibold text-gray-400">
          Dashboard
        </Link>
        <Link className="focus:text-gray-800 focus:font-semibold text-gray-400">
          My Products
        </Link>
        <Link className="focus:text-gray-800 focus:font-semibold text-gray-400">
          Track Deliveries
        </Link>
        <Link className="focus:text-gray-800 focus:font-semibold text-gray-400">
          Settings
        </Link>
      </ul>
      {/* avatar and account update drop */}
      <div className="flex items-center gap-3">
        <span className="p-2  rounded-full w-10 flex items-center justify-center h-10 bg-green-600 text-white text-lg font-black">
          {user.first_name[0]}
          {user.last_name[0]}
        </span>
        <span>{user.first_name}</span>
      </div>
    </div>
  );
}
