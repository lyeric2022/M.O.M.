import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
  },
};

export default config;

export const preprocess = sveltePreprocess({
  typescript: {
    tsconfigFile: './tsconfig.json',
  },
});
