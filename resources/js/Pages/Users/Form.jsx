import FormContainer from "@/Components/FormContainer";
import FormHeader from "@/Components/FormHeader";
import { TextInput } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/react";

export const roles = [
  { id: "admin", name: "Admin" },
  { id: "designer", name: "Designer" },
  { id: "updater", name: "Updater" },
  { id: "guest", name: "Guest" },
];

// UPDATE FORM ONLY
const Edit = ({ user }) => {
  const { data, setData, put, processing, errors } = useForm({
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  });

  //   console.log(user);

  function submit(e) {
    e.preventDefault();
    put(`/users/${user.id}`);
  }

  const title = "Update User";
  const buttonText = "Update";

  return (
    <>
      <Head title={title} />

      <Main>
        <Header>
          <FormHeader title={title} />
        </Header>
        <FormContainer
          onSubmit={submit}
          processing={processing}
          buttonText={buttonText}
        >
          {/* Name */}
          <TextInput
            id="name"
            label="Name"
            value={data.name}
            error={errors.name}
            onChange={(e) => setData("name", e.target.value)}
            required
          />

          {/* Role */}
          <SelectInput
            label="Role"
            selected={data.role}
            error={errors.role}
            options={roles}
            onChange={(e) => {
              setData("role", e);
            }}
          />
          {/* Email */}
          <TextInput
            id="email"
            label="email"
            value={data.email}
            error={errors.email}
            onChange={(e) => setData("email", e.target.value)}
            required
          />
        </FormContainer>
      </Main>
    </>
  );
};

export default Edit;
