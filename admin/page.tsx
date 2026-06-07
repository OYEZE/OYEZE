export default function UploadProduct() {
  async function uploadProduct(formData: FormData) {
    'use server'
    
    const product = {
      name: formData.get('name'),
      price: formData.get('price'),
      category: formData.get('category'),
      imageUrl: formData.get('imageUrl')
    }
    
    console.log('New product:', product)
  }

  return (
    <form action={uploadProduct} className="space-y-4">
      <input name="name" placeholder="Product name" required className="border p-2 w-full" />
      <input name="price" placeholder="Price" type="number" required className="border p-2 w-full" />
      <input name="category" placeholder="Category" required className="border p-2 w-full" />
      <input name="imageUrl" placeholder="Image URL" required className="border p-2 w-full" />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded w-full">
        Upload Product
      </button>
    </form>
  )
}
