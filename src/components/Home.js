import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;