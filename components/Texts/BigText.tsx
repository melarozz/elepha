import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from "../colors";

const StyledText = styled.Text`
  font-size: 37 px;
  color: ${colors.white};
  text-align: "center";
  font-family: TenorSans-Regular;
`;

import { TextProps } from "./types";

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}> {props.children} </StyledText>
};

export default BigText;