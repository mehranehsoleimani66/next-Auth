import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import ToastContainer from "@/components/tostify";
import { AuthProvider } from "@/context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <ToastContainer />
          <BootstrapClient />
        </AuthProvider>
      </body>
    </html>
  );
}
