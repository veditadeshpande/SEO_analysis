import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Home.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Home = () => {
  const customFontStyle = {
    fontFamily: 'cursive, "Comic Sans MS", sans-serif, "Zilla Slab", "Bungee", cursive', 
    fontSize: '45px',
    color: 'blue',
    fontWeight: 'bold',
    letterSpacing: '4px', // Increase letter spacing for a playful look
  };
  
  const [canSelectAll, updateCanSelectAll] = useState("No");
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [inputText, setInputText] = useState('');

  function selectAll() {
    console.log("Select All selected");
    setSelectAllChecked(!selectAllChecked);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !selectAllChecked;
    });
  }

  function clearInputAndCheckboxes() {
    setInputText("")
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  return (

    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1400,
          height: 600
        },
      }}
    >
      <Paper elevation={24}>     
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom>
        🤖 Enter the URL :
      </Typography>
      <TextField
          variant="standard"
          size="large"
          InputProps={{
            style: {
              ...customFontStyle,
              width: '100%',
            },
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="checkbox">
          <div className="checkbox-label" onClick={selectAll}>
            <input type="checkbox" id="opt1" name="myCheckbox" value="opt1" className="large-checkbox" />
            <label className="clable" htmlFor="opt1">
              <h3>Select All</h3>
            </label>
          </div>
          <input type="checkbox" id="opt2" name="myCheckbox" value="opt2" className="large-checkbox" />
          <label className="clable" htmlFor="opt2">
            <h3>Rabin-Karp</h3>
          </label>
          <div className="checkbox-label">
            <input type="checkbox" id="opt3" name="myCheckbox" value="opt3" className="large-checkbox" />
            <label className="clable" htmlFor="opt3">
              <h3>Suffix Tree</h3>
            </label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox" id="opt4" name="myCheckbox" value="opt4" className="large-checkbox" />
            <label className="clable" htmlFor="opt4">
              <h3>Suffix Array</h3>
            </label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox" id="opt5" name="myCheckbox" value="opt5" className="large-checkbox" />
            <label className="clable" htmlFor="opt5">
              <h3>Naive String Matching</h3>
            </label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox" id="opt6" name="myCheckbox" value="opt6" className="large-checkbox" />
            <label className="clable" htmlFor="opt6">
              <h3>KMP algorithm</h3>
            </label>
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          type= "submit"
          style={{ marginTop: '20px', fontSize: '1.25rem', padding: '15px 40px' }}
        >
          ANALYZE
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px', fontSize: '1.25rem', padding: '15px 40px' }}
          onClick={clearInputAndCheckboxes}
        >
          REFRESH
        </Button>
      </form>
      </Paper>
      </Box>
    </Container> 
  );
};

export default Home;
