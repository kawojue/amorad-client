// ActionBar.js

import React, { useState } from 'react';
import { Menu } from '@mui/material';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types';

const ActionBar = ({ trigger, children }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Injecting handleClose function to children
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { onClose: handleClose }) // Use `onClose` instead of `handleClose`
    );

    return (
        <>
            <div onClick={handleClick} className="flex cursor-pointer items-center gap-x-2 text-textColor">
                {trigger}
                <ChevronDownIcon className="w-3 h-3" />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        boxShadow: 'none', // Remove shadow
                        borderRadius: '0.5rem', // Customize border radius
                        border: '1px solid #F2F2F2'
                    },
                }}
            >
                {childrenWithProps}
            </Menu>
        </>
    );
};

ActionBar.propTypes = {
    trigger: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};

export default ActionBar;
