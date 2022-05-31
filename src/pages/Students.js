import { getStudents } from "../api/student";

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
                        </div>
                    </div>`
                )).join('')
            }
        </div>`
    },
};

export default Student;