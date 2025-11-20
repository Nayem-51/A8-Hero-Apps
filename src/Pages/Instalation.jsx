import { useState, useEffect } from "react";
import { Star, Download } from "lucide-react";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

function Installation(){
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  const sortApps = (appsList, option) => {
    if (option === "low") return [...appsList].sort((a, b) => a.size - b.size);
    if (option === "high") return [...appsList].sort((a, b) => b.size - a.size);
    return appsList;
  };

  useEffect(() =>{
    setTimeout(() =>{
      const stored = JSON.parse(localStorage.getItem("installedApps") || "[]");
      const sorted = sortApps(stored, sortOption);
      setApps(sorted);
      setLoading(false);
    }, 500);
  }, [sortOption]);
  

  const handleUninstall = (id) =>{

    console.log("Uninstall clicked for app id:", id); // debug
    const updated = apps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setApps(updated);
    toast.success("App uninstalled successfully!", {
      icon: "🗑️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Installed Apps</h1>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="font-medium text-gray-700">{apps.length} Apps Found</span>

          <div className="flex items-center space-x-2">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm text-gray-600"
            >
              <option value="" disabled>
                Sort by Size
              </option>
              <option value="low">Low → High</option>
              <option value="high">High → Low</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition border flex items-center justify-between px-4 py-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{app.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-green-500 mr-1" />
                      <span>{formatDownloads(app.downloads)}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-orange-400 mr-1 fill-orange-400" />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Installation;
