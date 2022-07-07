import React, { useState } from "react";
import type { NextPage } from "next";
import { Body, Button, Header } from "@components";
import Link from "next/link";
import {
  ChevronRightIcon,
  PlusCircleIcon,
  SearchIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";
import { InputField, SelectField, FormLabel } from "@components/input-field";
import { Checkbox, FormControl, Stack } from "@chakra-ui/react";

const Arutala: NextPage = () => {
  return (
    <div className="flex flex-col gap-12 p-10 bg-powder min-h-screen">
      <Header preset="decorative" className="text-center text-denim-dark">
        ARUTALA
      </Header>
      <div className="flex flex-col bg-denim-dark w-[85%] mx-auto rounded-3xl p-10 gap-8 shadow-lg shadow-[#ADD1E2]">
        <Header preset="h2" className="text-center text-powder">
          Typography
        </Header>

        <div className="space-y-3">
          <Header preset="h5" className="text-totalwhite">
            Decorative Heading - Plus Jakarta Sans
          </Header>
          <div className="grid grid-cols-6 bg-totalwhite space-y-4 p-12 rounded-3xl items-center">
            <Body preset="p2" className="text-denim-dark">
              D1
            </Body>
            <Body preset="p2" className="text-denim-dark">
              64 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              4 rem
            </Body>
            <Header
              preset="h1"
              className="text-denim-dark col-span-3"
              decorative
            >
              Lorem Ipsum.
            </Header>
          </div>
        </div>

        <div className="space-y-3">
          <Header preset="h5" className="text-totalwhite">
            Heading - Plus Jakarta Sans
          </Header>
          <div className="grid grid-cols-6 bg-totalwhite space-y-4 p-12 rounded-3xl items-center">
            <Body preset="p2" className="text-denim-dark">
              H6
            </Body>
            <Body preset="p2" className="text-denim-dark">
              16 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1 rem
            </Body>
            <Header preset="h6" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
            <Body preset="p2" className="text-denim-dark">
              H5
            </Body>
            <Body preset="p2" className="text-denim-dark">
              20 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1.25 rem
            </Body>
            <Header preset="h5" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
            <Body preset="p2" className="text-denim-dark">
              H4
            </Body>
            <Body preset="p2" className="text-denim-dark">
              24 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1.5 rem
            </Body>
            <Header preset="h4" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
            <Body preset="p2" className="text-denim-dark">
              H3
            </Body>
            <Body preset="p2" className="text-denim-dark">
              32 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              2 rem
            </Body>
            <Header preset="h3" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
            <Body preset="p2" className="text-denim-dark">
              H2
            </Body>
            <Body preset="p2" className="text-denim-dark">
              48 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              3 rem
            </Body>
            <Header preset="h2" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
            <Body preset="p2" className="text-denim-dark">
              H1
            </Body>
            <Body preset="p2" className="text-denim-dark">
              64 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              4 rem
            </Body>
            <Header preset="h1" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Header>
          </div>
        </div>

        <div className="space-y-3">
          <Header preset="h5" className="text-totalwhite">
            Body - Plus Jakarta Sans
          </Header>
          <div className="grid grid-cols-6 bg-totalwhite space-y-4 p-12 rounded-3xl items-center">
            <Body preset="p2" className="text-denim-dark">
              P3
            </Body>
            <Body preset="p2" className="text-denim-dark">
              12 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              0.75 rem
            </Body>
            <Body preset="p3" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>
            <Body preset="p2" className="text-denim-dark">
              P2
            </Body>
            <Body preset="p2" className="text-denim-dark">
              16 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1 rem
            </Body>
            <Body preset="p2" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>
            <Body preset="p2" className="text-denim-dark">
              P1
            </Body>
            <Body preset="p2" className="text-denim-dark">
              24 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1.5 rem
            </Body>
            <Body preset="p1" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>

            <Body preset="p2" className="text-denim-dark">
              B3
            </Body>
            <Body preset="p2" className="text-denim-dark">
              12 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              0.75 rem
            </Body>
            <Body preset="b3" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>
            <Body preset="p2" className="text-denim-dark">
              B2
            </Body>
            <Body preset="p2" className="text-denim-dark">
              16 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1 rem
            </Body>
            <Body preset="b2" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>
            <Body preset="p2" className="text-denim-dark">
              B1
            </Body>
            <Body preset="p2" className="text-denim-dark">
              24 px
            </Body>
            <Body preset="p2" className="text-denim-dark">
              1.5 rem
            </Body>
            <Body preset="b1" className="text-denim-dark col-span-3">
              Lorem ipsum.
            </Body>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-totalwhite w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-[#ADD1E2]">
        <Header preset="h2" className="text-center text-denim-dark">
          Button
        </Header>

        <div className="flex flex-wrap justify-evenly items-center gap-8 p-3 text-denim-dark">
          <Header preset="h5">Primary</Header>
          <Header preset="h5">Secondary</Header>
          <Header preset="h5">Tertiary</Header>
          <Header preset="h5">Link</Header>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
          <Button
            preset="primaryDark"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="primaryDark">Button</Button>
          <Button
            preset="secondaryLight"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="secondaryLight">Button</Button>
          <Button
            preset="tertiaryDark"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="tertiaryDark">Button</Button>
          <Link href={"https://www.google.com"} passHref>
            <Button
              preset="linkDark"
              leftIcon={<PlusCircleIcon className="h-5 w-5" />}
              rightIcon={<ChevronRightIcon className="h-5 w-5" />}
            >
              Button
            </Button>
          </Link>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkDark">Button</Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center bg-denim-dark gap-4 p-6 rounded-3xl">
          <Button
            preset="primaryLight"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="primaryLight">Button</Button>
          <Button
            preset="secondaryDark"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="secondaryDark">Button</Button>
          <Button
            preset="tertiaryLight"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="tertiaryLight">Button</Button>
          <Link href={"https://www.google.com"} passHref>
            <Button
              preset="linkLight"
              leftIcon={<PlusCircleIcon className="h-5 w-5" />}
              rightIcon={<ChevronRightIcon className="h-5 w-5" />}
            >
              Button
            </Button>
          </Link>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkLight">Button</Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
          <Button
            preset="primaryDark"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="primaryDark" disabled>
            Button
          </Button>
          <Button
            preset="secondaryLight"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="secondaryLight" disabled>
            Button
          </Button>
          <Button
            preset="tertiaryDark"
            leftIcon={<PlusCircleIcon className="h-5 w-5" />}
            rightIcon={<ChevronRightIcon className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="tertiaryDark" disabled>
            Button
          </Button>
          <Link href={"https://www.google.com"} passHref>
            <Button
              preset="linkDark"
              leftIcon={<PlusCircleIcon className="h-5 w-5" />}
              rightIcon={<ChevronRightIcon className="h-5 w-5" />}
              disabled
            >
              Button
            </Button>
          </Link>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkDark" disabled>
              Button
            </Button>
          </Link>
        </div>
      </div>
      <TextFieldSection />
    </div>
  );
};

function TextFieldSection() {
  const [hasLabel, setHasLabel] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasRightIcon, setHasRightIcon] = useState(false);
  const errorMessage = "This is error message";
  const rightIcon = <ArrowDownIcon className="w-4 h-4" color="gray.300" />;
  const inputElement = (
    <InputField
      type="text"
      //value={"value"}
      placeholder="Enter input"
      label={hasLabel ? "Label" : ""}
      isDisabled={isDisabled}
      isError={isError}
      errorMessage={errorMessage}
      leftIcon={
        hasLeftIcon ? (
          <SearchIcon className="w-4 h-4" color="gray.300" />
        ) : undefined
      }
      rightIcon={hasRightIcon ? rightIcon : undefined}
      className="pb-2"
    />
  );
  const selectElement = (
    <SelectField
      label={hasLabel ? "Select Label" : ""}
      isDisabled={isDisabled}
      isError={isError}
      errorMessage={errorMessage}
      rightIcon={hasRightIcon ? rightIcon : undefined}
    >
      <option value="opt1">Option 1</option>
      <option value="opt2">Option 2</option>
    </SelectField>
  );
  return (
    <div className="flex flex-col bg-totalwhite w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-[#ADD1E2]">
      <Header preset="h2" className="text-center text-denim-dark">
        TextField
      </Header>
      <FormControl>
        <FormLabel>Setting</FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox onChange={(e) => setHasLabel(e.target.checked)}>
            Label
          </Checkbox>
          <Checkbox onChange={(e) => setIsDisabled(e.target.checked)}>
            Disabled
          </Checkbox>
          <Checkbox onChange={(e) => setIsError(e.target.checked)}>
            Error
          </Checkbox>
          <Checkbox onChange={(e) => setHasLeftIcon(e.target.checked)}>
            Left Icon
          </Checkbox>
          <Checkbox onChange={(e) => setHasRightIcon(e.target.checked)}>
            Right Icon
          </Checkbox>
        </Stack>
      </FormControl>
      <div>
        <div className="pt-4 flex flex-col ">
          {inputElement}
          {inputElement}
          {selectElement}
        </div>
      </div>
    </div>
  );
}

export default Arutala;
