import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";

// Import Assets //
import dummycarouselitem1 from "../assets/images/dummy-carousel-item-1.png";
import dummycarouselitem2 from "../assets/images/dummy-carousel-item-2.png";
import dummycarouselitem3 from "../assets/images/dummy-carousel-item-3.png";

export default function GaleriCarousel() {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent>
				<CarouselItem className="w-full flex flex-col">
					<Image
						src={dummycarouselitem1}
						alt="Galeri 1"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 1
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2022
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={dummycarouselitem2}
						alt="Galeri 2"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 2
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2023
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={dummycarouselitem3}
						alt="Galeri 3"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 3
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
