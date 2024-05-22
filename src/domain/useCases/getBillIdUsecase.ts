import { apiService } from '../../service/api'
import { BillDownload } from '../interfaces'

export interface GetBillIdUsecase {
  perform(params: GetBillIdUsecase.Params): Promise<GetBillIdUsecase.Response>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetBillIdUsecase {
  export type Params = {
    billId: string
  }

  export type Response = BillDownload | Error
}

export class GetBillId implements GetBillIdUsecase {
  async perform(
    params: GetBillIdUsecase.Params
  ): Promise<GetBillIdUsecase.Response> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(`/bills/id/${params.billId}`)
      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return new Error(error.message)
    }
  }
}
