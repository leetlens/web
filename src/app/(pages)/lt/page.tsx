"use client";
import { Container, Main } from "@/components/craft";
import CompaniesSearch from "@/components/leetcodeComp/CompaniesSearch";
import Table from "@/components/leetcodeComp/Table";
import { AuthenticatedNavbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function LeetcodePage() {
  return (
    <Main>
      <Container>
        <div>
          <AuthenticatedNavbar />
        </div>
        <CompaniesSearch />
        <div className="mx-auto max-w-md py-12">
          <h1>Leetcode</h1>
        </div>
        <Table />
      </Container>
    </Main>
  );
}
