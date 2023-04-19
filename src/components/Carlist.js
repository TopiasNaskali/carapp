import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material/Button";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { render } from "react-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConstructionOutlined } from "@mui/icons-material";
import { Icon } from "@mui/material";

import AddCar from './AddCar';
import EditCar from "./EditCar";

export default function Carlist() {
  const [cars, setCars] = React.useState([]);
  const [msg, setMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const updateCar = (updateCar, link) => {
    fetch(link, {
      method: 'PUT', 
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateCar)
    })
    .then(response => {
      if (response.ok){
        setMsg('Car edited succesfully');
        setOpen(true);
        fetchCars();
      } else {
        alert('Something went wrong.');
      }

    })
    .catch(err => console.error(err));
  }

    const deleteCar = (link) => {
      if(window.confirm("Are you sure?")){
        fetch(link, {method: 'DELETE'})
        .then(response =>{
          if(response.ok){
            setMsg("Car deleted");
            setOpen(true);
            fetchCars();
        }
        else {
          alert("Something went wrong")
        }
      })
    
  .catch((err) => console.log("err"));
          }
       };
    

  const columnDefs = [
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    {
      headerName: "",
      
      field: '_links.self.href' ,
      cellRenderer: (params) => 
      
      <EditCar updateCar = {updateCar} params={params} />
      
   
    },
    { headerName: "",
    
    field: '_links.self.href',
    cellRenderer:(params) => 
    <IconButton color="error" onClick={() => deleteCar(params.value)}>
    <DeleteIcon/>
  </IconButton>},
  ];

  const addCar = (car) => {
    console.log("BUTTON PRESSED");
    console.log(cars);
    fetch("https://carrestapi.herokuapp.com/cars", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(car),
    })
    .then(response => {
      if(response.ok) {
        fetchCars();
      }
    })
  };

  const fetchCars = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
    .then((response) => response.json())
    .then((responseData) => setCars(responseData._embedded.cars))
    .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    fetchCars()
  }, []);



  return (
    <div>
      <AddCar addCar={addCar}>
        Add Car
      </AddCar>
      <div className="ag-theme-material" style={{ height: 600, width: "90" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={cars}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
    );
  };
