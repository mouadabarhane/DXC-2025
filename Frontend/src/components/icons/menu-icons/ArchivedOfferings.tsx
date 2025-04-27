import { SvgIcon, SvgIconProps } from '@mui/material';

const ArchivedOfferings = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2ZM18 4V20H6V4H18ZM12 17L15 13H9L12 17Z" />
    </SvgIcon>
  );
};

export default ArchivedOfferings;
