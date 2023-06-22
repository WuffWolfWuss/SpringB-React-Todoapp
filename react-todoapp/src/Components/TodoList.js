import { Table } from "react-bootstrap";

const TodoList = (props) => {
  const events = props.events;

  return (
    <>
      <h1>Your Todo List</h1>
      {props.msg && <p className="alert alert-warning">{props.msg}</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>descriptions</th>
            <th>is done?</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.description}</td>
              <td>{event.done.toString()}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => props.onDelete(event.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => props.onUpdate(event.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="btn btn-success m-5" onClick={props.onAdded}>
        Add new todo
      </div>
    </>
  );
};

export default TodoList;
