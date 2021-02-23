import React from "react";
import { Text } from "react-native";
import { theme } from "./theme";

const Title = props => {
  return <Text style={[props.style, theme.text.title]}>{props.children}</Text>;
};

export default Title;
