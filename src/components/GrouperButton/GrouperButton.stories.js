import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../GlobalStyles/theme";
import { GlobalStyle } from "../../GlobalStyles/globalTheme.js";
import { GrouperButton } from "./GrouperButton";
import { TestButton } from "../TestButton/TestButton";

export default {
  title: "Box de botões",
  component: GrouperButton,
};

const Template = (args) => {
  return (
    <ThemeProvider theme={args.theme}>
      <GlobalStyle />
      <GrouperButton {...args}></GrouperButton>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <TestButton>Teste</TestButton>
      <TestButton>Teste</TestButton>
    </>
  ),
  theme: lightTheme,
};

export const Dark = Template.bind({});
Dark.args = {
  children: (
    <>
      <TestButton>Teste</TestButton>
      <TestButton>Teste</TestButton>
    </>
  ),
  theme: darkTheme,
};
