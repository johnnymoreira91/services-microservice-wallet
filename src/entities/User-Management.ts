import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class UserManagement {
    private url = 'http://localhost:3001';
    private count = 0;
    private axiosInstance: AxiosInstance;

    constructor () {
      const sleepRequest = (milliseconds: number, originalRequest: AxiosRequestConfig, count: number) => {
        return new Promise((resolve, reject) => {
          if (count === 3) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject([])
          }
          setTimeout(() => resolve(this.axiosInstance(originalRequest)), milliseconds)
        })
      }

      this.axiosInstance = axios.create({
        baseURL: this.url
      })

      this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
        return response
      }, (error: AxiosResponse) => {
        const { config, status } = error
        const originalRequest = config
        this.count++
        if (status === 500 || !status) {
          return sleepRequest(1000, originalRequest, this.count)
        } else {
          return Promise.reject(error)
        }
      })
    }

    async getAllUsers () {
      const data = await this.axiosInstance.get('/user')
      return data.data
    }

    async doLogin (email: string, password: string) {
      try {
        const response = await this.axiosInstance.post('/login', { email, password })
        return response.data
      } catch (error) {
        return {
          error: true,
          message: 'error to connecto to user-management'
        }
      }
    }
}

export { UserManagement }
