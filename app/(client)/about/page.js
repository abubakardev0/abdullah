import Heading from "@/layout/heading";
import AboutImageOne from "@/assets/images/about/about-image-1.png";
import AboutImageTwo from "@/assets/images/about/about-image-2.png";
import Image from "next/image";
function About() {
  return (
    <section className=" container space-y-16 py-16">
      <Heading title="About" />
      <h2 className="text-2xl font-semibold text-center text-primary-red ">
        Canadian Rentals
      </h2>
      <p className="text-lg font-normal text-center">
        Your premier destination for convenient and hygienic mobile toilet
        solutions. We understand the importance of providing clean and
        comfortable restroom facilities for a wide range of events and
        occasions. Whether you&apos;re planning a special outdoor event,
        construction site, or any situation where access to traditional
        facilities is limited, our top-notch mobile toilet trailers are designed
        to meet your needs. With a commitment to quality, cleanliness, and
        customer satisfaction, we take pride in delivering portable restroom
        solutions that ensure the utmost comfort and convenience for your guests
        or workforce. Explore our diverse range of mobile toilet trailer
        options, and experience the difference of choosing us for all your
        portable restroom needs. Your comfort and sanitation are our top
        priorities, and we&apos;re here to make sure your event or project goes
        off without a hitch.
      </p>

      <div className="flex flex-col  md:flex-row  justify-center gap-8 relative overflow-hidden">
        <Image src={AboutImageOne} alt="about image one" />

        <Image src={AboutImageTwo} alt="about image two" />
      </div>
    </section>
  );
}

export default About;
