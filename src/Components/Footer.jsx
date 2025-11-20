import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <footer className="bg-gray-900 text-white mt-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <img src="/src/assets/logo.png" alt="HERO.IO" className="w-8 h-8" />
            <span className="text-xl font-bold">HERO.IO</span>
          </Link>
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h3 className="text-sm font-semibold">Social Links</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/md.nayemislam.9693001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nayem-talukdar-765b5b309/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://www.facebook.com/md.nayemislam.9693001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-90% mx-auto border-t border-gray-700 my-4"></div>
        <div className="text-center text-gray-400 text-sm">
          Copyright © {currentYear} - All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
