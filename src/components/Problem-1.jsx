import React, { useState } from "react";
import { useEffect } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({ name: "", status: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (val) => {
    setShow(val);
  };

  useEffect(() => {
    if (show === "all") {
      const statusOrder = { Active: 1, Completed: 2, Pending: 3, Archive: 4 };
      const rows = data
        .slice()
        .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
      setFilteredData([...rows]);
    }

    if (show === "active") {
      let rows = data
        .slice()
        .filter((row) => row?.status?.toLowerCase() === show);
      setFilteredData([...rows]);
    }

    if (show === "completed") {
      let rows = data
        .slice()
        .filter((row) => row?.status?.toLowerCase() === show);
      setFilteredData([...rows]);
    }
  }, [show, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData((prev) => [...prev, formData]);
    setFilteredData((prev) => [...prev, formData]);
    setFormData({ name: "", status: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={formData.name}
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="col-auto">
              <input
                value={formData.status}
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
                onChange={handleChange}
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
              {filteredData &&
                filteredData?.map((row, index) => (
                  <tr key={index}>
                    <td scope="col">{row?.name}</td>
                    <td scope="col">{row?.status}</td>
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
