import { Input, Stack, useToast, Button, Card } from "@chakra-ui/react";
import { useState } from "react";

function AddList({ addTask }) {
const toast = useToast()
const [value, setValue] = useState("")

function handleSubmit(e) {
    e.preventDefault();

    if(value === ''){
        toast({
            title: "Name is required!",
            status: "warning",
            duration: 2000,
            isClosable: true,
        })
        return;
        }
    const todo = {
        name: value
    }

    addTask(todo)
    setValue('')

}
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <Stack spacing={5}>
                    <Input
                    mt={5} 
                    bgColor={'white'}
                    value={value} 
                    variant="outline" 
                    type="text" 
                    placeholder="Add new task"
                    onChange={(e)=>setValue(e.target.value)} />
                    <Button colorScheme="teal" type="submit">Add Task</Button>
                </Stack>
            </form>
        </Card>
        
    )
}

export default AddList