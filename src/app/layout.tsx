import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

import Head from "next/head";
export const metadata = { title: "API Central" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>API Central | Explore Fun APIs</title>
        <meta
          name="description"
          content="A full-stack project to explore fun, useful, and educational APIs with styled outputs and features."
        />
        <meta
          name="keywords"
          content="API, web development, React, FastAPI, fun APIs, public API showcase"
        />
        <meta name="author" content="Kevin Wong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="API Central" />
        <meta
          property="og:description"
          content="Explore public APIs in a fun and visual way, with live data and clean formatting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://api-central-one.vercel.app" />
        <meta
          property="og:image"
          content="https://api-central-one.vercel.app/api_central_logo.png"
        />
      </Head>

      <body>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
