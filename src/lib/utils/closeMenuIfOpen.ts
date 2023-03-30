import { isMenuOpen } from '$store';

const closeMenuIfOpen = () => isMenuOpen && isMenuOpen.set(false);

export default closeMenuIfOpen;
