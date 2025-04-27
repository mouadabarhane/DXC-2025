import { SvgIconProps } from '@mui/material';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import SignUpIcon from 'components/icons/menu-icons/SignUpIcon';

import Notifications from 'components/icons/menu-icons/Notifications';
import SavedItems from 'components/icons/menu-icons/SavedItems';
import ProductStore from 'components/icons/menu-icons/ProductStore';
import ProductOfferings from 'components/icons/menu-icons/ProductOfferings';
import CreateProductOfferings from 'components/icons/menu-icons/CreateProductOfferings';
import PublishedOfferings from 'components/icons/menu-icons/PublishedOfferings';
import ArchivedOfferings from 'components/icons/menu-icons/ArchivedOfferings';
import ProductSpecifications from 'components/icons/menu-icons/ProductSpecifications';
import ListCustomers from 'components/icons/menu-icons/ListCustomers';
import NewCustomerOrder from 'components/icons/menu-icons/NewCustomerOrder';
import AllCustomerOrder from 'components/icons/menu-icons/AllCustomerOrder';
import ManageUsers from 'components/icons/menu-icons/ManageUsers';

export enum linkEnum {
  Dashboard = 'dashboard',
  Notifications = 'Notifications',
  Saved_Items = 'Saved Items',
  Product_Store = 'Product Store',
  Product_Offerings = 'Product Offerings',
  Create_Product_Offerings = 'Create Product Offerings',
  Published_Offerings = 'Published Offerings',
  Archived_Offerings = 'Archived Offerings',
  Product_Specifications = 'Product Specifications',
  List_Customers = 'List Customers',
  New_Customer_Order = 'New Customer Order',
  All_Customer_Order = 'All Customer Order',
  Manage_Users = 'Manage Users',
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
    title: linkEnum.Notifications,
    link: '/Notifications',
    icon: Notifications,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Saved_Items,
    link: '/Saved-Items',
    icon: SavedItems,
    available: true,
  },
  {
    id: 4,
    title: linkEnum.Product_Store,
    link: '/Product-Store',
    icon: ProductStore,
    available: true,
  },
  {
    id: 5,
    title: linkEnum.Product_Offerings,
    link: '/Product-Offerings',
    icon: ProductOfferings,
    available: true,
  },
  {
    id: 6,
    title: linkEnum.Create_Product_Offerings,
    link: '/Create-Product-Offerings',
    icon: CreateProductOfferings,
    available: true,
  },
  {
    id: 7,
    title: linkEnum.Published_Offerings,
    link: '/Published-Offerings',
    icon: PublishedOfferings,
    available: true,
  },
  {
    id: 8,
    title: linkEnum.Archived_Offerings,
    link: '/Archived-Offerings',
    icon: ArchivedOfferings,
    available: true,
  },
  {
    id: 9,
    title: linkEnum.Product_Specifications,
    link: '/Product-Specifications',
    icon: ProductSpecifications,
    available: true,
  },
  {
    id: 10,
    title: linkEnum.List_Customers,
    link: '/List-Customers',
    icon: ListCustomers,
    available: true,
  },
  {
    id: 11,
    title: linkEnum.New_Customer_Order,
    link: '/New-Customer-Order',
    icon: NewCustomerOrder,
    available: true,
  },
  {
    id: 12,
    title: linkEnum.All_Customer_Order,
    link: '/All-Customer-Order',
    icon: AllCustomerOrder,
    available: true,
  },
  {
    id: 13,
    title: linkEnum.Manage_Users,
    link: '/Manage-Users',
    icon: ManageUsers,
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
