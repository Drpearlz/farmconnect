import React from "react";
import { userStore } from "../state";
import TopNav from "../components/farmers_dashboard/top_nav";
import DashBoardMainContent from "../components/farmers_dashboard/main";

export default function DashBoard() {
  const user = userStore((state) => state.user);
  return (
    <div className="px-10 text-sm">
      <TopNav/>
      <div className="pb-5">
        <span className="text-2xl text-gray-800 font-semibold">Welcome, {user.first_name}</span>
      </div>
      <DashBoardMainContent/>
    </div>
  );
}
