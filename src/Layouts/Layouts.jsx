import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">{children || <Outlet />}</main>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default Layout;
