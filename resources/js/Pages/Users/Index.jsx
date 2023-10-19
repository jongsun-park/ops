import { Head, router } from "@inertiajs/react";

import { Detail, DetailsList } from "@/Components/DetailsList";
import Pagination from "@/Components/Pagination";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { useState } from "react";

const roles = [
  { id: 0, name: "all" },
  { id: 1, name: "admin" },
  { id: 2, name: "designer" },
  { id: 3, name: "updater" },
  { id: 4, name: "guest" },
];

const UserList = ({ users, can = {}, role }) => {
  const [selectedRole, setSelectedRole] = useState(role);

  const onChangeRole = (e) => {
    setSelectedRole(e.target.value);
    router.get(
      route(route().current()),
      { role: e.target.value },
      {
        preserveState: true,
        replace: true,
      },
    );
  };

  console.log("selectedRole", selectedRole);

  return (
    <>
      <Head title="Yarns" />
      <Header>
        <div className="align-center flex justify-between">
          <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            User List
          </h1>
          {/* ROLE SELECTOR */}
          <select
            onChange={onChangeRole}
            className="rounded border-gray-300 capitalize text-gray-700 sm:text-sm"
            defaultValue={selectedRole}
          >
            {roles.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </Header>
      <Main>
        <div className="space-y-2">
          {users.data.map(({ id, name, role, email, created_at }) => (
            <DetailsList key={id}>
              <Detail dt="name" dd={name} />
              <Detail dt="role" dd={role} className="capitalize" />
              <Detail dt="email" dd={email} />
              <Detail dt="created_at" dd={created_at} />
            </DetailsList>
          ))}
        </div>
        <div className="m-5 pb-10">
          <Pagination class="mt-6" links={users.links} />
        </div>
      </Main>
    </>
  );
};

export default UserList;
