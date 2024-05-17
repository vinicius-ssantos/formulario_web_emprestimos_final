import ApiService from './apiservice'

import ErroValidacao from '../exception/ErroValidacao'

class UsuarioService extends ApiService {
    salvar(usuario){
        return this.post('/api/usuario', usuario);
    }
    validar(usuario){
        
        const erros = []

        if(!usuario.nome){
            erros.push('O campo Nome é obrigatório.')
        }
        else if(!usuario.cpf){
            erros.push('O campo CPF é obrigatório.')
        }
        else if(!usuario.telefone){
            erros.push('O campo Telefone é obrigatório.')
        }
        else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
            erros.push('Informe um Email válido.')
        }
    
        else  if (!usuario.perfil){
            erros.push('O campo Perfil é obrigatório.')
        }else if (!usuario.banco){
            erros.push('O campo banco é obrigatório.')
        }
        
        
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}

export default UsuarioService;