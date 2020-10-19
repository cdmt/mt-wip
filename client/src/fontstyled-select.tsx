import React,{useState} from 'react';
import styled from 'styled-components'

import {WeightVal} from './fontValues'
import {StyleVal} from './fontValues'

const Font = styled.div<{font: string, fweight: string, fstyle?:string, fsize?:string }>`
    font-family: ${props => props.font};
    font-weight: ${props => props.fweight};
    font-style: ${props => props.fstyle};
    font-size: ${props => props.fsize};
    min-height: 59px;
` 

interface IProps{
    ffont: string
    mtWeights: string
}

export const FontContainerSelect:React.FC<IProps> = ({ffont, mtWeights}) => {

    const [fweight, setFweight] = useState<string>('')
    const [fstyled, setFstyle] = useState<string>('normal')

    const setFontDetails = (value:string, fitalic:string) => {
        setFweight(value)
        setFstyle(fitalic)
    }

    const fweights = mtWeights.split(',');
    const ranNum = Math.floor(Math.random()*fweights.length)
    // setFweight(WeightVal[fweights[ranNum].replace(/ /g,'')])
    // setFstyle(StyleVal[fweights[ranNum].replace(/ /g,'')])

    return(
        <div>
            <Font font={ffont} fweight={WeightVal[fweights[ranNum].replace(/ /g,'')]} fsize={'3em'} fstyle={StyleVal[fweights[ranNum].replace(/ /g,'')]}>
                Fonts Test with select
            </Font>
            <div>
                {fweights[ranNum]}
            </div>
        </div>
    )
}
