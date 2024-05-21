import { saveAs } from 'file-saver';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetBillList, useGetBillId } from '../hooks';
import { useGetClientCodeList } from '../hooks/useGetClientCodeList';
import { CardComponent, SelectComponent, TypographyComponent } from '../components';
import { IBill, IClientCode, ISelectComponent } from './interfaces/screens.interface';

const BillsScreen = () => {
  const [selectItems, setSelectItems] = useState<ISelectComponent[]>([]);
  const [selectedBills, setSelectedBills] = useState<IBill[]>([]);
  const { fetchData: getClientCodeList } = useGetClientCodeList()
  const { fetchData: getBillList } = useGetBillList() 
  const { fetchData: getBillId } = useGetBillId()

  const handleSelectChange = (clientCode: string) => {
    listBills(clientCode);
  };

  const listClients = async () => {
    try {
      const response = await getClientCodeList();

      if(!response?.data) return

      const mappedItems = response.data.map((item: IClientCode) => ({
        value: item.clientCode,
        label: item.clientCode,
      }));

      setSelectItems(mappedItems);
    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  useEffect(() => {
    listClients();
  }, []);

  const listBills = async (clientCode: string) => {

    if(!clientCode){
      return setSelectedBills([])
    }

    try {
      const response = await getBillList(clientCode)
      if(!response?.data) return

      const mappedItems = response.data.map(item => ({
        id: item.id,
        clientCode: item.clientCode,
        referenceMonth: item.referenceMonth
      }));

      setSelectedBills(mappedItems);

    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  const handleDownload = async (billId: string) => {
    try {
      const response = await getBillId(`${billId}`);

      if(!response?.data) return

      if(response.data){
        const bufferData = response.data.pdfFile;
  
        const uint8Array = new Uint8Array(bufferData.data);
      
        const blob = new Blob([uint8Array], { type: 'application/pdf' });
          saveAs(blob, response.data.nameFile);
      }


    } catch (error) {
      console.error('Erro na chamada à API', error);
    }
  };

  return (
    <Container>
      <TypographyComponent 
        title={'Faturas'} 
        margin={'30px auto 30px auto'} 
        textTransform={'uppercase'} 
        variant='h4' 
        fontWeight="bold" />
      <SelectComponent label="Escolha o id do cliente" items={selectItems} onChange={handleSelectChange} />
      <Grid container spacing={2} marginTop={2}>
        {
          selectedBills && selectedBills.length > 0 ?
          selectedBills.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardComponent title={item.referenceMonth} imageSrc={'/assets/pdfIcon.png'} onDownloadClick={() => handleDownload(item.id)} />
            </Grid>
          )) :
            <TypographyComponent 
            title={'Encontre suas Faturas'} 
            margin={'50px auto 30px auto'} 
            textTransform={'none'} 
            variant='h6' 
            fontWeight="bold" />
        }
      </Grid>
    </Container>
  );
};

export { BillsScreen };
