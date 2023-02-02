import { Nav } from 'react-bootstrap';
import BModal from './modal';
import { FaGithub } from "react-icons/fa";

function Menu() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="http://www.google.com">Google</Nav.Link>
      </Nav.Item>
      <Nav.Item>      
        <Nav.Link href="https://github.com/" target="_blank"><FaGithub /> github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        </Nav.Link>
      </Nav.Item>
      <BModal />
    </Nav>
  );
}

export default Menu;