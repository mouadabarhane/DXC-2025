import { SvgIcon, SvgIconProps } from '@mui/material';

const ProductSpecifications = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2ZM6 4V20H18V4H6ZM12 7H14V11H12V7ZM12 13H14V17H12V13ZM10 7H8V11H10V7ZM10 13H8V17H10V13Z" />
    </SvgIcon>
  );
};

export default ProductSpecifications;
