use games_store_bd;

create table tbl_categoria (
id INT AUTO_INCREMENT,
nome_categoria VARCHAR(100),
createdAt DATETIME,
updatedAt DATETIME,
PRIMARY KEY(id)
);

INSERT INTO tbl_categoria (id, nome_categoria) VALUES (01, "AÇÂO");