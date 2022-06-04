import { getProduct } from "../api/product";

const ProductDetail = {
    render: async (id) => {

        const response = await getProduct(id);
        const {data} = response // const data = response.data
        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Product name: ${data.name}</div>
                <div>Product description: ${data.description}</div>
                <div>Product price: ${data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                <div>Product status: ${data.status == true ? 'Hiển thị' : 'Ẩn'}</div>
            </div>`
        );
        
    }
}

export default ProductDetail;