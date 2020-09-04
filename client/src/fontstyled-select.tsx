import React,{useState} from 'react';
import styled from 'styled-components'

import {WeightVal} from './fontValues'
import {StyleVal} from './fontValues'

const Font = styled.div<{font: string, fweight: string, fstyle?:string, fsize?:string }>`
    font-family: ${props => props.font};
    font-weight: ${props => props.fweight};
    font-style: ${props => props.fstyle};
    font-size: ${props => props.fsize}
` 

interface IProps{
    ffont: string
    fweights: string
}

export const FontContainerSelect:React.FC<IProps> = ({ffont, fweights}) => {

    const [fweight, setFweight] = useState<string>('400')
    const [fstyled, setFstyle] = useState<string>('normal')

    const setFontDetails = (value:string, fitalic:string) => {
        setFweight(value)
        setFstyle(fitalic)
    }

    return(
        <div>
            <Font font={ffont} fweight={fweight} fsize={'3em'} fstyle={fstyled}>
                Fonts Test with select
            </Font>
            
            <select onChange={e => setFontDetails(e.target.value, e.target[e.target.selectedIndex].getAttribute('data-it')?? '')}>
            {
                fweights?.split(',').map((weight: any) => {
                  return(
                    <option value={WeightVal[weight.replace(/ /g,'')]} data-it={StyleVal[weight.replace(/ /g,'')]} >{weight}</option>
                  )
                })
              }
            </select>

        </div>
    )
}
