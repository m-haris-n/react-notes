import React, { useEffect, useState } from "react";
import { Button, Modal, TextField, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [title, setTitle] = useState({});

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  const contentChangeHandler = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleAddNote = () => {
    const note = {
      id: props.id,
      title: title,
      content: content,
    };
    props.updateNote(note);
    props.closeHandler();
  };

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={handleAddNote}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack id={props.id} component="form" sx={style} spacing={2}>
          <TextField
            placeholder="Title"
            value={title}
            onChange={titleChangeHandler}
          ></TextField>
          <TextField
            placeholder="Note..."
            multiline
            value={content}
            onChange={contentChangeHandler}
          ></TextField>
          <Button onClick={handleAddNote}>Update</Button>
        </Stack>
      </Modal>
    </div>
  );
}
