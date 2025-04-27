import { SvgIcon, SvgIconProps } from '@mui/material';

const ProductOfferings = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM4 19V5H20V19H4ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z" />
    </SvgIcon>
  );
};

export default ProductOfferings;
