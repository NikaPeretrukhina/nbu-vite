import tippy from 'tippy.js';

export function initTooltips() {
tippy('#currency', {
    content: 'Currency!',
    theme: 'tomato',
  });
tippy('#currency-name', {
    content: 'Name!',
    theme: 'tomato',
  });
tippy('#currency-value', {
    content: 'Value!',
    theme: 'tomato',
  });
tippy('#currency-data', {
    content: 'Data!',
    theme: 'tomato',
  });
}