// Import Components //
import Navbar from "@/app/components/navbar";
import ContactForm from "@/app/components/contact-form";
import Footer from "@/app/components/footer";

export const runtime = "edge";

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
