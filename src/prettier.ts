import merge from 'lodash.merge'
const baseConfig = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cx', 'cn'],
}

export const getPrettierConfig = (config: unknown = {}) => {
  return merge({}, baseConfig, config)
}
