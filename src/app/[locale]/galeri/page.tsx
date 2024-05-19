// Import Components //
import Navbar from "@/app/components/navbar";
import GaleriCarousel from "@/app/components/galeri-carousel";
import Footer from "@/app/components/footer";

export default function Galeri() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Galeri Start ==== --> */}
			<section className="w-full px-sectionpxlg 2xl:px-sectionpx2xl pt-40 pb-44">
				<GaleriCarousel />
			</section>
			{/* <-- ==== Galeri End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<Footer />
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
