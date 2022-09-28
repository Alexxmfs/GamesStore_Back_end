CREATE DATABASE games_store_bd;

USE games_store_bd;

CREATE TABLE tbl_categoria(
id int(10)  auto_increment,
nome_categoria varchar(100) not null,
createdAt DATETIME,
updatedAt DATETIME,
primary key (id)
);

INSERT INTO tbl_categoria
(nome_categoria)
VALUES
('AVENTURA');

INSERT INTO tbl_categoria
(nome_categoria)
VALUES
('AÇÃO');

INSERT INTO tbl_categoria
(nome_categoria)
VALUES
('TERROR');

INSERT INTO tbl_categoria
(nome_categoria)
VALUES
('ARCADE');

SELECT * FROM tbl_categoria;

SELECT * FROM tbl_categoria WHERE cod_categoria = 1;

UPDATE tbl_categoria SET nome_categoria = 'RPG'
WHERE cod_categoria = 1;

