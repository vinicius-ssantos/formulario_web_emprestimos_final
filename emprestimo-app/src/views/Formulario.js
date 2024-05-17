import React from 'react'
import { withRouter } from 'react-router-dom'
import FormGroup from '../components/form-group'
import Card from '../components/card'
import { mensagemSucesso, mensagemErro } from '../components/toastr'
import UsuarioService from '../app/service/usuarioService'
import Navbar from '../components/navbar'

class Formulario extends React.Component {
    state = {
        nome:'',
        cpf: '',
        telefone: '',
        email: '', 
        perfil:'',     
        banco:'' 
    }
    constructor(){
        super();
        this.service = new UsuarioService();
    }
    goToHomePage = () => {
        this.props.history.push("/home")
    }
    handleSelectChange = (event) => {
        const selectedOptionValue = event.target.value;
        this.setState({perfil: selectedOptionValue});
    }
    cadastrar = () => {
      
        const {nome, cpf,telefone,email,perfil,banco } = this.state        
        const usuario = {nome, cpf,telefone,email,perfil,banco }
        console.log(usuario)
        try{
            this.service.validar(usuario);
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
            .then( response => {
                console.log(response)
                mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
                    this.props.history.push("/sucesso")
            }).catch(error => {
                console.log(error.response)
                mensagemErro(error.response.data)
               
            })
    }
    render(){
        return (
            <><Navbar /><div className="col-md-6 offset-md-3">
                <div className="bs-docs-section">
                    <Card title="Formulario Emprestimo">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="nome completo: *" htmlFor="exampleInputPassword1">
                                            <input type="text"
                                                value={this.state.nome}
                                                onChange={e => this.setState({ nome: e.target.value })}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Nome" />
                                        </FormGroup>
                                        <FormGroup label="CPF: *" htmlFor="exampleInputPassword1">
                                            <input type="text"
                                                value={this.state.cpf}
                                                onChange={e => this.setState({ cpf: e.target.value })}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="CPF" />
                                        </FormGroup>
                                        <FormGroup label="Telefone: *" htmlFor="exampleInputEmail1">
                                            <input type="tel"
                                                value={this.state.telefone}
                                                onChange={e => this.setState({ telefone: e.target.value })}
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Telefone" />
                                        </FormGroup>
                                        <FormGroup label="Email: *" htmlFor="exampleInputPassword1">
                                            <input type="email"
                                                value={this.state.email}
                                                onChange={e => this.setState({ email: e.target.value })}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Password" />
                                        </FormGroup>
                                        <FormGroup label="Perfil: *" htmlFor="perfilSelect">
                                            <select
                                                value={this.state.perfil}
                                                onChange={this.handleSelectChange}

                                                className="form-control"
                                                id="perfilSelect">
                                                <option value="">Selecione o perfil</option>
                                                <option value="aposentado">Aposentado</option>
                                                <option value="assalariado">Assalariado</option>
                                                <option value="auxilio_Brasil">Auxílio Brasil</option>
                                                <option value="pensionista">Pensionista</option>
                                                <option value="servidor_publico">Servidor Público</option>
                                                <option value="militar">Militar</option>
                                                <option value="outros">Outros</option>
                                                <option value="menos-um-salario-minimo">Beneficiários que recebem menos de um
                                                    salário-mínimo</option>
                                                <option value="autonomo">Autônomo</option>
                                                <option value="nao-encontrei-meu-perfil">Não encontrei meu perfil</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup label="Banco que recebe o salário ou benefício: *" htmlFor="exampleInputPassword1">
                                            <select
                                                value={this.state.banco}
                                                onChange={e => this.setState({ banco: e.target.value })}
                                                className="form-control"

                                            >
                                                <option value="selecione">Banco que recebe o salário ou benefício</option>
                                                <option value="Banco crefisa">Banco Crefisa</option>
                                                <option value="Bradesco">Bradesco</option>
                                                <option value="Itau">Itaú</option>
                                                <option value="Caixa">Caixa</option>
                                                <option value="Santander">Santander</option>
                                                <option value="Banco do Brasil">Banco do Brasil</option>
                                                <option value="Mercantil">Mercantil</option>
                                                <option value="Banco Banrisul">Banco Banrisul</option>
                                                <option value="Sicred">Sicred</option>
                                                <option value="Outros">Outros</option>
                                            </select>
                                        </FormGroup>
                                        <button onClick={this.cadastrar}
                                            className="btn btn-primary btn-lg btn-block">
                                            <i className="pi pi-plus"></i>  Cadastrar
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div></>

            
          
        )
    }

}

export default withRouter(Formulario)