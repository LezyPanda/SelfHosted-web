import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { COLORS } from './ColourConstants.jsx';


function SideBarRight() {
    return (
        <div style={{ width: 260 }}>
            <Sidebar>
                <Menu
                    menuItemStyles={{
                        button: ({ active }) => ({
                            backgroundColor: active ? COLORS.BACKGROUND : 'transparent',
                            color: active ? COLORS.PRIMARY : 'black',
                        }),
                    }}
                >
                    <MenuItem component={<Link to="/aichat">AI Chat</Link>}>
                        AI Chat
                    </MenuItem>
                    <MenuItem component={<Link to="/settings">Settings</Link>}>
                        Settings
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBarRight;
