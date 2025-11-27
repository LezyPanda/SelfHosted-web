import React, { useMemo } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem
} from 'react-pro-sidebar';
import { Link, NavLink } from 'react-router-dom';
import { COLORS } from './ColourConstants.jsx';
import sidebarLogo from '../assets/SAIKI.png';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from 'react-icons/fa';

const SideBarRight = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  const menuItemStyles = useMemo(() => ({
    button: ({ active }) => ({
      color: '#f3f5ff',
      borderRadius: '12px',
      marginBottom: '6px',
      backgroundColor: active ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.12)'
      }
    }),
    icon: {
      color: COLORS.SECONDARY
    },
    label: {
      fontWeight: 500,
      letterSpacing: '0.3px'
    }
  }), [])

  return (
    <Sidebar
      image={image ? sidebarLogo : undefined}
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => handleToggleSidebar(false)}
      breakPoint="md"
      rootStyles={{
        backgroundColor: COLORS.BACKGROUND,
        color: '#f3f5ff',
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div className="sidebar-section sidebar-header">
        <Menu iconShape="circle" menuItemStyles={menuItemStyles}>
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Pro Sidebar
              </div>
            </MenuItem>
          )}
        </Menu>
      </div>
      {/* Content */}
      <div className="sidebar-section sidebar-content">
        <Menu iconShape="circle" menuItemStyles={menuItemStyles}>
          <MenuItem icon={<FaTachometerAlt />}>
            Start
            <NavLink to="/" />
          </MenuItem>
          <MenuItem>
            AI Chat
            <NavLink to="/aichat" />
          </MenuItem>
          <MenuItem>
            Settings
            <NavLink to="/settings" />
          </MenuItem>
        </Menu>
      </div>
      {/* Footer */}
      <div className="sidebar-section sidebar-footer" style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: 'pointer' }}
            to="/profile"
          >
            <FaUser />
            <span>My Account</span>
          </Link>
        </div>
      </div>
    </Sidebar>
  );
};


export default SideBarRight;
