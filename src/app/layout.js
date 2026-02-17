import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from './component/Navbar';
import Footer from './component/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
