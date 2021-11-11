import React from "react";
import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "../utils/client";

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

export default function Login() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth providers={["google", "github"]} supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
  );
}
