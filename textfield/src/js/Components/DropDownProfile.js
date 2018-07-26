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
        return (
            <Example options={false} >
                <Popover content={console.log("fgd")} position={Position.RIGHT_BOTTOM}>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                </Popover>
            </Example>
        );
    }
}

export default DropdownProfile;
