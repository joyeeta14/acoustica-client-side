

const ClassTable = ({ cls }) => {
    const { _id,classPic, className, instructorEmail, instructorName, price, seats, status } = cls;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={cls?.classPic} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm ">{cls?.className}</div>
            </td>
            <td>
                <div className="text-sm ">{cls?.instructorName}</div>
            </td>
            <td>
                <div className="text-sm ">{cls?.instructorEmail}</div>
            </td>
            <td>
                <div className="text-sm ">{cls?.price}</div>
            </td>
            <td>
                <div className="text-sm ">{cls?.seats}</div>
            </td>
            <td>
                <div className="text-sm ">{cls?.status}</div>
            </td>
            <th>
                <button className="btn btn-neutral btn-xs">Denied</button>
            </th>
            <th>
                <button className="btn btn-neutral btn-xs">Approve</button>
            </th>
            <th>
                <button className="btn btn-neutral btn-xs">Send Review</button>
            </th>
        </tr>
    );
};

export default ClassTable;
