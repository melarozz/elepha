import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from "../colors";
import { Text } from "react-native";


import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <Text style={props.textStyles}> {props.children} </Text>
};

export default SmallText;
