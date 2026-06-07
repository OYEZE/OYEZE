import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export default function UploadProduct() {
  async function uploadProduct(formData: FormData) {
    'use server'
    
    const file = formData.get('image') as File;
    const uploaded = await utapi.uploadFiles(file);
    const imageUrl = uploaded.data?.url;
    
    const product = {
      name: formData.get('name'),
      price: formData.get('price'),
      category: formData.get('category'),
      imageUrl
    }
    console.log('New product:', product)
  }

  return (
    <form action={uploadProduct} encType="multipart/form-data" className="space-y-4">
      <input name="name" placeholder="Product name" required className="border p-2 w-full" />
      <input name="price" placeholder="Price" type="number" required className="border p-2 w-full" />
      <input name="category" placeholder="Category" required className="border p-2 w-full" />
      <input name="image" type="file" accept="image/*" required className="border p-2 w-full" />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded w-full">Upload Product</button>
    </form>
  )
}
