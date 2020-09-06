import React from 'react';
import styled from 'styled-components';
import { FontContainerSelect } from './fontstyled-select'

import { useQuery } from "@apollo/react-hooks";
import { FontData } from "./generated/FontData";
import { GET_ALL_FONTS } from "./queries";

import { GlobalFonts } from './web_fonts';

const breakpoint = '700px';

const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FontBlock = styled.div`

  border-bottom: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;

  h3{
    margin: 0;
  }

  @media(min-width: ${breakpoint}){
    flex: 0 0 50%;
  }

`

const FontsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const App:React.FC = () => {

  const {data, loading} = useQuery<FontData>(GET_ALL_FONTS, {})

  if(loading || !data) return <div>Loading</div>

  return (
    <div className="App">
      <PageWrap>
      <GlobalFonts />
      <h1>MT Fonts</h1>
      <FontsContainer>
      {
        data && data.fonts && data.fonts.map(font => (
          <FontBlock>
            <h3>{font?.font_name}</h3>
            <FontContainerSelect ffont={font?.web_font!} fweights={font?.font_weights!} />
          </FontBlock>
        ))

      }
      </FontsContainer>
      </PageWrap>
    </div>
  );
}

export default App;
