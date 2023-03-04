import React, { useRef, useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  CheckboxGroup,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
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
  Square,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { FocusableElement } from '@chakra-ui/utils'

export default function Home() {
  const [states, setState] = useState({
    isAlertDialogOpened: false,
    isDrawerOpened: false,
    isModalOpened: false,
  })

  const { isAlertDialogOpened, isDrawerOpened, isModalOpened } = states

  const closeBtnRefInAlertDialog = useRef<FocusableElement>(null)
  const drawerBtnRef = useRef<HTMLButtonElement>(null)

  const setVisibleModal = (visible: boolean) => {
    setState({ ...states, isModalOpened: visible })
  }

  const openModal = () => {
    setVisibleModal(true)
  }

  const closeModal = () => {
    setVisibleModal(false)
  }

  const setVisibleDrawer = (visible: boolean) => {
    setState({ ...states, isDrawerOpened: visible })
  }

  const openDrawer = () => {
    setVisibleDrawer(true)
  }

  const closeDrawer = () => {
    setVisibleDrawer(false)
  }

  const setVisibleAlertDialog = (visible: boolean) => {
    setState({ ...states, isAlertDialogOpened: visible })
  }

  const openAlertDialog = () => {
    setVisibleAlertDialog(true)
  }

  const closeAlertDialog = () => {
    setVisibleAlertDialog(false)
  }

  const [text, setText] = useState('')
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

  return (
    <VStack align={'flex-start'}>
      <Box
        bg="tomato"
        padding={4}
        display={'flex'}
        flexDirection={'column'}
        color="white"
      >
        <Text>Text in a box</Text>
        <Text>Text in a box</Text>
      </Box>

      <Text>
        Box가 가장 Low Level 상태의 div이며, 아래 컴포넌트들은 스타일링이 된
        Box의 변형이다.{' '}
      </Text>

      <Center
        bg="blue.500"
        padding={4}
        display={'flex'}
        flexDirection={'column'}
        color="white"
      >
        <Text>Text in a box</Text>
      </Center>

      <Text>네모를 이렇게 만들수도 있다.</Text>
      <Square size="40px" bg="purple.700" color="white" />

      <Text>동그라미는 이렇게 .. </Text>
      <Circle size={'40px'} bg={'tan'}></Circle>

      <Text>Stack류는 이거는 flex + alignitems center</Text>
      <HStack padding={4} bg={'tomato'} color={'white'}>
        <Text>HStack은 옆으로 쌓인다.</Text>
        <Text>HStack은 옆으로 쌓인다.</Text>
        <Text>HStack은 옆으로 쌓인다.</Text>
      </HStack>

      <VStack alignItems={'flex-start'} bg={'blue'} color={'white'}>
        <Text>VStack은 아래로 쌓인다.</Text>
        <Text>VStack은 아래로 쌓인다.</Text>
        <Text>VStack은 아래로 쌓인다.</Text>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          체크박스 예제
        </Heading>

        <Checkbox defaultChecked={true}>Checkbox</Checkbox>

        <HStack spacing={5}>
          <Checkbox isDisabled={true}>Checkbox</Checkbox>
          <Checkbox isDisabled={true} defaultChecked={true}>
            Checkbox
          </Checkbox>
        </HStack>

        <CheckboxGroup
          onChange={(selectedItems) => {
            console.log(selectedItems)
          }}
          colorScheme="green"
          defaultValue={['옵션1', '옵션2']}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value="옵션1">옵션1</Checkbox>
            <Checkbox value="옵션2">옵션2</Checkbox>
            <Checkbox value="옵션3">옵션3</Checkbox>
          </Stack>
        </CheckboxGroup>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          버튼 예제
        </Heading>

        <Button colorScheme="blue">Button</Button>

        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          로딩중
        </Button>

        <Button
          isLoading={true}
          loadingText="제출중입니다.."
          colorScheme="teal"
          variant="outline"
        >
          로딩중
        </Button>

        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>

        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          버튼 커스터마이즈
        </Button>

        <Box
          as="button"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          padding={4}
          borderRadius="8px"
          fontSize="14px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
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

      <VStack alignItems={'flex-start'}>
        <FormControl isInvalid={text.length <= 3}>
          <FormLabel>Email address</FormLabel>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            colorScheme={'facebook'}
            type="text"
          />
          {text.length > 3 ? (
            <FormHelperText>설명 메시지</FormHelperText>
          ) : (
            <FormErrorMessage>에러 메시지</FormErrorMessage>
          )}
        </FormControl>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Pin Input 예제
        </Heading>
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Radio Group, Radio Button 예제
        </Heading>
        <RadioGroup onChange={setSelectedRadioIndex} value={selectedRadioIndex}>
          <Stack direction="row">
            <Radio colorScheme={'facebook'} value="1">
              First
            </Radio>
            <Radio colorScheme={'facebook'} value="2">
              Second
            </Radio>
            <Radio colorScheme={'facebook'} value="3">
              Third
            </Radio>
          </Stack>
        </RadioGroup>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Range Selector 예제
        </Heading>
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme="pink"
          min={0}
          max={100}
          onChangeEnd={(e) => showToast(String(e))}
          defaultValue={[10, 30]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Select 예제
        </Heading>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Slider 예제
        </Heading>
        <Slider
          onChangeEnd={(e) => showToast(String(e))}
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={30}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Slider
          aria-label="slider-ex-3"
          defaultValue={30}
          onChangeEnd={(e) => showToast(String(e))}
          orientation="vertical"
          minH="32"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Accordian 예제
        </Heading>

        <Accordion width={'100vw'} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  클릭하세요
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>내용입니다.1</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  클릭하세요2
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>내용입니다.2</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Accordian 예제
        </Heading>

        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          AlertDialog 예제
        </Heading>

        <Button colorScheme="red" onClick={openAlertDialog}>
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isAlertDialogOpened}
          closeOnEsc={true}
          leastDestructiveRef={closeBtnRefInAlertDialog}
          onClose={closeAlertDialog}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>바디 내용입니다.</AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={closeAlertDialog}>Cancel</Button>
                <Button colorScheme="red" onClick={closeAlertDialog} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Drawer 예제
        </Heading>

        <Button ref={drawerBtnRef} colorScheme="teal" onClick={openDrawer}>
          Open
        </Button>
        <Drawer
          isOpen={isDrawerOpened}
          placement="left"
          onClose={closeDrawer}
          finalFocusRef={drawerBtnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={closeDrawer}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Menu 예제
        </Heading>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button}>
                {isOpen ? 'Close' : 'Open'}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert('Kagebunshin')}>
                  Create a Copy
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          모달 예제
        </Heading>

        <Button onClick={openModal}>모달 열기</Button>

        <Modal isOpen={isModalOpened} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>모달 타이틀입니다</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                모달에 들어가는 컨텐츠입니다.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Popover 예제
        </Heading>

        <Popover>
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="blue">Button</Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </VStack>
    </VStack>
  )
}
