import { apiService } from '../../service/api'
import { Client } from '../entities'

export interface GetClientCodeListUsecase {
  perform(): Promise<GetClientCodeListUsecase.Response>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetClientCodeListUsecase {
  export type Response = Array<Client> | Error
}

export class GetClientCodeList implements GetClientCodeListUsecase {
  async perform(): Promise<GetClientCodeListUsecase.Response> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(`/bills/clients`)
      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return new Error(error.message)
    }
  }
}
