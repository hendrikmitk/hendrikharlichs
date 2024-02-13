import { writable, type Writable } from 'svelte/store';

export const currentPage: Writable<string> = writable('');
export const isMenuOpen: Writable<boolean> = writable(false);
