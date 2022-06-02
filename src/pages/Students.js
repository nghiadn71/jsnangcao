import { getStudents } from "../api/student";
import { deleteStudent } from "../api/student";
import reRender from "../helpers/reRender";

const Student = {
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3.1 fetch nhận vào đường dẫn API endpoint của BE
        // const response = await fetch('https://6291d18fcd0c91932b687714.mockapi.io/students');
        // 3.2 sử dụng axios đã được khởi tạo mà sinh ra hàm géttudents

        const response = await getStudents();
        // const data = response.data;
        const {data} = response;
        
        // console.log('response', response);
        // const students = await response.json();
        // console.log('students', students);

        return `<div>
            ${
                data.map((student) => (
                    `<div>
                        <div>ID: ${student.id}</div>
                        <div>Name: ${student.name}</div>
                        <div>MSV: ${student.msv}</div>
                        <div>
                            <a href="/students/${student.id}"><button class="btn btn-info">Chi tiết</button></a>
                            <button class='btn btn-danger'
                            data-id="${student.id}"
                            data-name="${student.name}"
                            data-xyz="123"
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
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await deleteStudent(btnId);
                // window.location.reload();
                await reRender('#content', Student);
            });
        });
    }
};

export default Student;