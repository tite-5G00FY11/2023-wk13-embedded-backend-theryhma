
CREATE TABLE IF NOT EXISTS `weather` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` varchar(100) NOT NULL,
  `data` json NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO `weather` (`device_id`, `data`)
VALUES ("device_JOO", 
'{
  "S_name1": "GROUPNAME",
  "S_value1": "VALUE"
}');

INSERT INTO `weather` (`device_id`, `data`)
VALUES ("device_JOO", 
'{
  "S_name1": "GROUPNAME2",
  "S_value1": "VALUE2"
}');