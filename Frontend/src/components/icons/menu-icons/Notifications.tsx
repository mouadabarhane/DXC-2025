import { SvgIcon, SvgIconProps } from '@mui/material';

const Notifications = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 24c1.1046 0 2-.8954 2-2h-4c0 1.1046.8954 2 2 2zm6.364-6c-.69 0-1.253-.56-1.364-1.25l-.636-5.5c-.07-.605-.315-1.164-.715-1.58C15.94 8.148 14.533 7.5 13 7.5V6c0-.828-.672-1.5-1.5-1.5S10 5.172 10 6v1.5c-1.533 0-2.94.648-3.65 1.67-.4.416-.645.975-.715 1.58l-.636 5.5c-.11.69-.674 1.25-1.364 1.25H2v2h20v-2h-3.636zM18 17H6l.643-5.571c.053-.457.24-.887.529-1.224C7.905 9.46 9.14 9 11 9s3.095.46 3.829 1.205c.29.337.476.767.529 1.224L18 17z" />
    </SvgIcon>
  );
};

export default Notifications;
