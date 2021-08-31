import { shade } from 'polished';

export const lightTheme =  {
  font_primary_color: 'white',
  font_secondary_color: '#e91e63',
  background_primary_color: '#E8E8E8',
  background_secondary_color: 'white',
  button_primary_color: '#e91e63',
  button_secondary_color: '#fafafa',
  button_primary_hover: shade(0.2, '#e91e63'),
  button_secondary_hover: shade(0.3, '#fafafa'),
  title_text_shadow: `2px 2px 0px ${shade(0.5, '#e91e63')}`,
  title_text_color: '#e91e63',
  button_primary_text_color: 'white',
  button_secondary_text_color: 'black',
  button_font_size_small: '12px',
  button_font_size_medium: '14px',
  button_font_size_large: '16px',
  button_padding_small: '.3rem',
  button_padding_medium: '.5rem 1rem .5rem 1rem',
  button_padding_large: '1rem 2rem 1rem 2rem',
  button_icon_size_small: '1.5rem',
  button_icon_size_medium: '2rem',
  button_icon_size_large: '3rem',
  grouper_box_shadow: '0px 0px 5px 2px rgba(233, 30, 99, .3)',
};

export const darkTheme = {
  font_primary_color: 'white',
  font_secondary_color: 'white',
  background_primary_color: '#212121',
  button_primary_color: '#9c27b0',
  button_secondary_color: '#fafafa',
  button_primary_hover: shade(0.2, '#9c27b0'),
  button_secondary_hover: shade(0.1, '#fafafa'),
  text_shadow: `3px 3px 0px ${shade(0.1, '#9c27b0')}`,
  title_text_shadow: `3px 3px 0px ${shade(0.2, '#9c27b0')}`,
  title_text_color: 'white',
  button_primary_text_color: 'white',
  button_secondary_text_color: 'black',
  button_font_size_small: '12px',
  button_font_size_medium: '14px',
  button_font_size_large: '16px',
  button_padding_small: '.3rem',
  button_padding_medium: '.5rem 1rem .5rem 1rem',
  button_padding_large: '1rem 2rem 1rem 2rem',
  button_icon_size_small: '1.5rem',
  button_icon_size_medium: '2rem',
  button_icon_size_large: '3rem',
  grouper_border: '2px solid #9c27b0'
}




