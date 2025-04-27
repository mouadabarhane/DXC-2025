import { SvgIcon, SvgIconProps } from '@mui/material';

const ManageUsers = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12ZM12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6ZM6 16H18V18H6V16ZM6 14H18V12H6V14ZM6 10H18V8H6V10Z" />
    </SvgIcon>
  );
};

export default ManageUsers;
