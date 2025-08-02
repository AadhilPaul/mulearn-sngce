import { useState } from "react";
import { Flex } from "antd";
import { PrimaryButton, SecondaryButton } from "./elements/Button";

function App() {
  return (
    <>
      <Flex gap={5} vertical justify="center" align="center">
        <PrimaryButton>Join Mulearn</PrimaryButton>
        <SecondaryButton>See our Events</SecondaryButton>
      </Flex>
    </>
  );
}

export default App;
