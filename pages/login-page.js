import React from "react";
import Login from "../components/Login";
import { supabase } from "../utils/client";
import Layout from "../components/Layout";

import { Auth, Typography, Button } from "@supabase/ui";

const { Text } = Typography;

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function loginPage() {
  return (
    <Layout>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container supabaseClient={supabase}>
          <Auth providers={["facebook", "github"]} supabaseClient={supabase} />
        </Container>
      </Auth.UserContextProvider>
    </Layout>
  );
}
