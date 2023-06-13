
const Table = ({ user }) => {
  return (
    <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={user?.url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{user?.name}</div>
        </div>
      </div>
    </td>
    <td>
      <div className="text-sm ">{user?.email}</div>
    </td>
    <th>
      <button className="btn btn-neutral btn-xs">Admin</button>
    </th>
    <th>
      <button className="btn btn-neutral btn-xs">Instructor</button>
    </th>
  </tr>
  );
};

export default Table;