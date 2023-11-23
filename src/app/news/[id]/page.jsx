import { DetailNews } from "@/components/organisms";

export const metadata = {
  title: "Detail News - Sociops",
};
export default function Page({ params: { id } }) {
  return <DetailNews id={id} />;
}
