
-- Insert 20 electronic items
INSERT INTO "Item" (item_name, stock)
VALUES
  ('Smartphone', 100),
  ('Laptop', 50),
  ('Tablet', 30),
  ('Smart TV', 40),
  ('Digital Camera', 25),
  ('Headphones', 60),
  ('Gaming Console', 35),
  ('Router', 70),
  ('Wireless Earbuds', 80),
  ('Fitness Tracker', 45),
  ('Home Assistant', 55),
  ('External Hard Drive', 65),
  ('Computer Monitor', 75),
  ('Projector', 20),
  ('Bluetooth Speaker', 90),
  ('E-reader', 15),
  ('Game Controller', 40),
  ('Smart Watch', 50),
  ('Virtual Reality Headset', 30),
  ('Action Camera', 25);


-- Insert 20 suppliers
INSERT INTO "Supplier" (supplier_name, contact_no, amount_payable, address, vat_no)
VALUES
  ('ACME Electronics', '123-456-7890', 5000.00, '123 Main St, Anytown, USA', '1234567890'),
  ('Tech World Inc.', '987-654-3210', 3000.00, '456 Elm St, Othertown, USA', '9876543210'),
  ('Global Gadgets Ltd.', '555-555-5555', 7000.00, '789 Oak St, Sometown, USA', '5555555555'),
  ('Eco Electronics', '111-222-3333', 2500.00, '456 Birch St, Anycity, USA', '1112223333'),
  ('Gizmo Innovations', '777-888-9999', 4000.00, '321 Cedar St, Anystate, USA', '7778889999'),
  ('Smart Devices Corp', '333-333-3333', 6000.00, '987 Pine St, Othertown, USA', '3333333333'),
  ('Techtronics Ltd.', '444-444-4444', 4500.00, '555 Maple St, Sometown, USA', '4444444444'),
  ('Electronic Emporium', '666-666-6666', 3500.00, '765 Spruce St, Anyville, USA', '6666666666'),
  ('Innovate Electronics', '222-111-4444', 2800.00, '654 Cedar St, Anycity, USA', '2221114444'),
  ('Electro World', '111-555-9999', 4800.00, '321 Oak St, Anytown, USA', '1115559999'),
  ('Tech Haven Inc.', '777-111-3333', 3200.00, '987 Elm St, Sometown, USA', '7771113333'),
  ('Gadget Galore Ltd.', '888-111-9999', 5200.00, '123 Birch St, Othertown, USA', '8881119999'),
  ('SmartBuy Electronics', '999-111-2222', 4100.00, '789 Pine St, Anycity, USA', '9991112222'),
  ('Global Gizmos', '123-555-9999', 2900.00, '456 Maple St, Anyville, USA', '1235559999'),
  ('ElectroTech Solutions', '333-666-9999', 3800.00, '654 Cedar St, Anytown, USA', '3336669999'),
  ('Tech Innovations Corp', '111-888-4444', 4200.00, '765 Oak St, Sometown, USA', '1118884444'),
  ('Digital Delights', '777-222-5555', 4700.00, '987 Birch St, Anycity, USA', '7772225555'),
  ('Gadget Galaxy Inc.', '555-444-3333', 3100.00, '321 Spruce St, Othertown, USA', '5554443333'),
  ('Tech Masters', '999-555-1111', 3600.00, '123 Pine St, Anytown, USA', '9995551111'),
  ('Innovation Electronics', '222-444-1111', 4400.00, '456 Elm St, Anyville, USA', '2224441111');


-- Insert 20 customers
INSERT INTO "Customer" (customer_name, contact_no, amount_receivable, address, vat_no)
VALUES
  ('John Doe', '123-456-7890', 1500.00, '123 Main St, Anytown, USA', '1234567890'),
  ('Jane Smith', '987-654-3210', 2200.00, '456 Elm St, Othertown, USA', '9876543210'),
  ('Robert Johnson', '555-555-5555', 1800.00, '789 Oak St, Sometown, USA', '5555555555'),
  ('Mary Brown', '111-222-3333', 2700.00, '456 Birch St, Anycity, USA', '1112223333'),
  ('Michael Wilson', '777-888-9999', 1900.00, '321 Cedar St, Anystate, USA', '7778889999'),
  ('Sarah Davis', '333-333-3333', 2500.00, '987 Pine St, Othertown, USA', '3333333333'),
  ('David Lee', '444-444-4444', 2000.00, '555 Maple St, Sometown, USA', '4444444444'),
  ('Linda Taylor', '666-666-6666', 2100.00, '765 Spruce St, Anyville, USA', '6666666666'),
  ('William Clark', '222-111-4444', 2400.00, '654 Cedar St, Anycity, USA', '2221114444'),
  ('Karen Hall', '111-555-9999', 2600.00, '321 Oak St, Anytown, USA', '1115559999'),
  ('Jennifer Turner', '777-111-3333', 2300.00, '987 Elm St, Sometown, USA', '7771113333'),
  ('Richard White', '888-111-9999', 2800.00, '123 Birch St, Othertown, USA', '8881119999'),
  ('Mark Miller', '999-111-2222', 2100.00, '789 Pine St, Anycity, USA', '9991112222'),
  ('Elizabeth Harris', '123-555-9999', 2600.00, '456 Maple St, Anyville, USA', '1235559999'),
  ('Charles Moore', '333-666-9999', 2200.00, '654 Cedar St, Anytown, USA', '3336669999'),
  ('Patricia Jackson', '111-888-4444', 2700.00, '765 Oak St, Sometown, USA', '1118884444'),
  ('Joseph Evans', '777-222-5555', 1900.00, '987 Birch St, Anycity, USA', '7772225555'),
  ('Nancy Scott', '555-444-3333', 2500.00, '321 Spruce St, Othertown, USA', '5554443333'),
  ('Daniel Lewis', '999-555-1111', 2300.00, '123 Pine St, Anytown, USA', '9995551111'),
  ('Susan Turner', '222-444-1111', 2100.00, '456 Elm St, Anyville, USA', '2224441111');
