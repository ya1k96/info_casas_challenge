import { ChakraProvider, VStack, Text, Spinner, InputRightElement, Button, Input, InputGroup, Card, Checkbox, InputLeftElement } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import TodoList from './components/TodoList';
import AddList from './components/AddList';
import TaskProvider from './providers/task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputEl = useRef(null);
  const checkEl = useRef(null);

  useEffect(() => {
    _getTasks()
  }, [])

  function _getTasks(name = null) {
    setLoading(true)
    TaskProvider.getTasks(name, checkEl.current.checked)
    .then(res => {
      setTasks(res.data);
      setLoading(false);
    });
  }

  function handleSearch(e){
    searchTask(inputEl.current.value)
  }

  function deleteTask(id){
    const newTodos = tasks.filter((item)=> {
      return item.id !== id 
    })

    TaskProvider.deleteTask(id)
    .then(res => {});
    setTasks(newTodos)
  }

  function addTask(newTodo){
    TaskProvider.postTask(newTodo)
    .then(res => {
      setTasks([...tasks, res.data])
    })
  }

  function searchTask(name) {
    _getTasks(name);
  }

  function editTask(id, updatedTask){
    TaskProvider.udpateTask(updatedTask, id)
    .then(res => {
      _getTasks();
    });
  }

  return (
    <ChakraProvider>
      <VStack p={5} bgGradient="linear(to-t, white, #319795)">
    
      <Text bgColor={'white'}
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Task App
      </Text>
      <Card backgroundColor={'white'}>
          <InputGroup size='lg'>
          <InputLeftElement width='1.6rem'>
            <Checkbox ref={checkEl} m="2" defaultChecked={false}  onChange={ (e) => {handleSearch(e)}}>
              <Text bgColor={'#319795'}
                  bgClip="text"
                  fontWeight="extrabold">
              Done</Text>
            </Checkbox>
          </InputLeftElement>
          <Input
              pr='4.5rem'
              type={'text'}
              ref={inputEl}
              placeholder=''
          />
          <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleSearch}>
              {'Search'}
              </Button>
          </InputRightElement>
          </InputGroup>
      </Card>        
      {
        loading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          /> 
          :
        <TodoList tasks={tasks} 
          deleteTask={deleteTask} 
          editTask={editTask}
          searchTask={searchTask}
          loading={loading}
        />

      }
      <AddList addTask={addTask}/>
    </VStack>
    </ChakraProvider>
  );
}

export default App;
