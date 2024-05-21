export interface BillDownload {
  id: string
  nameFile: string
  clientCode: string
  referenceMonth: string
  pdfFile: {
    type: string
    data: number[]
  }
}
