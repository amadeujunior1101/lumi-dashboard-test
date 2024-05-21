export interface IClientCode {
  clientCode: string
}

export interface IGraphicItem {
  label: string
  data: number[]
  labels: string[]
  backgroundColor: string[]
  title: string
}

export interface ISelectComponent {
  value: string
  label: string
}

export interface IBill {
  id: string
  clientCode: string
  referenceMonth: string
}
