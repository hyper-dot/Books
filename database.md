1. **Purchase Account Table**:

   - `PurchaseID` (Primary Key)
   - `PurchaseDate` (Date of the purchase)
   - `ItemID` (Foreign Key to an Item table)
   - `DealerID` (Foreign Key to a Dealers table)
   - `PurchasePricePerItem` (Price per item)
   - `Quantity` (Quantity of items purchased)
   - `TotalAmount` (Calculated field: PurchasePricePerItem \* Quantity)
   - `Discount` (Discount applied, if any)
   - `TotalCost` (Calculated field: (PurchasePricePerItem \* Quantity) - Discount)

2. **Sales Account Table**:

   - `SalesID` (Primary Key)
   - `SalesDate` (Date of the sale)
   - `ItemID` (Foreign Key to an Item table)
   - `BuyerID` (Foreign Key to a Buyers table)
   - `SalesPricePerItem` (Price per item)
   - `Quantity` (Quantity of items sold)
   - `TotalAmount` (Calculated field: SalesPricePerItem \* Quantity)
   - `Discount` (Discount applied, if any)
   - `TotalRevenue` (Calculated field: (SalesPricePerItem \* Quantity) - Discount)

3. **Cash Account Table**:

   - `TransactionID` (Primary Key)
   - `TransactionDate` (Date of the transaction)
   - `Description` (e.g., "Payment to Dealer" or "Received from Buyer")
   - `Amount` (Amount of the transaction)
   - `Type` (Payment or Receipt)

4. **Item Table**:

   - `ItemID` (Primary Key)
   - `ItemName` (Name of the item)
   - `Stock` (Current stock quantity)
   - `PricePerItem` (Price of the item)

5. **Dealers Table**:

   - `DealerID` (Primary Key)
   - `DealerName` (Name of the dealer)
   - `ContactNo` (Contact number)
   - `Amount Payable` (Payable Amount)
   - `Address` (Address)
   - `VATNo` (VAT number)

6. **Buyers Table**:
   - `BuyerID` (Primary Key)
   - `BuyerName` (Name of the buyer)
   - `ContactNo` (Contact number)
   - `Amount Receivable` (Receivable Amount)
   - `Address` (Address)
   - `VATNo` (VAT number)

# SQL syntax

```sql
-- Create the item table
CREATE TABLE item (
item_id INTEGER PRIMARY KEY AUTOINCREMENT,
item_name TEXT,
price_per_item REAL,
stock INTEGER
);

-- Create the dealers table
CREATE TABLE dealers (
dealer_id INTEGER PRIMARY KEY AUTOINCREMENT,
dealer_name TEXT,
contact_no TEXT,
amount_payable REAL,
address TEXT,
vat_no TEXT
);

-- Create the buyers table
CREATE TABLE buyers (
buyer_id INTEGER PRIMARY KEY AUTOINCREMENT,
buyer_name TEXT,
contact_no TEXT,
amount_receivable REAL,
address TEXT,
vat_no TEXT
);

-- Create the purchase account table
CREATE TABLE purchase_account (
purchase_id INTEGER PRIMARY KEY AUTOINCREMENT,
purchase_date DATE DEFAULT (date('now')),
item_id INTEGER,
dealer_id INTEGER,
purchase_price_per_item REAL,
quantity INTEGER,
total_amount REAL,
discount REAL,
total_cost REAL,
purchase_type  TEXT CHECK (type IN ('Cash', 'Credit')),
FOREIGN KEY (item_id) REFERENCES item(item_id),
FOREIGN KEY (dealer_id) REFERENCES dealers(dealer_id)
);

-- Create the sales account table
CREATE TABLE sales_account (
sales_id INTEGER PRIMARY KEY AUTOINCREMENT,
sales_date DATE DEFAULT (date('now')),
item_id INTEGER,
buyer_id INTEGER,
sales_price_per_item REAL,
quantity INTEGER,
total_amount REAL,
discount REAL,
sales_type  TEXT CHECK (type IN ('Cash', 'Credit')),
total_revenue REAL,
FOREIGN KEY (item_id) REFERENCES item(item_id),
FOREIGN KEY (buyer_id) REFERENCES buyers(buyer_id)
);

-- Create the cash account table
CREATE TABLE cash_account (
transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
transaction_date DATE DEFAULT (date('now')),
description TEXT,
amount REAL,
transaction_type TEXT CHECK (type IN ('Payment', 'Receipt'))
);
```
