const Student = {
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3. fetch nhận vào đường dẫn API endpoint của BE
        const response = await fetch('https://6291d18fcd0c91932b687714.mockapi.io/students');
        
        console.log('response', response);
        const students = await response.json();
        console.log('students', students);

        return `<div>
            ${
                students.map((student) => (
                    `
                    <div>
                        <div>ID: ${student.id} </div>
                        <div>Ngày tạo: ${student.createdAt} </div>
                        <div>Name: ${student.name} </div>
                        <div>MSV: ${student.msv} </div>
                    </div>
                    <br>
                    `
                )).join('')
            }
            </div>`
    },
};

export default Student;