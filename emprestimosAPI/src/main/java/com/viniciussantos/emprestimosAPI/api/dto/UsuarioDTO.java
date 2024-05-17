package com.viniciussantos.emprestimosAPI.api.dto;


import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {
    private String nome;
    private String cpf;
    private String telefone;
    private String email;
    private String perfil;
    private String banco;


}
