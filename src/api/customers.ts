import { Customer } from 'types/shared'
import api from './index'

export const createCustomer = (data: Omit<Customer, 'id'>) => api.post('/customers/create', data)

export const updateCustomer = (id: number, data: Record<string, any>) =>
  api.put(`/customers/update?customerId=${id}`, data)

export const getCustomers = (perPage: number) => api.get(`/customers/get?perPage=${perPage}`)

export const getCustomerById = (id: number) => api.get(`/customers/getById?customerId=${id}`)

export const removeCustomer = (id: number) => api.delete(`/customers/remove?customerId=${id}`)
