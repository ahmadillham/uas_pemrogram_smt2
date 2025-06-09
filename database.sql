-- Active: 1743927033559@@127.0.0.1@3306@uas_web
SHOW TABLES

CREATE DATABASE uas_web

use uas_web

SHOW TABLES

SELECT * FROM portofolios

INSERT INTO
    portofolios (nama_kegiatan, waktu_kegiatan)
VALUES ("magang", "12-12-2022")

DESC portofolios

show create table portofolios

alter table portofolios
MODIFY COLUMN id_portofolio int not null AUTO_INCREMENT

SELECT * FROM portofolios

show TABLES