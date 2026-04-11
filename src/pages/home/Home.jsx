import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeMainChart from "../../elements/HomeMainChart";
import Header from "../../elements/Header";

const Home = () => {
  const navigate = useNavigate();

  const getUserData = () => {
    const userData = localStorage.getItem("user_id");
    if (userData) {
      return userData;
      // return JSON.parse(userData);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <HomeMainChart />
    </div>
  );
};

export default Home;
