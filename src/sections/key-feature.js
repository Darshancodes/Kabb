/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector-1.svg';
import Editing from 'assets/key-feature/icon.svg';
import Speed from 'assets/key-feature/icon-1.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Taxi Service',
    title: 'Taxi Service',
    text:
      'We provide best in class taxi service with safest ride.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Auto Service',
    title: 'Auto Service',
    text:
      'Check in and ride with ryxos best suited auto service to take you on your destination.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Bike Service',
    title: 'Bike Service',
    text:
      'Single Person? and want to go to nearest location? then our bikes helps you reach it fast.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality Services"
          title="Meet exciting services of Kabb"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
