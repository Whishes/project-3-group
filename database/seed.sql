/* DELETE ALL CONTENT IN ALL TABLES OF DB FOR SEEDING */
TRUNCATE users, holidays, holiday_parts, events;

/* SEED USERS TABLE */
INSERT INTO users(firstname, surname, username, email, password) VALUES('Jane', 'Doe', 'test', 'janedoe@email.com', '$2b$10$60PbXs/nuGxpxjoaZHO87eSFazvqo9ap1ZiAaZcxtzGWiQ6XPeTr6');
    /* password for test user is 'test' */


/* SEED HOLIDAYS TABLE */
INSERT INTO holidays (user_id, holiday_name, date_start, date_end, location_name, img_link) VALUES (1, 'Test Holiday 1', '2022-01-08', '2022-02-08', 'Sydney', 'https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=20&m=535455441&s=612x612&w=0&h=9eDvK_3h-KKHJEOLlOL2kFxtg0y95MXacEyFpHzu-9s=');
INSERT INTO holidays (user_id, holiday_name, date_start, date_end, location_name, img_link) VALUES (1, 'Test Holiday 2', '2022-04-08', '2022-04-014', 'Vietname', 'https://media.istockphoto.com/photos/hoi-an-vietnam-high-view-of-hoi-an-ancient-town-at-sunset-picture-id1178911311');
    /* dates are in ISO 8601 format */

/* SEED HOLIDAY_PARTS TABLE */
    /* seed one holiday to test what happens when the other is empty */
INSERT INTO holiday_parts (holiday_id, part_name, date_start, date_end, location_name, img_link) VALUES (1, 'City', '2022-01-08', '2022-01-29', '123 Test Street 3000', 'https://rimh2.domainstatic.com.au/iTNbETbUro5ubXdSfDWVpxk4_40=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/14167129_4_1_200420_060100-w3500-h2333');
INSERT INTO holiday_parts (holiday_id, part_name, date_start, date_end, location_name, img_link) VALUES (1, 'Blue Mountains', '2022-01-30', '2022-02-08', '123 Test Street 3000', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Three_Sisters_Sunset.jpg/800px-Three_Sisters_Sunset.jpg');

/* SEED EVENTS TABLE */
INSERT INTO events (part_id, event_name, location_name, img_link, event_description) VALUES (1, 'Breakfast at restaurant', 'V Cool Restaurant', 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/03/sydney-restaurants-woodcut-900x643.png', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper lobortis augue, vel mollis justo feugiat in. Vestibulum imperdiet auctor tempor. Fusce ac eros et velit porttitor tristique. In ut justo viverra, commodo orci nec, aliquam mauris. Integer id lacinia dolor, nec pretium tortor. Curabitur ante lectus, auctor vitae hendrerit ac, imperdiet malesuada risus. Donec quis nulla eget diam iaculis varius.

Donec pellentesque est leo, eget commodo eros bibendum a. Sed fermentum cursus erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam euismod risus lectus, vitae iaculis felis maximus quis. Fusce interdum nunc nulla, vel consequat odio imperdiet quis. Aenean posuere hendrerit est quis aliquam. Nulla accumsan nec enim sed sodales. Sed tincidunt magna at neque scelerisque, eget venenatis turpis interdum.

Nulla quis odio tellus. Phasellus porta vel lectus a bibendum. Vivamus eu tortor nisi. Quisque auctor metus sed neque dictum sodales. Cras vel enim non sapien scelerisque eleifend. Curabitur pretium velit id dui luctus, sed maximus justo interdum. Morbi fringilla maximus ante, pulvinar mollis nunc hendrerit non. Nullam efficitur fermentum augue vitae sagittis. Quisque nec risus pretium, mollis nisl quis, mattis lectus. Maecenas ultrices metus vel elit dignissim, in tempus urna pharetra. Suspendisse vestibulum condimentum lectus, et pretium risus laoreet a. Sed massa nibh, congue non finibus et, congue quis enim. Fusce ligula lorem, dignissim a auctor et, pharetra at tortor. Pellentesque viverra leo vitae metus malesuada, id pretium augue elementum. Integer a mi vel orci vehicula euismod. Maecenas turpis mauris, feugiat quis rutrum ac, mollis sed nunc. ');
INSERT INTO events (part_id, event_name, location_name, img_link, event_description) VALUES (1, 'Dinner at restaurant', 'V Cool Restaurant', 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/03/sydney-restaurants-woodcut-900x643.png', '

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper lobortis augue, vel mollis justo feugiat in. Vestibulum imperdiet auctor tempor. Fusce ac eros et velit porttitor tristique. In ut justo viverra, commodo orci nec, aliquam mauris. Integer id lacinia dolor, nec pretium tortor. Curabitur ante lectus, auctor vitae hendrerit ac, imperdiet malesuada risus. Donec quis nulla eget diam iaculis varius.

Donec pellentesque est leo, eget commodo eros bibendum a. Sed fermentum cursus erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam euismod risus lectus, vitae iaculis felis maximus quis. Fusce interdum nunc nulla, vel consequat odio imperdiet quis. Aenean posuere hendrerit est quis aliquam. Nulla accumsan nec enim sed sodales. Sed tincidunt magna at neque scelerisque, eget venenatis turpis interdum.

Nulla quis odio tellus. Phasellus porta vel lectus a bibendum. Vivamus eu tortor nisi. Quisque auctor metus sed neque dictum sodales. Cras vel enim non sapien scelerisque eleifend. Curabitur pretium velit id dui luctus, sed maximus justo interdum. Morbi fringilla maximus ante, pulvinar mollis nunc hendrerit non. Nullam efficitur fermentum augue vitae sagittis. Quisque nec risus pretium, mollis nisl quis, mattis lectus. Maecenas ultrices metus vel elit dignissim, in tempus urna pharetra. Suspendisse vestibulum condimentum lectus, et pretium risus laoreet a. Sed massa nibh, congue non finibus et, congue quis enim. Fusce ligula lorem, dignissim a auctor et, pharetra at tortor. Pellentesque viverra leo vitae metus malesuada, id pretium augue elementum. Integer a mi vel orci vehicula euismod. Maecenas turpis mauris, feugiat quis rutrum ac, mollis sed nunc.

Nunc at dolor efficitur nibh pellentesque rhoncus ut at turpis. Integer nec dolor mauris. Etiam laoreet auctor pharetra. Nullam sit amet dui eros. Proin porta, augue nec imperdiet suscipit, metus odio porta nisl, nec pharetra dolor leo in nulla. Nullam sit amet tortor et elit commodo lobortis at vitae dolor. Aenean ornare lobortis eros, eu cursus odio vulputate nec. Mauris ac posuere quam. Nulla dapibus tempor tincidunt. Aliquam tortor eros, malesuada efficitur est in, volutpat pulvinar turpis. Vivamus id interdum arcu. Nam hendrerit ligula in sapien pharetra, eu venenatis purus cursus. Donec augue diam, vehicula in felis non, sollicitudin scelerisque nisl. Nulla facilisi. Sed ac congue dolor, a malesuada massa.

In hac habitasse platea dictumst. Quisque euismod feugiat condimentum. Morbi sed porta magna, eget cursus dui. Fusce venenatis elementum leo, vitae malesuada diam bibendum quis. Sed leo felis, fermentum ut tincidunt sit amet, varius nec lectus. In aliquam a augue a iaculis. Ut at ex non magna posuere laoreet a vitae urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dictum porttitor neque, id condimentum augue blandit id. ');

