import React from "react";
import Heading from "@/layout/heading";
const agreementSections = [
  {
    title: "Rental Period",
    content: [
      "The rental period commences upon delivery and concludes upon collection by The Company.",
      "Rental fees are calculated based on the agreed-upon period. Applicable taxes are calculated and added to each service as required.",
    ],
  },
  {
    title: "Payment",
    content: [
      "Payment is due in full before the start of the rental period.",
      "Canadian Rentals Inc accepts payment in Canadian dollars through methods specified in the invoice.",
      "Late payment may result in additional charges.",
    ],
  },
  {
    title: "Security Deposit",
    content: [
      "A refundable security deposit may be required to cover damages, loss, or additional cleaning fees.",
      "The deposit will be returned within [3] days after the rental period, minus any applicable charges.",
    ],
  },
  {
    title: "Cancellation",
    content: [
      "Cancellations must be made at least [72] hours before the scheduled delivery time.",
      "Cancellations made within [72] hours may incur a cancellation fee of 15%.",
    ],
  },
  {
    title: "Delivery and Pickup",
    content: [
      "The Company is responsible for delivering and setting up the mobile toilet trailer at the agreed location.",
      "The client must ensure clear access to the delivery site.",
      "After delivery, the client is responsible for any damage to the mobile toilet trailer.",
    ],
  },
  {
    title: "Use of Equipment",
    content: [
      "The client agrees to use the mobile toilet trailer responsibly and for its intended purpose.",
      "Any misuse or damage may result in repair or replacement fees.",
    ],
  },
  {
    title: "Cleaning and Maintenance",
    content: [
      "The client is responsible for maintaining cleanliness during the rental period or engaging the services of Canadian Rentals for the cleaning services for a specified fee.",
      "Canadian Rentals Inc. provides a clean and sanitized unit upon delivery.",
      "Additional cleaning fees apply if the unit is returned excessively soiled or damaged.",
    ],
  },
  {
    title: "Damage or Loss",
    content: [
      "The client is responsible for any damage or loss of the mobile toilet trailer during the rental period.",
      "Repair or replacement costs will be charged to the client as necessary.",
    ],
  },
  {
    title: "Liability",
    content: [
      "Canadian Rentals Inc. is not liable for any injury, illness, or accidents occurring during the rental period.",
      "The client is responsible for the safety of all individuals using the mobile toilet trailer.",
    ],
  },
  {
    title: "Force Majeure",
    content: [
      "Canadian Rentals Inc. is not responsible for delays or non-performance due to circumstances beyond its control.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "The client agrees to indemnify and hold Canadian Rentals Inc. harmless from any claims, damages, or liabilities arising from the use of the mobile toilet trailer.",
    ],
  },
  {
    title: "Insurance",
    content: [
      "Canadian Rentals Inc. may carry liability insurance but does not cover the client's or third parties' personal belongings.",
    ],
  },
  {
    title: "Jurisdiction",
    content: [
      "Any disputes will be subject to the laws of the relevant Canadian jurisdiction.",
    ],
  },
  {
    title: "Changes to Terms and Conditions",
    content: [
      "Canadian Rentals Inc. reserves the right to update or modify these Terms and Conditions at any time.",
      "You acknowledge and agree to these Terms and Conditions by accepting our services.",
      "If you have any questions or concerns, don't hesitate to get in touch with us before finalizing your rental agreement.",
    ],
  },
];

const TermsAndConditionPage = () => {
  return (
    <section className="container py-12  mb-20 ">
      <Heading title={"Terms & Conditions"} />
      <main className="w-full bg-[#F4F4F4] mt-20 px-24 py-12 rounded-md border border-black space-y-12">
        <h1 className="font-semibold text-2xl text-[#D23434]">
          Canadian Rentals Inc - Mobile Toilet Trailer Rental Agreement
        </h1>
        <p>
          This agreement (the "Agreement") is entered into between Canadian
          Rentals Inc, hereinafter referred to as "The Company," and the client,
          collectively referred to as the "Parties."
        </p>

        {agreementSections.map((section, index) => (
          <div key={index + 1} className="space-y-4">
            <h2 className="font-semibold text-xl text-[#D23434]">{`${
              index + 1
            }. ${section.title}`}</h2>
            <ul>
              {section.content.map((paragraph, idx) => (
                <li key={idx} className="">
                  <span className="w-2 h-2 inline-block mx-4 bg-black/80 rounded-full"></span>
                  {paragraph}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </section>
  );
};

export default TermsAndConditionPage;
