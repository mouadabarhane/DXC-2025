import { SvgIconProps } from '@mui/material';
import CreditCardIcon from 'components/icons/menu-icons/CreditCardIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import LoanIcon from 'components/icons/menu-icons/LoanIcon';
import ServiceIcon from 'components/icons/menu-icons/ServiceIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import SignUpIcon from 'components/icons/menu-icons/SignUpIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  Saved_Items = 'Saved Items',
  Product_Offerings = 'Product Offerings',
  Archived_Offerings = 'Archived Offerings',
  Published_Offerings = 'Published Offerings',
  Product_Store = 'Product Store ',
  Product_Specifications = 'Product Specifications',
  List_Costomer = 'List Costomer',
  All_Customer_Order = 'All Customer Order',
  Notifications = 'Notifications',
  Manage_Users = 'Manage Users',
  Create_Product_Offerings = 'Create Product Offerings',
  New_Customer_Order = 'New Customer Order',
  Login = 'login',
  Signup = 'sign-up',
  ForgetPassword = 'forget-password',
  ResetPassword = 'reset-password',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Saved_Items,
    link: '#!',
    icon: TransferIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Product_Offerings,
    link: '#!',
    icon: UserIcon,
    available: true,
  },
  {
    id: 4,
    title: linkEnum.Archived_Offerings,
    link: '#!',
    icon: InvestIcon,
    available: true,
  },
  {
    id: 5,
    title: linkEnum.Published_Offerings,
    link: '#!',
    icon: CreditCardIcon,
    available: true,
  },
  {
    id: 6,
    title: linkEnum.Product_Store,
    link: '#!',
    icon: LoanIcon,
    available: true,
  },
  {
    id: 7,
    title: linkEnum.Product_Specifications,
    link: '#!',
    icon: ServiceIcon,
    available: true,
  },
  {
    id: 8,
    title: linkEnum.List_Costomer,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 9,
    title: linkEnum.All_Customer_Order,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 10,
    title: linkEnum.Notifications,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 11,
    title: linkEnum.Manage_Users,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 12,
    title: linkEnum.Create_Product_Offerings,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 13,
    title: linkEnum.New_Customer_Order,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 14,
    title: linkEnum.Login,
    link: '/authentication/login',
    icon: SignInIcon,
    available: true,
  },
  {
    id: 15,
    title: linkEnum.Signup,
    link: '/authentication/sign-up',
    icon: SignUpIcon,
    available: true,
  },
];
