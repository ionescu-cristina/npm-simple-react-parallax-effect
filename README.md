# simple-react-parallax-effect

A lightweight and customizable parallax component tailored for React and Next.js applications.

## Installation

Using npm:

```bash
npm install simple-react-parallax-effect


import React from 'react';
import Parallax from 'simple-react-parallax-effect';

function App() {
  return (
    <Parallax 
      imageUrl="/path/to/your/image.jpg" 
      minHeight="700px" 
      title="Your Title Here"
      description="Your Description Here."
    />
  );
}

export default App;
```

## Props
imageUrl (required) - URL or path to the image.
minHeight (optional) - Minimum height for the parallax container.
title (optional) - A title to display over the parallax image.
description (optional) - A description or additional text.

## License
MIT