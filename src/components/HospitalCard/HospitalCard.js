import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const HospitalCard = ({ info }) => {
  return (
    
    <Card style={{width: "30%"}} sx={{ maxWidth: 345 }}>
      <Link to={`/hospital/${info.id}`} style={{textDecoration: "none", color: "#000"}}>
      <CardMedia
        component="img"
        alt={info.Name}
        height="140"
        image={info.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.Name}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <div style={{display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "space-evenly"}}>
            <span>Normal Beds: {info["Available Beds"]["Normal Beds"]} </span>
            <span>ICU Beds: {info["Available Beds"]["ICU Beds"]}</span>
            <span>COVID Beds: {info["Available Beds"]["COVID Beds"]}</span>
            <span>Ventilators: {info["Available Beds"]["Ventilators"]}</span>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
      </CardActions></Link>
    </Card>

  );
};

export default HospitalCard;
