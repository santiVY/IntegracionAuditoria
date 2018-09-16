-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-09-2018 a las 21:36:41
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `auditoria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria`
--

CREATE TABLE `auditoria` (
  `idauditoria` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `empresa_idempresa` int(11) NOT NULL,
  `usuario_idusuario` int(11) NOT NULL,
  `norma_idnorma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `idempresa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `nit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`idempresa`, `nombre`, `nit`) VALUES
(1, 'LUIS AMIGO ', '49415'),
(2, 'IUSH', '116564'),
(6, 'ACCENTURE', '4546');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `norma`
--

CREATE TABLE `norma` (
  `idnorma` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `norma`
--

INSERT INTO `norma` (`idnorma`, `nombre`) VALUES
(1, 'ISO27001'),
(5, 'COBOL'),
(10, 'ITIL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `idpregunta` int(11) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `norma_idnorma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`idpregunta`, `texto`, `norma_idnorma`) VALUES
(1, '¿Validan los datos de entrada a las apliaciones?', 1),
(2, '¿Los requisistos de negocio para proyectos nuevos o existentes, si presentan los requisistos de contoles de seguridad?', 1),
(3, '¿incorporan verificaciones de validación en las apliaciones que identifiquen corrupciones en la información?', 1),
(4, '¿Validadn los datos de salida de una aplicación que permita identificar que el procedimiento de la información almacenada\r\nes correcto y adecuado a las circunstancias?', 1),
(5, '¿Presentan politicas de controles criptograficos?', 1),
(6, '¿Implementan procedimientos para controlar las instalaciones de software?', 1),
(7, '¿Se restringe el acceso al codigo fuente de los programas?', 1),
(8, '¿Realizan restrinciones en los cambios a los paquetes de software?', 1),
(9, '¿Supervisan y monitorean el desarrollo de software contratado externamente?', 1),
(10, '¿Presentan metodos para detectar vulnerabilidades tecnicas de los sistemas de información?.', 1),
(11, '¿Existe un procedimiento formal para el registro y cancelación de usuarios en la empresa?', 1),
(12, '¿Se restringe y controla la asignación y uso de privilegios?', 1),
(13, '¿Las contraseñas se asignan con un tipo formal de gestión?', 1),
(14, '¿Manejan la politica de escritorio y pantalla despejadas?', 1),
(15, '¿Se emplea el uso de VPN para el acceso a usuarios remotamente?', 1),
(16, '¿Tienen y manejan protección en los puertos de configuración y diagnostico remoto?', 1),
(17, '¿Existe la separación en las redes entre servicios de información, usuarios y sistemas de información?', 1),
(18, '¿Presentan un control de enrutamiento en la red?', 1),
(19, '¿Poseen procedimientos de acceso seguro al sistema operativo?', 1),
(20, '¿Los usuarios o empleados presentan un ID unico para el uso presonal?', 1),
(21, '¿Poseen un sistema de gestión de contraseñas?', 1),
(22, '¿Suspenden las sesiones inactivas?', 1),
(23, '¿Utilizan limitaciones en los tiempos de conexión?', 1),
(24, '¿Los sistemas sensibles tienen un entorno informatico dedicado?', 1),
(25, '¿Presentan politicas, planes operativos y procedimientos para las actividades de trabajo remoto?', 1),
(26, '¿Presentan la documentacion de los procedimientos de operaciones?', 1),
(27, '¿Tienen dividida las instalaciones de desarrollo, ensayo y operacion?, se pide con el fin de evitar cambios no autorizados\r\nen el sistema operativo.', 1),
(28, '¿Tienen dividida las areas de responsabilidad?', 1),
(29, '¿Se cumple el control de prestación de servicios que son operados por las terceras partes?', 1),
(30, '¿Realizan seguimiento y adaptación del uso de los recursos de la empresa?', 1),
(31, '¿Se implementan controles de detención, prevención y recuperación para protegerse de códigos maliciosos?', 1),
(32, '¿Se verifica y controla el mapeo de códigos moviles?', 1),
(33, '¿Se realizan copias de respaldo de la información del software?', 1),
(34, '¿Se llevan controles en la red?', 1),
(35, '¿Hay seguridad en los servicios de red de la empresa?', 1),
(36, '¿La empresa cuenta con procedimientos para el manejo y almecenamiento de la información contra la divulgación \r\nno autorizada?', 1),
(37, '¿La documentación del sistema esta protegida contra acceso no autorizado?', 1),
(38, '¿Poseen politicas y procedimientos para el intercambio de información entre el personal \r\nde la empresa, externos entre otros, sea de manera digital o fisica?', 1),
(39, '¿Manejan controles en la información involucrada en el comercio electronico y \r\ntransaciones en linea?', 1),
(41, '¿La empresa elabora y mantiene grabaciones de los registros para la auditoria de las actividades de los usuarios?', 1),
(42, '¿Las fallas se resgistran y analizan para tomar acciones adecuadas?', 1),
(43, '¿Los relojes dentro de la red se la organización estan sincronizados?', 1),
(44, '¿La empresa cuenta con perimetos de seguridad tales como: paredes, puertas de acceso controladas con tarjeta o mostradores\r\nde recepción atendidos?', 1),
(45, '¿Las areas seguras tiene controles de acceso apropiado para autorizar el paso solo a personal autorizado?', 1),
(46, '¿Tienen diseñado y aplicado la seguridad fisica para las oficinas, recintos e instalaciones?', 1),
(47, '¿Tiene instalado seguridad contra eventos ambientales como incendio, inundación, terremoto, explosión, manifestaciones\r\nsociales y otras formas de desastre natural o artificial?', 1),
(48, '¿Aplica las directrices para trabajar en areas seguras?', 1),
(49, '¿Possen algun tipo de seguridad y control en los lugares donde puede ingresar personal no autorizado?', 1),
(50, 'Respecto a la pregunta anterior, ¿Estos accesos estan lejos de los lugares donde se maneja la información de la empresa?', 1),
(51, '¿Los equipos se encuentran protegidos ante eventos ambientales o fallas de energia u otras anomalias\r\ncausadas por fallas en el suministro de servicios?', 1),
(52, '¿El cableado electrico y de telecomunicaciones se transporta de manera segura, es decir, utilizan \r\ncanalestas o tuberias?', 1),
(53, '¿Realizan mantenimientos a sus equipos? Ver los reportes.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `idrespuesta` int(11) NOT NULL,
  `pregunta_idpregunta` int(11) NOT NULL,
  `answer` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  ADD PRIMARY KEY (`idauditoria`,`norma_idnorma`),
  ADD KEY `fk_auditoria_empresa_idx` (`empresa_idempresa`),
  ADD KEY `fk_auditoria_usuario1_idx` (`usuario_idusuario`),
  ADD KEY `fk_auditoria_norma1_idx` (`norma_idnorma`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`idempresa`),
  ADD UNIQUE KEY `nit_UNIQUE` (`nit`),
  ADD UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  ADD UNIQUE KEY `idempresa_UNIQUE` (`idempresa`);

--
-- Indices de la tabla `norma`
--
ALTER TABLE `norma`
  ADD PRIMARY KEY (`idnorma`),
  ADD UNIQUE KEY `idnorma_UNIQUE` (`idnorma`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`idpregunta`,`norma_idnorma`),
  ADD UNIQUE KEY `idpregunta_UNIQUE` (`idpregunta`),
  ADD KEY `fk_pregunta_norma1_idx` (`norma_idnorma`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`idrespuesta`,`pregunta_idpregunta`),
  ADD UNIQUE KEY `idrespuesta_UNIQUE` (`idrespuesta`),
  ADD KEY `fk_respuesta_pregunta1_idx` (`pregunta_idpregunta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`),
  ADD UNIQUE KEY `idusuario_UNIQUE` (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auditoria`
--
ALTER TABLE `auditoria`
  MODIFY `idauditoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `idempresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `norma`
--
ALTER TABLE `norma`
  MODIFY `idnorma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `idpregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `idrespuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auditoria`
--
ALTER TABLE `auditoria`
  ADD CONSTRAINT `fk_auditoria_empresa` FOREIGN KEY (`empresa_idempresa`) REFERENCES `empresa` (`idempresa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_auditoria_norma1` FOREIGN KEY (`norma_idnorma`) REFERENCES `norma` (`idnorma`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_auditoria_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `fk_pregunta_norma1` FOREIGN KEY (`norma_idnorma`) REFERENCES `norma` (`idnorma`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `fk_respuesta_pregunta1` FOREIGN KEY (`pregunta_idpregunta`) REFERENCES `pregunta` (`idpregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
