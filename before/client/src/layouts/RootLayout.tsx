import { Toaster } from "@/components/ui/toaster";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";

export function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Import Navbar before div with Outlet */}
        <Navbar />
        <div className="container my-4 flex-grow grid grid-cols-1">
          <div>
            <Outlet />
          </div>
          naN
        </div>
      </div>
      <ScrollRestoration />
      <Toaster />
    </>
  );
}
