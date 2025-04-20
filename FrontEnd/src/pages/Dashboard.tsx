import { useState } from "react";
import { BarChart3, Zap, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [activeFeature, setActiveFeature] = useState("overview");
  const navigate = useNavigate();

  const features = [
    { id: "forecast", name: "Energy Forecasting", icon: <LineChart /> },
    { id: "optimizer", name: "Smart Grid Optimizer", icon: <Zap /> },
    { id: "emissions", name: "Emissions Estimator", icon: <BarChart3 /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col shadow-xl">
        {/* Logo */}
        <div className="flex items-center px-4 py-5 bg-green-800">
          <Zap className="w-6 h-6 text-green-200 mr-2" />
          <h1 className="text-2xl font-bold tracking-tight">SEGO System</h1>
        </div>

        {/* Features Section */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <p className="text-xs font-semibold uppercase text-green-200 mb-4 tracking-wider">
            Features
          </p>
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f.id}>
                <button
                  onClick={() => setActiveFeature(f.id)}
                  className={`flex items-center w-full px-3 py-2 rounded-lg transition ${
                    activeFeature === f.id
                      ? "bg-white text-green-800"
                      : "text-white hover:bg-green-600 hover:text-white/90"
                  }`}
                >
                  <span className="mr-3">{f.icon}</span>
                  <span className="text-sm font-medium">{f.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Status Footer (Change later to show the status of backend) */}
        <div className="px-4 py-4 bg-green-800">
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-300 mr-2"></span>
            <span className="text-xs text-green-200">System Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow rounded-tl-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {features.find((f) => f.id === activeFeature)?.name || "Overview"}
            </h2>
            <button onClick={() => navigate("/")} className="flex items-center text-green-700 text-sm hover:text-green-800 cursor-pointer">
              <span className="mr-1">Back to Home</span>
              <svg
                className="w-4 h-4 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-center h-64 border-2 border-dashed border-green-300 rounded-lg">
              <div className="text-center">
                <Zap className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {activeFeature === "forecast" &&
                    "Energy Demand Forecasting Content"}
                  {activeFeature === "optimizer" &&
                    "Smart Grid Optimizer Content"}
                  {activeFeature === "emissions" &&
                    "Emissions Estimator Content"}
                  {activeFeature === "overview" &&
                    "Select a feature from the sidebar"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Feature content will be displayed here
                </p>
              </div>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  );
}
