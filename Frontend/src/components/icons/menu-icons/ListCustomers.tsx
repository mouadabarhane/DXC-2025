import { SvgIcon, SvgIconProps } from '@mui/material';

const ListCustomers = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM5 4V20H19V4H5ZM6 7H18V9H6V7ZM6 11H18V13H6V11ZM6 15H18V17H6V15Z" />
    </SvgIcon>
  );
};

export default ListCustomers;
