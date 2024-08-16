import * as C from "@chakra-ui/react"
import { Stack, Checkbox } from '@chakra-ui/react'


const FormProjeto = () => {
    return(
      <C.VStack spacing={5}>
        <C.Text fontSize="xl" fontWeight="bold" color="gray">Projeto</C.Text>
        <C.Input type="text" placeholder="Insira seu Projeto"/>
        <C.Input type="text" placeholder="Área de atuação"/>
        <C.Input type="text" placeholder="Escola"/>
        <C.Input type="text" placeholder="Coordenador/Professor"/>
        <Stack spacing={2} direction='row'>
  <Checkbox colorScheme='green' defaultChecked>
    CETCC
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    CETAFEST
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    CETICC
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    CETAFAJU
  </Checkbox>
</Stack>
      </C.VStack>
    )
}




export default FormProjeto