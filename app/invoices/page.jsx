import React from "react";
import Heading from "@/layout/heading";
import { InvoiceCard } from "@/components/client/invoices/invoice-card";

const InvoicesPage = () => {
  return (
    <section className="container py-12  mb-20 ">
      <Heading title={"Your Invoices"} />
      <p className="text-center text-lg font-normal mt-6">Recent invoices </p>
      <main className="w-full mt-20 px-24 py-12  space-y-12">
        <div className="space-y-12">
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
        </div>
      </main>
    </section>
  );
};

export default InvoicesPage;
