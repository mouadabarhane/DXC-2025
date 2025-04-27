import { SvgIcon, SvgIconProps } from '@mui/material';

const SavedItems = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M6 2C5.44772 2 5 2.44772 5 3V21.382C5 21.9847 5.68304 22.3391 6.17157 22.0005L12 18.118L17.8284 22.0005C18.317 22.3391 19 21.9847 19 21.382V3C19 2.44772 18.5523 2 18 2H6ZM17 18.618L12.1716 15.236C12.0644 15.1639 11.9356 15.1639 11.8284 15.236L7 18.618V4H17V18.618Z" />
    </SvgIcon>
  );
};

export default SavedItems;
