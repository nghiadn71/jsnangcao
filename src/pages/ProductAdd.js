import { createProduct } from "../api/product";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Name</label>
                        <input class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>Description</label>
                        <input class='form-control' id='description' />
                    </div>
                    <div class='form-group'>
                        <label>Price</label>
                        <input class='form-control' id='price' />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="status" id="status">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Hiển thị
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="status" id="status" value="0">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Ẩn
                        </label>
                    </div>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success' id="btn">Tạo mới</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const description = document.querySelector('#description').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').checked;

            const submitData = {
                name: name,
                description: description,
                price: price,
                status: status,
            };
            await createProduct(submitData);
            window.location.replace('/products');

            console.log(submitData);
        });
    }
};
export default ProductAdd;