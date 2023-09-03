import {
  IconAperture,
  IconCash,
  IconChartHistogram,
  IconCopy,
  IconLayoutDashboard,
  IconListDetails,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

// const Menuitems = [
//   {
//     navlabel: true,
//     subheader: "Report",
//   },
//   {
//     id: uniqueId(),
//     title: "Report",
//     icon: IconChartHistogram,
//     href: "/",
//   },
//   {
//     navlabel: true,
//     subheader: "Bookings",
//   },
//   {
//     id: uniqueId(),
//     title: "Report",
//     icon: IconChartHistogram,
//     href: "/report",
//   },
//   {
//     id: uniqueId(),
//     title: "Report",
//     icon: IconChartHistogram,
//     href: "/report",
//   },
//   {
//     navlabel: true,
//     subheader: "Home",
//   },

//   {
//     id: uniqueId(),
//     title: "Dashboard",
//     icon: IconLayoutDashboard,
//     href: "/",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Utilities",
//   },
//   {
//     id: uniqueId(),
//     title: "Typography",
//     icon: IconTypography,
//     href: "/utilities/typography",
//   },
//   {
//     id: uniqueId(),
//     title: "Shadow",
//     icon: IconCopy,
//     href: "/utilities/shadow",
//   },
//   {
//     navlabel: true,
//     subheader: "Auth",
//   },
//   {
//     id: uniqueId(),
//     title: "Login",
//     icon: IconLogin,
//     href: "/authentication/login",
//   },
//   {
//     id: uniqueId(),
//     title: "Register",
//     icon: IconUserPlus,
//     href: "/authentication/register",
//   },
//   {
//     navlabel: true,
//     subheader: "Extra",
//   },
//   {
//     id: uniqueId(),
//     title: "Icons",
//     icon: IconMoodHappy,
//     href: "/icons",
//   },
//   {
//     id: uniqueId(),
//     title: "Sample Page",
//     icon: IconAperture,
//     href: "/sample-page",
//   },
// ];

interface SubMenuItem {
  id: any;
  title: string;
  href: string;
}

interface MenuItem {
  id: any;
  title: string;
  icon: React.ElementType;
  href: string;
  isOpen: boolean;
  subItems?: SubMenuItem[];
}

const Menuitems: MenuItem[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
    isOpen: false,
    subItems: [
      {
        id: uniqueId(),
        title: 'Report',
        href: '/report',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Bookings',
    icon: IconListDetails,
    href: '/booking',
    isOpen: false,
    subItems: [
      {
        id: uniqueId(),
        title: 'Calender',
        href: '/booking/calender',
      },
      {
        id: uniqueId(),
        title: 'Reservations',
        href: '/booking/booking-list',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Payment',
    icon: IconCash,
    href: '/payment',
    isOpen: false,
    subItems: [
      {
        id: 31,
        title: 'Transaction',
        href: '/payment/transaction',
      }
    ],
  },
  // Add more menu items as needed
];

export default Menuitems;
