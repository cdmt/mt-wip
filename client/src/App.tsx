import React from 'react';
import {Link} from 'react-router-dom'
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
  width: 100%;

  h3{
    margin: 0;
  }

  @media(min-width: ${breakpoint}){
    flex: 0 0 50%;
  }

  .font-info{
    display: flex;
    align-items: baseline;
    span{
      margin-left: 5px;
    }
  }

  &:hover{
    background: pink;
  }

`

const FontsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FontBlockContents = styled.div`
  padding: 10px;
`


const App:React.FC = () => {

  const {data, loading} = useQuery<FontData>(GET_ALL_FONTS, {})

  if(loading || !data) return <div>Loading</div>

  return (
    <div className="App">
      <PageWrap>
      <GlobalFonts />
      <FontsContainer>
      {
        data && data.fonts && data.fonts.map(font => (
          // const fontsArr:array = font?.font_weights!.split(',')
          <Link to="FontDisplay">
            <FontBlock>
              <FontBlockContents>
                <div className="font-info">
                  <h3>{font?.font_name}</h3>
                  <span>
                    {font?.weights_number} weights
                  </span>
                  <span>
                    {font?.styles_number} styles
                  </span>
                </div>
                <FontContainerSelect ffont={font?.web_font!} mtWeights={font?.font_weights!}/>
              </FontBlockContents>
            </FontBlock>
          </Link>
        ))

      }
      </FontsContainer>
      </PageWrap>
    </div>
  );
}

export default App;
