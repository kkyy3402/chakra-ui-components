import {Button} from "@chakra-ui/react";
import React from "react";

export const BackButton = () => {
    return <Button colorScheme='facebook'  onClick={() => {
        history.back()
    }}>뒤로가기</Button>
}