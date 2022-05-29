import { useFormContext } from 'react-hook-form'
import { Button, Label, Input } from 'components'
import * as S from './styles'
import type * as T from './types'

const CustomerFormTemplate = ({ title }: T.CustomerFormTemplate) => {
  const { register, formState } = useFormContext()

  return (
    <S.Grid>
      <S.GridItem marginBottom="40px">
        <h1>{title}</h1>
      </S.GridItem>
      <S.GridItem>
        <Label>Nome</Label>
        <Input {...register('name', { required: true })} invalid={formState.errors?.name} />
      </S.GridItem>
      <S.GridItem>
        <Label>E-mail</Label>
        <Input
          {...register('email', {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'E-mail inválido',
            },
          })}
          invalid={formState.errors?.email}
        />
      </S.GridItem>
      <S.GridItem marginBottom="40px" justifySelf="flex-end">
        <Button disabled={formState.isSubmitting || formState.isSubmitSuccessful} type="submit">
          {formState.isSubmitting ? 'Salvando' : 'Salvar'}
        </Button>
      </S.GridItem>
    </S.Grid>
  )
}

export default CustomerFormTemplate
