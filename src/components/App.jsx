import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [Notes, setNote] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  function createNote(note) {
    setNote((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setNote((prevItems)=>{
      return prevItems.filter((note, index)=>{
        return index !== id;
      });
    })  
  }

  return (
    <div>
      <Header />
      <CreateArea onCreate={createNote} />
      {Notes.map((note, index) => {
        return (
          index > 0 && (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          )
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
