import {Box, Button, ButtonGroup, VStack} from "@chakra-ui/react";
import React from "react";

export default function ButtonExamples() {
    return <Box>

        <VStack alignItems={"flex-start"} spacing={4}>

            <Button colorScheme='blue'>Button</Button>

            <Button
                isLoading={false}
                loadingText='Submitting'
                colorScheme='teal'
                variant='outline'
            >로딩중</Button>

            <Button
                isLoading={true}
                loadingText='제출중입니다..'
                colorScheme='teal'
                variant='outline'
            >로딩중</Button>

            <ButtonGroup variant='outline' spacing='6'>
                <Button colorScheme='blue'>Save</Button>
                <Button>Cancel</Button>
            </ButtonGroup>

            <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='green.500'
            >
                버튼 커스터마이즈
            </Button>

            <Box
                as='button'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                px='8px'
                padding={4}
                borderRadius='8px'
                fontSize='14px'
                fontWeight='semibold'
                bg='#f5f6f7'
                borderColor='#ccd0d5'
                color='#4b4f56'
                _hover={{
                    bg: '#ebedf0',
                    boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
                _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                _focus={{
                    boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
            >
                버튼 커스터마이즈2
            </Box>

        </VStack>

    </Box>
}