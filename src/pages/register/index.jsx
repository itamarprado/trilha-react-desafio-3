import { Header } from "../../components/Header"
import { Wrapper } from "../register/styles"
import { Column, Container, SmallStrongText, SmallText, SubtitleRegister, Title, TitleRegister } from "../register/styles"
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Button } from "../../components/Button"
import { SignInFormButton } from "../register/styles";


const Register = () => {

  const navigate = useNavigate()

  const signInFormButton = () => {
    navigate('/login')
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onSubmit',
});


  const onSubmit = async (formData) => {
    try{
        const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
        
        if(data.length && data[0].id){
            navigate('/feed') 
            return
        }

        alert('Usuário ou senha inválido')
    }catch(e){
        //TODO: HOUVE UM ERRO
        alert('Houve um erro ao processar sua solicitação')
    }
};

  return (
    <>
        <Header />
        <Container>
          <Column>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleRegister>Comece agora grátis</TitleRegister>
              <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
              <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<FaUser />} name="username"  control={control} />
                    {errors.user && <span>Usuário é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Password" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <SmallText>Ao clicar em "criar minha conta grátis". declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</SmallText>
                <SmallStrongText>Já tenho conta. <SignInFormButton  onClick={signInFormButton}>Fazer login</SignInFormButton></SmallStrongText>
            </Wrapper>
          </Column>
        </Container>
    </>
  )
}

export { Register }