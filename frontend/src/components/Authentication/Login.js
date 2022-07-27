import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showpass, setShowPass] = useState(false)

    const showHidePassword = () => {
        setShowPass(!showpass)
    }
    const handleSubmit = () => {
        
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

    

    <Button className='button' colorScheme='teal' width={"50%"} style={{marginTop: 30}} variant='solid' onClick={handleSubmit}>
        Login
    </Button>
    <Button className='button' colorScheme='gray' width={"50%"} style={{marginTop: 10}} variant='solid' onClick={()=> {
        setEmail("guest@gmail.com");
        setPassword("Ankit@123");
    } }>
        Guest ?
    </Button>

</VStack>
  )
}

export default Login