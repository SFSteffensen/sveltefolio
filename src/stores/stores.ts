import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

export const theme = writable(
    isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
);

if (isBrowser) {
    // @ts-ignore
    const updateTheme = (event) => {
        theme.set(event.matches ? 'dark' : 'light');
    };

    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', updateTheme);
}
