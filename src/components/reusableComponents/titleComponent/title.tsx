import React from "react";
import "./title.css";
import Typography from "@mui/material/Typography";

export default function Title(props: any) {
  return (
    <>
      <Typography sx={{ p: 4 }} variant="h3" gutterBottom>
        {props.title}
      </Typography>
    </>
  );
}
