import React from "react";
import styles from "./get-notified.module.css";
import { jsx, Container, Box, } from 'theme-ui';

export default function GetNotified() {
    return (
        <section sx={{ variant: 'section.get-notified' }}>
            <Container sx={styles.containerBox}>
                <div className={styles.middle}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Coming Soon</h1>
                        <p>Get notified when we launch</p>
                        <input name="email" type="text" placeholder="Enter your email" />
                        <button className={styles.button}>Submit</button>
                        </div>
                    </div>
                    <div className={styles.bottomleft}>
                    </div>
                    </Container>
                    </section>
    );
};
