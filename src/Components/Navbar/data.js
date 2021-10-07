import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about_us',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Our Courses',
        path: 'courses',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Institution',
        path: '/institution',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Enroll',
        path: '/enroll',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Sign In',
        path: '/signin',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Sign up',
        path: '/signup',
        icon: <AiIcons.AiOutlineAntDesign />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineContacts />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiIcons.BiSupport />,
        cName: 'nav-text'
    }
];