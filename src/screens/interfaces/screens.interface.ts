export interface IClientCode {
  clientCode: string;
}

export interface ISumGraphics {
  electricPowerConsumptionInKwh: number;
  compensatedEnergyInKwh: number;
  totalValueWithoutGdInR$: number;
  gDEconomyInR$: number;
}

export interface IGraphicItem {
  label: string;
  data: number[];
  labels: string[];
  backgroundColor: string[];
  title: string;
}

export interface ISelectComponent {
  value: string;
  label: string;
}

export interface IBill {
  id: string;
  clientCode: string;
  referenceMonth: string;
}

export interface IDownloadPdf {
  id: string;
  nameFile: string;
  clientCode: string;
  referenceMonth: string;
  pdfFile: {
    type: string;
    data: number[];
  };
}
