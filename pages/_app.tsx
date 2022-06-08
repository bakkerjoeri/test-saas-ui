import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SaasProvider } from '@saas-ui/react'
import { AppShell, theme } from '@saas-ui/pro'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SaasProvider theme={theme}>
		<AppShell>
	<Component {...pageProps} />
	</AppShell>
	</SaasProvider>
	)
}

export default MyApp
