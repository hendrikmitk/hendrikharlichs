import { isMenuOpen } from '$lib/store';

const closeMenuIfOpen = () => isMenuOpen && isMenuOpen.set(false);

export default closeMenuIfOpen;
