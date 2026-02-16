import React from "react";

const Sidebar = () => {
  return (
    <>
      <div>
        <ul className="  h-screen w-64 flex-col border-r border-gray-200 bg-white flex-1 space-y-2 px-4 py-6">
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">🏠</span>
            <span className="group-hover:text-blue-500">Dashboard</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">🧾</span>
            <span className="group-hover:text-blue-500">Attendance</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">👨‍🏫</span>
            <span className="group-hover:text-blue-500">Faculty</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">🗓</span>
            <span className="group-hover:text-blue-500">Timetable</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">📢</span>
            <span className="group-hover:text-blue-500">Notices</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">📄</span>
            <span className="group-hover:text-blue-500">Reports</span>
          </li>
          <li className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            <span class="mr-3 text-xl">⚙️</span>
            <span className="group-hover:text-blue-500">Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
