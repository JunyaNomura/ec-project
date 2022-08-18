import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";
import '../styles/globals.css'

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <p>Loading...</p> : children;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </ChakraProvider>
  )
}

export default MyApp;