CREATE DATABASE coolx;
USE coolx;

DROP TABLE user;
DROP TABLE project;
DROP TABLE tree;
DROP TABLE project_info;
DROP TABLE image;
DROP TABLE project_tree;

CREATE TABLE user (
user_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
password VARCHAR(150) NOT NULL,
user_type TINYINT(2) DEFAULT 0,
user_name VARCHAR(50) NOT NULL,
surname VARCHAR(100) NOT NULL,
company VARCHAR(50) NOT NULL,
nif VARCHAR(50) UNIQUE NOT NULL,
position VARCHAR(50),
phone VARCHAR(50) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
country VARCHAR(100),
currency VARCHAR(50),
create_date TIMESTAMP,
last_mod_date TIMESTAMP,
last_connection TIMESTAMP,
is_deleted TINYINT(2) DEFAULT 0
);

SELECT * FROM user;

SELECT * FROM user WHERE is_deleted = 0 and user_type = 0;

CREATE TABLE project (
project_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
project_name VARCHAR(150) NOT NULL,
project_description TEXT,
location VARCHAR(100) NOT NULL,
altitude VARCHAR(50),
latitude VARCHAR(50),
area FLOAT NOT NULL,
status TINYINT UNSIGNED DEFAULT 0,
profit FLOAT,
project_cost FLOAT,
year_planting DATE,
user_id SMALLINT UNSIGNED NOT NULL,
is_deleted TINYINT(2) DEFAULT 0,

CONSTRAINT fk_user_1 FOREIGN KEY (user_id)
REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO project (project_name, project_description, location, altitude, latitude, 
area, profit, project_cost, year_planting, user_id) VALUES ('c','c','b','b','b','1','1','1','1994-01-29','2');

-- SELECT * FROM project WHERE user_id = 2;

SELECT * FROM project;

SELECT * FROM project LEFT JOIN user on user_type = '1';
select * from project, user where user.user_type = 1 group by project.project_id;

select * from project, user
where user.user_id = project.user_id
and user.user_type = 1 group by project;

select * from project, user
where project.user_id = user.user_id
and user.user_type = 1 group by project.project_id;

select * from project, image
where project.project_id = image.project_id
and project.project_id = '74' group by project.project_id;

select * from image, project, user
where user.user_id = project.user_id and project.project_id = image.project_id
and user.user_id = '5' group by image.image_id;



 SELECT * FROM project;
 
 UPDATE project SET user_id='1' WHERE project_id = '2';
 
 
CREATE TABLE project_info ( 
project_id INT UNSIGNED PRIMARY KEY auto_increment,
avg_height FLOAT,
soil_quality FLOAT,
structural_density FLOAT,
trees_quantity INT,
green_chlorophyll FLOAT,
improved_vegetation FLOAT,
standard_calcination FLOAT,
atm_vegetation_resistant FLOAT, 
avg_land_slope FLOAT,
co2_absorb FLOAT,

CONSTRAINT fk_project_1 FOREIGN KEY (project_id)
REFERENCES project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
 );
 
 INSERT INTO project_info (avg_height, soil_quality, structural_density, trees_quantity, green_chlorophyll, 
improved_vegetation, standard_calcination, atm_vegetation_resistant, avg_land_slope, co2_absorb) VALUES ('10','10','10','10','10','10','10','10','10','10');
 
CREATE TABLE tree (
tree_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
tree_name VARCHAR(150) NOT NULL,
latin_name VARCHAR(150),
avg_height_tree FLOAT,
avg_crown_area FLOAT,
avg_biomass FLOAT,
avg_age FLOAT,
project_id SMALLINT UNSIGNED,
is_deleted TINYINT(2) DEFAULT 0
);

 SELECT * FROM tree;

CREATE TABLE project_tree (
project_id INT UNSIGNED NOT NULL,
tree_id SMALLINT UNSIGNED NOT NULL,
quantity INT NOT NULL DEFAULT 0,
primary key(project_id , tree_id),

CONSTRAINT fk_project_2 FOREIGN KEY (project_id) REFERENCES project(project_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_tree_1 FOREIGN KEY (project_id) REFERENCES tree(tree_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- SELECT * FROM project_tree;

CREATE TABLE image (
image_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
type_image VARCHAR(15),
file_name VARCHAR(200),
date_img VARCHAR(75),
project_id INT UNSIGNED,
is_deleted TINYINT(2) DEFAULT 0,

CONSTRAINT fr_project_2 FOREIGN KEY (project_id)
REFERENCES project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

 SELECT * FROM image;
 
