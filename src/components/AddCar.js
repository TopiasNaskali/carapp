import * as React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function AddCar({ addCar }) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveCar = () => {
    addCar(car);
    setCar ({...car, brand: ""})
    setCar ({...car, model: ""})
    setCar ({...car, color: ""})
    setCar ({...car, fuel: ""})
    setCar ({...car, year: ""})
    setCar ({...car, price: ""})
    setOpen(false);
  };

    const handleClose = (event, reason) => {
        console.log("SULJETTIIN IKKUNA");
        if (reason !== 'backdropClick'){
            setOpen(false);
        }
        
       
    }

    const inputChanged = (e) => {
        console.log("SYOTETTA TULEE ADD IKKUNASSA")
        setCar({ ...car, [e.target.name]: e.target.value });
      };
    return (
        <div>
          <Button onClick={handleClickOpen} variant="outlined">
            Add Car
          </Button>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Car</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                name="brand"
                value={car.brand}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Brand"
                fullWidth={true}
                variant="standard"
              />
              <TextField
                autoFocus
                name="model"
                value={car.model}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Model"
                fullWidth={true}
                variant="standard"
              />
              <TextField
                autoFocus
                name="color"
                value={car.color}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Color"
                fullWidth={true}
                variant="standard"
              />
              <TextField
                autoFocus
                name="fuel"
                value={car.fuel}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Fuel"
                fullWidth={true}
                variant="standard"
              />
    <TextField
                autoFocus
                name="year"
                value={car.year}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Year"
                fullWidth={true}
                variant="standard"
              />
              <TextField
                autoFocus
                name="price"
                value={car.price}
                onChange={inputChanged}
                margin="dense"
                id="name"
                label="Price"
                fullWidth={true}
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={saveCar}>Save</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }