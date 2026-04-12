import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <span>
        <i className="bi bi-house-door-fill"></i>
      </span>
      <div>Expanses Monitor</div>
      <Button>
        <i className="bi bi-box-arrow-left"></i> Logout
      </Button>
    </div>
  );
};

export default Header;
