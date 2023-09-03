import React, { useState } from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { IconChartHistogram, IconDashboard, IconLayoutDashboard, IconPodium, IconPoint, IconUsers } from "@tabler/icons-react";
import { uniqueId } from "lodash";
import Link from "next/link";

const SidebarItems = ({ toggleMobileSidebar }: any) => {

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

  const pathname = usePathname();
  const pathDirect = pathname;
  const [toggle, setToggle] = useState(false);
  const [menuItemsState, setMenuItemsState] = useState(Menuitems);

  const toggleMenuItem = (itemId: number): MenuItem[] => {
    const updatedMenuItems = menuItemsState.map((item) => {
      if (item.id === itemId) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    return updatedMenuItems;
  };


  const handleClick = (itemId: number): void => {
    setMenuItemsState(toggleMenuItem(itemId));
  };

  return (
    <Box sx={{ px: 3 }}>
      {menuItemsState.map((menuItem, index) => (
        <List sx={{ pt: 0 }} className="sidebarNav" component="div" key={index}>
          <NavItem
            item={menuItem}
            key={index}
            pathDirect={pathDirect}
            onClick={() => handleClick(menuItem.id)}
            open={menuItem.isOpen}
          />
          {menuItem.subItems && menuItem.subItems.length > 0 && (
            <Collapse in={menuItem.isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menuItem.subItems.map((subItem, index) => (
                  <ListItemButton selected={subItem.href == pathDirect} component={Link} key={index} sx={{ pl: 4 }} href={subItem.href} className="sidebar-submenu-pad">
                    {/* <ListItemIcon> */}
                    <IconPoint size={17} stroke={1} color="#7c8fac" />
                    {/* </ListItemIcon> */}
                    <ListItemText secondary={subItem.title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </List>
      ))}
    </Box>
  );
};
export default SidebarItems;
