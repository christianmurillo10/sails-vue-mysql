/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.5.5-10.1.36-MariaDB : Database - sails_vue_mysql_live
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sails_vue_mysql_live` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sails_vue_mysql_live`;

/*Table structure for table `permissions` */

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  `code` varchar(50) NOT NULL,
  `route` varchar(50) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL COMMENT 'refd to permissions.id',
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `type` smallint(1) NOT NULL DEFAULT '1' COMMENT '1=Main Menu 2=Sub Menu 3=Others',
  `is_parent` smallint(1) NOT NULL DEFAULT '1' COMMENT '0=No 1=Yes',
  `is_deleted` smallint(1) NOT NULL DEFAULT '0' COMMENT '0=No 1=Yes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `permissions` */

insert  into `permissions`(`id`,`name`,`description`,`code`,`route`,`order`,`parent_id`,`created_at`,`updated_at`,`type`,`is_parent`,`is_deleted`) values (1,'Dashboard','Dashboard','dashboard','',1,NULL,'2019-05-09 00:30:46','2019-05-10 04:07:52',1,0,0),(2,'Users','Users','users','users',2,NULL,'2019-05-10 04:00:37','2019-05-10 04:00:37',1,0,0),(3,'RBAC','Role Based Access Control','rbac','',3,NULL,'2019-05-10 04:45:09','2019-05-10 04:45:09',1,1,0);

/*Table structure for table `positions` */

DROP TABLE IF EXISTS `positions`;

