import { EditIcon } from "lucide-react";
import { EditModal } from "./edit-modal";

const EditProfile = () => {
  return (
    <section className="container w-4/5 space-y-12">
      <article className=" bg-primary-gray rounded-lg  p-8 space-y-6 border border-black">
        <h3 className="text-2xl font-semibold text-center text-primary-red ">
          Name
        </h3>
        <p className="text-xl font-normal text-center flex justify-center items-center">
          Muhammad Soban Asim
          <EditModal name="Name" value="Muhammad Soban Asim" type="text" />
        </p>
      </article>

      <article className=" bg-primary-gray rounded-lg  p-8 space-y-6 border border-black">
        <h3 className="text-2xl font-semibold text-center text-primary-red ">
          Email
        </h3>
        <p className="flex  justify-center items-center text-xl font-normal ">
          kwahab214@gmail.com
          <EditModal name="Email" value="kwahab214@gmail.com" type="email" />
        </p>
      </article>

      <article className=" bg-primary-gray rounded-lg  p-8 space-y-6 border border-black">
        <h3 className="text-2xl font-semibold text-center text-primary-red ">
          Password
        </h3>
        <p className="text-xl   font-normal flex justify-center items-center">
          ********
          <EditModal name="Password" value="********" type="password" />
        </p>
      </article>
    </section>
  );
};

export default EditProfile;
