import { requireAuthentication } from "@/layouts/layout";
import { GetServerSideProps } from "next";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await requireAuthentication(context, "ADMIN");
};
