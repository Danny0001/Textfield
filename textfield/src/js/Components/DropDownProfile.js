import * as React from "react";

import { Button, MenuDivider } from "@blueprintjs/core";
import { Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import {
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
} from "@blueprintjs/core";
import { Example, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";

 class DropdownProfile extends React.PureComponent<IExampleProps> {
     render() {
        const exampleMenu = (
            <Menu>
                <MenuItem icon="person" text="Your Profile" href="/Profile" />
                <MenuItem icon="new-person" text="Add User"/>
                <MenuItem icon="log-out" text="Logout"/>
                <MenuDivider />
                <MenuItem disabled={true} icon="cog" text="Settings...">
                    <MenuItem icon="remove" text="Change Account" />
                    <MenuItem icon="remove" text="Change Photo" />
                </MenuItem>
            </Menu>
        );
        return (
            <Example options={false} {...this.props}>
                <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
                    <span className="bp3-button bp3-minimal bp3-icon-user" />
                </Popover>
            </Example>
        );
    }
}

export default DropdownProfile;
