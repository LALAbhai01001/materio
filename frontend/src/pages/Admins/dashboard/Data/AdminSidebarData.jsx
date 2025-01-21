import { RiHomeSmileLine  } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { RiGitCommitLine } from "react-icons/ri";
import { FaTv } from "react-icons/fa6";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiLayoutLeftLine } from "react-icons/ri";
import { RiLayout4Line } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { RiTableAltLine } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";
import { ImTable2 } from "react-icons/im";
import { RiFileCopyLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";
import { RiWechatLine } from "react-icons/ri";
import { RiDragDropLine } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import { RiCalendarLine } from "react-icons/ri";


















export const AdminSidebarData = [
    // 1st Setion 
    {
        id:"4007",
        name: "",
        list: [
            {
                id:"9223",
                icon: <RiHomeSmileLine/>,
                title: "Dashboards",
                expandable: true,
                sublist: [
                    {
                        id:3163,
                        subtitle: "CRM",
                    },
                    {
                        id:3110,
                        subtitle: "Analytics",
                    },
                    {
                        id:3103,
                        subtitle: "eCommerce",
                    },
                    {
                        id:2346,
                        subtitle: "Academy",
                    },
                    {
                        id:2451,
                        subtitle: "Logistics",
                    },
                ]
            },
            {
                id:"7942",
                icon: <RiFileCopyLine/>,
                title: "Front Pages",
                expandable: true,
                sublist: [
                    {
                        id:2526,
                        subtitle: "Landing",
                    },
                    {
                        id:2100,
                        subtitle: "Pricing",
                    },
                    {
                        id:2350,
                        subtitle: "Payment",
                    },
                    {
                        id:3528,
                        subtitle: "Checkout",
                    },
                    {
                        id:2317,
                        subtitle: "Help Center",
                    },
                ]
            }
        ]
    },

    // 2nd Section 
    {
        id:"4473",
        name: "Apps & Page",
        list:[
            {
                id:"5103",
                icon: <LuShoppingBag/>,
                title: " eCommerce",
                expandable: true,
                sublist: [
                    {
                        id:2417,
                        subtitle:"Dashboard",
                    },
                    {
                        id:3750,
                        subtitle:"Products",
                    },
                    {
                        id:3290,
                        subtitle:"Orders",
                    },
                    {
                        id:2478,
                        subtitle:"Custumers",
                    },
                    {
                        id:3554,
                        subtitle:"Mange Reviews",
                    },
                    {
                        id:3393,
                        subtitle:"Referals",
                    },
                    {
                        id:3613,
                        subtitle:"Settings",
                    },
                ]
            },
            {
                id:"2809",
                icon: <LuGraduationCap/>,
                title: "Academy",
                expandable: true,
                sublist:[
                    {
                        id:3644,
                        subtitle:"Dashboard"
                    },
                    {
                        id:3226,
                        subtitle:"My Courses"
                    },
                    {
                        id:2749,
                        subtitle:"Course Details"
                    },
                ]
            },
            {
                id:"8940",
                icon: <IoCarSportOutline/>,
                title: "Logistics",
                expandable: true,
                sublist: [
                    {
                        id:2452,
                        subtitle:"Dashboard"
                    },
                    {
                        id:2604,
                        subtitle:"Feet"
                    },
                ]
            },
            {
                id:"5616",
                icon: <RiMailOpenLine />,
                title: " Email",
            },
            {
                id:"2597",
                icon: <RiWechatLine/>,
                title: " Chat",
            },
            {
                id:"4279",
                icon: <RiCalendarLine/>,
                title: " Calender",
            },
            {
                id:"7419",
                icon: <RiDragDropLine/>,
                title: " Kanban",
            },
            {
                id:"4581",
                icon: <FaRegFileAlt/>,
                title: " Invoices",
                expandable: true,
                sublist:[
                    {
                        id:3750,
                        subtitle:"List"
                    },
                    {
                        id:3968,
                        subtitle:"Preview"
                    },
                    {
                        id:2051,
                        subtitle:"Edite"
                    },
                    {
                        id:3552,
                        subtitle:"Add"
                    },
                ]
            },
            {
                id:"6021",
                icon: <FaRegUser/>,
                title: " User",
                expandable: true,
                sublist:[
                    {
                        id:2891,
                        subtitle:"List"
                    },
                    {
                        id:3584,
                        subtitle:"View"
                    },
                ]
                
            },
            {
                id:"8313",
                icon: <MdOutlineLock/>,
                title: " Roles & Permissions",
                expandable: true,
                sublist:[
                    {
                        id:2238,
                        subtitle:"Roles"
                    },
                    {
                        id:2455,
                        subtitle:"permissions"
                    },
                ]
            },
            {
                id:"5579",
                icon: <RiLayoutLeftLine/>,
                title: " Pages",
                expandable: true,
                sublist:[
                    {
                        id:3636,
                        subtitle:"User Profile"
                    },
                    {
                        id:2032,
                        subtitle:"Account Settings"
                    },
                    {
                        id:2650,
                        subtitle:"FAQ"
                    },
                    {
                        id:3999,
                        subtitle:"pricing"
                    },
                ]
            },
            {
                id:"9830",
                icon: <GoShieldLock />,
                title: " Auth Pages",
                expandable: true,
                sublist:[
                    {
                        id:2233,
                        subtitle:"Login"
                    },
                    {
                        id:2667,
                        subtitle:"Register"
                    },
                    {
                        id:3085,
                        subtitle:"Verify Email"
                    },
                    {
                        id:2419,
                        subtitle:"Forgot Password"
                    },
                    {
                        id:3781,
                        subtitle:"Reset Password"
                    },
                    {
                        id:3948,
                        subtitle:"Two Steps"
                    },
                ]
            },
            {
                id:"8219",
                icon: <RiGitCommitLine/>,
                title: " Wizard Example",
                expandable: true,
                sublist:[
                    {
                        id:2682,
                        subtitle:"Checkout",
                    },
                    {
                        id:3176,
                        subtitle:"Property Listing",
                    },
                    {
                        id:3692,
                        subtitle:"Create Deal",
                    },
                ]

            },
            {
                id:"1990",
                icon: <FaTv/>,
                title: " Dialog Example",
            },
            {
                id:"7518",
                icon: <RiBarChartBoxLine/>,
                title: " Widget Example",
                expandable: true,
                sublist:[
                    {
                        id:3380,
                        subtitle:"Basic"
                    },
                    {
                        id:2519,
                        subtitle:"Advanced"
                    },
                    {
                        id:2194,
                        subtitle:"Statistics"
                    },
                    {
                        id:2160,
                        subtitle:"Charts"
                    },
                    {
                        id:3356,
                        subtitle:"Gamification"
                    },
                    {
                        id:3315,
                        subtitle:"Actions"
                    },
                ]
            },
        ]
    },


    // 3rd Section 

    {
        id:"5222",
        name: "Forms & Tables",
        list:[
            {
                id:"725123",
                icon: <RiLayout4Line/>,
                title: " Form Layouts ",
                
            },
            {
                id:"725178",
                icon: <RiCheckboxMultipleLine/>,
                title: " Form Validation ",
                
            },
            {
                id:"7251",
                icon: <RiGitCommitLine/>,
                title: " Form Wizard ",
                
            },
            {
                id:"5169",
                icon: <RiTableAltLine/>,
                title: "React Table",
                
            },
            {
                id:"1817",
                icon: <RiRadioButtonLine/>,
                title: "Form Elements",
                
            },
            {
                id:"3110",
                icon: <ImTable2/>,
                title: " MUI Tables",
                
            },
        ]
    },

    
]