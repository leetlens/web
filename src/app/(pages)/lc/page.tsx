"use client";
import LandingHeader from "@/components/landing/landing-header";
import { LCBanner } from "@/components/lc/lc-banner";
import CompaniesSearch from "@/components/lc/lc-companysearch";
import ProblemTable from "@/components/lc/lc-table";

export default function LeetcodePage() {
  return (
    <div>
      <LandingHeader />
      <div className="max-w-[110rem] mx-auto">
        <main className="mx-auto px-4">
          <div className="my-6">
            <LCBanner />
          </div>
          <div className="flex gap-4 justify-between">
            <CompaniesSearch />
            <ProblemTable />
          </div>
        </main>
      </div>
    </div>
  );
}
