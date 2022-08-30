import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useHistory} from 'react-router';


const Signup = () => {
  const toast = useToast();
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = async() => {
    setLoading(true);
    if(!(email && name && password && confirmPassword) ){
      toast({
        title: "Please Fill all the details",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
    }
    if(password!== confirmPassword){
      toast({
        title: "Passwords Do Not Match",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
    }

    try{
      const config = {
        headers:{
          "Content-type": "application/json",
        },
      }
      const {data} = await axios.post("/api/user", {name, email, password}, config);
      toast({
        title: "Registration Successful",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: false,
      });

      localStorage.setItem("userInfo", JSON.stringify(data))
      setLoading(false);
      history.push("/chats")
    }catch(error){
      setLoading(false)
      toast({
        title: "Error",
        description: `${error.response.data.message}`,
        status: "success",
        duration: 5000,
        isClosable: false,
      });
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          placeholder="Retype Your Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>

      <Button
        onClick={ submitHandler }
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 20 }}
      >
        Sign Up
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ marginTop: 5 }}
        isLoading={loading}
      >
        Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Signup;
