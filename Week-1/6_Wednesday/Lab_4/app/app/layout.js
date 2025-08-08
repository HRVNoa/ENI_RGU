// layout.js
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}