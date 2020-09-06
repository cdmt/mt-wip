/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FontData
// ====================================================

export interface FontData_fonts {
  __typename: "Font";
  _id: string;
  font_name: string | null;
  font_weights: string | null;
  font_description: string | null;
  web_font: string | null;
  weights_number: string | null;
  styles_number: string | null;
}

export interface FontData {
  fonts: (FontData_fonts | null)[] | null;
}
