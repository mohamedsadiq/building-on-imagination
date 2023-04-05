import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Simple() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('initial')
  const [error, setError] = useState(false);

  return (
    <Flex

      align={'center'}
      justify={'center'}
    >
      <Container
        maxW={'lg'}


        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>

        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={async (e) => {
            e.preventDefault();
            setError(false);
            setState('submitting');
          
            try {
              const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
              });
          
              if (response.ok) {
                setState('success');
              } else {
                setError(true);
                setState('initial');
              }
            } catch (error) {
              console.error(error);
              setError(true);
              setState('initial');
            }
          }}
          >
          <FormControl>
            <Input
             borderRadius="lg"
             bgColor="#171717"
              variant={'solid'}
              borderWidth={1}
            
              color={'#fff'}
              _placeholder={{
                color: '#fff',
              }}
              borderColor={useColorModeValue('#3e3e3e')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
             borderRadius="lg"
              bgColor={state === 'success' ? 'green.500' : 'white'}
              color={state === 'success' ? 'white' : 'gray.800'}
              _hover={{
                bg: state === 'success' ? 'green.600' : 'gray.200',
              }}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : ""}
        </Text>
      </Container>
    </Flex>
  );
}