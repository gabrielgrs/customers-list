import type { GetServerSideProps, NextPage } from 'next'
import { FormProvider, useForm } from 'react-hook-form'
import { Customer } from 'types/shared'
import { getCustomerById, updateCustomer } from 'api/customers'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'
import CustomerFormTemplate from 'components/templates/CustomerForm'

type Props = {
  defaultValues: Customer
}

const CustomerEdit: NextPage<Props> = ({ defaultValues }) => {
  const methods = useForm({ mode: 'all', defaultValues })
  const { handleSubmit } = methods
  const { addToast } = useToasts()
  const { push } = useRouter()

  const onSubmit = async (formValues: Customer) => {
    try {
      const { id, ...rest } = formValues
      await updateCustomer(id, rest)
      addToast('Cliente criado com sucesso', { appearance: 'success' })
      push('/clientes')
    } catch {
      addToast('Falha ao criar cliente', { appearance: 'error' })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomerFormTemplate title={`Editar ${defaultValues.name}`} />
      </form>
    </FormProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getCustomerById(Number(context.query.customerId))

  return {
    props: {
      defaultValues: {
        id: data.id,
        email: data.email,
        name: data.name,
      },
    },
  }
}

export default CustomerEdit
