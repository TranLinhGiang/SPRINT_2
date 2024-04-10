
-- Thể loại
insert into category (`name`)
value("balad"),("rock"),("pop");
-- bài hát --
INSERT INTO `spotify-sprint2`.`song` ( `artist`, `file_name`, `is_favorited`, `title`, `id_category`) VALUES ('Sơn Tùng', ' ', 1, 'jasdgfh', 1),
( 'dgfyh', ' ', 0, 'dègerg', 2),
( 'dfghfg', ' ', 1, 'sdfg', 3);

-- nghệ sĩ--
INSERT INTO `spotify-sprint2`.`artist` ( `name`, `id_song`) VALUES ('Sơn Tùng', 1),
 ('Soobin', 2),
( 'Jack', 3);
-- admin--
INSERT INTO `spotify-sprint2`.`admin` (`id`, `name`) VALUES (1, 'giang'),
(2, 'huy');

-- Role --
INSERT INTO `spotify-sprint2`.`role` ( `name`) VALUES ('ROLE_USER'),
 ('ROLE_ADMIN');
 
--  Account role --
 INSERT INTO `spotify-sprint2`.`account_role` (`id_account`, `id_role`) VALUES (1, 1),
(2, 2);

-- Account --
INSERT INTO `spotify-sprint2`.`account` ( `password`, `id_admin`) VALUES ('$2a$12$pR6Mv92xPKUU0blYsd8vFeNLR06zyIPcwAK/OQknTS3njA9tGnVzO', 1),
 ('$2a$12$pR6Mv92xPKUU0blYsd8vFeNLR06zyIPcwAK/OQknTS3njA9tGnVzO', 2);
 
   -- Customer-- 
INSERT INTO `spotify-sprint2`.`customer` (`id`, `name`, `id_acount`) VALUES (1, 'Trần Linh Giang', 1);
INSERT INTO `spotify-sprint2`.`customer` (`id`, `name`, `id_acount`) VALUES (2, 'Đinh Xuân Huy', 2);

-- Account role --
INSERT INTO `spotify-sprint2`.`account_role` (`id_account`, `id_role`) VALUES (1, 2);
INSERT INTO `spotify-sprint2`.`account_role` (`id_account`, `id_role`) VALUES (2, 2);



