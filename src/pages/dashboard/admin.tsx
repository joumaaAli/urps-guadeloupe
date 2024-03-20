import Application from "@/components/Application/Application";
import { requireAuthentication } from "@/layouts/layout";
import { GetServerSideProps } from "next";

const AdminPage = () => {
  return (
    <div className="w-100">
      <Application />
    </div>
  );
};
export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await requireAuthentication(context, "ADMIN");
};
