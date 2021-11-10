import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import "./DashBoard.css"

const DashBoard = () => {
    return (
        <div>
            <ProSidebar className="height ">
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>


                    <MenuItem>
                        <Link to="/payment">Pay</Link>

                    </MenuItem>
                    <MenuItem>

                        <Link to="/myorder">My Orders</Link>

                    </MenuItem>
                    <MenuItem>

                        <Link to="/addreview">Add your Review</Link>
                    </MenuItem>


                </Menu>

            </ProSidebar>;

        </div>
    );
};

export default DashBoard;