import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [showpass, setShowPass] = useState(false)
    const [showpassConfirm, setShowPassConfirm] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const toast = useToast()

    const showHidePassword = () => {
        setShowPass(!showpass)
    }
    const showHideConfirmPassword = () => {
        setShowPassConfirm(!showpassConfirm)
    }
    const postDetails = (pics) => {
        setLoading(true)
        if (pics === undefined) {
            toast({
                title: 'Please select an image!',
                status: 'warning',
                position: 'bottom',
                duration: 5000,
                isClosable: true,
            })
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "deckrm73m");
            fetch("https://api.cloudinary.com/v1_1/deckrm73m/image/upload", {
                method: "POST",
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString())
                    // console.log("setPic", data.url.toString());
                    setLoading(false);
                    // console.log(data);
                }).catch((err) => {
                    console.log('err:', err.message);
                    setLoading(false);
                })
        } else {
            toast({
                title: 'Please select an image!',
                status: 'warning',
                position: 'bottom',
                duration: 5000,
                isClosable: true,
            })
            setLoading(false);
            return;
        }

    }
    const handleSubmit = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setLoading(true);
            toast({
                title: 'Please fill all the feilds...!',
                status: 'warning',
                position: 'bottom',
                duration: 5000,
                isClosable: true,
            })
            setLoading(false);
            return;
        } else {
            if (password !== confirmPassword) {
                toast({
                    title: 'Passwords do not match...!',
                    status: 'warning',
                    position: 'bottom',
                    duration: 5000,
                    isClosable: true,
                })
                return;
            }
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
                toast({
                    title: 'Registration sucessfull..!',
                    status: 'success',
                    position: 'bottom',
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
                    position: "bottom",
                });
                setLoading(false)
                return;
            }
        }
    }
    return (
        <VStack spacing="5px" >

            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter your name' value={name ?? ""} onChange={(event) => setName(event.target.value)} />
            </FormControl>

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

            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                    <Input placeholder='Enter password again' value={confirmPassword ?? ""} type={showpassConfirm ? "text" : "password"} onChange={(event) => setconfirmPassword(event.target.value)} />

                    <InputRightElement width="4.5rem">
                        <Button h="1.75 rem" size="sm" onClick={showHideConfirmPassword}>
                            {showpassConfirm ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic" isRequired>
                <FormLabel>Upload your picture</FormLabel>
                <Input type="file" p={1.5} accept="image/*" onChange={(event) => postDetails(event.target.files[0])} />
            </FormControl>

            <Button className='button' colorScheme='teal' width={"50%"} style={{ marginTop: 30 }} variant='solid' onClick={handleSubmit} isLoading={loading} >
                Register
            </Button>

        </VStack>
    )
}

export default Register