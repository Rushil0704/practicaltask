import React from "react";
import { ArrowRight } from "lucide-react";

const products = [
	{
		title: "Admixtures",
		desc: "High-performance admixtures designed to improve concrete workability, strength, and durability while reducing water demand.",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		btn: true,
	},
	{
		title: "Accelerators",
		desc: "Special additives that speed up the setting and strength gain of concrete, ideal for fast-track construction projects.",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		btn: false,
	},
	{
		title: "Misc Admixtures",
		desc: "Specialty admixtures formulated to enhance specific concrete properties and meet unique project requirements.",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		btn: true,
	},
];

const connections = [
	{
		name: "L&T Construction",
		logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "J.KUMAR",
		logo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "SAM INDIA Builtwell Pvt. Ltd.",
		logo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "DTCem",
		logo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "SCC",
		logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "RBL",
		logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "GULERMACK",
		logo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "Shapoorji Pallonji",
		logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "PNC Infratech Limited",
		logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "MS Khurana Engineering Ltd.",
		logo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "GAYATRI",
		logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
	},
	{
		name: "ATLAS INFRASTRUCTURE",
		logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
	},
];

function Product() {
	return (
		<section className="bg-[#f6f6fa] py-12 px-4" id="products">
			<div className="max-w-6xl mx-auto">
				{/* Our Products */}
				<h2 className="text-2xl md:text-3xl font-bold text-[#4F4C88] text-center mb-2">
					Our Products
				</h2>
				<div className="flex items-center justify-center gap-2 mb-2">
					<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
					<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
				</div>
				<p className="text-gray-700 mb-10 text-center text-base md:text-lg">
					22+ years of trust, innovation, and quality delivering
					construction chemical solutions that last.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{products.map((p, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col"
						>
							<div className="relative">
								<img
									src={p.img}
									alt={p.title}
									className="w-full h-48 object-cover"
								/>
								{p.btn === false ? (
									<div className="absolute inset-0 bg-[#4F4C88]/80 flex flex-col justify-center items-center">
										<h3 className="text-white text-xl font-bold mb-2">
											{p.title}
										</h3>
										<p className="text-white text-sm text-center mb-4 px-4">
											{p.desc}
										</p>
										<button className="flex items-center gap-2 text-white font-medium border-b border-white pb-1">
											Read More <ArrowRight size={18} />
										</button>
									</div>
								) : null}
							</div>
							{p.btn && (
								<div className="p-6 flex flex-col flex-1">
									<h3 className="text-[#4F4C88] text-lg font-bold mb-2">
										{p.title}
									</h3>
									<p className="text-gray-700 text-sm mb-4 flex-1">
										{p.desc}
									</p>
									<button
										className="bg-[#4F4C88] text-white font-medium text-sm px-6 py-2 self-start mt-auto flex items-center gap-2"
										style={{
											clipPath:
												"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
										}}
									>
										Read More <ArrowRight size={16} />
									</button>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Trusted Connections */}
				<h2 className="text-2xl md:text-3xl font-bold text-[#4F4C88] text-center mb-2">
					Trusted Connections
				</h2>
				<div className="flex items-center justify-center gap-2 mb-2">
					<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
					<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
				</div>
				<p className="text-gray-700 mb-8 text-center text-base md:text-lg">
					Trusted across India, Yahska Polymers supports landmark
					residential, commercial, and infrastructure projects.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
					{connections.map((c, i) => (
						<div
							key={i}
							className="bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center h-20 px-2"
						>
							<img
								src={c.logo}
								alt={c.name}
								className="max-h-12 max-w-[120px] object-contain"
								title={c.name}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Product;
