import styled from "@emotion/styled";
import { ColorPalette } from "styles/ColorPalette";
import { fontPalette } from "styles/FontPalette";

export const StyledTitle = styled.div`
  font-family:"AppleB";
  font-size: ${fontPalette.font28};
  color: ${ColorPalette.fureBlack};
`;

export const StyledButton = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0px;
`;