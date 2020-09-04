import React from 'react';
import styled from 'styled-components';

import { useQuery } from "@apollo/react-hooks";
import { FontData } from "./generated/FontData";
import { GET_ALL_FONTS } from "./queries";

function App() {

  const {data, loading} = useQuery<FontData>(GET_ALL_FONTS, {})

  if(loading || !data) return <div>Loading</div>

  return (
    <div className="App">
      <h1>MT Fonts</h1>

      

    </div>
  );
}

export default App;
