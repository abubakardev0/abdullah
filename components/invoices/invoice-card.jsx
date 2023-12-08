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
    <Card className="min-w-[350px] w-full rounded-md border border-black">
      <CardHeader className="bg-[#D23434] p-12">
        <CardTitle className="flex text-white justify-between gap-6 items-center font-semibold text-2xl">
          <p>Location</p>
          <p>Departure</p>

          <p>Return</p>

          <p>Request No</p>
        </CardTitle>
        <CardDescription className="flex text-xl font-medium  text-black justify-between items-center gap-6 text-center  ">
          <p>{invoiceItem.location}</p>
          <p>{invoiceItem.departure}</p>
          <p>{invoiceItem.return}</p>
          <p>{invoiceItem.request_no}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col w-full space-y-2 p-12 bg-[#F4F4F4] border border-black/90 ">
            <p className="font-semibold text-2xl text-[#D23434] ">Rate</p>
            <p className="font-semibold text-6xl">${invoiceItem.rate}</p>
          </div>
          <div className="flex flex-col space-y-2 p-12 w-full">
            <p className="font-semibold text-2xl text-[#D23434]">Add Ons</p>
            <p className="flex">
              {invoiceItem.add_ons.map((item) => (
                <div className="flex justify-between gap-4 ">
                  <p>
                    {item.name} ({item.quantity}) {","}
                  </p>
                </div>
              ))}
            </p>
          </div>

          <div className="flex flex-col w-full  space-y-2 p-12 bg-[#F4F4F4] border border-black/90">
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
