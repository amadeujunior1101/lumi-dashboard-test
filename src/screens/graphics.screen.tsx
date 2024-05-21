import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useGetClientCodeList, useGetSum } from '../hooks';
import { PieComponent, SelectComponent, TypographyComponent } from '../components';
import { IGraphicItem, ISelectComponent } from './interfaces/screens.interface';


const GraphicsScreen = () => {

  const [selectItems, setSelectItems] = useState<ISelectComponent[]>([]);
  const [graphicsItems, setGraphicsItems] = useState<IGraphicItem[]>([]);

  const { fetchData: getClientCodeList } = useGetClientCodeList()
  const { fetchData: getSum } = useGetSum()

  const handleSelectChange = (selectCode: string) => {
    listBillsByClientCodeData(selectCode)
  };

  const listClients = async () => {

    try {
      const response = await getClientCodeList();

      if(!response?.data) return
  
      const mappedItems = response.data.map(item => ({
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

      const response = await getSum(clientCode);

      if(!response?.data) return

      setGraphicsItems([
        {
          label: 'Gráfico',
          data: [response.data.electricPowerConsumptionInKwh, response.data.compensatedEnergyInKwh],
          labels: ['Consumo de Energia Elétrica - KWh', 'Energia Compensada - kWh'],
          backgroundColor: ['#FF6384', '#36A2EB'],
          title: 'Perspectiva em KWH',
        },
        {
          label: 'Gráfico',
          data: [response.data.totalValueWithoutGdInR$, response.data.gDEconomyInR$],
          labels: ['Valor Total sem GD - R$', 'Economia GD - R$'],
          backgroundColor: ['#FF6384', '#00b061'],
          title: 'Perspectiva em R$',
        },
      ]);

    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  useEffect(() => {
    listClients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    listBillsByClientCodeData('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <Container>
       <TypographyComponent 
        title={'Gráfico de referencias'} 
        margin={'30px auto 30px auto'} 
        textTransform={'uppercase'} 
        variant='h4' 
        fontWeight="bold" />

      <SelectComponent label="Escolha o id do cliente" showListAll={true} items={selectItems} onChange={handleSelectChange} />
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

