module.exports = {
   stories: ['../src/**/*.stories.[tj]s'],
   addons: [
      '@storybook/preset-create-react-app',
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-storysource',
      '@storybook/addon-knobs/register',
      '@storybook/addon-docs/preset'
   ]
}
