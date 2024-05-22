import { useState } from 'react'
import { GetSum } from '../domain/useCases'
import { Sum } from '../domain/interfaces'
import { useLoading } from '../loading.context'

const useGetSum = () => {
  const { setLoading } = useLoading()
  const [error, setError] = useState<Error | null>(null)
  const getSumUsecase = new GetSum()

  const fetchData = async (
    clientCode: string
  ): Promise<{ data: Sum } | null> => {
    setLoading(true)

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await getSumUsecase.perform({ clientCode })

      if (response instanceof Error) {
        setError(response)
        return null
      }

      const data = response?.data.data as Sum

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

export { useGetSum }
