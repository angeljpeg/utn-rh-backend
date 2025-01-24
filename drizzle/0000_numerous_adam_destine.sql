CREATE TABLE `usuarios` (
	`usuarioId` varchar(36) NOT NULL,
	`matricula` varchar(8) NOT NULL,
	`password` varchar(8) NOT NULL,
	CONSTRAINT `usuarios_usuarioId` PRIMARY KEY(`usuarioId`)
);
