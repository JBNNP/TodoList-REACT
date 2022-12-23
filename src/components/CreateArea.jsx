import React, {useState} from 'react';

function CreateArea(props) {
  const [placeholder, setPlaceholder] = useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    const {value, name} = event.target;

    setPlaceholder((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder='Title'
          value={placeholder.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          placeholder='Take a note...'   
          value={placeholder.content}
          rows="3"
        />
        <button type='button'
          onClick={() => {
            props.onCreate(placeholder)
            setPlaceholder({
              title: "",
              content: ""
            })
          }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
