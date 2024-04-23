"use client"
import {
  Bar,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  MessageViewButton,
  ResponsivePopover,
  Title,
  TitleLevel,
  ValueState,
  MessageView,
  MessageItem,
  Link,
} from "@ui5/webcomponents-react";
import React, { useRef, useState } from "react";
import "@ui5/webcomponents-icons/dist/slim-arrow-left.js";
// import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";

export default function ViewMessage() {
  const ref = useRef(null);
  const messageViewRef = useRef(null);
  const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
  const numberOfItems = {
    information: 2,
    warning: 5,
    success: 3,
    error: 3,
  };
  return (
    <>
      <MessageViewButton
        counter={3}
        type={ValueState.Error}
        onClick={(e) => {
          ref.current.showAt(e.target);
        }}
      />
      <ResponsivePopover
        ref={ref}
        headerText="Messages"
        className="contentPartNoPadding headerPartNoPadding"
        header={
          <Bar
            startContent={
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                {isOnDetailsPage && (
                  <Button
                    design={ButtonDesign.Transparent}
                    icon="slim-arrow-left"
                    onClick={() => {
                      setIsOnDetailsPage(false);
                      messageViewRef.current.navigateBack();
                    }}
                    style={{
                      marginInline: "0 0.5rem",
                    }}
                  />
                )}
                <Title level={TitleLevel.H4}>Messages</Title>
              </FlexBox>
            }
          />
        }
        footer={
          <FlexBox
            alignItems={FlexBoxAlignItems.Center}
            justifyContent={FlexBoxJustifyContent.End}
            style={{
              paddingBlock: "0.25rem",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Button
              design={ButtonDesign.Transparent}
              onClick={() => {
                ref.current?.close();
              }}
            >
              Close
            </Button>
          </FlexBox>
        }
      >
        <MessageView
          style={{
            height: "500px",
            maxWidth: "600px",
          }}
          ref={messageViewRef}
          showDetailsPageHeader={false}
          groupItems
          onItemSelect={() => {
            setIsOnDetailsPage(true);
          }}
        >
          <MessageItem
            counter={1}
            groupName="Products"
            subtitleText="Some bad error occurred"
            titleText="Error Message Type"
            type="Error"
          >
            First Error Message Description.
          </MessageItem>
          <MessageItem
            counter={2}
            subtitleText="You can also use subtitles"
            titleText="Success Message Type"
            type="Success"
          >
            This is a success message! You can even use{" "}
            <Link href="https://github.com/SAP/ui5-webcomponents-react">
              links here
            </Link>
            .
          </MessageItem>
          <MessageItem
            counter={3}
            subtitleText="Warnign without details"
            titleText="Warning Message Type"
            type="Warning"
          />
          <MessageItem groupName="Products" titleText="Empty Message Type" />
          <MessageItem
            groupName="Products"
            titleText="Information Message Type without subtitle"
            type="Information"
          />
          <MessageItem
            groupName="Employees"
            subtitleText="Value State None will be handled as Information"
            titleText="None Message Type"
            type="None"
          >
            Informative message
          </MessageItem>
        </MessageView>
      </ResponsivePopover>
    </>
  );
}
