import axios from 'axios';

const url = 'http://localhost:8000/api/tasks';

const TaskProvider = {
    getTasks: (name = null, completed = null) => {
        return axios.get(`${url}?name=${name}&completed=${completed ? 1: 0}`);
    },
    getTask: (id) => {
        return axios.get(`${url}/${id}`);
    },
    postTask: (task) => {
        return axios.post(`${url}`, task);
    },
    udpateTask: (task, id) => {
        return axios.put(`${url}/${id}`, task);
    },
    deleteTask: (id) => {
        return axios.delete(`${url}/${id}`);
    },
};

export default TaskProvider;