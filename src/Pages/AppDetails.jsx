import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Download, MessageSquare, HardDrive } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';
import appsData from '../Data/data.json';
import Loading from '../Components/Loading';

function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const foundApp = appsData.find((a) => a.id == id);
      setApp(foundApp);

      if (foundApp) {
        const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
        setIsInstalled(installed.some((a) => a.id === foundApp.id));
      }

      setLoading(false);
    }, 500);
  }, [id]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    installed.push(app);
    localStorage.setItem('installedApps', JSON.stringify(installed));
    setIsInstalled(true);
    toast.success('App installed successfully!');
  };

  if (loading) return <Loading />;

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">App Not Found</h2>
        <p className="text-gray-600">The app you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={app.image}
            alt={app.title}
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-xl border border-gray-100"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
            <p className="text-gray-600 mb-6">
              Developed by{' '}
              <span className="text-blue-600 font-medium">{app.companyName}</span>
            </p>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center md:items-start">
                <Download className="text-green-600 w-6 h-6 mb-1" />
                <div className="text-2xl font-bold text-gray-900">
                  {(app.downloads / 1000000).toFixed(0)}M
                </div>
                <div className="text-sm text-gray-500">Downloads</div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Star className="text-yellow-500 w-6 h-6 mb-1" />
                <div className="text-2xl font-bold text-gray-900">{app.ratingAvg}</div>
                <div className="text-sm text-gray-500">Average Ratings</div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <MessageSquare className="text-purple-600 w-6 h-6 mb-1" />
                <div className="text-2xl font-bold text-gray-900">
                  {(app.reviews / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-500">Total Reviews</div>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-8 py-3 rounded-xl font-semibold transition shadow-md ${isInstalled
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
                }`}
            >
              {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={app.ratings.slice().reverse()}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
              tick={{ fontSize: 14 }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="orange" barSize={25} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}

export default AppDetails;
