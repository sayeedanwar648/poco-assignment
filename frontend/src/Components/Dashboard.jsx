import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import NavBar from './Navbar'

export const Dashboard = () => {
  return (
    <Box>
      <NavBar/>
      <Text fontSize="3xl" textAlign="center">welcome to pococare</Text>
    </Box>
  )
}
