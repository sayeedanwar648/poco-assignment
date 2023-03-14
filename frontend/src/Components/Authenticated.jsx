import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate , Navigate} from "react-router-dom"
import { signup, login } from "../Redux/action/Authenticated.action"

const initState = {
    email: "",
    password: "",
}

export const Signup = () => {
    const [creds, setCreds] = useState(initState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({ ...creds, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(signup(creds))
    }

    return (
        <Box mt='5'>
            <Heading textAlign={'center'}>Create an Account</Heading>
            <Box display={'flex'} flexDirection='column' gap='5' w='300px' h='400px' border='1px solid red' m='auto' mt='2%' p='5'>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={handleChange} name='email' value={creds.email} type='email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={handleChange} name='password' value={creds.password} type='password' />
                </FormControl>
                <Button onClick={handleSubmit} w='100%'>
                    Submit
                </Button>
            </Box>
        </Box>
    )

}

export const Login = () => {
    const [creds, setCreds] = useState(initState)
    const {isAuth , loading , error} = useSelector(({authReducer}) => authReducer)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({ ...creds, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(login(creds))
    }

    if(isAuth) {
        return <Navigate to={"/dashboard"} />
    }

    return (
        <Box mt='5'>
            <Heading textAlign={'center'}>Login</Heading>
            <Box display={'flex'} flexDirection='column' gap='5' w='300px' h='400px' border='1px solid red' m='auto' mt='2%' p='5'>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={handleChange} name='email' value={creds.email} type='email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={handleChange} name='password' value={creds.password} type='password' />
                </FormControl>
                <Button onClick={handleSubmit} w='100%'>
                    Submit
                </Button>
            </Box>
        </Box>
    )

}