-- categories 
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Công Sở', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Sơ Mi', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Caro', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Suông', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Xòe', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Vest', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Xếp Li', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Váy Đầm Dự Tiệc', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Áo Sơ Mi Tay Dài', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Áo Sơ Mi Tay Ngắn', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Áo Sơ Mi Họa Tiết', '1');
INSERT INTO `ltw`.`categories` (`NAME`, `GENDER`) VALUES ('Áo Sơ Mi Kiểu', '1');

-- customer
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0794763040', '123456', 'Dương Huỳnh Anh Đức', '2002-02-01', 'https://thegioidienanh.vn/stores/news_dataimages/nguyenthithanhthuy/102019/15/11/0724_Ynh_1_7.jpg', 'admin');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0903228745', '123456', 'Ngụy Anh Lạc', '2001-03-05', 'https://th.bing.com/th/id/R.0a8dfabc06847d163f5d82b41c8a5553?rik=h1peRQORlGvAwQ&pid=ImgRaw&r=0', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0895234412', '123456', 'Ô Diệp Kỳ Anh', '2003-08-12', 'https://th.bing.com/th/id/R.7033c066472691e4a77fc2ff05888e9b?rik=lyYSkGd4O16kdA&pid=ImgRaw&r=0', 'admin');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0453897620', '123456', 'Ô Nhã Thành Bích', '2004-01-14', 'https://th.bing.com/th/id/R.1e2a1d5bd9cb34a519751d0193410524?rik=5bAUzJJmydpTyw&pid=ImgRaw&r=0', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0978564731', '123456', 'Lưu Thanh Anh', '1999-07-12', 'https://th.bing.com/th/id/OIP.meLqBXY9bIKdBi8-vuh5EAHaJ5?pid=ImgDet&w=576&h=770&rs=1', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0654893018', '123456', 'Hứa Khải', '1997-09-16', 'https://th.bing.com/th/id/R.5e01d11c56c5e3ccca69b807f00928a5?rik=aqhfhXNospFRfA&pid=ImgRaw&r=0', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0786543781', '123456', 'Trần Quốc Anh', '1995-12-03', 'https://img3.thuthuatphanmem.vn/uploads/2019/07/05/hinh-anh-con-gai-cat-toc-ngan-dep_082838188.jpg', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0123987591', '123456', 'Kim Siêu Quần', '1988-03-04', 'https://th.bing.com/th/id/OIP.uYqpZo0HcDu0Ky0YL9jU-wHaLH?pid=ImgDet&w=540&h=810&rs=1', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0967345192', '123456', 'Hà Gia Kính', '1989-05-06', 'https://1.bp.blogspot.com/-nrYtNPt3VFQ/X2bKuRwHGLI/AAAAAAAACQw/Z6SIXczOEA0CbmG_i8JpsIKqYAMSqRoeQCLcBGAsYHQ/s750/13.jpg', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0765947867', '123456', 'Phạm Hồng Hiên', '1990-09-08', 'https://th.bing.com/th/id/OIP.gu5TDePDIlQVfpZxyvP7FAHaEc?pid=ImgDet&rs=1', 'customer');
INSERT INTO `ltw`.`customer` (`Phone_Number`, `PASSWORD`, `NAME`, `BIRTHDAY`, `AVATAR`, `ROLE`) VALUES ('0674679310', '123456', 'Xa Thi Mạn', '1989-10-11', 'https://th.bing.com/th/id/OIP.R806Nu3w4G_GzlXPu4FqqQHaK8?pid=ImgDet&w=502&h=742&rs=1', 'admin');

