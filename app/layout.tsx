import React from "react";
import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: " %s | Next Movies",
    default: "Loading...",
  },
  description: "최고의 영화 최고 프레이무어크",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
