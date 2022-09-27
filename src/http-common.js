import axios from 'axios'

export default axios.create({
  baseURL: 'http://backend-hcms.herokuapp.com/api/customer/',
  headers: {
    'Content-Type': 'application/json',
  },
})
