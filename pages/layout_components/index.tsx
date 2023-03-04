import {Box, Button, Center, Circle, Container, HStack, Square, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {BackButton} from "@/components/common/BackButton";


export default function BoxExamples() {

    const router = useRouter()

    return (
        <div>

            <BackButton/>

            <Box bg='tomato' padding={4} display={"flex"} flexDirection={"column"} color='white'>
                <Text>Text in a box</Text>
                <Text>Text in a box</Text>
            </Box>

            <Text>Box가 가장 Low Level 상태의 div이며, 아래 컴포넌트들은 스타일링이 된 Box의 변형이다. </Text>

            <Center bg='blue.500' padding={4} display={"flex"} flexDirection={"column"} color='white'>
                <Text>Text in a box</Text>
            </Center>

            <Text>네모를 이렇게 만들수도 있다.</Text>
            <Square size='40px' bg='purple.700' color='white'/>

            <Text>동그라미는 이렇게 .. </Text>
            <Circle size={"40px"} bg={"tan"}></Circle>

            <Text>Stack류는 이거는 flex + alignitems center</Text>
            <HStack padding={4} bg={"tomato"} color={"white"}>
                <Text>HStack은 옆으로 쌓인다.</Text>
                <Text>HStack은 옆으로 쌓인다.</Text>
                <Text>HStack은 옆으로 쌓인다.</Text>
            </HStack>

            <VStack alignItems={"flex-start"} bg={"blue"} color={"white"}>
                <Text>VStack은 아래로 쌓인다.</Text>
                <Text>VStack은 아래로 쌓인다.</Text>
                <Text>VStack은 아래로 쌓인다.</Text>
            </VStack>

        </div>
    )
}
