import './globals.css';import type {Metadata} from 'next';import {StoreProvider} from '@/lib/store';import {SiteChrome} from '@/components/chrome';
export const metadata:Metadata={title:'Chariot Marketplace | Everything for Everyday',description:'Shop thoughtfully selected electronics, fashion, groceries and everyday essentials at Chariot Marketplace.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><SiteChrome>{children}</SiteChrome></StoreProvider></body></html>}
