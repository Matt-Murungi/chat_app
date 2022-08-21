import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <VStack spacing="5px">
    
      <FormControl id="first-name" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>



      <Button colorScheme="blue" width="100%" style={{ marginTop: 20 }}>
        Log In
      </Button>
    </VStack>
  );
};

export default Login;
