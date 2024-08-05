import { ComponentType } from "react";
import { IconBaseProps } from 'react-icons';

import { LuLayoutDashboard } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";


export type LinkProps = {
  name: string;
  href: string;
  icon: ComponentType<IconBaseProps>;
}

export const links: LinkProps[] = [
  {name: 'Dashboard', href: '/', icon: LuLayoutDashboard},
  {name: 'Mail', href: '/mail', icon: MdMailOutline},
  {name: 'Calendar', href: '/calendar', icon: FaRegCalendarAlt},
  {name: 'Notes', href: '/notes', icon: FaRegNoteSticky},
  {name: 'Team', href: '/team', icon: RiTeamLine},
  {name: 'Settings', href: '/settings', icon: IoMdSettings},
];