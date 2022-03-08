import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Interest() {
    return (
        <div className={styles.about_component} id={styles.interest}>
            <h3><span>I ♥</span></h3>
            <div className={styles.item_content}>
                <span>Art, Drawing, Badminton, Boba, Animals</span>
            </div>
        </div>
    )
}