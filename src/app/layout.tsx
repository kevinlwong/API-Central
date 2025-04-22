import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";


export const metadata = { title: "API Central" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
