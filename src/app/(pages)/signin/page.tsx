import { LoginForm } from "@/components/landing/landing-login-form";
import { Container, Main } from "@/components/craft";
import Navbar, { AuthenticatedNavbar } from "@/components/landing/Navbar";

export default function SignInPage() {
  return (
    <Main>
      <Container>
        <div>
          <Navbar />
          {/* <AuthenticatedNavbar /> */}
        </div>
        <div className="mx-auto max-w-md py-12">
          <LoginForm />
        </div>
      </Container>
    </Main>
  );
}
