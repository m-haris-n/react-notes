import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";

import UpdateItem from "./UpdateItem";

export default function NoteItem(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item id={props.id} xs={12} md={6} lg={4}>
      <Card variant="outlined" onClick={handleOpen}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {props.title}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" gutterBottom>
            {props.content}
          </Typography>
        </CardContent>
      </Card>
      <UpdateItem
        isOpen={open}
        closeHandler={handleClose}
        id={props.id}
        title={props.title}
        content={props.content}
        updateNote={props.updateNoteHandler}
      />
    </Grid>
  );
}