-- Product
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC09071', 'Đầm nhún eo cổ nơ', 'Đen-Hồng', 'XS', 'VOAN PHỐI COTTON', 'Váy liền giữa áo sơ mi và chân váy mang lại vẻ sang trọng, tiện lợi', '200', '0.5', '530000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09071/2-HONG-DC09071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09071/3-HONG-DC09071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09071/4-HONG-DC09071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09071/5-HONG-DC09071.jpg', '1');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC09063', 'Đầm rã cổ đính nút', 'Vàng', 'XS', 'COTTON SỢI GÂN', 'Tạo hình phần cổ hình răng cưa, phối nút sành điệu', '189', '0.2', '530000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09063/2-NAU-DC09063.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09063/3-NAU-DC09063.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09063/4-NAU-DC09063.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09063/5-NAU-DC09063.jpg', '1');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC09062', 'Đầm cổ U xếp eo', 'Cam', 'XS', 'COTTON SỢI GÂN', 'Đầm cổ U xếp eo tôn dáng người mặc', '100', '0.1', '550000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/2-CAM-DC09062.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/3-CAM-DC09062.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/4-CAM-DC09062.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC09062/5-CAM-DC09062.jpg', '1');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC12067', 'Đầm sơ mi xếp ly', 'Hồng', 'S', 'Xô', 'Chất xô được dệt từ 100% cotton nguyên chất', '30', '0.05', '590000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC12067/2-HONG-DC12067.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC12067/3-HONG-DC12067.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC12067/5-HONG-DC12067.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC12067/7-HONG-DC12067.jpg', '2');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC11098', 'Đầm sơ mi phom A', 'Xanh ', 'L', 'Lụa Ánh Nhung', 'Chất lụa ánh nhung thượng lưu chuyên may áo dài, đầm dạ tiệc', '18', '0', '585000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11098/2-XANH-DC11098.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11098/3-XANH-DC11098.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11098/4-XANH-DC11098.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11098/5-XANH-DC11098.jpg', '2');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC08097', 'Đầm sơ mi không tay', 'Xanh', 'S', 'Chéo Ý', 'Đầm nữ sát nách, xếp ly, lên form gọn gàng', '40', '0.34', '550000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/1-den-dc08097-1.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/2-den-dc08097.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/3-den-dc08097.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dc08097/4-den-dc08097.jpg', '2');
INSERT INTO `ltw`.`product` (`CODE`, `NAME`, `COLOR`, `SIZE`, `MATERIAL`, `DESCRIPTION`, `QUANITY`, `SALEOFF`, `PRICE`, `IMG1`, `IMG2`, `IMG3`, `IMG4`, `CATEGORY_ID`) VALUES ('DC11071', 'Đầm caro đính nút', 'Cam', 'S', 'Cotton Thái Caro', 'Đầm caro đính nút xu hướng, trẻ trung, cá tính', '46', '0.3', '550000', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11071/2-NAU-DC11071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11071/5-NAU-DC11071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11071/6-NAU-DC11071.jpg', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DC11071/7-NAU-DC11071.jpg', '3');

-- Collection
INSERT INTO `ltw`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('Gửi em', 'Ôm trọn thanh xuân - Đẹp ở mọi vũ trụ!');
INSERT INTO `ltw`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('INSPIRED BY FLOWER', 'Nếu là hoa, em sẽ là bông hoa hạnh phúc!');
INSERT INTO `ltw`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('AGE OF YOUTH', 'Hãy luôn mang theo tuổi trẻ bên mình, bạn sẽ chẳng bao giờ già đi!');
INSERT INTO `ltw`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('WINTER', 'XU HƯỚNG THỜI TRANG THU ĐÔNG HOT NHẤT ĐÃ CÓ MẶT TẠI GU!');
INSERT INTO `ltw`.`collection` (`NAME`, `DESCRIPTION`) VALUES ('FALL STORY', 'Tôn dáng - Tôn da - Tôn cả khí chất của nàng. Bởi vì nàng là món quà của mùa thu...');

-- In collection
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC08097', '1');
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09062', '1');
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09063', '2');
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC09071', '2');
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC11098', '3');
INSERT INTO `ltw`.`in_collection` (`ProductCode`, `CollectID`) VALUES ('DC12067', '3');

-- orders
INSERT INTO `ltw`.`orders` (`OrderID`, `CustomerID`, `TOTAL_PRODUCT`, `TOTAL_COST`, `PAY_METHOD`, `RECEIVE_PHONE`, `RECEIVE_ADDRESS`) VALUES ('00001', '2', '2', '460000', 'cash', '0794763040', 'Gò Vấp, TP.HCM');
INSERT INTO `ltw`.`orders` (`OrderID`, `CustomerID`, `TOTAL_PRODUCT`, `TOTAL_COST`, `PAY_METHOD`, `RECEIVE_PHONE`, `RECEIVE_ADDRESS`) VALUES ('00002', '4', '1', '230000', 'momo', '0459835899', '7/38A Cao Lãnh, quận 8, TP.HCM');
INSERT INTO `ltw`.`orders` (`OrderID`, `CustomerID`, `TOTAL_PRODUCT`, `TOTAL_COST`, `PAY_METHOD`, `RECEIVE_PHONE`, `RECEIVE_ADDRESS`) VALUES ('00003', '5', '1', '240000', 'cash', '0796757342', '102 Nguyễn Văn Nghi, phường 5, quận Gò Vấp, TP.HCM');
INSERT INTO `ltw`.`orders` (`OrderID`, `CustomerID`, `TOTAL_PRODUCT`, `TOTAL_COST`, `PAY_METHOD`, `RECEIVE_PHONE`, `RECEIVE_ADDRESS`) VALUES ('00004', '6', '1', '200000', 'cash', '0972334457', '112 Huỳnh Văn Bánh, Phú Nhuận, TP.HCM');
INSERT INTO `ltw`.`orders` (`OrderID`, `CustomerID`, `TOTAL_PRODUCT`, `TOTAL_COST`, `PAY_METHOD`, `RECEIVE_PHONE`, `RECEIVE_ADDRESS`) VALUES ('00005', '7', '2', '500000', 'bank', '0123215568', '449E Lê Quang Định, Bình Thạnh, TP.HCM');

