import React from "react";
import { useRef, useState } from "react";
import fetch from 'isomorphic-unfetch';
import styles from "./get-notified.module.css";
import { jsx, Container, Box, } from 'theme-ui';

export default function GetNotified() {
    return (
        <section sx={{ variant: 'section.get-notified' }}>
            <Container sx={styles.containerBox}>
                <div className={styles.middle}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Subcribe for exclusive offers</h1>
                        <p>Subscribe to get exciting offers, latest updates, etc</p>
                        <a href='https://kabb.beehiiv.com/subscribe'>
                        <button className={styles.button}>Subscribe</button>
                        </a>
                        </div>
                    </div>
                    <div className={styles.bottomleft}>
                    </div>
                    </Container>
                    </section>
    );
};
