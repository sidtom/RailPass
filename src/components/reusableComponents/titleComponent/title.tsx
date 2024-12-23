import React from "react";
import Typography from "@mui/material/Typography";

export default function Title(props: any) {
  return (
    <div className="flex justify-center items-center w-full my-6">
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
          textAlign: "center", // Center alignment
          fontWeight: 700, // Bold text
          color: "#374151", // Dark gray for good readability
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
          padding: "0 1rem", // Horizontal padding for small screens
        }}
      >
        {props.title}
      </Typography>
    </div>
  );
}
