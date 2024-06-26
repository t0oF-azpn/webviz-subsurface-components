import React from "react";
import type { TableRowProps } from "@mui/material";
import { TableRow } from "@mui/material";

import "../../../VectorCalculator.css";

interface BlinkingTableRowProps extends TableRowProps {
    blinking: boolean;
}
export const BlinkingTableRow: React.FC<BlinkingTableRowProps> = (
    props: BlinkingTableRowProps
) => {
    const { blinking, children, ...other } = props;

    return (
        <TableRow {...other} className={blinking ? "BlinkingTableRow" : ""}>
            {children}
        </TableRow>
    );
};
