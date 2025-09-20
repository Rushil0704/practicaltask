import {
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ChevronRight,
} from "lucide-react";

function Footer() {
	return (
		<footer className="bg-white border-t border-gray-300 pt-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
					{/* About Us */}
					<div>
						<div className="flex items-center gap-2 mb-2">
							<h3 className="text-lg font-bold text-[#4F4C88]">
								About Us
							</h3>
							<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
							<span className="inline-block w-12 h-0.5 bg-[#4F4C88] ml-2"></span>
						</div>

						<p className="text-sm text-gray-700 mb-4">
							Yahska Polymers Pvt. Ltd is a leading construction
							chemicals manufacturer based in Ahmedabad, proudly
							serving the Indian construction industry with
							innovative and reliable solutions for over two
							decades.
						</p>
						<div className="flex gap-3 mt-2">
							<a
								href="#"
								className="text-[#4F4C88] hover:text-[#222]"
								aria-label="Facebook"
							>
								<Facebook size={22} />
							</a>
							<a
								href="#"
								className="text-[#4F4C88] hover:text-[#222]"
								aria-label="Twitter"
							>
								<Twitter size={22} />
							</a>
							<a
								href="#"
								className="text-[#4F4C88] hover:text-[#222]"
								aria-label="Linkedin"
							>
								<Linkedin size={22} />
							</a>
							<a
								href="#"
								className="text-[#4F4C88] hover:text-[#222]"
								aria-label="Instagram"
							>
								<Instagram size={22} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-bold text-[#4F4C88] mb-2">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{[
								"Home",
								"About Us",
								"Projects",
								"Products",
								"Media coverage",
								"Contact Us",
							].map((item, idx) => (
								<li
									key={idx}
									className="flex items-center gap-2 text-sm text-gray-800 hover:text-[#4F4C88] cursor-pointer"
								>
									<ChevronRight
										size={16}
										className="text-[#4F4C88]"
									/>{" "}
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Our Products */}
					<div>
						<h3 className="text-lg font-bold text-[#4F4C88] mb-2">
							Our Products
						</h3>
						<ul className="space-y-2">
							{[
								"Admixtures",
								"Accelerators",
								"Misc Admixtures",
								"Integral Waterproofing",
								"Curing Compound",
								"Grouts",
								"Floor Hardeners",
								"Micro Silica",
								"Structural Bonding",
								"See All Products",
							].map((item, idx) => (
								<li
									key={idx}
									className="flex items-center gap-2 text-sm text-gray-800 hover:text-[#4F4C88] cursor-pointer"
								>
									<ChevronRight
										size={16}
										className="text-[#4F4C88]"
									/>{" "}
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Our Project */}
					<div>
						<h3 className="text-lg font-bold text-[#4F4C88] mb-2">
							Our Project
						</h3>
						<ul className="space-y-2">
							{[
								"High Speed Rail",
								"Metro & Rail",
								"Roads & Highways",
								"Buildings & Factories",
								"Other Projects",
								"See All Projects",
							].map((item, idx) => (
								<li
									key={idx}
									className="flex items-center gap-2 text-sm text-gray-800 hover:text-[#4F4C88] cursor-pointer"
								>
									<ChevronRight
										size={16}
										className="text-[#4F4C88]"
									/>{" "}
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-[#4F4C88] text-white text-center py-3 text-sm font-medium">
				© 2024 Yahska Polymers Private Limited. All Rights Reserved.
			</div>
		</footer>
	);
}

export default Footer;
