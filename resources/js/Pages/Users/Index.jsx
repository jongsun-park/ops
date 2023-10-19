import { Head, Link, router } from "@inertiajs/react";

import { Detail, DetailsList } from "@/Components/DetailsList";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
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

const UserList = ({ users, can = {}, role, filters }) => {
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

  return (
    <>
      <Head title="Yarns" />
      <Header>
        <div className="align-center flex flex-col justify-between space-y-2 sm:flex-row">
          <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            User List
          </h1>

          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0">
            {/* ROLE SELECTOR */}
            <select
              onChange={onChangeRole}
              className="mr-0 w-full rounded border-gray-50 capitalize text-gray-700 shadow sm:mr-2 sm:text-sm"
              defaultValue={selectedRole}
            >
              {roles.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {/* Search */}
            <Search
              filters={filters?.search}
              className="flex w-full flex-row"
            />
          </div>
        </div>
      </Header>
      <Main>
        <div className="space-y-2">
          {users.data.map(({ id, name, role, email, created_at }) => (
            <DetailsList key={id}>
              <Detail dt="Name" dd={name} />
              <Detail dt="Role" dd={role} className="capitalize" />
              <Detail dt="Email" dd={email} />
              <Detail dt="Joined At" dd={created_at} />
              <div className="buttons space-x-2 p-2 px-3">
                <Link
                  as="button"
                  className="rounded border-2 border-gray-300 bg-white px-3 py-1 text-gray-900"
                  href={route("users.show", id)}
                >
                  Update
                </Link>
                <Link
                  as="button"
                  className="rounded border-2 border-red-300 bg-red-200 px-3 py-1 text-red-900"
                  href={route("users.destory", id)}
                  method="delete"
                >
                  Delete
                </Link>
              </div>
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
