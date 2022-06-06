import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      Art by: <strong>Nitin</strong>{" "}
    </Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const DetailsPopover = ({ children }) => {
  return (
    <OverlayTrigger trigger="hover" placement="auto-start" overlay={popover}>
      {children}
    </OverlayTrigger>
  );
};

export default DetailsPopover;
