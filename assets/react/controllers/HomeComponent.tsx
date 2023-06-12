import React from "react";
import { TextField } from "@mui/material";

interface HomeComponentProps {
  controller_name: string;
}

const HomeComponent = ({ controller_name }: HomeComponentProps) => {
  return (
    <div>
      <h1>Hello : {controller_name}</h1>.
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </div>
  );
};

export default HomeComponent;
