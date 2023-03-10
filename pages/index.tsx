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
      title: '??????',
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
        Box??? ?????? Low Level ????????? div??????, ?????? ?????????????????? ??????????????? ???
        Box??? ????????????.{' '}
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

      <Text>????????? ????????? ???????????? ??????.</Text>
      <Square size="40px" bg="purple.700" color="white" />

      <Text>??????????????? ????????? .. </Text>
      <Circle size={'40px'} bg={'tan'}></Circle>

      <Text>Stack?????? ????????? flex + alignitems center</Text>
      <HStack padding={4} bg={'tomato'} color={'white'}>
        <Text>HStack??? ????????? ?????????.</Text>
        <Text>HStack??? ????????? ?????????.</Text>
        <Text>HStack??? ????????? ?????????.</Text>
      </HStack>

      <VStack alignItems={'flex-start'} bg={'blue'} color={'white'}>
        <Text>VStack??? ????????? ?????????.</Text>
        <Text>VStack??? ????????? ?????????.</Text>
        <Text>VStack??? ????????? ?????????.</Text>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          ???????????? ??????
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
          defaultValue={['??????1', '??????2']}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value="??????1">??????1</Checkbox>
            <Checkbox value="??????2">??????2</Checkbox>
            <Checkbox value="??????3">??????3</Checkbox>
          </Stack>
        </CheckboxGroup>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          ?????? ??????
        </Heading>

        <Button colorScheme="blue">Button</Button>

        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          ?????????
        </Button>

        <Button
          isLoading={true}
          loadingText="??????????????????.."
          colorScheme="teal"
          variant="outline"
        >
          ?????????
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
          ?????? ??????????????????
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
          ?????? ??????????????????2
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
            <FormHelperText>?????? ?????????</FormHelperText>
          ) : (
            <FormErrorMessage>?????? ?????????</FormErrorMessage>
          )}
        </FormControl>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Pin Input ??????
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
          Radio Group, Radio Button ??????
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
          Range Selector ??????
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
          Select ??????
        </Heading>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Slider ??????
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
          Accordian ??????
        </Heading>

        <Accordion width={'100vw'} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  ???????????????
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>???????????????.1</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  ???????????????2
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>???????????????.2</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      <VStack alignItems={'flex-start'}>
        <Heading as={'h2'} size={'md'}>
          Accordian ??????
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
          AlertDialog ??????
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

              <AlertDialogBody>?????? ???????????????.</AlertDialogBody>

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
          Drawer ??????
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
          Menu ??????
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
          ?????? ??????
        </Heading>

        <Button onClick={openModal}>?????? ??????</Button>

        <Modal isOpen={isModalOpened} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>?????? ??????????????????</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                ????????? ???????????? ??????????????????.
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
          Popover ??????
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
