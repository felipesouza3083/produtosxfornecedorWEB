import React from 'react';

class Fornecedor extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="mt-4">Fornecedores</h1>
                <br />
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table mr-1"></i>
                                Lista de Fornecedores
                            </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>CNPJ</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="4">Quantidade de registros: </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fornecedor;
