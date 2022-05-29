import type { NextPage } from 'next'
import { FormProvider, useForm } from 'react-hook-form'
import { Customer } from 'types/shared'
import { createCustomer } from 'api/customers'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'
import CustomerFormTemplate from 'components/templates/CustomerForm'

type Props = {
  defaultValues: Omit<Customer, 'id'>
}

const CreateCustomer: NextPage<Props> = () => {
  const methods = useForm({ mode: 'all', defaultValues: { name: '', email: '' } })
  const { handleSubmit } = methods
  const { addToast } = useToasts()
  const { push } = useRouter()

  const onSubmit = async (formValues: Omit<Customer, 'id'>) => {
    try {
      await createCustomer(formValues)
      addToast('Cliente criado com sucesso', { appearance: 'success' })
      push('/clientes')
    } catch {
      addToast('Falha ao criar cliente', { appearance: 'error' })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomerFormTemplate title={'Cadastrar cliente'} />
      </form>
    </FormProvider>
  )
}

export default CreateCustomer
