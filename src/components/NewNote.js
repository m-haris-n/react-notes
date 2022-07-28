import React, {useState} from "react";
import {
  Button,
  Modal,
  TextField,
  Stack,
} from "@mui/material";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [title, setTitle] = useState("");

    const titleChangeHandler = (event) => {
      event.preventDefault();
      setTitle(event.target.value);
    };
    const [content, setContent] = useState("");

    const contentChangeHandler = (event) => {
      event.preventDefault();
      setContent(event.target.value);
    };

    const handleAddNote = () => {
        if (title.length === 0 && content.length === 0) {
            handleClose()
        }
        else {
            const note = {
              id: props.id,
              title: title,
              content: content,
            };
            props.handleNewNote(note);
            setTitle("");
            setContent("");
            handleClose();
            
        }
    };


  return (
    <div>
      <TextField placeholder="Add new notes..." onClick={handleOpen} sx={{my:1, width:'100%'}}></TextField>

      <Modal
        open={open}
        onClose={handleAddNote}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} spacing={2}>
          <TextField placeholder="Title" value={title} onChange={titleChangeHandler}></TextField>
          <TextField placeholder="Add new notes..." multiline value={content} onChange={contentChangeHandler}></TextField>
          <Button onClick={handleAddNote}>Save</Button>
        </Stack>
      </Modal>
    </div>
  );
}
