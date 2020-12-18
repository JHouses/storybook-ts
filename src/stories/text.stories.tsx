import React from "react";
import { Text } from '../components/text';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Text",
  decorators: [withKnobs]
};

export const primary = () => {
  const label = text("Label", "Este es un texto de ejemplo Ω");
  const bold = boolean("Bold", false);
  
  return (
    <Text label={label} bold={bold} />
  )
}