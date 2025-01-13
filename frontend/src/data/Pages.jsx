import { IoIosKeypad } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export const PagesData = [
  {
    id: 1,
    title: "Page",
    icon: <IoIosKeypad />,
    pages: [
      {
        id: 2,
        title: "Pricing",
      },
      {
        id: 3,
        title: "Payment",
      },
      {
        id: 4,
        title: "Checkout",
      },
      {
        id: 5,
        title: "Help Center",
      },
    ],
  },

  {
    id: 6,
    title: "Auth Demo",
    icon: <MdOutlineLockPerson />,
    pages: [
      {
        id: 7,
        title: "Login (Basic)",
      },
      {
        id: 8,
        title: (
          <a href="/admin/login" className="text-decoration-none" target="blank">
            Login (Cover)
          </a>
        ),
      },
      {
        id: 9,
        title: "Register (Basic)",
      },
      {
        id: 10,
        title: (
          <a href="/admin/signup" className="text-decoration-none" target="blank">
            Register (Cover)
          </a>
        ),
      },
      {
        id: 11,
        title: "(Multi-steps)",
      },
      {
        id: 12,
        title: "Forgot Password (Basic)",
      },
      {
        id: 13,
        title: "Forgot Password (Cover)",
      },
      {
        id: 14,
        title: "Reset Password (Basic)",
      },
      {
        id: 15,
        title: "Reset Password (Cover)",
      },
    ],
  },

  {
    id: 16,
    title: "Auth Demo",
    icon: <RiGalleryLine />,
    pages: [
      {
        id: 17,
        title: "Under Maintenance",
      },
      {
        id: 18,
        title: "Coming Soon",
      },
      {
        id: 19,
        title: "Not Authorized",
      },
      {
        id: 20,
        title: "Verify Email (Basic)",
      },
      {
        id: 21,
        title: "Verify Email (Cover)",
      },
      {
        id: 22,
        title: "Two Steps (Basic)",
      },
      {
        id: 23,
        title: "Two Steps (Cover)",
      },
    ],
  },
];
