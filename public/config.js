import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';

// import { defineCustomElements } from '../dist/define';
import { defineCustomElements } from '../dist/loader';
import { name } from '../package.json';
import './style/global.scss';

// Loads all components
// defineCustomElements('all');
defineCustomElements(window);
// Load individual components:
// defineCustomElements(['c-header','c-footer','c-navigation','user-repos','c-card','c-theme']);

addDecorator(
  withOptions({
    name,
    showAddonPanel: false,
  }),
);

configure(() => require('./stories'), module);
