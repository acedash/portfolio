import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Syed Amaan Bukhari — AI/ML Engineer",
	description:
		"Personal AI/ML Engineer helping businesses build custom AI/ML solutions. E-commerce platforms, SaaS applications, and business automation that drive growth.",
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
