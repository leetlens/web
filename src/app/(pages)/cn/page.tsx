import { Container } from "@/components/craft";
import { Main } from "@/components/craft";
import { AuthenticatedNavbar } from "@/components/Navbar";

export default function CnPage() {
  return (
    <Main>
      <Container>
        <div>
          <AuthenticatedNavbar />
        </div>
        <div className="mx-auto max-w-md py-12">
          <h1>Coding Ninjas</h1>
        </div>
      </Container>
    </Main>
  );
}
