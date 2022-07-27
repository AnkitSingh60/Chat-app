import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Register = () => {
    const [showpass, setShowPass] = useState(false)
    const [showpassConfirm, setShowPassConfirm] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [pic, setPic] = useState();

    const showHidePassword = () => {
        setShowPass(!showpass)
    }
    const showHideConfirmPassword = () => {
        setShowPassConfirm(!showpassConfirm)
    }
    const postDetails = (pics) => {

    }
    const handleSubmit = () => {
        
    }
    return (
        <VStack spacing="5px" >
            
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)} />
            </FormControl>

            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter your email' value={email} onChange={(event) => setEmail(event.target.value)} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter password' value={password} type={showpass ? "text" : "password"} onChange={(event) => setPassword(event.target.value)} />

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
                    <Input placeholder='Enter password again' value={confirmPassword} type={showpassConfirm ? "text" : "password"} onChange={(event) => setconfirmPassword(event.target.value)} />

                    <InputRightElement width="4.5rem">
                        <Button h="1.75 rem" size="sm" onClick={showHideConfirmPassword}>
                            {showpassConfirm ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic" isRequired>
                <FormLabel>Upload your picture</FormLabel>
                <Input type="file" p={1.5} accept="image/*" onChange={(event) => postDetails(event.target.file[0])} />
            </FormControl>

            <Button className='button' colorScheme='teal' width={"50%"} style={{marginTop: 30}} variant='solid' onClick={handleSubmit}>
                Register
            </Button>

        </VStack>
    )
}

export default Register