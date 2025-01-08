import LandingHeader from "@/components/landing/landing-header";
import SheetsNeetcode from "@/components/sheets/sheets-neetcode";
import SheetsStriver from "@/components/sheets/striver/sheets-striver";

export default function SheetsPage() {
  return (
    <div>
      <LandingHeader />
      <SheetsStriver />
    </div>
  );
}
