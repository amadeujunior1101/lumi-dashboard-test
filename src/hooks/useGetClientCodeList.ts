import { useState } from 'react'
import { Bill, Client } from '../domain/entities'
import { useLoading } from '../loading.context'
import { GetClientCodeList } from '../domain/useCases'

const useGetClientCodeList = () => {
  const { setLoading } = useLoading()
  const [error, setError] = useState<Error | null>(null)
  const getClientCodeListUsecase = new GetClientCodeList()

  const fetchData = async (): Promise<{ data: Client[] } | null> => {
    setLoading(true)

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await getClientCodeListUsecase.perform()

      if (response instanceof Error) {
        setError(response)
        return null
      }

      const data = response?.data.data as Bill[]

      return { data }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(new Error(error.message))
      return null
    } finally {
      setLoading(false)
    }
  }

  return { error, fetchData }
}

export { useGetClientCodeList }
