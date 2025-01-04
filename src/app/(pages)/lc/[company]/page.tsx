import CompanyCard from "@/components/lc/lc-companycard";
import { Container, Main } from "@/components/craft";
import { AuthenticatedNavbar } from "@/components/landing/Navbar";
import CompanyQuestions from "@/components/lc/lc-companytable";

export default function CompanyPage({
  params,
}: {
  params: { company: string };
}) {
  // You would typically fetch this data from an API
  const companyData = {
    name: "Meta",
    imageUrl:
      "https://assets.leetcode.com/users/images/5e0612cd-020b-49ac-893b-e4b3e7315f01_1720089938.3952677.png",
    questionCount: 957,
    savedCount: 5928,
    lastUpdated: "6 hours ago",
  };

  return (
    <Main>
      <Container>
        <AuthenticatedNavbar />
        <div className="flex">
          <div className="w-[30%]">
            <CompanyCard {...companyData} />
          </div>
          <div className="w-[70%]">
            <CompanyQuestions />
          </div>
        </div>
      </Container>
    </Main>
  );
}
