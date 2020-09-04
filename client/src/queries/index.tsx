import gql from 'graphql-tag';

export const GET_ALL_FONTS = gql`
    query FontData{
        fonts{
            _id
            font_name
            font_weights
            font_description
            web_font
          }
    }
` 