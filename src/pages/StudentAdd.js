import { createStudent } from "../api/student";
const StudentAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>MSV</label>
                        <input class='form-control' id='msv' />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar' />
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
            const msv = document.querySelector('#msv').value;
            const avatar = document.querySelector('#avatar').value;

            const submitData = {
                name: name,
                msv: msv,
                avatar: avatar,
            };
            await createStudent(submitData);
            window.location.replace('/students');

            console.log(submitData);
        });
    }
};

export default StudentAdd;