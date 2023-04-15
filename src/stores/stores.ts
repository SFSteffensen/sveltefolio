import { writable } from 'svelte/store';

// Check if the code is running in a browser environment
const isBrowser = typeof window !== 'undefined';

// Create a writable store for the theme, defaulting to the user's preferred color scheme
export const theme = writable(
    isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
);

if (isBrowser) {
    // Function to update the theme store based on the user's preferred color scheme
    const updateTheme = (event) => {
        theme.set(event.matches ? 'dark' : 'light');
    };

    // Add an event listener to update the theme store when the user's preferred color scheme changes
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', updateTheme);
}