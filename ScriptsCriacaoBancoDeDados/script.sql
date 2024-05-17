-- Table: financas.usuarioemprestimo

-- DROP TABLE IF EXISTS financas.usuarioemprestimo;

CREATE TABLE IF NOT EXISTS financas.usuarioemprestimo
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    email character varying COLLATE pg_catalog."default" NOT NULL,
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    cpf character varying COLLATE pg_catalog."default",
    telefone character varying COLLATE pg_catalog."default",
    perfil character varying COLLATE pg_catalog."default",
    banco character varying COLLATE pg_catalog."default",
    CONSTRAINT usuarioemprestimo_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS financas.usuarioemprestimo
    OWNER to postgres;