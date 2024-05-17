import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/")
    }

    render(){
        return (
            <div className="container text-center" >
                <h2>Concluido</h2>
                <p>Em breve um de nossos consultores entrara em contato para dar prosseguimento com o emprestimo: </p>

                <div className="offset-md-4 col-md-4">
                    <button style={{ width: '100%' }} 
                            onClick={this.goToHomePage} 
                            className="btn btn-success">
                        <i className="pi pi-sign-in"></i> Voltar
                    </button>
                </div>
            </div>
        )
    }

}

export default withRouter(LandingPage)