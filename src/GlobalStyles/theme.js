import { shade, desaturate } from 'polished';

export const lightTheme =  {
  font_primary_color: 'white',
  font_secondary_color: '#2196f3',
  background_primary_color: '#E8E8E8',
  background_secondary_color: 'white',
  button_primary_color: '#2196f3',
  button_secondary_color: '#fafafa',
  button_primary_hover: shade(0.2, '#2196f3'),
  button_secondary_hover: shade(0.3, '#fafafa'),
  title_text_shadow: `2px 2px 0px ${shade(0.5, '#2196f3')}`,
  title_text_color: '#2196f3',
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
  grouper_box_shadow: '0px 0px 5px 2px rgba(33, 150, 243, .2)',
  title_clip_background: 'linear-gradient(219deg,'+ 
    '#FFFFFF 19%,'+
    'transparent 19%,transparent 20%,'+
    '#2196f3 20%, #2196f3  39%,'+
    'transparent 39%,transparent 40%,'+ 
    '#FFFFFF 40%, #FFFFFF 59% ,'+
    'transparent 59%,transparent 60%,'+ 
    '#2196f3 60%, #2196f3 79%,'+
    'transparent 79%, transparent 80%,'+ 
    '#FFFFFF 80%)',
  text_selection_color: 'white',
  text_selection_background: '#2196f3',
  label_primary_color: '#2196f3',
  input_border: '#2196f3',
  input_border_focus: '#0d47a1',
  input_placeholder_color: `${desaturate(0.5, '#2196f3')}`,
  grouper_border: '1px solid #2196f3',
  week_temp_background_color: 'rgba(33, 150, 243, .2)',
};

export const darkTheme = {
  font_primary_color: 'white',
  font_secondary_color: 'white',
  background_primary_color: '#212121',
  button_primary_color: '#e91e63',
  button_secondary_color: '#fafafa',
  button_primary_hover: shade(0.2, '#e91e63'),
  button_secondary_hover: shade(0.1, '#fafafa'),
  text_shadow: `3px 3px 0px ${shade(0.1, '#e91e63')}`,
  title_text_shadow: `3px 3px 0px ${shade(0.2, '#e91e63')}`,
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
  grouper_border: '1px solid #e91e63',
  title_clip_background: 'linear-gradient(219deg,'+ 
    'white 19%,'+
    'transparent 19%,transparent 20%,'+
    '#e91e63 20%, #e91e63  39%,'+
    'transparent 39%,transparent 40%,'+ 
    'white 40%, white 59% ,'+
    'transparent 59%,transparent 60%,'+ 
    '#e91e63 60%, #e91e63 79%,'+
    'transparent 79%, transparent 80%,'+ 
    'white 80%)',
  text_selection_color: 'white',
  text_selection_background: '#e91e63',
  label_primary_color: '#e91e63',
  input_border: '#e91e63',
  input_border_focus: 'white',
  input_placeholder_color: `${desaturate(0.5, '#e91e63')}`,
  week_temp_background_color: 'rgba(233, 30, 99, .1)',
}




