import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { ReactNode } from "react";

type MainTemplateProps = {
  children: ReactNode;
}

export function MainTemplate({ children } : MainTemplateProps) {
  return (
  <>
    <Container>
      <Heading>
        <Logo />
      </Heading>
    </Container>

    <Container>
      <Menu />
    </Container>

    {children}

    <Container>
      <Footer />
    </Container>

  </>
  );
}