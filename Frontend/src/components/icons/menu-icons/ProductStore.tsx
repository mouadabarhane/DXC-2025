import { SvgIcon, SvgIconProps } from '@mui/material';

const ProductStore = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 4H20C21.1 4 22 4.9 22 6V7C22 8.1 21.1 9 20 9H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V9H4C2.9 9 2 8.1 2 7V6C2 4.9 2.9 4 4 4ZM7 19H17V9H7V19ZM4 7H20V6H4V7Z" />
    </SvgIcon>
  );
};

export default ProductStore;