CREATE TABLE `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `positions` */

insert  into `positions`(`id`,`name`,`created_at`,`updated_at`,`is_deleted`) values (1,'Superadmin','2019-04-03 10:04:27','2019-04-03 10:04:27',0),(2,'Admin','2019-04-25 12:42:35','2019-04-25 12:42:37',0),(3,'Tester','2019-04-26 13:47:48','2019-04-26 13:47:48',0);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`description`,`created_at`,`updated_at`,`is_deleted`) values (1,'Superadministrator','Superadministrator','2019-05-03 14:50:47','2019-09-06 08:31:30',0),(2,'Administrator','Administrator','2019-05-03 16:40:00','2019-05-07 03:32:45',0),(3,'Tester','Tester','2019-09-01 09:40:22','2019-09-06 10:16:20',0),(4,'User','User','2019-09-01 09:44:43','2019-09-01 10:06:40',0),(5,'Guest','Guest','2019-09-01 10:07:24','2019-09-01 10:11:51',0),(6,'Checker','Checker','2019-09-02 12:21:54','2019-09-02 12:26:24',0);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL COMMENT 'refd to roles.id',
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `permission_type` smallint(1) NOT NULL DEFAULT '1' COMMENT '1=Role Permissions 2=User Permissions',
  `is_logged` smallint(1) NOT NULL DEFAULT '0' COMMENT '0=No 1=Yes',
  `is_active` smallint(1) NOT NULL DEFAULT '1' COMMENT '0=No 1=Yes',
  `is_deleted` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`username`,`password`,`role_id`,`created_at`,`updated_at`,`permission_type`,`is_logged`,`is_active`,`is_deleted`) values (1,'user01@mail.com','user01','$2b$10$gcx8lJNXfJLCj4jF/NCs7eftV71Y69l309n0lQMCP2L8FDDO7HfVW',1,'2019-08-20 11:47:00','2019-09-05 14:49:01',1,1,1,0),(2,'user02@mail.com','user02','$2b$10$1CCrP/5SE2Jet6fnJkeUteBDutBw8XjsLfxk0R0xHRFTRRhlxfmSy',1,'2019-08-20 15:42:38','2019-09-05 14:49:01',1,1,1,0),(3,'user03@mail.com','user03','$2b$10$oMXrmPGxRvR9dADNWX4cm.gnkSnkp5R8b7XykIiu0/aENszkQXRqO',1,'2019-08-20 15:42:44','2019-09-05 14:49:01',1,1,1,0),(4,'user04@mail.com','user04','$2b$10$z053hBCw57WarDaX25gffeg1/lAw5F8DXxAIW6mVNnIROCXJ/PgAG',1,'2019-08-20 15:42:48','2019-09-05 14:49:01',1,1,1,0),(5,'user05@mail.com','user05','$2b$10$K7iwlPEpZvSk.NptnKkB/.wlTuSG9OiOI.soVUVBa5vAEnWxTlif6',1,'2019-08-21 15:08:05','2019-09-06 12:22:32',1,1,1,0),(6,'user06@mail.com','user06','$2b$10$Plag8R.TvTpdegDk0wmDC.d99WASEBc43PWDkxo7EHyejdd49QnKO',1,'2019-08-21 15:08:50','2019-09-05 14:49:01',1,1,1,0),(7,'user07@mail.com','user07','$2b$10$Jq/Gl5B1GFyLhoh6x7Bklu4CpNtZV01xnXcv4cU54mGDNObJmjQqK',1,'2019-08-21 15:13:16','2019-09-05 14:49:01',1,1,1,0),(8,'user08@mail.com','user08','$2b$10$l1OMnn/pb8hFFcGTdj9mqOBgD0osnebnhoWMBq6vZHwRs/2rLPX0K',2,'2019-08-29 07:46:22','2019-09-05 14:49:01',1,1,1,0),(9,'user09@mail.com','user09','$2b$10$9td.HdBbahrt5G8oyHyW4.ctsWodDL7Bawz0qOiRqpoDAmfp4eOxC',1,'2019-08-29 07:47:52','2019-09-05 14:49:01',1,1,1,0),(10,'user10@mail.com','user10','$2b$10$RYyvGJq54PlUXfmcGxzSHeXQRzSHzwLYMbD7HfUqYh9o99jTq.tbG',1,'2019-08-29 07:51:16','2019-09-05 14:49:01',1,1,1,0),(11,'user11@mail.com','user11','$2b$10$FWiROiqXyJRqwsP.2fqT7.ZhkLSY8N5pgWpqNHPrJ5QnoloolDAh2',1,'2019-08-29 23:42:59','2019-09-05 14:49:01',1,1,1,0),(12,'user12@mail.com','user12','$2b$10$FQQDnPKWsqBHDcnZAdTA8.u.pr9OLP.MbPt.WulK4Z2tbt7MEkX5C',1,'2019-09-01 07:46:43','2019-09-05 14:49:01',1,1,1,0),(13,'user13@mail.com','user13','$2b$10$rdI3WpuEo.n25yJny1RJ3uElKUtVCrbjN.yi6hL5zkcEztZC5Bxte',1,'2019-09-01 08:30:21','2019-09-05 14:49:01',1,1,1,0),(14,'user14@mail.com','User14','$2b$10$0y.TlP2J0SnCa4d1AZEPtuLGwzEt54jBMkN1wV2mdkLD2i7u.QQ8i',3,'2019-09-02 06:49:27','2019-09-05 14:49:01',1,1,1,0),(15,'user15@mail.com','User15','$2b$10$ccI4C4eWkogVHz06D.hk7.7XPQ3KGR3N0c5QTAdoqncYR1ujnuvI.',5,'2019-09-02 08:55:54','2019-09-05 14:49:01',1,1,1,0),(16,'user16@mail.com','user16','$2b$10$wOYaizd/Nyq.q/nv1JjlOOmrvvKlEhGR3iXycAkQ.jPgZLzkKh7.C',4,'2019-09-02 10:40:40','2019-09-05 14:49:01',1,1,1,0),(17,'user17@mail.com','user17','$2b$10$7wEHgH6Or/BL4xL7DlHay.iqqWIaaO2eyqlQmnp1QN7joDCs4m726',3,'2019-09-02 10:59:40','2019-09-05 14:49:01',1,1,1,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
