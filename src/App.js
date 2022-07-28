import React, { useEffect, useState } from "react";

import {
  ThemeProvider,
  createTheme,
  Container,
  Grid,
  CssBaseline,
  Paper,
} from "@mui/material";
import NoteItem from "./components/NoteItem";
import NavBar from "./components/NavBar";
import NewNote from './components/NewNote'

let userNotes = [
  {
    id: 1,
    title: "First Note",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolorem incidunt modi hic magni voluptate dignissimos repellendus vitae earum quia.",
  },
  {
    id: 2,
    title: "Second Note",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolorem incidunt modi hic magni voluptate dignissimos repellendus vitae earum quia.",
  },
  {
    id: 3,
    title: "Third Note",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolorem incidunt modi hic magni voluptate dignissimos repellendus vitae earum quia.",
  },
  {
    id: 4,
    title: "Fourth Note",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolorem incidunt modi hic magni voluptate dignissimos repellendus vitae earum quia.",
  },
];
function App() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [number, setNumber] = useState(0);

  const [notes, setNotes] = useState([]);
    useEffect(() => {
      const newNotes = userNotes;
      // newNotes.reverse();
      setNotes(newNotes);
      setNumber(newNotes.length+1);
    }, []);


  const addNote = (noteData) => {
    setNotes([...notes, noteData])
    setNumber(number+1)

  }


  const updateNote = (noteData) => {
    const currentNotes = [...notes]

    // currentNotes.reverse();
    currentNotes[noteData.id-1].title = noteData.title;
    currentNotes[noteData.id-1].content = noteData.content;
    // currentNotes.reverse();
    setNotes(currentNotes);
  }



  const noteItems = notes.map((note) => {
    return <NoteItem key={note.id} id={note.id} title={note.title} content={note.content} updateNoteHandler={ updateNote } />;
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={1}>
        <NavBar />
        <Container>
          <NewNote id={number} handleNewNote={ addNote } />
          <Grid container spacing={2} sx={{ py: 1 }}>
            {noteItems}
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
