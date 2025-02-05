import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const UserCard = ({ name, image }) => {
  return (
    <Card sx={{ maxWidth: 1000, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
