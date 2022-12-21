import axios from 'axios';

const url = 'http://localhost:8000/api/tasks';

const TaskProvider = {
    getTasks: (name = null) => {
        return axios.get(`${url}?name=${name}`);
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