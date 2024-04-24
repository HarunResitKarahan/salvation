"use client";
import {
  Avatar,
  NotificationAction,
  NotificationListGroupItem,
  NotificationListItem,
  Popover,
} from "@ui5/webcomponents-react";
import React from "react";

export default function NotificationPopover({
  popoverRef,
}: {
  popoverRef: any;
}) {
  return (
    <Popover
      className="sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"
      ref={popoverRef}
      placementType="Bottom"
    >
      <NotificationListGroupItem
        actions={
          <>
            <NotificationAction icon="accept" text="Accept all" />
            <NotificationAction icon="message-error" text="Reject all" />
          </>
        }
        onClose={function _a() {}}
        onToggle={function _a() {}}
        priority="None"
        showClose
        showCounter
        titleText="Orders"
      >
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>
          }
          priority="Medium"
          titleText="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>
          }
          priority="High"
          showClose
          titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>
      <NotificationListGroupItem
        actions={
          <>
            <NotificationAction icon="accept" text="Accept all" />
            <NotificationAction icon="message-error" text="Reject all" />
          </>
        }
        onClose={function _a() {}}
        onToggle={function _a() {}}
        priority="None"
        showClose
        showCounter
        titleText="Orders"
      >
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>
          }
          priority="Medium"
          titleText="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>
          }
          priority="High"
          showClose
          titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>
      <NotificationListGroupItem
        actions={
          <>
            <NotificationAction icon="accept" text="Accept all" />
            <NotificationAction icon="message-error" text="Reject all" />
          </>
        }
        onClose={function _a() {}}
        onToggle={function _a() {}}
        priority="None"
        showClose
        showCounter
        titleText="Orders"
      >
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>
          }
          priority="Medium"
          titleText="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem
          actions={
            <>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>
          }
          avatar={
            <Avatar size="XS">
              <img rel="preload" src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>
          }
          footnotes={
            <>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>
          }
          priority="High"
          showClose
          titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        >
          And with a very long description and long labels of the action buttons
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>
    </Popover>
  );
}
