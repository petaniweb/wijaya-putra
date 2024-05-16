// Import Components //
import Navbar from "../../../components/navbar";
import ContactForm from "../../../components/contact-form";
import Footer from "../../../components/footer";

export default function Contact() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Contact Us Start ==== --> */}
			<section className="w-full bg-cover bg-center bg-bgcontact h-auto pt-36 pb-20 px-sectionpxlg 2xl:px-sectionpx2xl">
				<div className="w-full flex items-center justify-end">
					<ContactForm />
				</div>
			</section>
			{/* <-- ==== Contact Us End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<Footer />
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
