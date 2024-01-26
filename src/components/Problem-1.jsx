import { Form, useFormik } from "formik";
import React, { useState } from "react";
import { Input } from "../validation";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  //   console.log(show);

  const initialValues = {
    name: "",
    status: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Input,
    onSubmit: (formValues) => {
      setLoading(true);
      const updatedValues = [...value, formValues];

      setValue(updatedValues);
      formik.resetForm();
    },
  });

  //   console.log(formik);
  console.log(value);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {value
                .filter((item) => {
                  if (show === "all") {
                    return true; // Display all items
                  } else {
                    const status = item.status;
                    return status.toLowerCase().includes(show);
                  }
                })
                .map((item, i) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
