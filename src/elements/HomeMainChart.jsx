import { useEffect, useState } from "react";
import { getLocalStorageUserId } from "../helpers/reusableFunctions";
import { get } from "../helpers/FetchApi";

const HomeMainChart = () => {
  const [userId, setUserId] = useState("");
  const [expensesData, setExpensesData] = useState([]);

  const getExpensesData = async () => {
    const data = await get(`/expenses/${userId}/user`);
    setExpensesData(data);
  }

  useEffect(() => {
    const userIdLocalStorage = getLocalStorageUserId();
    setUserId(userIdLocalStorage);

    console.log("Aqui foi");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getExpensesData();

    console.log("Aqui foi 2");
    // eslint-disable-next-line
  }, [userId]);

  return (
    <div>
      <h1>HomeMainChart</h1>
      {
        expensesData.length > 0 ? (
          <ul>
            {expensesData.map((expense) => (
              <li key={expense.id}>{expense.description}: ${expense.amount.toFixed(2)}</li>
            ))}
          </ul>
        ) : (
          <p>No expenses available.</p>
        )
      }
    </div>
  )
}

export default HomeMainChart;