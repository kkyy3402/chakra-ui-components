import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Input,
    PinInput,
    PinInputField,
    Radio,
    RadioGroup,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Select,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Stack,
    useToast,
    VStack
} from "@chakra-ui/react";
import React, {useState} from "react";

export default function NormalComponents() {

    const [text, setText] = useState("")
    const [selectedRadioIndex, setSelectedRadioIndex] = useState('1')
    const toast = useToast()

    const showToast = (msg: string) => {
        toast({
            title: '알림',
            description: msg,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    return <VStack alignItems={"flex-start"} padding={"16px"} gap={8}>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>체크박스 예제</Heading>

            <Checkbox defaultChecked={true}>Checkbox</Checkbox>

            <HStack spacing={5}>
                <Checkbox isDisabled={true}>Checkbox</Checkbox>
                <Checkbox isDisabled={true} defaultChecked={true}>
                    Checkbox
                </Checkbox>
            </HStack>

            <CheckboxGroup onChange={(selectedItems) => {
                console.log(selectedItems)
            }} colorScheme='green' defaultValue={['옵션1', '옵션2']}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value='옵션1'>옵션1</Checkbox>
                    <Checkbox value='옵션2'>옵션2</Checkbox>
                    <Checkbox value='옵션3'>옵션3</Checkbox>
                </Stack>
            </CheckboxGroup>
        </VStack>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>버튼 예제</Heading>

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

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Editable 예제</Heading>

            // Click the text to edit
            <FormControl isInvalid={text.length <= 3}>
                <FormLabel>Email address</FormLabel>
                <Input value={text} onChange={(e) => setText(e.target.value)} colorScheme={"facebook"} type='text'/>
                {
                    text.length > 3 ? <FormHelperText>설명 메시지</FormHelperText> :
                        <FormErrorMessage>에러 메시지</FormErrorMessage>
                }
            </FormControl>

        </VStack>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Pin Input 예제</Heading>
            <HStack>
                <PinInput>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                </PinInput>
            </HStack>

        </VStack>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Radio Group, Radio Button 예제</Heading>
            <RadioGroup onChange={setSelectedRadioIndex} value={selectedRadioIndex}>
                <Stack direction='row'>
                    <Radio colorScheme={"facebook"} value='1'>First</Radio>
                    <Radio colorScheme={"facebook"} value='2'>Second</Radio>
                    <Radio colorScheme={"facebook"} value='3'>Third</Radio>
                </Stack>
            </RadioGroup>

        </VStack>


        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Range Selector 예제</Heading>
            <RangeSlider
                aria-label={['min', 'max']}
                colorScheme='pink'
                min={0}
                max={100}
                onChangeEnd={(e) => showToast(String(e))}
                defaultValue={[10, 30]}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack/>
                </RangeSliderTrack>
                <RangeSliderThumb index={0}/>
                <RangeSliderThumb index={1}/>
            </RangeSlider>

        </VStack>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Select 예제</Heading>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>

        </VStack>

        <VStack alignItems={"flex-start"}>

            <Heading as={"h2"} size={"md"}>Slider 예제</Heading>
            <Slider onChangeEnd={(e) => showToast(String(e))} aria-label='slider-ex-2' colorScheme='pink'
                    defaultValue={30}>
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>

            <Slider
                aria-label='slider-ex-3'
                defaultValue={30}
                onChangeEnd={(e) => showToast(String(e))}
                orientation='vertical'
                minH='32'
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>

        </VStack>


    </VStack>
}