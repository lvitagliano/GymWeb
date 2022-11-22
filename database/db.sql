CREATE DATABASE escribania IF NOT EXISTS;

USE escribania;

CREATE TABLE `clients` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Type` int DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `DNI` int DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `clientstype` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(45) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pagotype` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Activo` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tramites` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Tipo` int DEFAULT NULL,
  `Libro` int DEFAULT NULL,
  `Acta` int DEFAULT NULL,
  `TipoPago` int DEFAULT NULL,
  `Cliente` int DEFAULT NULL,
  `Usuario` int DEFAULT NULL,
  `Ingreso` DATETIME DEFAULT CURRENT_DATE,
  `Egreso` DATETIME DEFAULT NULL,
  `MontoTotal` decimal(10,0) DEFAULT NULL,
  `MontoParcial` decimal(10,0) DEFAULT NULL,
  `FechaPagoTotal` DATETIME DEFAULT NULL,
  `FechaPagoParcial` DATETIME DEFAULT NULL,
  `PagoPendiente` bit(1) DEFAULT NULL,
  `CtaCte` bit(1) DEFAULT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `Activo` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tramitetype` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(45) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `DNI` int DEFAULT NULL,
  `UserName` varchar(45) NOT NULL,
  `Password` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Mail` varchar(45) DEFAULT NULL,
  `Type` int DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usertype` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(45) DEFAULT NULL,
  `Active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

