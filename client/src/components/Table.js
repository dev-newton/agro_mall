import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Table() {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date Added</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <Link to="/view">Mark</Link>
            </td>
            <td>Otto</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i> &nbsp; Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <Link to="/view">Jacob</Link>
            </td>
            <td>Thornton</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i> &nbsp; Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <Link to="/view">Jane</Link>
            </td>
            <td>the Bird</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i> &nbsp; Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>
              <Link to="/view">Newton</Link>
            </td>
            <td>Otto</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i> &nbsp; Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <Link to="/view">Michael</Link>
            </td>
            <td>Thornton</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i> &nbsp; Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <Link to="/view">Rafael</Link>
            </td>
            <td>the Bird</td>
            <td>2010-12-4</td>
            <td className="table-action-width">
              <Link to="/edit">
                <button className="btn btn-warning table-action-rm">
                  <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
              </Link>
              <Link to="/delete">
                <button className="btn btn-danger">
                  <i className="fa fa-trash"></i> &nbsp; Delete
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
