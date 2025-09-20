import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const unsplashUrl =
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

function Home() {
	return (
		<section
			className="relative w-full min-h-[420px] flex items-center justify-start px-[5vw] text-white"
			style={{ background: `url(${unsplashUrl}) center/cover no-repeat` }}
			id="home"
		>
			<div className="z-10 max-w-xl">
				<div className="text-lg font-medium mb-2 flex items-center">
					Welcome to Yahska Polymers Pvt Ltd
					<span className="inline-block w-2 h-2 bg-white rounded-full ml-2 align-middle"></span>
					<span className="inline-block w-8 h-0.5 bg-white ml-2 align-middle"></span>
				</div>
				<h1 className="text-4xl font-bold leading-tight mb-2">
					Construction Chemicals You Trust
					<br />
					Delivering Strength &amp; Quality
				</h1>
				<div className="flex gap-6 mt-8">
					<button
						className="bg-transparent border-2 border-white text-white font-medium text-lg px-8 py-2 cursor-pointer relative"
						style={{
							clipPath:
								"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
						}}
					>
						Contact Us
					</button>
					<button
						className="bg-[#4F4C88] text-white font-medium text-lg px-8 py-2 border-none cursor-pointer relative"
						style={{
							clipPath:
								"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
						}}
					>
						Know More
					</button>
				</div>
			</div>
			{/* Navigation Arrows */}
			<div className="absolute right-8 bottom-8 flex gap-4 z-10">
				<button className="bg-[#4F4C88] border-none rounded w-10 h-10 flex items-center justify-center cursor-pointer">
					<ChevronLeft color="#fff" size={28} />
				</button>
				<button className="bg-[#4F4C88] border-none rounded w-10 h-10 flex items-center justify-center cursor-pointer">
					<ChevronRight color="#fff" size={28} />
				</button>
			</div>
			{/* Overlay for better text visibility */}
			<div
				className="absolute inset-0 z-0"
				style={{
					background:
						"linear-gradient(90deg, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 100%)",
				}}
			></div>
		</section>
	);
}

export default Home;
