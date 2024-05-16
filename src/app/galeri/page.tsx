// Import Components //
import Navbar from "../../../components/navbar";
import GaleriCarousel from "../../../components/galeri-carousel";
import Footer from "../../../components/footer";

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
