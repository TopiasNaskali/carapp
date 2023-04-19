import React from 'react';
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function EditCar({updateCar, params}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: "",
      });

   const handleClose = (event, reason) => {
    if (reason !== 'backdropClick'){
        setOpen(false);
    }
   }
   const handleClickOpen = () => {
    setOpen(true);
    setCar({
        brand: params.data.brand, 
        model: params.data.model,
        color: params.data.color,
        fuel: params.data.fuel,
        year: params.data.year,
        price: params.data.price,
    })
  };
  const handleSave = () => {
    updateCar(car, params.value);
    

  }
  const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

    return(
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Edit Car
            </Button>
            <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Edit Car</DialogTitle>
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
              <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>

        </div>
    );

}