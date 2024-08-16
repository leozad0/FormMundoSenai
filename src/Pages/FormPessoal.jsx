import * as C from "@chakra-ui/react"
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const FormPessoal = () => {
    return(
      <C.VStack spacing={5}>
        <C.Text fontSize="xl" fontWeight="bold" color="gray">Cadastro</C.Text>
        <C.Input type="email" placeholder="Insira seu E-mail"/>
        <C.Input type="text" placeholder="Insira seu nome"/>
        <C.Input type="text" placeholder="Insira seu CPF"/>
        <C.Input type="text" placeholder="Insira seu telefone"/>
        <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green' value='1'>
      Masculino
    </Radio>
    <Radio colorScheme='green' value='2'>
      Feminino
    </Radio>
  </Stack>
</RadioGroup>
      </C.VStack>
    )
}


export default FormPessoal