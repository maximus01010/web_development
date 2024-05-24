import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo';
import { Rating } from '@mui/material';
import './App.css'
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <RatingDemo/>
    </div>
  )
}

export default App
