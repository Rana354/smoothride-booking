
import { Route, Routes } from "react-router-dom";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

function DashboardHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Home</h1>
      <p className="text-muted-foreground">
        Welcome to your dashboard. This is a placeholder for the dashboard home page.
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-xl font-semibold">Dashboard Menu</h2>
              <nav className="flex flex-col space-y-1">
                <a href="/dashboard" className="px-4 py-2 rounded-md hover:bg-secondary">
                  Overview
                </a>
                <a href="/dashboard/bookings" className="px-4 py-2 rounded-md hover:bg-secondary">
                  Bookings
                </a>
                <a href="/dashboard/profile" className="px-4 py-2 rounded-md hover:bg-secondary">
                  Profile
                </a>
                <a href="/dashboard/settings" className="px-4 py-2 rounded-md hover:bg-secondary">
                  Settings
                </a>
              </nav>
            </div>
            
            <div className="md:col-span-3">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/bookings" element={<div>Bookings Page (Placeholder)</div>} />
                <Route path="/profile" element={<div>Profile Page (Placeholder)</div>} />
                <Route path="/settings" element={<div>Settings Page (Placeholder)</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
