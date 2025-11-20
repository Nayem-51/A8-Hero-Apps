import { Star, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AppCard({ app }){
  const navigate = useNavigate();

  const formatDownloads = (num) =>{
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden group"
    >
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl group">
        <img

          src={app.image}
          alt={app.title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-3 truncate">{app.title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-green-600">
            <Download className="w-4 h-4" />
            <span className="text-sm font-semibold">{formatDownloads(app.downloads)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>

  );
}
export default AppCard;