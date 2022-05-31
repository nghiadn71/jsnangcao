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
            </div>`
        );
        
    }
}

export default StudentDetail;