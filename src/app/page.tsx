import { Container, Main, Section } from "@/components/craft";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Headers";
import Hero from "@/components/Hero";
import Navbar, { AuthenticatedNavbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <Main>
      <Container>
        <Navbar />
        <AuthenticatedNavbar />
        <Header />
        <Hero />
        <Feature />
        <Footer />
      </Container>
    </Main>
  );
}
