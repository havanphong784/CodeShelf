import {Outlet} from "react-router-dom";

export default function LayoutDefault() {
  return <>
    <div className="w-full h-screen relative bg-green-800">
      <menu className="fixed bg-blue">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">About</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Contact</button>
      </menu>
      <div className="w-full pt-12">
        <Outlet />
      </div>
    </div>
  </>
}