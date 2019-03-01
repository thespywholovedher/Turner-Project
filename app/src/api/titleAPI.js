import axios from 'axios';

const getTitles = () => (
    axios({
        method: 'get',
        url: '/api/titles',
        headers: {
            "Content-Type": "application/json"
        }
    })
);

const getTitle = id => (
    axios({
        method: 'get',
        url: `/api/titles/${id}/details`,
        headers: {
            "Content-Type": "application/json"
        }
    })
);

const searchTitles = name => (
    axios({
        method: 'get',
        url: '/api/titles/${name}',
        headers: {
            "Content-Type": "application/json"
        }
    })
);

export {
    getTitles,
    getTitle,
    searchTitles,
}

