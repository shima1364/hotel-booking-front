import { useRef, useContext } from "react";
import { DataContext } from "./../../context/dataContext";
import "../sass/SelectLocation.scss";
import { Autocomplete, TextField } from "@mui/material";
import styled from "@emotion/styled";

function SelectLocation(props) {
  const Location = useRef();
  const ctx = useContext(DataContext);

  const hesam = ctx.HotelAPI.map((item) => item.city);
  const Cities = [...new Set(hesam)];

  const DestinationHandler = (val) => {
    props.select(val);
  };

  return (
    <div style={{minWidth:'200px'}}>
      <Autocomplete
      className="bg-white rounded-1"
        disablePortal
        id="combo-box-demo"
        options={Cities}
        ref={Location}
        value={ctx.Destination}
        onChange={(event, value) => DestinationHandler(value)}
        renderInput={(params) => (
          <TextField {...params} label="City" />
        )}
      />
    </div>
  );
}

export default SelectLocation;
