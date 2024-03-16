import { writable, type Writable } from 'svelte/store';
import type { SubmissionStatus } from './enum';

export const currentPage: Writable<string> = writable('');
export const isMenuOpen: Writable<boolean> = writable(false);
export const submissionStatus: Writable<SubmissionStatus | undefined> =
	writable(undefined);
