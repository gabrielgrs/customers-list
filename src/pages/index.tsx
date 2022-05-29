import { GetServerSideProps, NextPage } from 'next'

const Index: NextPage = () => null

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/clientes',
      permanent: false,
    },
  }
}

export default Index
