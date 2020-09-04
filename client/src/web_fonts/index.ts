import { createGlobalStyle } from "styled-components";

import { Alber } from "./alber";
import { Alwyn } from "./alwyn";
import { AlwynRd } from "./alwynrd";
import { Depot } from "./depot";
import { DepotCon } from "./depotcon";
import { Bale } from "./bale";
import { BaleMono } from "./balemono";
import { Faricy } from "./faricy";
import { Hedley } from "./hedley";
import { Hyla } from "./hyla";
import { Mic32 } from "./mic32";
import { Mic32Rd } from "./mic32rd";
import { Rehn } from "./rehn";
import { RehnCon } from "./rehncon";
import { Varly } from "./varly";

export const GlobalFonts = createGlobalStyle`
  ${Alber}
  ${Alwyn}
  ${AlwynRd}
  ${Depot}
  ${DepotCon}
  ${Bale}
  ${BaleMono}
  ${Faricy}
  ${Hedley}
  ${Hyla}
  ${Mic32}
  ${Mic32Rd}
  ${Rehn}
  ${RehnCon}
  ${Varly}
`;