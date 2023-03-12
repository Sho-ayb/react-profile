import Nav from "./Nav";
import Container from "./Container";

const Header = () => {
  return (
    <div>
      <header>
        <Container className="container-fluid">
          <Nav />
        </Container>
      </header>
    </div>
  );
};

export default Header;
