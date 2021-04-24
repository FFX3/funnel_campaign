import { Heading, Page } from "@shopify/polaris";
// import GrapesEditor from '../components/grapesjs/GrapesEditor'
import dynamic from 'next/dynamic'

const GrapesEditor = dynamic(
  () => {
    return import('../components/grapesjs/GrapesEditor')
  },
  {ssr: false}
)

const Index = () => (
  <Page fullWidth>
    <Heading>I like paintball</Heading>
    <GrapesEditor/>
  </Page>
);

export default Index;
