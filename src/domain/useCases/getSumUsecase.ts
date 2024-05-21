import { apiService } from '../../service/api'
import { Sum } from '../entities'

export interface GetSumUsecase {
  perform(params: GetSumUsecase.Params): Promise<GetSumUsecase.Response>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetSumUsecase {
  export type Params = {
    clientCode: string
  }

  export type Response = Array<Sum> | Error
}

export class GetSum implements GetSumUsecase {
  async perform(params: GetSumUsecase.Params): Promise<GetSumUsecase.Response> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await apiService.get(
        `/bills/?client_code=${params.clientCode}`
      )
      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return new Error(error.message)
    }
  }
}
