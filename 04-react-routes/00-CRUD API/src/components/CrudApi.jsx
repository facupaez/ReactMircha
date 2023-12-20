import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { Error404 } from "../pages/Error404";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        /* console.log(res); */
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDeleted = confirm(`Estás seguro de eliminar el caballero ${id}`);

    if (isDeleted) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div>
      <HashRouter base="/santos">
        <header>
          <h2>Crud Api con Rutas</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              Santos
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading && <Loader />}
                {error && (
                  <Message
                    msg={`Error ${error.status}: ${error.statusText}`}
                    bgColor="#dc3545"
                  />
                )}
                {db && (
                  <CrudTable
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                )}
              </>
            }
          />
          <Route
            path="/agregar"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route
            path="/editar/:id"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
