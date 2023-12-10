import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const invoiceItem = {
  trailer_id: 1,
  location: "123 Main Street",
  departure: "2021-08-01",
  return: "2021-08-05",
  request_no: 123,
  rate: 100,
  add_ons: [
    {
      id: 1,
      name: "Add On 1",
      rate: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: "Add On 2",
      rate: 20,
      quantity: 1,
    },
  ],
};

export function InvoiceCard() {
  return (
    <Card className="min-w-[400px] w-full rounded-md border border-black overflow-hidden">
      <CardHeader className="bg-[#D23434] -space-y-1 px-10">
        <CardTitle className="text-white grid grid-cols-8 gap-6 divide-x divide-slate-300 font-semibold text-2xl">
          <p className="col-span-2 p-5">Location</p>
          <p className="col-span-2 p-5 text-center">Departure</p>
          <p className="col-span-2 p-5 text-center">Return</p>
          <p className="col-span-2 p-5 text-center">Request No</p>
        </CardTitle>
        <CardDescription className="grid grid-cols-8 text-xl border-t border-slate-300 divide-x font-medium  text-black gap-6 ">
          <p className="col-span-2 p-5">{invoiceItem.location}</p>
          <p className="col-span-2 p-5 text-center">{invoiceItem.departure}</p>
          <p className="col-span-2 p-5 text-center">{invoiceItem.return}</p>
          <p className="col-span-2 p-5 text-center">{invoiceItem.request_no}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between items-center ">
          <div className="w-full space-y-2 p-12 bg-[#F4F4F4] border-r border-black">
            <p className="font-semibold text-2xl text-[#D23434] ">Rate</p>
            <p className="font-semibold text-6xl">${invoiceItem.rate}</p>
          </div>
          <div className="space-y-6 p-12 w-full">
            <p className="font-semibold text-center text-2xl text-[#D23434]">
              Add Ons
            </p>
            <p className="flex justify-center gap-1.5">
              {invoiceItem.add_ons.map((item, index) => (
                <p key={Math.random() + Date.now()} className="group">
                  {item.name} ({item.quantity})
                  <span
                    className="group-last:hidden"
                  >
                    ,
                  </span>
                </p>
              ))}
            </p>
          </div>

          <div className="w-full  space-y-2 p-12 bg-[#F4F4F4] border-l border-black">
            <p className="font-semibold h-full text-2xl text-[#D23434]">
              Trailer ID
            </p>
            <p className="text-6xl">{invoiceItem.trailer_id}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
