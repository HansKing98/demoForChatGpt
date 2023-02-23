import { useState } from "react";

import "./EmployeeCard.css";
import deleteIcon from "./delete-icon.svg";

function EmployeeCard({ avatar, name, phone, role, hiredAt }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="employee-card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="employee-avatar">
        <div className="employee-avatar-img">
          <img src={avatar} alt={name} />
          <div className={`employee-online ${isHovering ? "online" : ""}`} />
        </div>
      </div>
      <div className="employee-info">
        <div className="employee-name">{name}</div>
        <div className="employee-phone">{phone}</div>
        <div className="employee-role">{role}</div>
        <div className="employee-hired-at">在职时间：{hiredAt}</div>
      </div>
      {isHovering && (
        <button className="delete-button">
          <img src={deleteIcon} alt="删除" />
        </button>
      )}
    </div>
  );
}

function EmployeeList() {
  const employees = [
    {
      avatar: "https://via.placeholder.com/150",
      name: "张三",
      phone: "12345678901",
      role: "前端工程师",
      hiredAt: "2020-01-01"
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "李四",
      phone: "12345678902",
      role: "后端工程师",
      hiredAt: "2019-06-01"
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "王五",
      phone: "12345678903",
      role: "全栈工程师",
      hiredAt: "2018-09-01"
    }
  ];

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.phone} {...employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
