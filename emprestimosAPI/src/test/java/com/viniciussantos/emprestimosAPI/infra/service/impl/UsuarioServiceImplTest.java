package com.viniciussantos.emprestimosAPI.infra.service.impl;

import com.viniciussantos.emprestimosAPI.domain.entity.Usuario;
import com.viniciussantos.emprestimosAPI.infra.repository.UsuarioRepository;
import com.viniciussantos.emprestimosAPI.exception.RegraNegocioException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UsuarioServiceImplTest {

    UsuarioRepository repository;
    UsuarioServiceImpl service;

    @BeforeEach
    void setUp() {
        repository = Mockito.mock(UsuarioRepository.class);
        service = new UsuarioServiceImpl(repository);
    }

    @Test
    void salvarUsuario() {
        // Cenário
        Usuario usuario = Usuario.builder().email("teste@teste.com").build();
        when(repository.save(usuario)).thenReturn(usuario);

        // Ação
        Usuario usuarioSalvo = service.salvarUsuario(usuario);

        // Verificação
        assertNotNull(usuarioSalvo);
        verify(repository, times(1)).save(usuario);
    }

    @Test
    void validarEmail() {
        // Cenário
        Usuario usuario = Usuario.builder().email("teste@teste.com").build();
        when(repository.existsByEmail(usuario.getEmail())).thenReturn(false);

        // Ação
        assertDoesNotThrow(() -> service.validarEmail(usuario.getEmail()));

        // Verificação
        verify(repository, times(1)).existsByEmail(usuario.getEmail());
    }

    @Test
    void validarEmailExistente() {
        // Cenário
        Usuario usuario = Usuario.builder().email("teste@teste.com").build();
        when(repository.existsByEmail(usuario.getEmail())).thenReturn(true);

        // Ação
        assertThrows(RegraNegocioException.class, () -> service.validarEmail(usuario.getEmail()));

        // Verificação
        verify(repository, times(1)).existsByEmail(usuario.getEmail());
    }

    @Test
    void obterPorId() {
        // Cenário
        Long id = 1L;
        Usuario usuario = Usuario.builder().id(id).email("teste@teste.com").build();
        when(repository.findById(id)).thenReturn(Optional.of(usuario));

        // Ação
        Optional<Usuario> usuarioEncontrado = service.obterPorId(id);

        // Verificação
        assertTrue(usuarioEncontrado.isPresent());
        assertEquals(usuarioEncontrado.get().getId(), id);
        assertEquals(usuarioEncontrado.get().getEmail(), usuario.getEmail());
        verify(repository, times(1)).findById(id);
    }
}