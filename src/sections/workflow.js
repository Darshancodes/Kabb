/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import Workflow from 'assets/workflow.svg';


export default function WorkFlow() {
  return (
    <section>
      <Container sx={{
        variant: 'section.workflow',
        top: '50rem',
        right: '10rem',
      }}>
      <img src={Workflow} alt="Workflow" />
        <SectionHeader
        />
      </Container>
    </section>
  );
}
