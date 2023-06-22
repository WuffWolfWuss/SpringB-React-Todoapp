import { Formik, Form, Field } from "formik";

const TodoForm = (props) => {
  console.log(props.desc);
  return (
    <Formik
      initialValues={{ description: props.desc }}
      enableReinitialize={true}
      onSubmit={props.onSubmit}
    >
      {(props) => (
        <Form>
          <fieldset className="form-group">
            <label>Description</label>
            <Field
              type="text"
              className="form-control"
              name="description"
              value={props.values.description}
            />
          </fieldset>
          <div>
            <button className="btn btn-success m-5" type="submit">
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
