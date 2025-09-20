import { CheckCircle, FlaskConical, Factory, Construction } from "lucide-react";

const img1 =
	"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";
const img2 =
	"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80";

function About() {
	return (
		<>
			{/* About Us Section */}
			<section className="bg-white px-8 py-12" id="about">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
					{/* Left: Text */}
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-2">
							<h2 className="text-2xl font-bold text-[#4F4C88]">
								About Us
							</h2>
							<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
							<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
						</div>
						<h3 className="text-xl font-bold mb-2">
							Welcome to{" "}
							<span className="text-[#4F4C88]">
								Yahska Polymers Pvt Ltd
							</span>
						</h3>
						<p className="text-gray-700 mb-4">
							Yahska Polymers Pvt Ltd is a leading construction
							chemicals manufacturer based in Ahmedabad, proudly
							serving the Indian construction industry with
							innovative and reliable solutions for over two
							decades. As one of the leading names in the field,
							our mission is simple: to build stronger, safer, and
							more sustainable structures through chemistry that
							performs.
							<br />
							Founded with a vision to revolutionize the way India
							builds, we offer a comprehensive portfolio of
							high-quality construction chemicals including:
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
							<div className="flex items-center gap-2">
								<CheckCircle className="text-[#4F4C88] w-5 h-5" />
								<span className="text-gray-800 font-medium">
									Waterproofing systems
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="text-[#4F4C88] w-5 h-5" />
								<span className="text-gray-800 font-medium">
									Sealants & bonding agents
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="text-[#4F4C88] w-5 h-5" />
								<span className="text-gray-800 font-medium">
									Repair & rehabilitation products
								</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="text-[#4F4C88] w-5 h-5" />
								<span className="text-gray-800 font-medium">
									Industrial flooring solutions
								</span>
							</div>
						</div>
						<button
							className="bg-[#4F4C88] text-white font-medium text-lg px-8 py-2 rounded-none mt-2"
							style={{
								clipPath:
									"polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
							}}
						>
							Know More
						</button>
					</div>
					{/* Right: Images and badge */}
					<div className="flex-1 flex flex-col items-center gap-6 relative">
						<div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
							<div className="bg-white rounded-full border-2 border-[#4F4C88] px-6 py-2 shadow text-center">
								<div className="text-[#4F4C88] font-bold text-2xl">
									22+
								</div>
								<div className="text-xs text-[#4F4C88] font-semibold">
									Year Experience
								</div>
							</div>
						</div>
						<div className="flex gap-6 mt-12">
							<img
								src={img1}
								alt="Road Construction"
								className="rounded-xl w-56 h-40 object-cover shadow-lg"
							/>
							<img
								src={img2}
								alt="Industrial Plant"
								className="rounded-xl w-56 h-40 object-cover shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Yahska Polymers Section */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-[#4F4C88] mb-2">
						Why Choose Yahska Polymers?
					</h2>
					<div className="flex items-center justify-center gap-2 mb-2">
						<span className="inline-block w-2 h-2 bg-[#4F4C88] rounded-full"></span>
						<span className="inline-block w-16 h-0.5 bg-[#4F4C88] ml-2"></span>
					</div>
					<p className="text-gray-700 mb-10 text-base md:text-lg">
						22+ years of trust, innovation, and quality delivering
						construction chemical solutions that last.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Card 1 */}
						<div className="bg-white rounded-xl shadow border border-gray-200 p-8 flex flex-col items-center transition hover:shadow-lg">
							<FlaskConical className="w-12 h-12 text-[#4F4C88] mb-4" />
							<h3 className="text-lg font-semibold text-[#4F4C88] mb-2">
								Expertise & Innovation
							</h3>
							<p className="text-gray-600 text-sm">
								22+ years of industry experience with strong
								in-house R&D driving advanced and sustainable
								solutions.
							</p>
						</div>
						{/* Card 2 */}
						<div className="bg-white rounded-xl shadow border-2 border-[#4F4C88] p-8 flex flex-col items-center relative transition hover:shadow-lg">
							<Factory className="w-12 h-12 text-[#4F4C88] mb-4" />
							<h3 className="text-lg font-semibold text-[#4F4C88] mb-2">
								Manufacturing Excellence
							</h3>
							<p className="text-gray-600 text-sm">
								ISO-certified facilities with modern technology
								ensuring consistent quality and reliable supply
								nationwide.
							</p>
							<span
								className="absolute top-0 left-0 w-full h-full border-2 border-[#4F4C88] rounded-xl pointer-events-none"
								style={{
									borderStyle: "solid",
									borderWidth: "2px",
									borderColor: "#4F4C88",
									zIndex: -1,
									opacity: 0.2,
								}}
							></span>
						</div>
						{/* Card 3 */}
						<div className="bg-white rounded-xl shadow border border-gray-200 p-8 flex flex-col items-center transition hover:shadow-lg">
							<Construction className="w-12 h-12 text-[#4F4C88] mb-4" />
							<h3 className="text-lg font-semibold text-[#4F4C88] mb-2">
								Comprehensive Solutions
							</h3>
							<p className="text-gray-600 text-sm">
								Wide product portfolio including admixtures,
								waterproofing, sealants, repairs, and industrial
								flooring for every construction need.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
