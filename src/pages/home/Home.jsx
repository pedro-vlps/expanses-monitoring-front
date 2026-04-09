import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const getUserData = () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      navigate('/login');
    }
  }

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;