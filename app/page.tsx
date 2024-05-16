import Image from "next/image";
import Link from "next/link";

// Import Components //
import Navbar from "@/components/navbar";
import HeroCarousel from "@/components/hero-carousel";
import GaleriCarousel from "@/components/galeri-carousel";
import { LanguageSelector } from "@/components/lang-selector";
import Footer from "@/components/footer";

// Import Assets //
import dummyhero from "@/assets/images/dummy-hero.png";
import dummymap from "@/assets/images/dummy-map.png";
import ontime from "@/assets/icons/icon-ontime.png";
import safety from "@/assets/icons/icon-safetyfirst.png";
import professional from "@/assets/icons/icon-professional.png";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<div className="w-full h-screen">
				<HeroCarousel />
			</div>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Rute Section Start ==== --> */}
			<section className="lg:px-sectionpxlg 2xl:px-sectionpx2xl lg:pt-32">
				<div className="flex justify-center">
					<div className="flex w-fit lg:border-b-[6px] lg:pb-[14px] border-primary">
						<h1 className="lg:text-3xl font-semibold text-center">
							RUTE LAYANAN KAMI
						</h1>
					</div>
				</div>
				<div className="w-full h-auto lg:pt-28">
					<LanguageSelector />
					<Image
						src={dummymap}
						alt="Rute Layanan"
						title="Rute Layanan"
						priority={true}
						className="w-full h-auto"
					/>
				</div>
				<div className="flex justify-between items-center lg:pt-32">
					<div className="w-full flex flex-col lg:pr-20">
						<h2 className="lg:text-[44px] font-semibold text-black lg:leading-tight">
							Melayani area Pulau
							<br />
							Jawa dan Bali
						</h2>
						<p className="text-base text-black font-light lg:leading-relaxed lg:mt-8">
							Kami berkomitmen untuk terus memberikan pelayanan
							terbaik dan mengutamakan kepuasan pelanggan. Hingga
							saat ini kami memiliki pelanggan setia dari berbagai
							lini usaha yang mempercayakan kebutuhan logistiknya
							kepada kami.
						</p>
					</div>
					<div className="w-full h-fit border-l border-black lg:basis-3/5">
						<div className="flex flex-col">
							<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6 border-b border-black">
								<Image
									src={ontime}
									alt="Pengiriman Tepat Waktu"
									priority={true}
									className="h-12 w-auto"
								/>
								<h3 className="text-lg">
									Pengiriman tepat waktu
								</h3>
							</div>
							<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6 border-b border-black">
								<Image
									src={safety}
									alt="Safety First"
									priority={true}
									className="h-11 w-auto"
								/>
								<h3 className="text-lg italic">Safety First</h3>
							</div>
							<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6">
								<Image
									src={professional}
									alt="Professional"
									priority={true}
									className="h-11 w-auto"
								/>
								<h3 className="text-lg">Professional</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <-- ==== Rute Section End ==== --> */}

			{/* <-- ==== Galeri Section Start ==== --> */}
			<section className="lg:px-sectionpxlg 2xl:px-sectionpx2xl lg:pt-52">
				<div className="flex justify-center">
					<div className="flex w-fit lg:border-b-[6px] lg:px-24 lg:pb-[14px] border-primary">
						<h1 className="lg:text-3xl font-semibold text-center">
							GALERI
						</h1>
					</div>
				</div>

				{/* <-- ==== Galeri Carousel Start ==== --> */}
				<div className="w-full pt-24">
					<GaleriCarousel />
				</div>
				{/* <-- ==== Galeri Carousel End ==== --> */}
			</section>
			{/* <-- ==== Galeri Section Start ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="lg:pt-44">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
