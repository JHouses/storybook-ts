import React from "react";
import { Button } from '../components/button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs]
};

export const primary = () => {
  const label = text("Label", "Este es un botón de ejemplo Ω");
  const disabled = boolean("Desabilitado", false);
  const outlined = boolean("Oultined", false);
  return (
    <Button onClick={action('Evento click')} outlined={outlined} label={label} disabled={disabled} />
  )
}