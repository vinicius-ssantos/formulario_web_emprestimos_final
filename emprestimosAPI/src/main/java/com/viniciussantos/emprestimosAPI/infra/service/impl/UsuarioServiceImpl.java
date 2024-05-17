package com.viniciussantos.emprestimosAPI.infra.service.impl;


import com.viniciussantos.emprestimosAPI.domain.entity.Usuario;
import com.viniciussantos.emprestimosAPI.domain.useCase.UsuarioService;
import com.viniciussantos.emprestimosAPI.exception.RegraNegocioException;
import com.viniciussantos.emprestimosAPI.infra.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    private UsuarioRepository repository;


    // Injeção de dependência do reposity
    public UsuarioServiceImpl(UsuarioRepository repository) {
        super();
        this.repository = repository;
    }

    @Override
    @Transactional // serve para garantir que a transação seja fechada ao final do método
    public Usuario salvarUsuario(Usuario usuario) {
        validarEmail(usuario.getEmail());
        return repository.save(usuario);
    }

    @Override
    public void validarEmail(String email) {
        boolean existe = repository.existsByEmail(email);
        if (existe) {
            throw new RegraNegocioException("Já existe um usuário cadastrado com este email.");
        }
    }

    @Override
    public Optional<Usuario> obterPorId(Long id) {
        return repository.findById(id);
    }
}
