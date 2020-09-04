import React from 'react';
import styled from 'styled-components';
import { FontContainerSelect } from './fontstyled-select'

import { useQuery } from "@apollo/react-hooks";
import { FontData } from "./generated/FontData";
import { GET_ALL_FONTS } from "./queries";

import { GlobalFonts } from './web_fonts';

const FontBlock = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  h3{
    margin: 0;
  }
`

const App:React.FC = () => {

  const {data, loading} = useQuery<FontData>(GET_ALL_FONTS, {})

  if(loading || !data) return <div>Loading</div>

  return (
    <div className="App">
      <GlobalFonts />
      <h1>MT Fonts</h1>

      {
        data && data.fonts && data.fonts.map(font => (
          <FontBlock>
            <h3>{font?.font_name}</h3>
            <FontContainerSelect ffont={font?.web_font!} fweights={font?.font_weights!} />
          </FontBlock>
        ))

      }

    </div>
  );
}

export default App;
