import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import AppCard from "../Components/AppCard";
import appsData from "../Data/data.json";
import heroImage from "../assets/hero.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center w-full">
          <div className="text-center px-4 mt-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              We Build <span className="text-purple-600">Productive</span> Apps
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
              At HERO.IO, we craft innovative apps designed to make everyday life
              simpler, smarter, and more exciting. Discover our range of
              productivity-boosting solutions today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition"
              >
                <i className="fa-brands fa-google-play text-2xl text-green-500"></i>
                <span>Google Play</span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition"
              >
                <i className="fa-brands fa-apple text-2xl text-gray-900"></i>
                <span>App Store</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-4 mb-12">
            <img
              src={heroImage}
              alt="HERO.IO App Preview"
              className="w-full max-w-4xl h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-purple-600 to-purple-500 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              Trusted By Millions, Built For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
              <div>
                <p className="text-sm md:text-base opacity-90 mb-2">Total Downloads</p>
                <h3 className="text-5xl md:text-6xl font-extrabold mb-2">29.6M</h3>
                <p className="text-xs md:text-sm opacity-75">21% More Than Last Month</p>
              </div>
              <div>
                <p className="text-sm md:text-base opacity-90 mb-2">Total Reviews</p>
                <h3 className="text-5xl md:text-6xl font-extrabold mb-2">906K</h3>
                <p className="text-xs md:text-sm opacity-75">46% More Than Last Month</p>
              </div>
              <div>
                <p className="text-sm md:text-base opacity-90 mb-2">Active Apps</p>
                <h3 className="text-5xl md:text-6xl font-extrabold mb-2">132+</h3>
                <p className="text-xs md:text-sm opacity-75">31 More Will Launch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Top Apps
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Explore our most popular and top-rated apps that users love and trust for their
            productivity needs.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {appsData && appsData.length > 0 ? (
              appsData.slice(0, 8).map((app) => <AppCard key={app.id} app={app} />)
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No apps found 😢
              </p>
            )}
          </div>
          <div className="text-center mt-20">
            <button
              onClick={() => navigate("/apps")}
              className="bg-purple-600 text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
            >
              Show All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;