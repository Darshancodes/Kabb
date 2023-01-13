/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How can i join as a Driver ?',
    contents: (
      <div>
        Kabb is always excited to welcome dedicated drivers to its network. <a href="https://kabb.in">'Drive with us'</a> and Get the app now to open up a world of exciting opportunities with Kabb.
      </div>
    ),
  },
  {
    title: 'How can i hail a KABB Riding?',
    contents: (
      <div>
        <a href="https://www.w3docs.com/">
        Please click on the link here and enjoy the hail of KABB riding we welcome you!.
        </a>
      </div>
    ),
  },
  {
    title: `What are your operating hours?`,
    contents: (
      <div>
        We're available 24/7.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
