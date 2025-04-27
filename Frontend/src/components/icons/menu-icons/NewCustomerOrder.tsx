import { SvgIcon, SvgIconProps } from '@mui/material';

const NewCustomerOrder = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3ZM5 4V20H19V4H5ZM12 8V16H13V8H12ZM10 10H14V12H10V10ZM11 14H13V16H11V14Z" />
    </SvgIcon>
  );
};

export default NewCustomerOrder;
