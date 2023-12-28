import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { PieComponent } from '../components/pie';
import { SelectComponent } from '../components/select';
import { TypographyComponent } from '../components/typography';
import api from '../service/api';
import { IClientCode, IGraphicItem, ISelectComponent, ISumGraphics } from './interfaces/screens.interface';

const GraphicsScreen = () => {

  const [selectItems, setSelectItems] = useState<ISelectComponent[]>([]);
  const [graphicsItems, setGraphicsItems] = useState<IGraphicItem[]>([]);

  const handleSelectChange = (selectCode: string) => {
    listBillsByClientCodeData(selectCode)
  };

  const listClients = async () => {
    try {
      const response = await api.get('/bills/clients');
      const data: { data: IClientCode[] } = response.data;

      const mappedItems = data.data.map(item => ({
        value: item.clientCode,
        label: item.clientCode
      }));

      setSelectItems(mappedItems);

    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  const listBillsByClientCodeData = async (clientCode: string | undefined) => {
    try {
      if(clientCode === undefined) clientCode = '';
      const response = await api.get(`/bills/?client_code=${clientCode}`);
      const data: { data: ISumGraphics } = response.data;

      if(data){
        setGraphicsItems([
          {
            label: 'Gráfico',
            data: [response.data.data.electricPowerConsumptionInKwh, response.data.data.compensatedEnergyInKwh],
            labels: ['Consumo de Energia Elétrica - KWh', 'Energia Compensada - kWh'],
            backgroundColor: ['#FF6384', '#36A2EB'],
            title: 'Perspectiva em KWH',
          },
          {
            label: 'Gráfico',
            data: [response.data.data.totalValueWithoutGdInR$, response.data.data.gDEconomyInR$],
            labels: ['Valor Total sem GD - R$', 'Economia GD - R$'],
            backgroundColor: ['#FF6384', '#00b061'],
            title: 'Perspectiva em R$',
          },
        ]);
      }


    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  useEffect(() => {
    listClients();
  }, []);

  useEffect(()=>{
    listBillsByClientCodeData('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectItems])


  return (
    <Container>
       <TypographyComponent 
        title={'Gráfico de referencias'} 
        margin={'30px auto 30px auto'} 
        textTransform={'uppercase'} 
        variant='h4' 
        fontWeight="bold" />

      <SelectComponent label="Escolha o id do cliente" items={selectItems} onChange={handleSelectChange} />
      <Grid container spacing={2} marginTop={2}>
        {
          graphicsItems?.map((chartPieItem, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <PieComponent chartPieData={chartPieItem} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};

export { GraphicsScreen };

