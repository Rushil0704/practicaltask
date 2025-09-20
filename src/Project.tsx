import React, { useState } from "react";
import { FlaskConical, FileText, Users, Boxes } from "lucide-react";
const bgUrl =
	"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80";

const categories = [
	"View All",
	"Buildings Factories",
	"Bullet",
	"Metro Rail",
	"Road Projects",
	"Others",
];

const projects = [
	{
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
		cat: "Buildings Factories",
	},
	{
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
		cat: "Buildings Factories",
	},
	{
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		cat: "Buildings Factories",
	},
	{
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		cat: "Road Projects",
	},
	{
		img: "https://images.unsplash.com/photo-1465101178521-c1a6f3b5f0a7?auto=format&fit=crop&w=600&q=80",
		cat: "Metro Rail",
	},
	{
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		cat: "Others",
	},
];

function Project() {
	const [active, setActive] = useState("Buildings Factories");
	const filtered =
		active === "View All"
			? projects
			: projects.filter((p) => p.cat === active);
	return (
		<>
			{/* Latest Projects Section (existing) */}
			<section className="bg-white py-12 px-4" id="projects">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-[#4F4C88] text-center mb-2">
						Latest Projects
					</h2>
					<div className="flex items-center justify-center gap-2 mb-2">
						<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
						<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
					</div>
					<p className="text-gray-700 mb-8 text-center text-base md:text-lg">
						Showcasing projects where Yahska Polymers has enhanced
						residential, commercial, and infrastructure works across
						India.
					</p>
					{/* Category Buttons */}
					<div className="flex flex-wrap justify-center gap-4 mb-10">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActive(cat)}
								className={`px-6 py-2 border-2 border-[#4F4C88] rounded-none font-medium text-[#4F4C88] transition ${
									active === cat
										? "bg-[#4F4C88] text-white"
										: "bg-white"
								} `}
							>
								{cat}
							</button>
						))}
					</div>
					{/* Projects Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{filtered.map((p, i) =>
							i === 5 ? (
								<div
									key={i}
									className="bg-[#4F4C88] text-white flex flex-col justify-center items-center rounded-xl p-8 shadow relative"
								>
									<h3 className="text-lg font-bold mb-2 text-center">
										Fintech Towers at GIFT City, Ahmedabad 2
									</h3>
									<p className="text-sm mb-4 text-center">
										Yahska Polymers powered the Fintech
										Towers at GIFT City, Ahmedabad with
										durable and sustainable construction
										solutions.
									</p>
									<span className="absolute left-6 bottom-6 text-2xl">
										↗
									</span>
								</div>
							) : (
								<img
									key={i}
									src={p.img}
									alt="Project"
									className="rounded-xl w-full h-56 object-cover shadow"
								/>
							)
						)}
					</div>
				</div>
			</section>

			{/* Upcoming Project Section */}
			<section
				className="relative w-full min-h-[420px] flex flex-col items-center justify-center px-[5vw] py-16 text-white"
				style={{ background: `url(${bgUrl}) center/cover no-repeat` }}
			>
				<div className="absolute inset-0 bg-[#4F4C88]/80 z-0"></div>
				<div className="relative z-10 max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">
						Have an Upcoming Project?
					</h2>
					<div className="flex items-center justify-center gap-2 mb-2">
						<span className="inline-block w-2 h-2 bg-white rounded-full"></span>
						<span className="inline-block w-16 h-0.5 bg-white ml-2"></span>
					</div>
					<p className="mb-6 text-base md:text-lg">
						Partner with Yahska Polymers Pvt. Ltd. to power your
						project with advanced construction chemical solutions
						that deliver strength, durability, and sustainability.
					</p>
					<button
						className="bg-white text-[#4F4C88] font-bold text-lg px-8 py-2 rounded-none"
						style={{
							clipPath:
								"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
						}}
					>
						Get in Touch
					</button>
				</div>
				<div className="relative z-10 max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 bg-transparent">
					{/* Form */}
					<div className="bg-[#3ca37c] p-8 rounded-tl-xl rounded-bl-xl flex flex-col justify-center min-h-[400px] shadow-lg">
						<h3 className="text-white text-lg font-bold mb-2">
							Need Our Expertise?{" "}
							<span className="inline-block w-2 h-2 bg-white rounded-full ml-2 align-middle"></span>
						</h3>
						<div className="text-white font-semibold mb-6">
							Connect with Yahska Polymers
						</div>
						<form className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Your Name"
								className="px-4 py-2 rounded bg-white text-gray-800"
							/>
							<input
								type="email"
								placeholder="Email"
								className="px-4 py-2 rounded bg-white text-gray-800"
							/>
							<input
								type="tel"
								placeholder="Phone"
								className="px-4 py-2 rounded bg-white text-gray-800"
							/>
							<select className="px-4 py-2 rounded bg-white text-gray-800">
								<option>Project Type</option>
								<option>Residential</option>
								<option>Commercial</option>
								<option>Infrastructure</option>
							</select>
							<textarea
								placeholder="How Can We Help?"
								className="px-4 py-2 rounded bg-white text-gray-800"
								rows={3}
							></textarea>
							<button
								type="submit"
								className="bg-[#4F4C88] text-white font-bold px-8 py-2 mt-2 self-start"
								style={{
									clipPath:
										"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
								}}
							>
								Submit Inquiry
							</button>
						</form>
					</div>
					{/* Stats */}
					<div className="bg-white p-8 rounded-tr-xl rounded-br-xl flex flex-col justify-center min-h-[400px] shadow-lg text-[#4F4C88] relative">
						<div className="flex flex-col gap-8">
							<div className="flex items-center gap-4">
								<FlaskConical className="w-10 h-10" />
								<div>
									<div className="font-bold text-2xl">
										22+
									</div>
									<div className="font-semibold text-sm">
										Industry Experience
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<FileText className="w-10 h-10" />
								<div>
									<div className="font-bold text-2xl">
										1000+
									</div>
									<div className="font-semibold text-sm">
										Projects Delivered
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<Users className="w-10 h-10" />
								<div>
									<div className="font-bold text-2xl">
										500+
									</div>
									<div className="font-semibold text-sm">
										Trusted Clients
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<Boxes className="w-10 h-10" />
								<div>
									<div className="font-bold text-2xl">5+</div>
									<div className="font-semibold text-sm">
										Product Categories
									</div>
								</div>
							</div>
						</div>
						<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#4F4C88] text-white font-bold px-4 py-2 rounded-l-xl rotate-[-90deg] origin-bottom-right text-sm tracking-wide">
							Our Success Stories
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Project;
