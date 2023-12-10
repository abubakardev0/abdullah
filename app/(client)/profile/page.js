import Heading from "@/layout/heading";
import EditProfile from "@/components/client/profile/edit-profile";
function Profile() {
  return (
    <section className="h-screen container space-y-24 pt-16">
      <Heading title="Profile" />
      <EditProfile />
    </section>
  );
}

export default Profile;
