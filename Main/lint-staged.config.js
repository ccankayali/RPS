export default {
    '*.{ts,tsx}': () => 'eslint . --ext ts,tsx --ignore-path .gitignore --fix',
    '**/*.{ts,tsx}': () => 'tsc --noEmit -p tsconfig.json --composite false',
    '*.{json,ts,tsx,html}': () => 'prettier --write .'
  }