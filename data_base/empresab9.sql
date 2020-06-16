-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2020 at 06:12 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empresab9`
--

-- --------------------------------------------------------

--
-- Table structure for table `departamento`
--

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 NOT NULL,
  `ciudad` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `departamento`
--

INSERT INTO `departamento` (`id`, `nombre`, `ciudad`) VALUES
(1, 'direccion', 'madrid'),
(2, 'financiero', 'barcelona'),
(3, 'producto', 'valencia'),
(5, 'administracion', 'coruña'),
(7, 'Recursos gatunos', 'Miaudrid');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8 NOT NULL,
  `dni` int(10) UNSIGNED ZEROFILL NOT NULL,
  `sexo` enum('M','F') CHARACTER SET utf8 NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `fecha_inc` timestamp NOT NULL DEFAULT current_timestamp(),
  `salario` decimal(6,2) UNSIGNED NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `fk_departamento` int(11) NOT NULL,
  `jefe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `dni`, `sexo`, `fecha_nacimiento`, `fecha_inc`, `salario`, `cargo`, `fk_departamento`, `jefe_id`) VALUES
(1, 'Lucia', 0000465456, 'F', '1980-10-12', '2020-05-27 13:22:18', '2500.00', 'Jefa de cuentas', 5, 2),
(2, 'Marta', 0000465456, 'F', '1970-10-12', '2009-01-11 23:00:00', '2500.00', 'Director administracion', 5, 0),
(3, 'Teresa', 0000465456, 'F', '1990-10-12', '2019-01-11 23:00:00', '6000.00', 'secretaria', 5, 4),
(4, 'Sofía', 0000465456, 'F', '1972-10-12', '2004-01-11 23:00:00', '2500.00', 'Director secretaria', 5, 0),
(5, 'Diego', 0000465456, 'M', '1999-10-12', '2004-11-19 23:00:00', '3000.00', 'contable', 2, 6),
(6, 'Cristina', 0000465456, 'F', '2000-10-12', '2010-01-11 23:00:00', '6000.00', 'Director contable', 2, 0),
(7, 'Enrique', 1232334123, 'M', '1900-08-13', '0000-00-00 00:00:00', '5000.00', 'Relaciones Públicas', 5, 4),
(8, 'Ruth', 0000465456, 'F', '1999-10-12', '2002-01-11 23:00:00', '2500.00', 'Director de producto', 3, 0),
(10, 'Carlota', 0000465456, 'F', '1975-10-12', '2007-01-11 23:00:00', '2500.00', 'Director general', 1, 0),
(11, 'Odin', 0009877987, 'M', '1900-08-13', '0000-00-00 00:00:00', '5000.00', 'Director del director general', 1, 0),
(12, 'Zeus', 0009877987, 'M', '1900-08-13', '2020-06-13 18:07:17', '5000.00', 'Director del director general', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_empleados_departamento_idx` (`fk_departamento`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_empleados_departamento` FOREIGN KEY (`fk_departamento`) REFERENCES `departamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
