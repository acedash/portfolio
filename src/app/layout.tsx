import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
				<footer className="border-t border-white/10 mt-20 py-14">
					<div className="container">
						<div className="grid gap-10 md:grid-cols-3 text-left">
							{/* Brand + Social */}
							<div>
								<div className="text-2xl font-bold text-blue-400 mb-3">Asrar Bashir</div>
								<p className="text-slate-400 mb-6 max-w-md">Technology consultant helping businesses grow with modern software, automation, and data-driven systems.</p>
								<div className="flex items-center gap-4">
									<a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub" className="text-white hover:opacity-90 transition-opacity"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="22" height="22"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.08-.65.08-.65 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.47-2.43-.28-4.98-1.21-4.98-5.41 0-1.19.42-2.17 1.11-2.94-.11-.28-.48-1.42.11-2.96 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.73-.36s1.86.12 2.73.36c2.09-1.41 3.01-1.12 3.01-1.12.6 1.54.23 2.68.11 2.96.69.77 1.11 1.75 1.11 2.94 0 4.21-2.55 5.12-4.98 5.4.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.94 0 .29.2.64.76.53 4.35-1.45 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5z"/></svg></a>
									<a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-sky-500 hover:opacity-90 transition-opacity"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="22" height="22"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.84v1.98h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8.5z"/></svg></a>
									<a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter/X" className="text-white hover:opacity-90 transition-opacity"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="22" height="22"><path d="M18.3 2H21l-7.3 8.35L22 22h-6.9l-5.4-6.6L3.4 22H1l7.9-9.04L2 2h7l5 6.1L18.3 2z"/></svg></a>
									<a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" className="text-pink-400 hover:opacity-90 transition-opacity"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="22" height="22"><path d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg></a>
									<a href="mailto:mailtokhanasrar@gmail.com" aria-label="Email" className="text-rose-300 hover:opacity-90 transition-opacity"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="22" height="22"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
								</div>
							</div>

							{/* Quick Links */}
							<div>
								<div className="text-sm uppercase tracking-wider text-slate-400 mb-4">Quick Links</div>
								<ul className="space-y-3 text-slate-300">
									<li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
									<li><a href="/#projects" className="hover:text-white transition-colors">Work</a></li>
									<li><a href="/#approach" className="hover:text-white transition-colors">Approach</a></li>
									<li><a href="/projects" className="hover:text-white transition-colors">All Projects</a></li>
								</ul>
							</div>

							{/* Contact */}
							<div>
								<div className="text-sm uppercase tracking-wider text-slate-400 mb-4">Contact</div>
								<div className="space-y-3 text-slate-300">
									<a href="mailto:mailtokhanasrar@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="18" height="18"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg> <span>mailtokhanasrar@gmail.com</span></a>
									<a href="tel:6006257942" className="block hover:text-white transition-colors">📞 6006257942</a>
									<a href="https://wa.me/6006257942" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors font-medium">💬 WhatsApp</a>
								</div>
							</div>
						</div>

						<div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
							<div>© {new Date().getFullYear()} Asrar Bashir · Personal Technology Consultant</div>
							<div className="flex items-center gap-4 text-slate-400">
								<a href="tel:6006257942" className="hover:text-white transition-colors">📞 Call</a>
								<span className="opacity-30">·</span>
								<a href="https://wa.me/6006257942" className="hover:text-white transition-colors">💬 WhatsApp</a>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
