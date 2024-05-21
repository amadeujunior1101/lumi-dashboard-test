import { apiService } from '../../service/api'
import { Bill } from '../entities'

export interface GetBillListUsecase {
  perform(
    params: GetBillListUsecase.Params
  ): Promise<GetBillListUsecase.Response>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetBillListUsecase {
  export type Params = {
    code: string
  }

  export type Response = Array<Bill> | Error
}

export class GetBillList implements GetBillListUsecase {
  async perform(
    params: GetBillListUsecase.Params
  ): Promise<GetBillListUsecase.Response> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(`/bills/${params.code}`)
      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return new Error(error.message)
    }
  }
}
