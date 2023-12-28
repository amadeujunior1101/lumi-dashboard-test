import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import pdfIcon from '../assets/pdfIcon.png';
import { CardComponent } from '../components/card';
import { SelectComponent } from '../components/select';
import { TypographyComponent } from '../components/typography';
import api from '../service/api';
import { IBill, IClientCode, IDownloadPdf, ISelectComponent } from './interfaces/screens.interface';

const BillsScreen = () => {
  const [selectItems, setSelectItems] = useState<ISelectComponent[]>([]);
  const [selectedBills, setSelectedBills] = useState<IBill[]>([]);

  const handleSelectChange = (clientCode: string) => {
    listBills(clientCode);
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

  useEffect(() => {
    listClients();
  }, []);

  const listBills = async (clientCode: string) => {

    if(!clientCode){
      return setSelectedBills([])
    }

    try {
      const response = await api.get(`/bills/${clientCode}`);
      const data: { data: IBill[] } = response.data;

      const mappedItems = data.data.map(item => ({
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
      const response = await api.get(`/bills/id/${billId}`);
      const data: { data: IDownloadPdf[] } = response.data;

      if(data){
        const bufferData = data.data[0].pdfFile;
  
        const uint8Array = new Uint8Array(bufferData.data);
      
        const blob = new Blob([uint8Array], { type: 'application/pdf' });
          saveAs(blob, data.data[0].nameFile);
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
              <CardComponent title={item.referenceMonth} imageSrc={pdfIcon} onDownloadClick={() => handleDownload(item.id)} />
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
