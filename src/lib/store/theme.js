import { writable } from 'svelte/store';

let isDarkMode = false;
function toggleTheme() {
	const { subscribe, update } = writable(isDarkMode);

	if (typeof window !== 'undefined') {
		isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	return {
		subscribe,
		switchTheme: () =>
			update((value) => {
				!value;
				const themeClass = value ? 'dark' : 'light';
				document.documentElement.classList.toggle(themeClass);
				// console.log(value);
				return themeClass;
			})
	};
}

export const theme = toggleTheme();
