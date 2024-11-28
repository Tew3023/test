
post : http://localhost:3001/products

request body : {
  "name": "Product Name",
  "price": 100
}

reponse success : 
status(200)
Add successfully

reponse failed : 
500 Internal Server Error
"Database server error"



put : http://localhost:3001/products/:id
example ur : http://localhost:3001/products/3
3 คือ id เราใช้req.params เพื่อดึง id ไประบุ productsที่เราต้องการแก้ไข

request body : {
  "name": "Updated Name",
  "price": 200
}

reponse success : 
status(200)
Updated successfully

reponse failed : 
    if product not found : 
    404 Not Found
    "Product not found"

    For a server error:
    500 Internal Server Error
    "Database server error


put : http://localhost:3001/products/:id
example ur : http://localhost:3001/products/1
1 คือ id เราใช้req.params เพื่อดึง id ไประบุ productsที่เราต้องลบ

ไม่จำเป้นต้องมีrequest body !!!

reponse success : 
status(200)
Product deleted successfully

reponse failed : 
    if product not found : 
    404 Not Found
    "Product not found"

    For a server error:
    500 Internal Server Error
    "Error deleting product"


