import {ErrorLocation} from "./ErrorLocation";

export default {
  title: "Error Message",
  component: ErrorLocation,
};

const Template = (args) => {
  return (
      <ErrorLocation {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  isError: true,
  setIsError: undefined,
  errorMessage: 'Sua mensagem de erro aqui...'
};
