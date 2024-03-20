import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import AuthLayout from "./Auth/AuthLayout";
import AdminLayout from "./Admin/AdminLayout";
import DefaultLayout from "./Default/DefaultLayout";
import { path } from "@/utils/routes";

export const getLayout = (pathname) => {
  if (pathname.includes("/auth")) {
    return (page) => <AuthLayout>{page}</AuthLayout>;
  } else if (pathname.includes("/dashboard")) {
    return (page) => <AdminLayout>{page}</AdminLayout>;
  } else {
    return (page) => <DefaultLayout>{page}</DefaultLayout>;
  }
};

export const requireAuthentication = async (context, roleRequired) => {
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
