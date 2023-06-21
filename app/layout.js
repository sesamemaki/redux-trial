"use client";

import "./globals.css";
import store from "./store";
import { Provider } from "react-redux";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav className="flex flex-col w-full mt-10 bg-orange-300 justify-center items-center font-semibold">
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/create">Add User</Link>
        </nav>

        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