-- include
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC08097', '00001');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC09062', '00001');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC08097', '00002');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC11071', '00003');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC12067', '00004');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC09062', '00005');
INSERT INTO `ltw`.`include` (`ProductID`, `OrderID`) VALUES ('DC11098', '00005');

-- comment
INSERT INTO `ltw`.`comments` (`CommentID`, `ProductID`, `CustomerID`, `RATING`, `DATE_TIME`, `IMG`, `CMT`) VALUES ('00001', 'DC08097', '2', '5', '2023-02-01', 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/toolbar-200x238px-2-2.jpg', 'Sản phẩm tốt chất lượng, sẽ tiếp tục ủng hộ');
INSERT INTO `ltw`.`comments` (`CommentID`, `ProductID`, `CustomerID`, `RATING`, `DATE_TIME`, `CMT`) VALUES ('00002', 'DC09071', '4', '4', '2023-03-04', 'Sản phẩm như hình!');
INSERT INTO `ltw`.`comments` (`CommentID`, `ProductID`, `CustomerID`, `RATING`, `DATE_TIME`, `CMT`) VALUES ('3', 'DC08097', '5', '3', '2023-04-01', 'Giao hàng chậm, còn chất lượng thì tốt');

-- add-to-cart
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC08097', '4');
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC12067', '5');
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC11071', '4');
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC09063', '4');
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC11071', '2');
INSERT INTO `ltw`.`add_to_cart` (`ProductID`, `CustomerID`) VALUES ('DC11098', '5');

-- resource
INSERT INTO `ltw`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('1', 'Rớt nước mắt trước tâm thư của nhân viên gửi sếp giữa tâm dịch', 'Trong thư, cô gái bày tỏ lời biết ơn sâu sắc tới sếp vì sự tử tế và tình yêu thương đã luôn hỗ trợ và đồng hành cùng mình trong suốt chặng đường qua. Đồng thời, công ty cũng là chỗ dựa vững chắc cho mình và các đồng nghiệp tại thời điểm khó khăn chung của nền kinh tế. ');
INSERT INTO `ltw`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('2', 'Dáng người tam giác ngược là như thế nào?', 'Dáng tam giác ngược được định nghĩa sẽ là những người có vóc dáng ở phần vai, phần ngực bị thiếu cân đối so với tổng thể của body, dáng người này phần thân dưới sẽ nhỏ hơn phần thân trên. Thường những người sở hữu vóc dáng này sẽ cần trải qua một quá trình tập luyện để cơ thể có thể săn chắc như mong muốn, đặc điểm cụ thể');
INSERT INTO `ltw`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('3', 'Nguyên tắc phối đồ cho người có dáng tam giác ngược', 'Vì là dáng người tam giác ngược nên thường sẽ có tỉ lệ cơ thể hơi thô và không đều nhau. Cho nên, khi chúng ta phối đồ hay lựa chọn trang phục cần phải xem xét tổng thể  để cân bằng được ở phần thân trên lẫn thân dưới. Một mẹo nhỏ để bạn có thể thực hiện việc này là nên tập luyện ở phần thân dưới để có đường cong để tạo phần eo, giúp thân hình trong cân đối hơn. Sau đây GUMAC  sẽ dành hai gợi ý dành cho bạn.');
INSERT INTO `ltw`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('4', 'Gợi ý tip phối đồ cho dáng tam giác ngược', 'Phối đồ theo dáng người tam giác ngược theo kiểu đúng đắn sẽ có thể tạo được sự cân đối cho cơ thể của các bạn. Tuy nhiên, bạn cũng phải cần thật cân nhắc trước khi lựa chọn các trang phục phù hợp để cân đối cho cả dáng người trên và dưới, sau đây GUMAC sẽ gợi ý cho các bạn một số kiểu phối đồ phù hợp.');
INSERT INTO `ltw`.`resource` (`ID`, `NAME`, `CONTENT`) VALUES ('5', 'Phụ kiện phối đẹp cho dáng người tam giác ngược', 'Cuối cùng, sau khi GUMAC đã gợi ý một vài kiểu phối đồ dành cho bạn thì sẽ là những phụ kiện, trang sức phù hợp với các nàng có dáng người tam giác. Đa số, bạn có thể chọn bất kỳ loại phụ kiện hay trang sức nào bạn thích nhưng để nhìn với trang phục dễ nhìn, thu hút, không lố lăng thì chúng ta nên tránh lựa chọn những trang sức chẳng hạn như: Vòng có kích thước lớn và nhiều chi tiết gây rối mắt hoặc những chiếc khăn quấn không cần thiết làm bạn sẽ trông luộm thuộm. Lựa chọn hoa tai cỡ to hoặc hoa tai dài cũng là một lựa chọn thông minh sẽ giúp gương mặt chúng ta trông thon gọn hơn, kết hợp cùng vòng tay cỡ nhỏ màu bạc giúp chúng ta trông sành điệu hơn rất nhiều.');
