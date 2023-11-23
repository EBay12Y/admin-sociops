import { DetailVolunteer } from "@/components/organisms";

export const metadata = {
  title: "Detail Volunteer - Sociops",
};
export default function Page({ params: { id } }) {
  return <DetailVolunteer id={id} />;
}
