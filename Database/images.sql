/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(250) NOT NULL,
  `primary_image` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `images` (`id`, `image_url`, `primary_image`) VALUES
(15, './images/createProducts/maxresdefault.jpg', 0);
INSERT INTO `images` (`id`, `image_url`, `primary_image`) VALUES
(16, './images/createProducts/navigation-09.jpg', 1);
INSERT INTO `images` (`id`, `image_url`, `primary_image`) VALUES
(17, './images/createProducts/panel-85826754-image-d5d0360f-5cf6-458f-9019-b90cfdbdedee.jpg', 0);
INSERT INTO `images` (`id`, `image_url`, `primary_image`) VALUES
(18, './images/createProducts/UFjWSqQU_400x400.jpg', 0),
(19, './images/createProducts/maxresdefault.jpg', 0),
(20, './images/createProducts/lunar.jpg', 1),
(21, './images/createProducts/bobby.jpg', 0),
(22, './images/createProducts/lunar.jpg', 1),
(23, './images/createProducts/wp8377753-tales-from-the-loop-wallpapers.jpg', 0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;