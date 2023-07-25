import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from "../colors";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
`;

import { TextProps } from "./types";

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}> {props.children} </StyledText>
};

export default RegularText;