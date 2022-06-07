import { getStudent } from "../api/student";
import Student from "./Students";

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
                    <button
                     class="btn btn-info"
                     data-id="${data.id}"
                     data-name="${data.name}"
                     id="btn-add-cart"
                     >
                     Thêm vào giỏ hàng
                     </button>
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
                value: +document.querySelector('#cartValue').value || 1,
            };
            // item.value = document.querySelector('#cartValue').value || 1;
            console.log(item);
        });
    }
}

export default StudentDetail;