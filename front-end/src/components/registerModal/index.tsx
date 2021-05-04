import React, { useState } from 'react';
// Importação do material ui
import { Button, TextField, Modal } from '@material-ui/core';
// Importação das div's que foram criadas no style
import { 
  Container, 
  Text, 
  Card, 
  CardText, 
  InputArea, 
  ButtonArea, 
  Body 
} from "./style";

const RegisterModal: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);
  // Abertura e fechamento do modal
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
      setOpen(false);
  }

  return(
    <Body>
      {/* Botão para abrir o modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>AbrirModal</Button>

      {/* Interface do modal */}
      <Modal
        aria-labelledby="modal-title"
        arial-describedby="modal-description"
        open={open}
        onClose={handleClose}
      >

          <Container>
            <Card>
                <CardText>
                  {/* Card do texto superior */}
                    <Text>FAÇA O SEU CADASTRO</Text>
                </CardText>
                <InputArea>
                {/* Area dos inputs */}
                    <TextField id="outlined-basic" variant="outlined" label="Nome"/>
                    <br/>
                    <TextField id="outlined-basic" variant="outlined" label="E-mail" type='email'/>
                    <br/>
                    <TextField id="outlined-basic" variant="outlined" label="Matricula" type='number'/>
                    <br/>
                </InputArea>
                <ButtonArea>
                  {/* Area dos botões */}
                    <Button variant="contained" color="secondary" size="large" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" color="primary" size="large">Confirmar</Button>
                </ButtonArea>
            </Card>
          </Container>

      </Modal>
    </Body>
  );

};

export default RegisterModal;