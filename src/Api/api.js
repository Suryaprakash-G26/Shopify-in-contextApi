const Api="https://6549bc0ee182221f8d51d06c.mockapi.io/data";
export async function GetAllproducts() {
  const res = await fetch(Api, {
    method: "GET"
  });
  const data = await res.json();
  return data;
}

export async function DeleteProduct(id) {
  const res = await fetch(`${Api}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await res.json();
  return data;
}

export async function AddNewProduct(newDoc) {
  const res = await fetch(`${Api}`, {
    method: "POST",
    body: JSON.stringify(newDoc),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await res.json();
  return data;
}

export async function EditProduct(id, editDoc) {
  const res = await fetch(`${Api}/${id}`, {
    method: "PUT",
    body: JSON.stringify(editDoc),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await res.json();
  return data;
}
