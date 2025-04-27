export const rootPaths = {
  root: '/',
  pagesRoot: '/',
  authRoot: '/authentication',
  errorRoot: '/error',
};

/**
 * Object containing various paths used in the application.
 */
const paths = {
  default: `${rootPaths.root}`,
  AllCustomerOrderPage: `${rootPaths.pagesRoot}/All-Customer-Order`,
  ArchivedOfferingsPage: `${rootPaths.pagesRoot}/Archived-Offerings`,
  CreateProductOfferingsPage: `${rootPaths.pagesRoot}/Create-Product-Offerings`,
  ListCustomersPage: `${rootPaths.pagesRoot}/List-Customers`,
  Dashboard: `${rootPaths.pagesRoot}/dashboard`,
  ManageUsersPage: `${rootPaths.pagesRoot}/Manage-Users`,
  NewCustomerOrderPage: `${rootPaths.pagesRoot}/New-Customer-Order`,
  ProductOfferingsPage: `${rootPaths.pagesRoot}/Product-Offerings`,
  NotificationsPage: `${rootPaths.pagesRoot}/Notifications`,
  ProductSpecificationsPage: `${rootPaths.pagesRoot}/Product-Specifications`,
  SavedItemsPage: `${rootPaths.pagesRoot}/Saved-Items`,
  ProductStorePage: `${rootPaths.pagesRoot}/Product-Store`,
  PublishedOfferingsPage: `${rootPaths.pagesRoot}/Published-Offerings`,
  investments: `${rootPaths.pagesRoot}investments`,
  loans: `${rootPaths.pagesRoot}loans`,
  accounts: `${rootPaths.pagesRoot}accounts`,
  login: `${rootPaths.authRoot}/login`,
  signup: `${rootPaths.authRoot}/sign-up`,
  forgetPassword: `${rootPaths.authRoot}/forget-password`,
  resetPassword: `${rootPaths.authRoot}/reset-password`,
  notFound: `${rootPaths.errorRoot}/404`,
};

export default paths;
