import { getProducts } from "../api/product";
import { getProduct } from "../api/product";
import { deleteProduct } from "../api/product";

const Product = {
    render: async () => {
        const response =  await getProducts();
        const {data} = response;
        return `<div>
                <div>
                <a href="/product/add"><button class="btn btn-success">Thêm mới</button></a>
                </div>
            ${
                
                data.map((product) => (
                    `<div>
                        <div>ID: ${product.id}</div>
                        <div>Product name: ${product.name}</div>
                        <div>Product description: ${product.description}</div>
                        <div>Product price: ${product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div>Product status: ${product.status == true ? 'Hiển thị' : 'Ẩn'}</div>
                        <div>
                            <a href="/product/detail/${product.id}"><button class="btn btn-info">Chi tiết</button></a>
                            <button class='btn btn-danger'
                            data-id="${product.id}"
                            id="delete"
                            >Xóa</button>
                        </div>
                        

                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
        // 1. Tìm toàn bộ nút xoá và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('#delete');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteProduct(btnId);
                window.location.reload();
                // await reRender('#content', Product);
            });
        });
    }
}

export default Product;