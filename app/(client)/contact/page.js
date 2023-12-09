import Heading from "@/layout/heading";
import { ContactUsForm } from "@/components/contact-form/contact-form";
function Contact() {
  return (
    <section className="h-screen container space-y-24 pt-16">
      <Heading title="Contact" />
      <ContactUsForm />
    </section>
  );
}

export default Contact;
