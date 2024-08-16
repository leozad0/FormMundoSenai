import * as C from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'

const FormEndereco = () => {
    return(
      <C.VStack spacing={5}>
        <C.Text fontSize="xl" fontWeight="bold" color="gray">Endereço</C.Text>
        <C.Input type="text" placeholder="Insira seu CEP"/>
        <C.Input type="text" placeholder="Insira seu bairro"/>
        <Select placeholder='Selecione sua UF'>
  <option value='option1'>SE</option>
  <option value='option2'>SP</option>
  <option value='option3'>AC</option>
  <option value='option4'>RJ</option>
  <option value='option5'>AL</option>
  <option value='option6'>AP</option>
  <option value='option7'>AM</option>
  <option value='option8'>BA</option>
  <option value='option9'>CE</option>
  <option value='option10'>DF</option>
  <option value='option11'>ES</option>
  <option value='option12'>GO</option>
  <option value='option13'>MA</option>
  <option value='option14'>MT</option>
  <option value='option15'>MS</option>
  <option value='option16'>MG</option>
  <option value='option17'>PA</option>
  <option value='option18'>PB</option>
  <option value='option19'>PR</option>
  <option value='option20'>PE</option>
  <option value='option21'>PI</option>
  <option value='option22'>RN</option>
  <option value='option23'>RS</option>
  <option value='option24'>RO</option>
  <option value='option25'>RR</option>
  <option value='option26'>SC</option>
  <option value='option27'>TO</option>
  
  
  
</Select>
      </C.VStack>
    )
}


export default FormEndereco