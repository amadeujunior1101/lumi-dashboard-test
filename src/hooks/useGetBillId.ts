import { useState } from 'react'
import { BillDownload } from '../domain/entities'
import { useLoading } from '../loading.context'
import { GetBillId } from '../domain/useCases'

const useGetBillId = () => {
  const { setLoading } = useLoading()
  const [error, setError] = useState<Error | null>(null)
  const getBillIdUsecase = new GetBillId()

  const fetchData = async (
    billId: string
  ): Promise<{ data: BillDownload } | null> => {
    setLoading(true)

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await getBillIdUsecase.perform({ billId })

      if (response instanceof Error) {
        setError(response)
        return null
      }

      const data = response?.data.data[0] as BillDownload

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

export { useGetBillId }
