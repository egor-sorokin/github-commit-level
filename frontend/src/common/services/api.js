import axios from 'axios';

import { BASE_URL } from './constants';


/**
 * @param url {string} - path to stats, by default '/stats'
 * @param userName {string} - GitHub username
 * @return {object} - all user stats
 * */
export const getStats = (url, userName) => axios.get(`${BASE_URL}${url}`, { params: { userName } });
