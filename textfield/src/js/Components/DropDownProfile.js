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
          console.log("sdgvdsfv")
        );
        return (
            <Example options={false} >
                <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                </Popover>
            </Example>
        );
    }
}

export default DropdownProfile;
