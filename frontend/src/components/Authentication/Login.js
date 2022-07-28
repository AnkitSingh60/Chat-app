import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showpass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const toast = useToast()

    const showHidePassword = () => {
        setShowPass(!showpass)
    }

    const handleSubmit = async () => {
        setLoading(true)
        if (!email || !password) {
            toast({
                title: 'Invalid Credentials',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "top",

            });
            setLoading(false)
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const { data } = await axios.post("/api/user/login", { email, password }, config);

            toast({
                title: 'Login successful..!',
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            localStorage.setItem("chatApp_UserInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");
            window.location.reload();
            return;

        } catch (error) {
            toast({
                title: error.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            setLoading(false)
            return;
        }
    }



    return (
        <VStack spacing="5px" >

            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter your email' value={email ?? ""} onChange={(event) => setEmail(event.target.value)} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter password' value={password ?? ""} type={showpass ? "text" : "password"} onChange={(event) => setPassword(event.target.value)} />

                    <InputRightElement width="4.5rem">
                        <Button h="1.75 rem" size="sm" onClick={showHidePassword}>
                            {showpass ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>

                </InputGroup>
            </FormControl>



            <Button className='button' colorScheme='teal' width={"50%"} style={{ marginTop: 30 }} variant='solid' onClick={handleSubmit} isLoading={loading}>
                Login
            </Button>
            <Button className='button' colorScheme='gray' width={"50%"} style={{ marginTop: 10 }} variant='solid' onClick={() => {
                setEmail("guest@gmail.com");
                setPassword("Ankit@123");
            }}>
                Guest ?
            </Button>

        </VStack>
    )
}

export default Login