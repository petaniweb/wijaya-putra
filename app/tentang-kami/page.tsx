import Image from "next/image";

// Import Components //
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Import Assets //
import vision from "@/assets/icons/icon-vision.svg";
import mission from "@/assets/icons/icon-mission.svg";

export default function TentangKami() {
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
						<h3 className="text-[21px] leading-normal text-primary font-light">
							<span className="font-semibold">
								Wijaya Putra Santoso
							</span>{" "}
							akan menjadi solusi kebutuhan logistik anda. Dengan
							armada yang tangguh dan sumber daya manusia yang{" "}
							<span className="font-semibold">profesional</span>{" "}
							dan{" "}
							<span className="font-semibold">berpengalaman</span>
							, kami akan mengantarkan barang anda dengan{" "}
							<span className="font-semibold">aman</span> dan{" "}
							<span className="font-semibold">tepat waktu.</span>
						</h3>
						<p className="text-sm text-black mt-10 leading-relaxed font-light">
							PT. Wijaya Putra Santoso adalah perusahaan logistik
							yang dimiliki secara pribadi. Berdiri sejak 1985
							dengan nama awal{" "}
							<span className="italic">
								Wijaya Transportation
							</span>
							, dan berubah nama menjadi Wijaya Putra Santoso pada
							tahun 1992. Berawal dari 5 unit hingga saat ini kami
							sudah memiliki lebih dari 150 armada, dan akan terus
							bertambah seiring bertumbuhnya perusahaan kami.
							Prioritas kami adalah menawarkan layanan berkualitas
							dan terpercaya.
						</p>
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
										VISI
									</h5>
									<p className="text-sm text-black font-light leading-relaxed">
										Menjadi mitra yang bisa dipercaya dan
										berpegang pada{" "}
										<span className="italic font-medium">
											&quot;Safety Number One&quot;
										</span>
										, ketepatan waktu, dan koordinasi team
										yang profesional.
									</p>
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
										MISI
									</h5>
									<p className="text-sm text-black font-light leading-relaxed">
										Secara berkala ingin menjadi perusahaan
										logistik yang memiliki banyak armada.
										Mendorong pertumbuhan perusahaan yang
										menguntungkan dan berkelanjutan, dengan
										tetap memperhatikan tanggung jawab
										sosial.
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
