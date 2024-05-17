package com.viniciussantos.emprestimosAPI.api.controller;

import com.viniciussantos.emprestimosAPI.api.dto.UsuarioDTO;
import com.viniciussantos.emprestimosAPI.domain.entity.Usuario;
import com.viniciussantos.emprestimosAPI.domain.useCase.UsuarioService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class UsuarioControllerTest {


    UsuarioService service;
    UsuarioController controller;

    @BeforeEach
    void setUp() {
        service = Mockito.mock(UsuarioService.class);
        controller = new UsuarioController(service);
    }

    @Test
    void salvar() {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setNome("Teste");
        dto.setCpf("12345678901");
        dto.setTelefone("1234567890");
        dto.setEmail("teste@teste.com");
        dto.setPerfil("Teste");
        dto.setBanco("Teste");

        Usuario usuario = Usuario.builder()
                .nome(dto.getNome())
                .cpf(dto.getCpf())
                .telefone(dto.getTelefone())
                .email(dto.getEmail())
                .perfil(dto.getPerfil())
                .banco(dto.getBanco())
                .build();

        when(service.salvarUsuario(Mockito.any(Usuario.class))).thenReturn(usuario);

        ResponseEntity response = controller.salvar(dto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        assertEquals(usuario, response.getBody());
    }
}