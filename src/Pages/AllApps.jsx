import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import appsData from "../Data/data.json";
import AppCard from '../Components/AppCard';
import Loading from '../Components/Loading';

function AllApps(){
    
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setApps(appsData);
            setLoading(false);
        }, 500);
    }, []);

    const filteredApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Show 8 apps initially (only if no search), or all apps if showAll is true or search is active
    const displayedApps = (showAll || searchTerm.trim() !== '') ? filteredApps : filteredApps.slice(0, 8);

    const handleSearch = (value) =>{
        setSearchTerm(value);
        // Reset showAll when searching
        if (value.trim() === '') {
            setShowAll(false);
        }
    };

    if (loading) return <Loading />;

    return(
        <div className="container mx-auto px-4 py-12 min-h-[70vh]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">All Applications</h1>
                <p className="text-gray-600 text-lg">Browse through our collection of amazing apps</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">Total Apps:</span>
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full font-bold">
                        {filteredApps.length}
                    </span>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search apps..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            <div className="min-h-[300px] flex flex-col items-center justify-center">
                {displayedApps.length === 0 ? (
                    <div className="text-center">
                        <div className="text-8xl mb-6">😔</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">No App Found</h2>
                        <button
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 transition"
                            onClick={() => setSearchTerm('')}
                        >
                            Show All Apps
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {displayedApps.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                        {!showAll && filteredApps.length > 8 && searchTerm.trim() === '' && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="bg-purple-600 text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition transform hover:scale-105 shadow-lg"
                                >
                                    Show All
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default AllApps;