import { useNavigate } from 'react-router-dom';
import AppErrorImage from '../assets/App-error.png';
export default function ErrorPage(){
  const navigate = useNavigate();

  return(
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <img
        src={AppErrorImage}
        alt="App Error"
        className="w-96 h-auto mb-6"
      />
      <div className="text-center">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate('/apps')}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Go to Apps
          </button>
        </div>
      </div>
    </div>
  );
}