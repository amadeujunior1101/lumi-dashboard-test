import { Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { TypographyComponent } from '../components/typography';

const HomeScreen = () => {

  const emoji = String.fromCodePoint(0x1F517);

  return (
    <Container>
      <TypographyComponent 
        title={'Apresentação'} 
        margin={'30px auto 30px auto'} 
        textTransform={'uppercase'} 
        variant='h4' 
        fontWeight="bold" />
      
      <TypographyComponent 
        title={'TESTE PRÁTICO LUMI – DESENVOLVEDOR FULL STACK PLENO'} 
        margin={'30px auto 30px auto'} 
        textTransform={'uppercase'} 
        variant='h6' 
        fontWeight="bold" />
      <Typography variant='h6'>
        Olá, candidato(a) a Desenvolvedor Full Stack Pleno, estamos empolgados em ter você no
        processo de seleção da Lumi. Como parte crucial deste processo, apresentamos um desafio
        técnico que nos permitirá avaliar suas habilidades e competência em desenvolvimento Full
        Stack.
      </Typography>

      <Typography variant='h6' mt={4}>
        <Typography fontWeight={'bold'}>
        {emoji}  repositório frontend:
          </Typography> 
          <Link href="https://github.com/amadeujunior1101/lumi-dashboard-test" target="_blank" rel="noopener noreferrer">
            https://github.com/amadeujunior1101/lumi-dashboard-test
          </Link>
      </Typography>
      <Typography variant='h6' mt={4}>
        <Typography fontWeight={'bold'}>
        {emoji}  repositório backend:
          </Typography> 
          <Link href="https://github.com/amadeujunior1101/lumi-api-test" target="_blank" rel="noopener noreferrer">
            https://github.com/amadeujunior1101/lumi-api-test
          </Link>
      </Typography>
      <Typography variant='h6' mt={4}>
        <Typography fontWeight={'bold'}>
        {emoji}  linkedin:
          </Typography> 
          <Link href="https://www.linkedin.com/in/amadeujunior88/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/amadeujunior88/
          </Link>
      </Typography>
      <Typography variant='h6' mt={4}>
        <Typography fontWeight={'bold'}>
        {emoji}  github:
          </Typography> 
          <Link href="https://github.com/amadeujunior1101/" target="_blank" rel="noopener noreferrer">
            https://github.com/amadeujunior1101/
          </Link>
      </Typography>
    </Container>
  );
};

export { HomeScreen };

