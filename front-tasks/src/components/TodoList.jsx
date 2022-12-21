import { HStack, VStack,Text, Flex, Badge, Button, Input, ModalFooter, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, Modal, Card, Checkbox } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import React,{useState} from 'react'


function TodoList({ tasks, deleteTask, editTask, searchTask}) {
    const [modalValue, setModalValue] = useState({})
    const [isOpen,setIsOpen] = useState(false)   


    function onClose(){
        setIsOpen(false)
    }

    function handleEditClick(task){
        setIsOpen(true)
        setModalValue(task)
    }

    function handleEditInputChange(e,id){ 
        setModalValue({ ...modalValue, name: e.target.value });
    }
    
    function handleCompleted(e, task) {
        editTask(task.id, {...task, completed: e.target.checked})
    }
    
    function handleEditSubmit(e){
        e.preventDefault();
        editTask(modalValue.id, modalValue)
        setModalValue("")
        setIsOpen(false)
    }

    return (
       !tasks.length ? 
       <Badge 
       colorScheme="purple" 
       variant="outline"
       borderRadius="4"
       p='4' m='5'
       >No tasks</Badge> 
       : (
        <Card backgroundColor={'white'}>
            
            <VStack>
            {tasks.map((task, index) => (
                
                <HStack key={index} spacing="30px" w="350px" pb="2">
                    <Flex p={6} w="300px" h="50px" justifyContent="space-between">
                    <Text color={'gray.500'} fontWeight={'bold'} >{task.name}</Text>

                    <Flex w="10px" >
                        <DeleteIcon color="red.300" mr="2" onClick={()=>deleteTask(task.id)}/>
                        <EditIcon color="blackAlpha.600" onClick={()=>handleEditClick(task)} />    
                        <Checkbox m="2" defaultChecked={task.completed}  onChange={ (e) => handleCompleted(e,task) }></Checkbox>
                    </Flex>
                    
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Update</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleEditSubmit}>
                        <ModalBody>
                            <Input   
                                value={modalValue.text} 
                                key={modalValue.id}
                                variant="outline" 
                                type="text" 
                                placeholder="Update task"
                                onChange={handleEditInputChange} />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" mr={3} onClick={onClose}>
                            Close
                            </Button>
                            <Button type="submit" colorScheme="teal" mr={3}>
                            Update
                            </Button>
                        </ModalFooter>
                    </form>
                
                </ModalContent>
            </Modal>
            </Flex> 
                </HStack>   
                ))} 
            </VStack>
        </Card>
        )   
    ) 
} 

export default TodoList