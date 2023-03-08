import Nav from "./Nav";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header>
        <Container className="container-fluid">
          <Nav />
        </Container>
      </header>
    </>
  );
};

export default Header;
