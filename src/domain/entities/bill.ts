export interface Bill {
    id: string;
    clientCode: string;
    nameFile: string;
    pdfFile: string; //buffer
    energyElectricalKwhAmount: number;
    energyElectricalKwhValue: number;
    energySCEEWithoutICMSAmount: number;
    energySCEEWithoutICMSValue: number;
    energyCompensatedGDIAmount: number;
    energyCompensatedGDIValue: number;
    municipalPublicLightingContribution: number;
    referenceMonth: string;
}



