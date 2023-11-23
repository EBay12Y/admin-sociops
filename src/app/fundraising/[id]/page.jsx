import DetailFundraising from "@/components/organisms/Fundraising/DetailFundraising/DetailFundraising.organism";

export const metadata = {
  title: "Detail Fundraising - Sociops",
};
export default function Page({ params: { id } }) {
  return <DetailFundraising id={id} />;
}
