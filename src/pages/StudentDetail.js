import { getStudent } from "../api/student";
import Student from "./Students";
import reRender from "../helpers/reRender";
import Cart from "../components/Cart";

const StudentDetail = {
    render: async (id) => {

        const response = await getStudent(id);
        const {data} = response // const data = response.data
        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>MSV: ${data.msv}</div>
                <div>
                    <input type="number" id="cartValue" value="1" min="1"/>
                    <a href="/cart-detail"><button
                    class="btn btn-info"
                    data-id="${data.id}"
                    data-name="${data.name}"
                    id="btn-add-cart"
                    >
                    Thêm vào giỏ hàng
                    </button></a>
                    
                </div>
            </div>`
        );
        
    },

    afterRender: () => {
        const btnAddCart = document.querySelector('#btn-add-cart');
        btnAddCart.addEventListener('click', () => {
            const item = {
                id: btnAddCart.dataset.id,
                name: btnAddCart.dataset.name,
                value: +document.querySelector('#cartValue').value || 1
            };
            // item.value = document.querySelector('#cartValue').value || 1;
            // console.log(item);
            // Lưu trữ vào localStorage: setItem(key, giá trị bắt buộc là 1 chuỗi)
            /**
             * 1. xem giỏ hàng có gì chưa
             */
            const cartItemsString = localStorage.getItem('cart'); // lấy ra giá trị từ key cart
            // nếu chưa có thì giá trị là null -> []
            const cartItems = JSON.parse(cartItemsString || '[]');
            // console.log(cartItemsString, cartItems);
            //2. nếu chưa có giá trị gì thì push luôn sinh viên vào
            if (!cartItems.length) {
                cartItems.push(item);
            } else {
                // 2.1 tìm xem có phần tử nào giống cái đang muốn push vào hay không
                const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
                // console.log(existItem);
                if (existItem) {
                    existItem.value += item.value;
                } else {
                    cartItems.push(item);
                }
            }
            localStorage.setItem('cart', JSON.stringify(cartItems));
            // localStorage.setItem('cart', )
            // window.location.reload();
            reRender('#cart', Cart);
        });

        
    }
}

export default StudentDetail;