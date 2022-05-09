import { Link } from 'react-scroll';
import tw from 'twin.macro';
interface Props {}

export const ButtonSoft = tw(Link)`
rounded-[50px] cursor-pointer transition ease-in-out duration-500 text-lg sm:px-12 sm:py-3.5 px-7 py-3 font-bold 
`;

export const ButtonLink = tw.a`
rounded-[50px] cursor-pointer transition ease-in-out duration-500 text-lg sm:px-12 sm:py-3.5 px-7 py-3 font-bold mb-9
`;
