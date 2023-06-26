CREATE DATABASE "react-gallery";
    
CREATE TABLE gallery (
    "id" serial primary key,
    "path" VARCHAR(256),
    "description" VARCHAR(256),
    "likes" INTEGER
);

INSERT INTO gallery (path, description, likes) 
VALUES 
('images/child.jpeg', 'A picture of me as a child.', 0 ),
('images/family.jpg', 'The Duren boys.', 0 ),
('images/dad.JPG', 'Me and Pops', 0 ),
('images/coffee-2.jpeg', 'Coffee Cat.', 0 ),
('images/friends.jpeg', 'Me and my bestie', 0 ),
('images/coffee-1.JPG', 'Coffee Kitten', 0 ),
('images/friends-2.jpeg', 'At the lake', 0 ),
('images/friends-3.jpg', 'The three amigos', 0 );

SELECT * FROM gallery;