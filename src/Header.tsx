import React, { useEffect, useState } from "react";

const sections = [
	{ id: "home", label: "HOME" },
	{ id: "about", label: "ABOUT US" },
	{ id: "projects", label: "PROJECTS" },
	{ id: "products", label: "PRODUCTS" },
	{ id: "media", label: "MEDIA COVERAGE" },
	// { id: "media", label: "CONTACT US" },
];

function Header() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			let current = "home";
			for (const sec of sections) {
				const el = document.getElementById(sec.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 80 && rect.bottom > 80) {
						current = sec.id;
						break;
					}
				}
			}
			setActiveSection(current);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="flex items-center bg-white h-16 shadow-sm sticky top-0 z-50">
			{/* Logo and company info */}
			<div className="flex items-center px-6 min-w-[320px]">
				<div>
					<div className="font-bold text-xl text-[#4F4C88] tracking-wide">
						yahska
					</div>
					<div className="text-xs text-[#4F4C88] font-medium">
						polymers pvt. ltd.
					</div>
					<div className="text-[10px] text-gray-800">
						Manufacturer of Construction Chemicals
					</div>
				</div>
			</div>
			{/* Menu */}
			<nav className="flex-1 bg-[#4F4C88] h-full flex items-center justify-end pr-8">
				<ul className="flex list-none m-0 p-0">
					{sections.map((sec) => (
						<li key={sec.id} className={`mx-4 relative`}>
							<a
								href={`#${sec.id}`}
								className={`text-white no-underline font-medium transition-all duration-200 ${
									activeSection === sec.id
										? "border-b-2 border-white pb-1"
										: ""
								}`}
							>
								{sec.label}
								{(sec.label === "PROJECTS" ||
									sec.label === "PRODUCTS") && (
									<span className="text-xs">▼</span>
								)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
