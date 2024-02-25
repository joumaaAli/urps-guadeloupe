import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import DefaultLayout from "./Default/DefaultLayout";
import { path } from "@/utils/routes";

export const getLayout = (pathname: string) => {
  if (pathname.includes("/auth")) {
    return (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
  } else if (pathname.includes("/dashboard")) {
    return (page: React.ReactNode) => <AdminLayout>{page}</AdminLayout>;
  } else {
    return (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
  }
};

export const requireAuthentication = async (
  context: GetServerSidePropsContext,
  roleRequired?: string
) => {
  const session = await getSession(context);
  if (!session || (roleRequired && session.user.role !== roleRequired)) {
    return {
      redirect: {
        destination: path.login,
        permanent: false,
      },
    };
  }

  return { props: { session } };
};
