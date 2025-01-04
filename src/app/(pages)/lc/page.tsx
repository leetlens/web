"use client";
import LandingHeader from "@/components/landing/landing-header";
import CompaniesSearch from "@/components/lc/lc-companysearch";
import ProblemTable from "@/components/lc/lc-table";

export default function LeetcodePage() {
  return (
    <div>
      <div>
        <LandingHeader />
      </div>
      <CompaniesSearch />
      
      <div className="mx-auto max-w-md py-12">
        <h1>Leetcode</h1>
      </div>
      <ProblemTable />
    </div>
  );
}
