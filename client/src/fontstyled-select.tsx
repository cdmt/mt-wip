import React,{useState} from 'react';
import styled from 'styled-components'

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
            
            <select className='select-block' 
                onChange={e => setFontDetails(e.target.value, e.target[e.target.selectedIndex].getAttribute('data-it')?? '')}>    
                <option value={'300'} data-it={'normal'}>Light</option>
                <option value={'400'} data-it={'normal'}>Regular</option>
                <option value={'500'} data-it={'normal'}>Medium</option>
                <option value={'700'} data-it={'normal'}>Bold</option>
                <option value={'300'} data-it={'italic'}>Light Italic</option>
                <option value={'400'} data-it={'italic'}>Regular Italic</option>
                <option value={'500'} data-it={'italic'}>Medium Italic</option>
                <option value={'700'} data-it={'italic'}>Bold Italic</option>
            </select>
        </div>
    )
}
