-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2019 at 11:09 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `image`) VALUES
(1, 'admin', 'admin@gmail.com', '\0\0.AYz/Oz4xH2', '/assets/images/scam2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Heaven'),
(2, 'Prosperity'),
(3, 'Sin--Hell'),
(4, 'HolyGhost'),
(5, 'Trinity'),
(6, 'Jesus'),
(7, 'Son of God (Son of Man)');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `venue`, `description`, `created_at`) VALUES
(1, 'Jesus Crusade', 'Church Auditorium', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', '2019-09-12 07:20:27'),
(2, 'Destiny Helper', 'Prayer Ground', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', '2019-09-12 07:21:35'),
(3, 'The coming King', 'Church Auditorium', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta atLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', '2019-09-12 07:22:06');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `dob` varchar(1000) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `occupation` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `marital_status` varchar(15) NOT NULL,
  `pics` varchar(100) NOT NULL,
  `unit_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `first_name`, `last_name`, `dob`, `gender`, `occupation`, `phone`, `email`, `address`, `marital_status`, `pics`, `unit_id`) VALUES
(1, 'Tijani', 'Raphael', '2019-09-05', 'Male', 'Realtor', '09089765412', 'praph@gmail.com', 'Birthdays:\r\nBishop(48), Truetalk(34), ogbon(40), soladel(39), uchvic(33), slypacino, xstudios(43), babybos(53), Palazo(39), kasmail(36), adeobaoluw, Badro(34), vicholas(40), despam(30), bundur(31), segzysexy, succri(30), nineteen(36), dania02(27), Kriely, Umargarr(51), JojoArmani, segzy14, Mescopaul(25), eudoh940, adeoba2008(37), Donzee02(32), ufelove, hiroz, Mantissa89(30), aywhy93(26), Tosadel(32), Joeguyski(24), Jmacke(31), abiolert(33), Iyabetajos, Martnz, markidoo(31), chudy11(29), danysi(40), rust6(22), ObioraIkenna(31), coatofwealth(28), Olatara, lexychuks, woblow1(35), SUMCIOUZ(27), EaglesT, Asebaba1(37), iamscope(22), shawnfamous, stoyaldeway, frenzyplanet(30), leadknight123(30), sabacity(29), duran2059(28), jonsnow92(45), Intrepidone, parlvyke1(37), mudolak(34), Chumani(18), lavenjcrown, adamyakub(33), larsson442(30), stoneaustin, otuekong1, damolah10(29), olimilove(27), matrix199(38), Holiyo(26), showsax(27), DavSagacity, donk552(40), Hybbee(29), Sheyifunmie(24), DeWorlex45(34), Electroweb(43), ', 'Married', '/assets/images/adminscam.jpg', 0),
(2, 'Abraham', 'Maslow', '1986-03-03', 'Male', 'Teache', '09065432189', 'abraham2014@ymail.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 'Married', '/assets/images/avatar.png', 0),
(3, 'Adelakun', 'Peace', '2005-07-04', 'Female', 'student', '08056432189', 'xxxx@xxx.xxx', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 'Single', '/assets/images/avatar2.png', 0),
(4, 'Ipadeola', 'Abolarinwa', '1980-10-07', 'Female', 'Doctor', '07045678909', 'Abola@yaml.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 'Married', '/assets/images/blog-details-author.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `prayers`
--

CREATE TABLE `prayers` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `request` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prayers`
--

INSERT INTO `prayers` (`id`, `name`, `request`, `created_at`) VALUES
(1, 'Sin--Hell', 'gggggggg', '2019-09-13 05:49:25'),
(2, 'Sin--Hell', 'uyyag ba', '2019-09-13 05:49:57');

-- --------------------------------------------------------

--
-- Table structure for table `sermons`
--

CREATE TABLE `sermons` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `contents` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sermons`
--

INSERT INTO `sermons` (`id`, `title`, `contents`, `category_id`, `created_at`) VALUES
(1, 'The Destiny Helper', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 6, '2019-09-12 07:23:19'),
(2, 'When God Joins your enemy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta atLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 5, '2019-09-12 07:23:42');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('O3YuymAq1Uj6BDFicXpNoRmvA3brf90j', 1570692287, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('b3hZqHdmvcV9s9Npe-pzyBalMpr-JlFi', 1570698519, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"adminname\":\"admin\",\"adminid\":1,\"adminimage\":\"/assets/images/scam2.jpg\"}'),
('m84g-MaatyWQ-0aj-mLdp1aIKyyy_ZIS', 1570622735, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),
('nYVDtBxdOmBkkS244bAehFV3edHmbkvs', 1570622733, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `head` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `description`, `head`) VALUES
(1, 'Choir', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at \r\n', 1),
(2, 'Technical', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam ut libero ea deserunt a soluta at', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prayers`
--
ALTER TABLE `prayers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sermons`
--
ALTER TABLE `sermons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD KEY `head` (`head`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prayers`
--
ALTER TABLE `prayers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sermons`
--
ALTER TABLE `sermons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_ibfk_1` FOREIGN KEY (`head`) REFERENCES `members` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
