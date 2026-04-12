import { useEffect, useState } from "react";
import { get } from "../helpers/FetchApi";
import { getLocalStorageUserId } from "../helpers/reusableFunctions";
import { Col, Row, Table } from "react-bootstrap";

const HomeMainTable = () => {
  const [userId, setUserId] = useState("");
  const [expensesData, setExpensesData] = useState([]);

  const getExpensesData = async () => {
    const data = await get(`/expenses/${userId}/user`);
    setExpensesData(data);
  };

  useEffect(() => {
    const userIdLocalStorage = getLocalStorageUserId();
    setUserId(userIdLocalStorage);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userId) {
      getExpensesData();
    }

    // eslint-disable-next-line
  }, [userId]);

  return (
    <Row className="w-100">
      <Col md={11} className="m-auto">
        <h1>HomeMainTable</h1>
        {expensesData.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
              </tr>
              {expensesData.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                </tr>
              ))}
            </thead>
          </Table>
        ) : (
          // <ul>
          //   {expensesData.map((expense) => (
          //     <li key={expense.id}>{expense.description}: ${expense.amount.toFixed(2)}</li>
          //   ))}
          // </ul>
          <p>No expenses available.</p>
        )}
      </Col>
    </Row>
  );
};

export default HomeMainTable;
