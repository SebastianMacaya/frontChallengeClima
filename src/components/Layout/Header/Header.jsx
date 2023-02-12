import { Box, Text, Flex, Modal } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
  return (
    <Box
      bg="blue.800"
      color="white"
      top={0}
      width="100%"
      padding={4}
      display="block"
    >
      <Flex alignItems="center" gap="20" width="100%">
        <Text fontSize="5xl" color="white.700">
          <Link href="/">
            <a>Intuit</a>
          </Link>
        </Text>
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Header
