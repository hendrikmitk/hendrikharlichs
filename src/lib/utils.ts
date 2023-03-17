import { isMenuOpen } from '$store';

export const closeMenuIfOpen = () => isMenuOpen && isMenuOpen.set(false);
