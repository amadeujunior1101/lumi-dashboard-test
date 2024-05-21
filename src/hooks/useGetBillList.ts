import { useState } from 'react'
import { GetBillList } from '../domain/useCases'
import { Bill } from '../domain/entities'
import { useLoading } from '../loading.context'

const useGetBillList = () => {
  const { setLoading } = useLoading()
  const [error, setError] = useState<Error | null>(null)
  const getBillListUsecase = new GetBillList()

  const fetchData = async (code: string): Promise<{ data: Bill[] } | null> => {
    setLoading(true)

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await getBillListUsecase.perform({ code })

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

export { useGetBillList }
