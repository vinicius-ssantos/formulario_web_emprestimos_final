package com.viniciussantos.emprestimosAPI.domain.useCase;

import com.viniciussantos.emprestimosAPI.domain.entity.Usuario;

import java.util.Optional;

public interface UsuarioService{
    Usuario salvarUsuario(Usuario usuario);
    void validarEmail(String email);

    Optional<Usuario> obterPorId(Long id);
}
