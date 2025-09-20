import {
	ArrowRight,
	MessageCircle,
	User,
	Phone,
	Mail,
	MapPin,
} from "lucide-react";

const articles = [
	{
		date: "Sep 05, 2023",
		title: "Innovative Solutions in Construction Chemicals by Yahska Polymers",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		comments: 152,
		color: "bg-[#3ca37c]",
	},
	{
		date: "Aug 28, 2023",
		title: "Sustainable Practices Making Waves in Indian Construction",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
		comments: 20230,
		color: "bg-white",
	},
	{
		date: "Aug 15, 2023",
		title: "Yahska Polymers Featured for Innovative Product Line",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		comments: 20230,
		color: "bg-white",
	},
];

const approvals = [
	{ name: "EIL", logo: "https://www.engineersindia.com/images/logo.png" },
	{ name: "LEA", logo: "https://www.engineersindia.com/images/logo.png" },
	{
		name: "Ahmedabad Municipal",
		logo: "https://www.engineersindia.com/images/logo.png",
	},
	{
		name: "Shivalik",
		logo: "https://www.engineersindia.com/images/logo.png",
	},
	{
		name: "Jaipur Metro",
		logo: "https://www.engineersindia.com/images/logo.png",
	},
];

function Media() {
	return (
		<section className="bg-white py-12 px-4" id="media">
			<div className="max-w-7xl mx-auto">
				{/* Media Coverage */}
				<div className="mb-12">
					<div className="flex items-center gap-2 mb-2">
						<h2 className="text-2xl font-bold text-[#4F4C88]">
							Media Coverage
						</h2>
						<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
						<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
					</div>
					<div className="flex justify-between items-center mb-2">
						<p className="text-gray-700 text-base max-w-2xl">
							Yahska Polymers Pvt. Ltd. has been recognized in top
							industry publications for our innovations,
							sustainable solutions, and impact on India's
							construction sector.
						</p>
						<button
							className="bg-[#4F4C88] text-white font-bold px-8 py-2 rounded-none"
							style={{
								clipPath:
									"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
							}}
						>
							See details
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
						{articles.map((a, i) => (
							<div
								key={i}
								className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col"
							>
								<img
									src={a.img}
									alt={a.title}
									className="w-full h-44 object-cover"
								/>
								<div
									className={`p-6 flex flex-col flex-1 ${a.color}`}
								>
									<div className="text-xs text-gray-600 mb-1">
										{a.date}
									</div>
									<h3 className="text-base font-semibold mb-2 text-[#4F4C88]">
										{a.title}
									</h3>
									<div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
										<User size={16} /> by admin
										<MessageCircle size={16} /> {a.comments}{" "}
										Comments
									</div>
									<div className="flex justify-end">
										<button
											className="bg-[#4F4C88] text-white font-medium text-xs px-4 py-2 flex items-center gap-2 rounded-none"
											style={{
												clipPath:
													"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
											}}
										>
											READ MORE <ArrowRight size={14} />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Key Approvals */}
				<div className="bg-[#222] py-10 px-6 rounded-xl mb-8">
					<div className="flex items-center gap-2 mb-4">
						<h2 className="text-2xl font-bold text-white">
							Key Approvals
						</h2>
						<span className="inline-block w-2 h-2 bg-white rounded-full"></span>
						<span className="inline-block w-16 h-0.5 bg-white ml-2"></span>
					</div>
					<p className="text-white text-base mb-8 max-w-2xl">
						Trusted by builders and architects across India, Yahska
						Polymers has contributed to major residential,
						commercial, and infrastructure projects.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center mb-8">
						{approvals.map((a, i) => (
							<div
								key={i}
								className="bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center h-20 px-2"
							>
								<img
									src={a.logo}
									alt={a.name}
									className="max-h-12 max-w-[120px] object-contain"
									title={a.name}
								/>
							</div>
						))}
					</div>
					{/* Contact Info */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-sm mt-8">
						<div className="flex items-center gap-3">
							<Phone size={28} className="text-white" />
							<div>
								<div>Call Us:</div>
								<div>(+91) 88099 13222</div>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Mail size={28} className="text-white" />
							<div>
								<div>Mail Us:</div>
								<div>admin@yahskapolymers.com</div>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<MapPin size={28} className="text-white" />
							<div>
								<div>Address:</div>
								<div>
									Unit 1: Changodar
									<br />
									S. No 407, Khata No 1217, Bh Sarvodaya
									Hotel, Moraiya, Changodar, Ahmedabad –
									382213
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Media;
