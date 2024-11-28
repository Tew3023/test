const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// เชื่อมต่อ data base 
const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });

  con.query("SELECT 1", (err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }
    console.log("Connected to the database.");
  });

  
// post : http://localhost:3001/products

// request body : {
//   "name": "Product Name",
//   "price": 100
// }

// reponse success : 
// status(200)
// Add successfully

// reponse failed : 
// 500 Internal Server Error
// "Database server error"


app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  try {
    const sql = "INSERT INTO `products` (name,price) VALUES (?,?)";
    con.query(sql, [name, price], (err, result) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).send("Database server error");
      }
      res.send("Add successfully");
    });
  } catch (err) {
    console.log("product post failed", err);
    res.send("product post failed", err);
  }
});


// put : http://localhost:3001/products/:id
// example ur : http://localhost:3001/products/3
// 3 คือ id เราใช้req.params เพื่อดึง id ไประบุ productsที่เราต้องการแก้ไข เราต้องส่งข้อมูลที่ต้องการแก้ไขไปใน requestbody

// request body : {
//   "name": "Updated Name",
//   "price": 200
// }

// reponse success : 
// status(200)
// Updated successfully

// reponse failed : 
//     if product not found : 
//     404 Not Found
//     "Product not found"

//     For a server error:
//     500 Internal Server Error
//     "Database server error


app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
      const sql = "UPDATE `products` SET name = ?, price = ? WHERE id = ?";
      con.query(sql, [name, price, id], (err, result) => {
        if (err) {
          console.error("Database query error:", err);
          return res.status(500).send("Database server error");
        }
        if (result.affectedRows === 0) {
          console.log(`No product found with id: ${id}`);
          return res.status(404).send("Product not found");
        }
        res.send("Updated successfully");
      });
    } catch (err) {
      console.log("Product update failed", err);
      res.status(500).send("Product update failed");
    }
  });



//   put : http://localhost:3001/products/:id
// example ur : http://localhost:3001/products/1
// 1 คือ id เราใช้req.params เพื่อดึง id ไประบุ productsที่เราต้องลบ

// ไม่จำเป้นต้องมีrequest body !!!

// reponse success : 
// status(200)
// Product deleted successfully

// reponse failed : 
//     if product not found : 
//     404 Not Found
//     "Product not found"

//     For a server error:
//     500 Internal Server Error
//     "Error deleting product"



app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const sql = "DELETE FROM `products` WHERE id = ?";
      con.query(sql, [id], (err, result) => {
        if (err) {
          console.error("Error deleting product", err);
          return res.status(500).send("Error deleting product");
        }
        if (result.affectedRows === 0) {
          return res.status(404).send("Product not found");
        }
        res.send("Product deleted successfully");
      });
    } catch (err) {
      console.log("Product delete failed", err);
      res.status(500).send("Product delete failed");
    }
  });
  

const port = 3001;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
