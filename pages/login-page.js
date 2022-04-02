import React from "react";
import Login from "../components/Login";
import { supabase } from "../utils/client";
import Layout from "../components/Layout";
import { Flex, Box } from "@chakra-ui/react";

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
      <Flex
        alignItems="center"
        minH="100vh"
        justifyContent="center"
        alignContent="center"
      >
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Flex
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            width="40%"
          >
            <Container supabaseClient={supabase}>
              <Auth
                providers={["google", "discord", "twitch"]}
                supabaseClient={supabase}
              />
            </Container>
          </Flex>
        </Auth.UserContextProvider>
      </Flex>
    </Layout>
  );
}
