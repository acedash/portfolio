import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Asrar Bashir — Technology Consultant & Developer",
	description:
		"Personal technology consultant helping businesses build custom software solutions. E-commerce platforms, SaaS applications, and business automation that drive growth.",
	icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen pt-16">
				<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/70">
					<NavBar />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
