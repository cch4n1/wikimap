-- user seed --
INSERT INTO users (email, password, username) VALUES ('alice@example.com', 'alicepassword', 'Alice');
INSERT INTO users (email, password, username) VALUES ('kira@example.com', 'kirapassword', 'Kira');
INSERT INTO users (email, password, username) VALUES ('thirduser@example.com', 'thirduserpassword', 'ThirdUser');

-- map seed --
INSERT INTO maps (user_id, title, latitude, longtitude) VALUES (1, 'Favorite Park', 34.0522, -118.2437);
INSERT INTO maps (user_id, title, latitude, longtitude) VALUES (2, 'Secret Beach', -33.8688, 151.2093);
INSERT INTO maps (user_id, title, latitude, longtitude) VALUES (3, 'City View', 40.7128, -74.0060);

-- point seed --

-- Insert points for map 1
INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (1, 'Picnic Spot', 'A serene spot for picnics.', 34.0522, -118.2437, 'picnic.jpg');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (1, 'Hiking Trail', 'Scenic hiking trail.', 34.0600, -118.2550, 'hiking.jpg');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (1, 'Wildlife Spotting', 'Great for wildlife enthusiasts.', 34.0510, -118.2495, 'wildlife.jpg');

-- Insert points for map 2
INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (2, 'Cove Viewpoint', 'Panoramic view of the cove.', -33.8688, 151.2093, 'viewpoint.jpg');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (2, 'Beach Access', 'Direct access to the beach.', -33.8700, 151.2050, 'beach.jpg');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (2, 'Surfing Spot', 'Ideal for surfers.', -33.8650, 151.2100, 'surfing.jpg');

-- Insert points for map 3
INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (3, 'Tower of London', 'Significant historical site.', 51.5081, -0.0759, 'https://images.pexels.com/photos/5820481/pexels-photo-5820481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (3, 'British Museum', 'Visit the local museum.', 51.5194, -0.1270, 'https://images.pexels.com/photos/14845978/pexels-photo-14845978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

INSERT INTO points (map_id, title, description, latitude, longitude, image) VALUES (3, 'Tate Modern Art Gallery', 'Explore contemporary art.', 51.5076, -0.0994, 'https://images.pexels.com/photos/11314921/pexels-photo-11314921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');