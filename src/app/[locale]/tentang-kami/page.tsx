import Image from "next/image";
import { useTranslations } from "next-intl";

// Import Components //
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// Import Assets //
import vision from "../../../../assets/icons/icon-vision.svg";
import mission from "../../../../assets/icons/icon-mission.svg";

export default function TentangKami() {
	const trTentangkami = useTranslations("TentangkamiPage");

	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Tentang Kami Start ==== --> */}
			<section className="w-full px-sectionpxlg 2xl:px-sectionpx2xl pt-52">
				<div className="flex justify-between items-center">
					{/* <-- === Left Content Start === --> */}
					<div className="w-full flex flex-col pr-20">
						<h3
							className="text-[21px] leading-normal text-primary font-light"
							dangerouslySetInnerHTML={{
								__html: trTentangkami.raw("headline"),
							}}
						></h3>
						<p
							className="text-sm text-black mt-10 leading-relaxed font-light"
							dangerouslySetInnerHTML={{
								__html: trTentangkami.raw("description"),
							}}
						></p>
					</div>
					{/* <-- === Left Content End === --> */}

					{/* <-- === Right Content Start === --> */}
					<div className="w-full basis-5/6 border-l border-black">
						<div className="flex flex-col">
							<div className="flex items-start gap-6 justify-center pl-8 py-11 border-b border-black">
								<Image
									src={vision}
									alt="Vision Icon"
									priority={true}
									className="w-auto h-6"
								/>
								<div className="flex flex-col gap-3">
									<h5 className="text-xl text-black font-semibold">
										{trTentangkami("vision")}
									</h5>
									<p
										className="text-sm text-black font-light leading-relaxed"
										dangerouslySetInnerHTML={{
											__html: trTentangkami.raw(
												"visionDescription"
											),
										}}
									></p>
								</div>
							</div>

							<div className="flex items-start gap-6 justify-center pl-8 py-11">
								<Image
									src={mission}
									alt="Mission Icon"
									priority={true}
									className="w-auto h-6"
								/>
								<div className="flex flex-col gap-3">
									<h5 className="text-xl text-black font-semibold">
										{trTentangkami("mission")}
									</h5>
									<p className="text-sm text-black font-light leading-relaxed">
										{trTentangkami("missionDescription")}
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <-- === Right Content End === --> */}
				</div>
			</section>
			{/* <-- ==== Tentang Kami End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="lg:pt-44">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
