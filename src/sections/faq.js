/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How can i join as a Driver ?',
    contents: (
      <div>
        Ryxo is always excited to welcome dedeicated drivers to its network. Click on the button Get it now to open up a world of exciting opportunities with ryxo rides.
      </div>
    ),
  },
  {
    title: 'How can i hail a KABB Riding?',
    contents: (
      <div>
        Please click on the link here and enjoy the hail of KABB riding we welcome you!.
      </div>
    ),
  },
  {
    title: `What are your peak operating hours?`,
    contents: (
      <div>
        Peak time are 6:30am - 9:00am and 5:00pm - 7:30pm.
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
